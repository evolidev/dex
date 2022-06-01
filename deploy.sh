#!/usr/bin/env sh

# abort on errors
set -e

rm -rf docs/.vitepress/dist

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vitepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git branch -M main
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:evolidev/evolidev.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
#git push -f git@github.com:evolidev/dex.git main:gh-pages

cd -