<h2>Build and Run locally</h2>

<pre>npm start</pre>

<h2>Publish to GitHub Pages</h2>

run script file:

scripts\publish-to-github-pages.bat 

which uses [gh-pages](https://github.com/tschaub/gh-pages) to publish files to a gh-pages branch on GitHub and that is set as the branch for GitHub Pages. 

IMPORTANT NOTE: make sure publish-to-github-pages.bat script sets an environment variable %PUBLIC_URL% before running 'gh-pages -d build --add' otherwise the index.html will not have the %PUBLIC_URL% replaced and when sharing the link on social media to the website the preview image og:image will not show up properly

set PUBLIC_URL=https://letsbewell.app
start cmd /k "npm run deploy"

or to run deploy command from VS Code (powershell)

$env:PUBLIC_URL="https://letsbewell.app"
npm run deploy

IMPORTANT NOTE: make sure to specify option '--add' or '-a' for gh-pages deploy command in package.json otherwise by default it removes all the files in the gh-pages branch first but there is a CNAME file that gets created when setting up a custom domain in the GitHub repo settings and we need that file! If the file did get removed, then go into repo settings on GitHub and specify a custom domain 'letsbewell.app', the CNAME file will get recreated.

<pre>
  "scripts": {
    "deploy": "gh-pages -d build --add"
    ...
  }
</pre>