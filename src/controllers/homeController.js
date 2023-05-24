const router = require("express").Router();
const cubeManager = require("../manager/cubeManager");

router.get("/", (req, res) => {
  console.log(req.query);

  const { search, from, to } = req.query;

  const cubes = cubeManager.getAll(search, from, to);

  res.render("index", { cubes, search, from, to });
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/404", (req, res) => {
  res.render("404");
});

module.exports = router;
