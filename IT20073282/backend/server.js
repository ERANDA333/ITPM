const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const dotenv = require('dotenv');
let mentorsRoute = require('./routes/mentors.js');



dotenv.config();



app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("MongoDB Connected Successfully..!");
  })
  .catch((err) => {
    console.log("DB error", err.message);
  });



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);

});


app.use("/mentor", mentorsRoute);