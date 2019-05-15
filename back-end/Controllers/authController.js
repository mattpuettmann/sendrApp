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
        const user = await User.findOne({"username": req.body.username})
        if(user){
            if(bcrypt.compareSync(req.body.password, user.password)){
                req.session.logged = true;
                req.session.usersDbId = user._id;
                req.session.username = user.username;
                res.json({
                    status: 200,
                    data: user
                })
            } else {
                req.session.message = 'username or password is incorrect';
                res.redirect('/');
            }
        } else {
            req.session.message = 'username or password is incorrect';
            res.redirect('/');
        }
    }catch(err){
        console.log(err);
    }
})

router.put("/logout", async (req, res) => {
    req.session.destroy((err) => {
        if(err){
          res.send(err);
        } else {
            res.send('happy');
        }
      })
})



  module.exports = router;