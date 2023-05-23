const mongoose = require("mongoose");


const Schema = mongoose.Schema;

const mentorSchema = new Schema ({

    title: String,
    gender: String,
    firstName: String,
    lastName: String,
    nicNo: String,
    contact: String,
    email: { type: String, required: true, unique: true },
    dateOfBirth: Date,
    password: String,
    skills: [String],
    description: String,
});

const Mentor = mongoose.model("Mentor", mentorSchema);

module.exports = Mentor;