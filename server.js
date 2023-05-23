const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const StudentsRoutes = require("./routes/student");

app.use(express.json());
app.use(cors());

const DB_CONNECTION = "mongodb+srv://erandagunathunga33378:ERA123@cluster0.wtrvpri.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(DB_CONNECTION);

const conn = mongoose.connection;

conn.once('open', () => {
    console.log('successfully connected');
})

app.listen(5000);

app.use('/api/student', StudentsRoutes);



