const express = require('express')
const router = express.Router()
const db = require('../models')


router.get('/api/hello', function(req, res){
    res.json({"hello": "world"})
})

router.post('/api/users', function(req, res){
    db.GithubUser.create(req.body).then(user => {
        console.log(user)
    })
})

router.get('/api/users', function(req,res){
    db.GithubUser.find({}).then(users => {
        res.json(users)
    })
})

module.exports = router