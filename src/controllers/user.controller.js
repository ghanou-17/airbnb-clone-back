const user = require('../models/user.model');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
// exports.register = (req, res) =>{

// //cryptmdp
//     const hashedPassword = bcrypt.hashSync(req.body.password ,10);

    
//     const newUser =new user({
//         firstName: req.body.firstName,
//         lastName: req.body.lastName,
//         email: req.body.email,
//         password: hashedPassword,
//     })
    
//     newUser.save()
//     .then((user) =>{
//         //token
//         var token = jwt.sign({id:user.id,isAdmin: user.isAdmin},process.env.JWT_SECRET);
//         return res.send({user,token});
//         //return res.send(token);
//     })
//         .catch((err)=>{
//             res.status(404).send(err)
//         })
    
    
//     }
    //update user
    
    // app.post('/users/:id', (req, res) =>{
    //     user.findByIdAndUpdate(req.params.id,{
    //         firstName: req.body.firstName,
    //         lastName: req.body.lastName,
    //         email: req.body.email,
    //         password: req.body.password,
        
    //     },)
    //     .then((user)=>{
    //         res.send(user);
    //     })
        
     
    //      .catch((err)=>{
    //          res.status(404).send(err)
    //      })
    // })
    
    exports.updateUser =(req, res)=>{
        console.log(req.params,'PARAMS');
        console.log(req.body,'BODY');
        user.findByIdAndUpdate(req.userToken.id, req.body, { new: true })
        .then((user)=>{
            if(!user){
                return res.status(404).send({message: 'user not found'})
            }
            res.send(user)
        })
        .catch((err)=>{
            res.status(400).send(err)
        })
    }
    


    //delecte not remove
    //delete user
    exports.deleteOnUser = (req, res) =>{
        user.findByIdAndRemove(req.params.id)
        .then(()=>{
            res.send('user deleted')
        })
        .catch((err)=>{
            res.status(404).send(err)
        })
    }
    //finduserbyid
    exports.getOneUser = (req, res) =>{
       user.findById(req.userToken.id)
       .then((user) =>{
        res.send(user);
    
    })
        .catch((err)=>{
            res.status(404).send(err)
        })
    }
    exports.GetAuthUser = (req, res)=>{
        
        // User.findById(req.params.id)
        // console.log(req.userId)
        user.findById(req.userToken.id)
        .then((users)=>{
            res.send(users)
        })
        .catch((err)=>{
            res.status(500).send(err)
        })
    }

    //find all users
    
    exports.getUsers = (req, res) =>{
        user.find().populate('places')
        .then((user) =>{
            res.send(user);
        
        })
            .catch((err)=>{
                res.status(404).send(err)
            })
    }