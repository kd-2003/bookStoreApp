import User from "../model/user.model.js";
import bcrypt from 'bcryptjs';

export const signUp = async (req, res) => {
    try{
    const { fullName, email, password } = req.body;
    const user = await User.findOne({email});
    if(user){
        return res.status(400).json({message: "User already exists"});
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const createdUser = new User({
        fullName: fullName,
        email: email,
        password: hashPassword
    });

    await createdUser.save();
    return res.status(201).json({message: "User created successfully", user:{
        id: createdUser._id,
        fullName: createdUser.fullName,
        email: createdUser.email
    }});
    }catch(err){
        console.log("Error", err.message);
        return res.status(500).json({message: "Internal server error"});
    }
};

export const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});
        const isMatch = await bcrypt.compare(password, user.password);
        if(!user || !isMatch) {
            return res.status(400).json({message: "Invalid username or password"});
        }else{
            return res.status(200).json({message: "Login successful", user:{
                id: user._id,
                fullName: user.fullName,
                email: user.email
            }});
        }
    }catch(err){
        console.log("Error", err.message);
        return res.status(500).json({message: "Internal server error"});
    }
}