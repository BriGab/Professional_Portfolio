const router = require("express").Router();
const portfolioRoutes = require("./portfolio");
const contactRoutes = require("./contact")

router.use("/portfolio", portfolioRoutes);
router.use("/contact", contactRoutes);

module.exports = router;