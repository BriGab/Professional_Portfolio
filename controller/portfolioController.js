const db = require("../models")

module.exports = {
    findAll: function(req, res) {
        db.Portfolio.find({})
        .then((dbPortfolio)=>{
            res.json(dbPortfolio)
        })
    }
}