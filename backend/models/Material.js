const { Schema, model } = require('mongoose');


const Material = new Schema({
    title: {
        type: String,
        required: true,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    university: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    description: {
        required: true,
        type: String
    },
    filePath: String
})

module.exports = model('materials', Material);