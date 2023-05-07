const router = require("express").Router();
let book = require("../models/book");

//CRUD Operations
//add data through form

router.route("/add").post((req,res)=>{
    
    const title = req.body.title;
    const author = req.body.author;
    const publicationdate = req.body.publicationdate;
    const description = req.body.description;

    const newBook = new book({
        title,
        author,
        publicationdate,
        description
    })
        //pass object(newBook) to mongodb database through model(Schema)
    newBook.save().then(()=>{
        res.json("Book Added")
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/").get((req,res)=>{

    book.find().then((books)=>{

        res.json(books)

    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/update/:id").put(async (req, res)=>{

    let userId = req.params.id;
    const{title, author, publicationdate,description} = req.body; //updated data from Frontend

    const updateBook = {

        title,
        author,
        publicationdate,
        description

    }
    const update = await book.findByIdAndUpdate(userId, updateBook)
    .then(() =>{

        res.status(200).send({status:"book updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data", error:err.message});
    })
  
})

router.route("/delete/:id").delete(async (req,res) =>{
        let userId = req.params.id;

        await book.findByIdAndDelete(userId).then(()=>{
            res.status(200).send({status:"book delected"});
        }).catch((err)=>{
            console.log(err.message);
            res.status(500).send({status:"Error with delected book",error:err.message});
        })
})

router.route("/get/:id").get(async(req, res)=>{
    let userId = req.params.id;
    const user = await book.findById(userId).then((book)=>{
        res.status(200).send({status: "book fetched",book
    })
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status:"Error with get book", error:err.message});
    })
})

module.exports = router;


