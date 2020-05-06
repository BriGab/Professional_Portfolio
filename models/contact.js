const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    name: {type: String, required: true},
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
      },
    message: {type: String, maxlength: 500}
})

const Contact = mongoose.model("Contact", contactSchema)

module.exports = Contact;