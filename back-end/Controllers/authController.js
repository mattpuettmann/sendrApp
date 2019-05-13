const express = require('express');
const router = express.Router();
const User = require('../Models/user');
const bcrypt = require('bcryptjs');



router.post("/register", async (req, res)=>{
    try{
        const hashedPassword = bcrypt.hashSync(req.body.password, 10);
        req.body.password = hashedPassword;
        const user = await User.create(req.body)
        user.password = null;
        req.session.userId = user._id;
        res.json({
            status: 200,
            data: user
        })
    }catch(err){
        console.log(err);
        res.json({
            status: 500,
            data: err
        })
    }
})

router.post("/login", async (req, res) => {
    try{
        console.log('login route hit');
        console.log(req.body);
        const user = await User.find({
            "username": req.body.username
        })
        res.json({
            status: 200,
            data: user
        })

    }catch(err){
        console.log(err);
    }
})



  module.exports = router;