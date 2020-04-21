const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/portfolio", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
mongoose.connection
  .once("open", () => console.log("connected"))
  .on("error", (error) => {
    console.log("err: ", error)
  })

const portSeed = [
{
    title:"Mojo",
    description: "MoJo is a mood based journaling app designed to be a safe space for a mood influenced writing atmoshpere where users can save edit and comment on journal posts",
    image: "/images/mojo.JPG",
    githubRepo: "https://github.com/BriGab/Project-Two",
    githubPages: "null",
    heroku: "https://immense-retreat-62376.herokuapp.com/"
},
{
    title:"Quarantivities",
    description: "A boredom cure served up with MERN bringing you activity ideas from a team built API",
    image: "/images/q.JPG",
    githubRepo: "https://github.com/BriGab/Quarantivities",
    githubPages: "null",
    heroku: "https://rocky-inlet-27187.herokuapp.com/"
},
{
    title:"React Emloyee Directory",
    description: "A dead simple React app showcasing ability to pull in 3rd party data and display dynamically. The search bar is powered by Object.values() to fitler by name, phone number, email, and date of birth.",
    image: "/images/emp.JPG",
    githubRepo: "https://github.com/BriGab/React-Employee-Directory",
    githubPages: "null",
    heroku: "https://mighty-cove-87859.herokuapp.com/"
},
{
    title:"Budget Tracker PWA",
    description: "Budget tracking application that allows for users to download as a progressive web app and keep track of expenses offline using indexedb.",
    image: "/images/bud.JPG",
    githubRepo: "https://github.com/BriGab/Budget-Tracker",
    githubPages: "null",
    heroku: "https://secret-oasis-00420.herokuapp.com/"
},
{
    title:"Express Note Taker",
    description: "Note Taker is an Express Node.js application that allows users to write, save, and delete notes",
    image: "/images/NoteTaker.JPG",
    githubRepo: "https://github.com/BriGab/Note-Taker",
    githubPages: "null",
    heroku: "https://quiet-depths-34552.herokuapp.com/"
},
{
    title:"Weather Dashboard",
    description: "Front end weather app using JQuery and Ajax to pull in Open Weather Map data for trip planning, simply type in a city name and get current + 5 day weather",
    image: "/images/weathersm.JPG",
    githubRepo: "https://github.com/BriGab/weather-index",
    githubPages: "https://brigab.github.io/weather-index/",
    heroku: "null"
},

]
db.Portfolio
.deleteMany({})
.then(() => 
    db.Portfolio.collection.insertMany(portSeed))
    .then(data => {
        console.log(data.result.n + "records inserted")
        process.exit(0)
        })
        .catch(err => {
            console.error(err);
            process.exit(1)
        })