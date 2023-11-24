#!/bin/sh

# AWS amplify pulls in a huge number of dependencies (build file count goes from 300 to 1200 by just adding auth)
# Some of them need some post-install attention, see below

# 1. Patch around two amplify dependencies that include characters that break the closure compiler
cp aws-patches/lower-case-index.js node_modules/lower-case/dist/index.js
cp aws-patches/upper-case-index.js node_modules/upper-case/dist/index.js
# 2. Clobber the shadow-cljs compile cache to ensure the patched js gets picked up
rm -rf .shadow-cljs
# 3. Copy the amplify auth styles across to the distribution folder
#    N.B. this css file is referenced directly from public/index.html
cp node_modules/@aws-amplify/ui/dist/styles.css public/css/aws-amplify-ui-styles.css
