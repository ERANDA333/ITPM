const express = require('express');
const router = express.Router();

let Mentor = require('../models/Mentor');


//create a new mentor
router.route("/add").post((req, res) => {
    const title = req.body.title;
    const gender = req.body.gender;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const dateOfBirth = req.body.dateOfBirth;
    const nicNo = req.body.nicNo;
    const email = req.body.email;
    const contact = req.body.contact;
    const password = req.body.password;
    const skills = req.body.skills;
    const description = req.body.description;
  
    const newMentor = new Mentor({
      title,
      gender,
      firstName,
      lastName,
      dateOfBirth,
      nicNo,
      email,
      contact,
      password,
      skills,
      description
    });
  
    newMentor
      .save()
      .then(() => {
        res.json("Mentor Added");
      })
      .catch((error) => {
        res.json("Account is already created with the email you used. Try login")
        console.log("Mentor added failed:", error);
      });
  });


   router.route("/").get(async (req, res) => {
        
    try {
      const mentor = await Mentor.findById(userId);
  
      if (!mentor) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Provide all user details
      res.json(mentor);
    } catch (error) {
      console.log('Error fetching user profile:', error);
      res.status(500).json({ message: 'Failed to fetch user profile' });
    }
});

 
//post for login function
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {

    const mentor = await Mentor.findOne({ email, password });

    if (mentor) {
      res.json({id: mentor.id, status: 'exist'});
    } else {
      res.status(404).json({ error: 'Invalid email or password' });
    }

  } 
  catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


//get mentor details
router.route("/profile/:id").get(async (req, res) => {
  let userId = req.params.id;
  try {
    const mentor = await Mentor.findOne({ _id: userId });

    if (!mentor) {
      return res.status(404).send({ status: "Account is removed or does not exist  " });
    }

    const { _id, title, gender, firstName, lastName, nicNo, contact, email, dateOfBirth, password, description, skills } = mentor;

   
    

    const filteredMentor = {
      _id,
      title,
      gender,
      firstName,
      lastName,
      nicNo,
      contact,
      email,
      dateOfBirth,
      password,
      description,
      skills,
    };

    return res.json(filteredMentor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});




// router.route("/update/:id").patch(async(req, res)=>{
//     let userId = req.params.id;
//     const {Title, Gender, FirstName, LastName, DateOfBirth, NICNo, Email, Contact, Description } =req.body;

//     const updateMentor = {
//         Title,
//         Gender,
//         FirstName,
//         LastName,
//         DateOfBirth,
//         NICNo,
//         Email,
//         Contact,
//         Description
//     }

//     const update = await Mentor.findByIdAndUpdate(userId, updateMentor)
//     .then(()=>{
//         res.status(200).send({status: "User updated"})
//     }).catch((error)=>{
//         console.log(error);
//         res.status(500).send({status: "Error with updating data"});
//     })
    
// })



//update mentor using patch
router.patch("/patch/:id", async (req, res) => {
  let userId = req.params.id;
  const updates = req.body;

  try {
    const mentor = await Mentor.findOneAndUpdate({ _id: userId }, updates, { new: true });

    if (!mentor) {
      return res.status(404).json({ status: "Mentor not found" });
    }

    return res.json(mentor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});


//delete mentor
router.route("/delete/:id").delete(async (req, res) => {
  let userId = req.params.id;

  try {
    const mentor = await Mentor.findById(userId);

    if (!mentor) {
      return res.status(404).send({ status: "User not found" });
    }

    await Mentor.findByIdAndDelete(userId);
    res.status(200).send({ status: "User deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ status: "Error with deleting data" });
  }
});

module.exports =router;