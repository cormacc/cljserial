{
  description = "A Nix-flake-based Clojure/Script development environment";

  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";

  outputs = { self, nixpkgs }:

    let
      # Latest LTS releases as of Nov 2023
      javaVersion = 21;
      nodeVersion = 20;
      overlays = [
        (final: prev: rec {
          jdk = prev."jdk${toString javaVersion}";
          clojure = prev.clojure.override { inherit jdk; };
          nodejs = prev."nodejs_${toString nodeVersion}";
          yarn = (prev.yarn.override { inherit nodejs; });
        })
      ];
      supportedSystems = [ "x86_64-linux" "aarch64-linux" "x86_64-darwin" "aarch64-darwin" ];
      forEachSupportedSystem = f: nixpkgs.lib.genAttrs supportedSystems (system: f {
        pkgs = import nixpkgs { inherit overlays system; };
      });
    in
    {
      devShells = forEachSupportedSystem ({ pkgs }: {
        default = pkgs.mkShell {
          buildInputs = with pkgs; [ clojure nodejs yarn clj-kondo joker];
        };
      });
    };
}
