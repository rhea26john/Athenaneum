#!/bin/bash
npm run build
cd ..
cp -R bookList/dist/* static/
mv static/index.html static/js 
cd static/
git add .
git commit -m "Update dist files"
git pull

git push
