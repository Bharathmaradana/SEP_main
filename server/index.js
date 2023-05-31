const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors({ origin: "*" }));
const userrouter = require("./routes/media");
const username = "vikas";
const password = "rj7UwoMJno5GuG1i";
const databaseName = "TACOdb";

const mongodburl = `mongodb+srv://${username}:${password}@TACOtest.1gztzk2.mongodb.net/${databaseName}?retryWrites=true&w=majority`;

mongoose.connect(mongodburl, { useNewUrlParser: true }).then(() => {
  let collectionName = "2023-05-29";
  const collection = mongoose.connection.collection(collectionName);
 collection
   .find({})
   .toArray()
   .then((documents) => {
          // console.log(documents)
   })
   .catch((error) => {
     console.error("Error fetching documents:", error);
   });
});

mongoose.connection.on("connected", () => {
  console.log("successfully connected");
});

mongoose.connection.on("error", () => {
  console.log("something went wrong");
});

app.use("/api", userrouter);

const port = process.env.PORT
app.listen(5006, () => {
  console.log("application running");
});
