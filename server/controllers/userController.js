import userModel from "../models/userModel.js";

export const getUserData = async (req,res)=>{
    try {
        
        const user =req.user;

        // const user= await userModel.findById(userId);

        if(!user){
            return res.json({success:false, message:"user not found"})
        }

        res.json({
            success:true,
            userData:{
                name: user.name,
                isAccountVeried: user.isAccountVeried
            }
        });


    } catch (error) {
        res.json({success: false, message: error.message})
    }
}