import mongoose from 'mongoose';
const {Schema} = mongoose;

const userSchema = new Schema({
    name: {type: String, required: true},
    password: {type: String, required: true},
    email: { type: String, required: true, unique: true},
    isAdmin: { type: Boolean, default: false, required: true},
    }, 
    {
        timestamps: true
    })
const User = mongoose.model('User', userSchema)

export default User;
