const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const portfolioSchema = new Schema({
    title: {type: String, required: true, unique: true},
    description: {type: String},
    image: {type: String},
    githubRepo: {type: String},
    githubPages: {type: String},
    heroku: {type: String}
})

const Portfolio = mongoose.model("Portfolio", portfolioSchema)

module.exports = Portfolio;