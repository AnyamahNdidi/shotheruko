const express = require("express")
const mongoose = require("mongoose")

const port = process.env.PORT || 2500

const DB_ONLINE =
  "mongodb+srv://pete:ilovemusic1234@cluster0.g51is.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const app = express();

mongoose
  .connect(DB_ONLINE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database has been connected successfully...!");
  });


app.get("/", (req, res) => {
  res.status(200).send("this is my api")
})

app.listen(port, () => {
  console.log(`server is using ${port}`)
})

