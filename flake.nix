{
  description = "A Nix-flake-based Clojure/Script development environment";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    flake-parts.url = "github:hercules-ci/flake-parts";
    flake-parts.inputs.nixpkgs-lib.follows = "nixpkgs";
  };

  # outputs = { self, nixpkgs }:

  #   let
  #     # Latest LTS releases as of Feb 2025
  #     javaVersion = 21;
  #     nodeVersion = 22;
  #     overlays = [
  #       (final: prev: rec {
  #         jdk = prev."jdk${toString javaVersion}";
  #         clojure = prev.clojure.override { inherit jdk; };
  #         nodejs = prev."nodejs_${toString nodeVersion}";
  #         yarn = (prev.yarn.override { inherit nodejs; });
  #       })
  #     ];
  #     supportedSystems = [ "x86_64-linux" "aarch64-linux" "x86_64-darwin" "aarch64-darwin" ];
  #     forEachSupportedSystem = f: nixpkgs.lib.genAttrs supportedSystems (system: f {
  #       pkgs = import nixpkgs { inherit overlays system; };
  #     });
  #   in
  #   {
  #     devShells = forEachSupportedSystem ({ pkgs }: {
  #       default = pkgs.mkShell {
  #         buildInputs = with pkgs; [
  #           #Build deps
  #           clojure nodejs yarn babashka neil
  #           #Editor support
  #           clj-kondo joker clojure-lsp
  #         ];
  #         shellHook = ''
  #           yarn install
  #           export PATH="$(yarn bin):$PATH"
  #         '';
  #       };
  #     });
  #   };

  # Adapted from here: https://github.com/flow-storm/flow-storm-debugger/issues/191
  # TODO: I'd like to have been able to integrate this with the commented version above rather than switch
  #       to this flake-parts setup I don't understand....
  outputs = inputs@{ flake-parts, ... }:
    flake-parts.lib.mkFlake { inherit inputs; } {
      systems = [ "x86_64-linux" ];
      perSystem = { pkgs, config, ... }:
        let
          libraries = with pkgs; [
            #Build deps
            clojure nodejs yarn babashka neil
            #Editor support
            clj-kondo joker clojure-lsp
            #javafx support for flowstorm debugger
            at-spi2-atk cairo
            gdk-pixbuf glib gtk3 pango
            xorg.libXtst libGL xorg.libX11 xorg.libXxf86vm
          ];
          libraryPath = pkgs.lib.makeLibraryPath libraries;
        in {
          devShells.default = pkgs.mkShell {
            buildInputs = libraries;
            shellHook = ''
              yarn install
              export PATH="$(yarn bin):$PATH"
              export LD_LIBRARY_PATH=${libraryPath}:$LD_LIBRARY_PATH
            '';
          };
        };
    };
}
