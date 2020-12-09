const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true,
            "Please enter a name for the pet"
        ],
        minlength: [
            3,
            "Please make the name of your pet at least 3 characters in length"
        ]
    },
    type: {
        type: String,
        required: [
            true,
            "Please enter what type of pet this is"
        ],
        minlength: [
            3,
            "Please make sure your type is at least 3 characters long"
        ]
    },
    description: {
        type: String,
        required: [
            true,
            "Please enter a description of your pet"
        ],
        minlength: [
            3,
            "Please make sure the description is at least 3 characters long"
        ]
    },
    skillOne: {
        type: String
    },
    skillTwo: {
        type: String
    },
    skillThree: {
        type: String
    }
    

}, {timestamps: true})
    
mongoose.model('Pet', PetSchema)