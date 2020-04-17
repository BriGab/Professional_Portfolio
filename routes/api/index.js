const router = require("express").Router();
const portfolioRoutes = require("./portfolio");

router.use("/portfolio", portfolioRoutes);

module.exports = router;