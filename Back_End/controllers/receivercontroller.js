const express=require('express');
const path = require('path')
const router = express.Router()
const mangoose = require('mongoose')

const receiver= require('../models/receiversignup');//donormodel contain  exported model of donorsigup

//to get 
router.get('/getallreceivers',(req,res)=>{
    receiver.find((err,doc)=>{
        if(!err)
        {
            res.send(doc);
            console.log('all receiver displayed successfully')
        }
        else
            console.log('Error in display all receivers ' + JSON.stringify(err, undefined, 2));
    })
})


//to insert data
router.post('/signup',(req,res)=>{
    var r= new receiver({
        ngoname: req.body.ngoname,
        email: req.body.email,
        password: req.body.password,
        address: req.body.address,
        contact: req.body.contact,
        ngourl: req.body.ngourl
    });
    receiver.find({'email':r.email,'password':r.password},(err,doc)=>{
        if(!err)
        {
            if(doc.length)
                res.send(true);//doc exist
            else{
                r.save((doc,err)=>{
                    if(!err)
                        console.log('receiver: ',r.email," saved to db");
                    else 
                    console.log('Erro in saving receiver',JSON.stringify(err,undefined,2));
                    res.send(false);//not exist so saving
                })
                
            }
        }
    })
})

//to checkdata
router.post('/signin',(req,res)=>{
    console.log(req.body);
    receiver.find({'email':req.body.email,'password':req.body.password},(err,doc)=>{
        if(!err)
            if(doc.length)
                res.send(true);
            else
                res.send(false);
        else
        {
            console.log('Error while checkgin receiver',JSON.stringify(err),undefined,2);
            res.send(false);
        }
    })
})


//to delete receiver
router.post('/delete', (req, res) => {
    const id = req.body._id;
    receiver.findByIdAndDelete((id), (err) => {
        if (!err) {
            console.log('receiver with ', id, ' Deleted!!');
            res.send(true);
        }
        else {
            console.log('Error in delete receiver ', JSON.stringify(err, undefined, 2));
            res.send(false);
        }

    })
});


//to update password
router.post('/recoverpass', (req, res) => {
    var remail = req.body.email;
    var pass = req.body.password;
    // console.log(demail, '  ',pass)
    receiver.updateOne({ 'email': remail }, { $set: { 'password': pass } }, (err, doc) => {
        if (!err) {
            console.log('receiver password updated successfull!!');
            res.send(true);
        }
        else 
        {
            console.log('error in receiver password update' + JSON.stringify(err, undefined, 2))
            res.send(false);
        }

    })
})

//to delete receiver with his permission
router.post('/deletebypermission', (req, res) => {
    var receiveremailtodelete = req.body.email
   
    receiver.deleteOne({ email:receiveremailtodelete }, (err) => {
        if (!err) {
            console.log(receiveremailtodelete, 'successfully delete with his/her permission');
            res.send(true)

        }
        else {
            console.log('error in donor inside  deletebypermission');
            res.send(false);
        }
    })

})

module.exports=router;