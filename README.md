# To run the roject locally

# Pre Requisites

Download a code editor [vscode]

Download and install node

- Recommend install using nvm [Node Version Manager] see instructions here - https://gist.github.com/d2s/372b5943bce17b964a79

- Download and install npm

`git clone https://github.com/eben3zer/casex.git`

`cd casex-app`

`npm i`

`npm start`

To deploy to env:

run `npm run build`

Overwrite the following exsiting files in the public folder on cPanel with the new files generated from the Build Directory of the app

Files to overwrite:
build/static
build/index.html
? build/htaccess
