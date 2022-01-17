const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Recipe', recipeSchema)