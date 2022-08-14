const router = require('express').Router();

router.get('/', async (req, res) => {
    try{
        res.render('homepage')
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/dash', async (req, res) => {
    try{
        res.render('dashboard')
    }catch (err) {
        res.status(500).json(err)
    }
})

router.get('/blog', async (req, res) => {
    try{
        res.render('blog')
    }catch (err) {
        res.status(500).json(err)
    }
})

router.get('/login', async (req, res) => {
    try{
        res.render('login')
    }catch (err) {
        res.status(500).json(err)
    }
})

router.get('/newblog', async (req, res) => {
    try{
        res.render('singleBlog')
    }catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router