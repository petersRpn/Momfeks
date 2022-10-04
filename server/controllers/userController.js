import data from "../data.js";
import User from "../model/userModel.js";
import expressAsyncHandler from 'express-async-handler';
import bcrypt from "bcryptjs";
import { generateToken } from "../utils.js";

export const getUser = expressAsyncHandler(async(req, res) => {   
    try {
    const createdUser = await User.insertMany(data.users);
    res.send({createdUser})
    
    } catch (error) {
        res.status(400).send({message: error.message})
    }
    
}
);

export const postSignin = expressAsyncHandler(async(req, res) => {   
    const user = await User.findOne({email: req.body.email})
    if(user){
        if(bcrypt.compareSync(req.body.password, user.password)){
            res.send({
                id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user)
            });
            return;
        }
    }
    
    res.status(401).send({ message: 'Invalid email or password' });
    
}
);

export const postRegister = expressAsyncHandler(async (req, res) => {
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
      });
      const createdUser = await user.save();
      res.send({
        _id: createdUser._id,
        name: createdUser.name,
        email: createdUser.email,
        isAdmin: createdUser.isAdmin,
        token: generateToken(createdUser),
      })}
  );