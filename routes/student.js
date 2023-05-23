const express = require("express");
const Student = require("../models/student");

const router = express.Router();

router.post('/', async (req, res) => {

    const {
        name,
        dob,
        email,
        password,
        mobile,
        subjects,
        gender,
        registerDate} = req.body;

    await Student.findOne({'email': `${email}`}).then((result) => {
        if (!result) {
            const student = new Student ({
                name,
                dob,
                email,
                password,
                mobile,
                subjects,
                gender,
                registerDate
            })

            student.save().then((result) => {
                res.status(201).send('Registration Successful');
            }).catch((err) => {
                console.log(err);
            })
        }
        else {
            res.status(200).send('Code number already exists');
        }
    }).catch((err) => {
        console.log(err);
    });
});

router.get('/:email', async (req, res) => {

    const email = req.params.email;

    await Student.findOne({'email': `${email}`}).then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
    })
});

router.delete('/del/:id', async (req, res) => {

    const id = req.params.id;

    await Student.findByIdAndDelete(id).then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err)
    })
});

router.put('/update', async (req, res) => {
    
    const data = req.body;

    const update = {
            name: data.name,
            dob: data.dob,
            mobile: data.mobile,
            subjects: data.subjects
        };

    await Student.findOneAndUpdate({email: `${data.email}`}, update).then((result) => {
        res.status(201).send('Modify Successful');
    }).catch((err) => {
        console.log(err);
    })
});

module.exports = router;