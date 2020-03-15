const express = require("express");

// import Article TABLE from article model
const Article = require("./../models/article");

/* 
router to create views just like 
app.get('/', (req, res) => { app.render(index);});
*/
const router = express.Router();

/*
---------------------------------------------------------
*/

// rendring the new article page
router.get("/new", (req, res) => {
  res.render("articles/new", { article: new Article() });
});

// rendring the edit page
router.get("/edit/:id", async (req, res) => {
  const article = await Article.findById(req.params.id);
  res.render("articles/edit", { article: article });
});

// create a slug of page url based on article title
router.get("/:slug", async (req, res) => {
  const article = await Article.findOne({ slug: req.params.slug });
  if (article == null) res.redirect("/");
  res.render("articles/show", { article: article });
});

// New article
router.post(
  "/",
  async (req, res, next) => {
    req.article = new Article();
    next();
  },
  saveArticleAndRedirect("new")
);

//  Editing article
router.put(
  "/:id",
  async (req, res, next) => {
    req.article = await Article.findById(req.params.id);
    next();
  },
  saveArticleAndRedirect("edit")
);

//  find an article by id and delete it
router.delete("/:id", async (req, res) => {
  await Article.findByIdAndDelete(req.params.id);
  res.redirect("/");
});

function saveArticleAndRedirect(path) {
  return async (req, res) => {
    //  Create article
    let article = req.article;
    article.title = req.body.title;
    article.description = req.body.description;
    article.markdown = req.body.markdown;
    try {
      //  saving our article
      article = await article.save();
      // redirected if successful
      res.redirect(`/articles/${article.slug}`);
    } catch (e) {
      //  otherwise return to the main page
      res.render(`articles/${path}`, { article: article });
    }
  };
}
// export tell app to use this router
module.exports = router;
