// routes/indexRouter.js
const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", (req, res) => res.send("About"));
indexRouter.get("/about", (req, res) => res.send(`About page`));
indexRouter.get("/contact", (req, res) => res.send(`Contact page`));

module.exports = indexRouter;
