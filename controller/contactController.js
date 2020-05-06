const db = require("../models")

module.exports = {
    create: function(req, res) {
        console.log("got here")
        db.Contact.create(req.body)
        .then(dbContact => {
            console.log(dbContact)
            res.json(dbContact)
        })
        .catch(err => res.status(422).json(err))
    }
}