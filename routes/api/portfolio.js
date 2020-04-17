const router = require("express").Router()
const portfolioRoutes = require("../../controller/portfolioController");

//Matches with "/api/portfolio"
router
    .route("/")
    .get(portfolioRoutes.findAll)

module.exports = router;