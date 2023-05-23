const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const StudentSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    subjects: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: false
    },
    registerDate: {
        type: String,
        required: true
    }
})

const Student = mongoose.model('students', StudentSchema);

module.exports = Student;