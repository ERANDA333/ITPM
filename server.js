
/*const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();


const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;


 //Create a connection with Mongodb
 mongoose.connect(URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true

 });

//open mongodb connection already created
 const connection = mongoose.connection; //mongoose variable assing to separate variable(connection)
connection.once("open", () => {
    console.log("Mongodb Connection Success!");
}) 

app.listen(PORT, () => {
    console.log('Server is running on port number: ${PORT}')
}) */

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const uri = process.env.MONGODB_URL;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection success");
});

const bookRouter = require ("./routes/books.js");

app.use("/book",bookRouter); //load bookRouter assing file(books.js)

app.listen(PORT, () => {
  console.log(`Server is running on port number: ${PORT}`);
}); 
