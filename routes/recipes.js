const express = require('express')
const Recipe = require('./../models/recipeModels')
const router = express.Router()

// GET
router.get('/new', (req, res) => {
    res.render('recipes/new', {recipe : new Recipe() })
})

//GET
router.get('/:id', async (req, res) => {
    const recipe = await Recipe.findById(req.params.id)
    if(recipe == null) res.redirect('/')
    res.render('recipes/show', {recipe: recipe})
})

//POST
router.post('/', async (req, res) => {
    let recipe = new Recipe({
        title: req.body.title,
        description: req.body.description
    })
 
    try {
       recipe = await recipe.save()
       res.redirect(`/recipes"/${recipe.id}`)
    } catch (e) {
        res.render('recipes/new', {recipe:recipe})
    }

})

//export
module.exports = router 