#!/bin/sh

# Hack to not load the lazt modules on the server bundle.

sed -i '' 's/^var __lazy_2__ =/var __lazy_2__ = {}; \/\//' dist/server.js 
sed -i '' 's/^var __lazy_3__ =/var __lazy_3__ = {}; \/\//' dist/server.js 
sed -i '' 's/^var __lazy_4__ =/var __lazy_4__ = {}; \/\//' dist/server.js

