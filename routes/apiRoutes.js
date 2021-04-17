const express = require('express')
const router = express.Router()


router.get('/api/hello', function(req, res){
    res.json({"hello": "world"})
})

module.exports = router