# How to dev
`git clone git@github.com:FunkyClonk/funkyclonk.github.io.git`

Change things on main

```bash
git add .
git commit -m ""
git push origin dev
```
# How to publish
```bash
npm run deploy
```
It launch : `npm run build` and `gh-pages -d build` which deploy on gh-pages.

# Wait
Github pages takes up to 1 minuite to update the website.