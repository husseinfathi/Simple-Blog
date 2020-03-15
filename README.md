`$ npm init -y`

- Create package.json

`$ npm i express mongoose ejs`

- express: Server
- mongoose: Database
- ejs: DifferentViews(markdown)

`$ npm i marked slugify`

- marked: Convert markdown blog to html
- slugify: Generate valid URLs for dynamically webPage

`$ npm i method-override`

- method-override: Override the method that your form passes, by default form pass only -POST & GET- method.

`$ npm i dompurify jsdom`

- dompurify: Sanitize html code
- jsdom: Render html code inside nodejs

`$ npm i --save-dev nodemon`

- nodemon: Monitor for any changes in sources and automatically restart your server.
- To run nodmod add this line of code to your package.json :

* "scripts": {"devStart": "nodemon server.js"}

`$ npm run devStart`

- Make server.js ran every single time you change and click save.
