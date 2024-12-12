import jwt from "jsonwebtoken"
import mongoose from "mongoose";
const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("DB connection established")

    } catch (error) {
        console.log("DB Eroor:" + error)
    }
}



export default dbConnection


export const createJWT = (res, userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "1d"
    })

    res.cookie("token",token,{
        httpOnly:true,
        secure:process.env.NODE_ENV !== "development",
        SameSite: Strict
    })
}