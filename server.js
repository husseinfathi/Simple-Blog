const express = require("express");

//  dataBase
const mongoose = require("mongoose");

// Article Module imported from article-models
const Article = require("./models/article");

// create articleRouter in server.js required from article.js
const articleRouter = require("./routes/articles");

//  overRide method to delete article
const methodOverride = require("method-override");

// app
const app = express();

/*
---------------------------------------------------------
*/

// create database
mongoose.connect("mongodb://localhost:27017/blog", {
  autoIndex: false,
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// 'view engine' > convert 'ejs' code to html
app.set("view engine", "ejs");

// access diff prametares from article form inside article route
app.use(express.urlencoded({ extended: false }));

// use the _method parameter to override the form method in any setution
app.use(methodOverride("_method"));

// func to take request and response for rendering 'index.ejs'
app.get("/", async (req, res) => {
  const articles = await Article.find().sort({ createdAt: "desc" });
  res.render("articles/index", { articles: articles });
});

// tell app to use the router based on /articles in url
app.use("/articles", articleRouter);

// setting localHost port
app.listen(5000);
