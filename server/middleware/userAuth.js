import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

const userAuth = async (req,res, next)=>{
    const {token} = req.cookies;

    if(!token){
        return res.json({success: false, message: "Not Authorize.Login Again"})
    }
    try {
        
        const tokenDecode = jwt.verify(token,process.env.JWT_SECRET)

        console.log(tokenDecode)

        if(tokenDecode.id){
            req.user = await userModel.findOne({_id:tokenDecode.id});
            next();
        }else{
            return res.json({success: false, message: 'Not Authorized Login Agin'})
        }

    } catch (error) {
        res.json({success:false, message: "error.message"})
    }
}

export default userAuth;