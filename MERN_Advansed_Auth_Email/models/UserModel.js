const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const jwt  = require('jsonwebtoken');
const crypto = require('crypto');


const UserSchema = new mongoose.Schema({
    username: {
        type : String,
        required: [true, "Please provide a username"]
    },
    email : {
        type : String,
        required: [true,"Please provide a email"],
        unique : true,
        match : [
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            "Please procide a alid email"
        ]
    },
    password : {
        type :String,
        required : [true, "Please ass a password"],
        minlength : 6,
        select : false//
    },
    resetPasswordToken : String,
    resetPasswordeExpire: Date
});


UserSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        next();
    }
    const salt = await bcryptjs.genSalt(10);
    this.password =await bcryptjs.hash(this.password,salt);
    next();
});

UserSchema.methods.matchPasswords = async function(password){
    return await bcryptjs.compare(password,this.password);
}

UserSchema.methods.getSignedToken = function(){
    return jwt.sign({id: this._id},process.env.JWT_SECRET,{
        expiresIn : process.env.JWT_EXPIRE
    })
}

UserSchema.methods.getResetPasswordToken = function(){
    const resetToken = crypto.randomBytes(20).toString('hex');

    this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest('hex');
    this.resetPasswordeExpire = Date.now()+ 10 *(60*1000);
    return resetToken;
}

module.exports = mongoose.model('users', UserSchema);   