const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({

    title :{
        type : String,
        required : true // check on backend title have a value or not
    },
    author:{
        type : String,
        require : true
    },
    

    publicationdate:{
        type:String,
        require : true
    },
    description:{
        type : String,
        require : true
    }

})

const Book = mongoose.model("Book",bookSchema); //Data passed To Database through Model (routes-model-mongodb)

module.exports = Book;
