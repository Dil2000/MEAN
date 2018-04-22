const router = require("express").Router();
// const bookRoutes = require("./books");
const viewRecRoutes = require("./recipes");
// const newsRoutes = require("./news");

// Book routes
// router.use("/books", bookRoutes);
router.use("/recipes",viewRecRoutes);

module.exports = router;