const router = require("express").Router()
const contactRoutes = require("../../controller/contactController");

//Matches with "/api/contact"
router
    .route("/")
    .post(contactRoutes.create)

module.exports = router;