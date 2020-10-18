const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Connect to the Mongo DB
mongoose.connect(process.env.DB_URI || "mongodb://Brigabiola:backflip5@qcluster-shard-00-00.06k4l.mongodb.net:27017,qcluster-shard-00-01.06k4l.mongodb.net:27017,qcluster-shard-00-02.06k4l.mongodb.net:27017/heroku_zrlxgm8f?ssl=true&replicaSet=atlas-wis5f7-shard-0&authSource=admin&retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
mongoose.connection
  .once("open", () => console.log("connected"))
  .on("error", (error) => {
    console.log("err: ", error)
  })

  app.use(require('./routes'))

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});