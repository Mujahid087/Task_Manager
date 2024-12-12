import User from "../models/user.js";

export const registerUser = async (req, res) => {
    try {
        const { name, email, password, isAdmin, role, title } = req.body;
        const userExist = await User.findOne({ email })

        if (userExist) {
            return res.status(400).json({
                status: false,
                message: "User already exist"
            })
        }
        const user = await User.create({
            // ...req.body shortcut way by using spread operator 
            name,
            email,
            password,
            isAdmin,
            role,
            title,
        })

        if (user) {
            isAdmin ? createJWT(req, user._id) : null
            user.password = undefined

            res.status(201).json(user)
        } else {
            return user.status(400).json({
                status: false, message: "Invalid user data"
            })
        }



    }
    catch (error) {
        return res
            .status(400)
            .json({ status: false, message: error.message })

    }
}

// export const registerUser = async (req, res) => {
//     try {


//     }
//     catch (error) {
//         return res
//             .status(400)
//             .json({ status: false, message: error.message })

//     }
// }