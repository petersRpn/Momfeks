import data from "../data.js";
import User from "../model/userModel.js";
import expressAsyncHandler from 'express-async-handler';

export const getUser = expressAsyncHandler(async(req, res) => {   
    try {
    //  await User.remove({})
    const createdUser = await User.insertMany(data.users);
    res.send({createdUser})
    
    } catch (error) {
        res.status(400).send({message: error.message})
    }
    
}
)