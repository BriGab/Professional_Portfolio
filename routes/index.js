const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

//If no api routes are hit, send the React App:
router.use(function(req, res){
    res.sendFile(path.join(__dirname, "../client/public/index.html"));
})

module.exports = router;