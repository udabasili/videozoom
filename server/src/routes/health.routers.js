const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

router.get('/test', (req, res) =>{
    res.send({
        message: 'Hello from express with nodemon'})
})
//this would be test out mongodb connection with route
router.get('/health-check', (req, res) =>{
    mongoose.connection.db.admin().ping((error, result) =>{
        if(error || !result){
            res.send({
                message: `Ping failed with error: ${error}`,
                status: 500
            })
        }

        res.send({
                message: `Mongodb connect is up : ${result}`,
                status: 200
            })

    })
})
module.exports = router