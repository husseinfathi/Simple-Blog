`$ npm init -y`

- Create package.json
  <Enter>

`$ npm i express mongoose ejs`

- express: Server
- mongoose: Database
- ejs: DifferentViews(markdown)
  <Enter>

`$ npm i marked slugify`

- marked: Convert markdown blog to html
- slugify: Generate valid URLs for dynamically webPage
  <Enter>

`$ npm i method-override`

- method-override: Override the method that your form passes, by default form pass only -POST & GET- method.
  <Enter>

`$ npm i dompurify jsdom`

- dompurify: Sanitize html code
- jsdom: Render html code inside nodejs
  <Enter>

`$ npm i --save-dev nodemon`

- nodemon: Monitor for any changes in sources and automatically restart your server.
- To run nodmod add this line of code to your package.json :
- "scripts": {"devStart": "nodemon server.js"}
  <Enter>

`$ npm run devStart`

- Make server.js ran every single time you change and click save.
