const mongoose = require('mongoose');
const validator = require('validator');

const studentschema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: [true, "email alredy taken"],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('email address not valid');
            }

        }
    },
    phone: {
        type: Number,
        required: true,
        maxLength: 13,
        minlength: 10,
        unique: true
    },
    age: {
        type: Number,
        required: true,
    },
    roll_no: {
       type: String,
       required: true,
       unique: true,
    },
    blod_group: {
        type: String,
        required: true,
    },
    address: {
        type : String,
        required: true,
    } 
    });



    //------- create new collection
    const Student = new mongoose.model('Student', studentschema);

    module.exports = Student;