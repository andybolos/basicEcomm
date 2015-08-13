var mongoose = require('mongoose');

var newPostSchema = new mongoose.Schema ({

    title: {
        type: String,
        lowercase: true,
        required: true,
        index: true,
        unique: true

    },
    description: {
        type: String,
        lowercase: true,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0
    }

});

module.exports = mongoose.model('Posts', newPostSchema);
