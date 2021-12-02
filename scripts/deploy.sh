# build docs
npm run build

cd dist

# commit and push changes
git add -A
git commit --am -m "build: deploy documentation"
git push -f git@github.com:zhuziyi1989/front-guidebook.git master:gh-pages

## clean
cd ..
rm -rf dist
