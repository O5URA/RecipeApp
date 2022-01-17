const express = require('express')
const mongoose = require('mongoose')
const recipeRouter = require('./routes/recipes')
const app = express()

//mongoDb connection
mongoose.connect('mongodb://localhost/food', {
    useNewUrlParser: true, useUnifiedTopology: true })

//ejs to html
app.set('view engine', 'ejs')

//setting url /recipe
app.use(express.urlencoded({ extended: false}))

//ejs index render
app.get('/', (req,res) => {
    const recipes = [{
        title:'Test Title',
        date: new Date(),
        description: 'test Desc'
    }]
    res.render('recipes/index', {recipes: recipes})
})

app.use('/recipes',recipeRouter)

//localhost/5000
app.listen(5000)