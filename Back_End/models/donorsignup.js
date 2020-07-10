const mongoose=require('mongoose');

const schema=mongoose.Schema;

const donorschem=new schema({
    hname: { type: String },
    email: { type: String ,unique:true},
    password: { type: String },
    address: { type: String },
    contact: { type: Number },
    count:{type:Number},
    todonate:[
        {'food':false},
        {'cloth':false},
        {'money':false},
        {'other':false}
        ]
})

const donor=mongoose.model('donor',donorschem);

module.exports=donor