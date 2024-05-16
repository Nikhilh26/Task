const User = require("./../model/usersModel");
const PasswordUtils = require("./../helper/passwordUtils");
const JWT = require("jsonwebtoken");

class RegistrationControllers {

    static async registerController(req, res) {
        try {
            const { name, email, password } = req.body;

            // Tested -> Working fine
            if (!email || !password) {
                console.log("Incomplete credentials registerController")
                return res.status(401).
                    send({
                        "success": "false",
                        "Error": "Incomplete Credentials"
                    });
            }

            const userTemp = await User.findOne({ email });

            // Tested -> Working fine
            if (userTemp) {
                return res.status(200).send({
                    success: false,
                    message: "Already registered",
                    redirect: true
                })
            }

            const h_Password = await PasswordUtils.hashPassword(password);
            console.log(h_Password);

            if (h_Password === null)
                throw new Error("Error in authHelper.js -> password null");

            const user = await new User({
                email,
                name,
                password: h_Password,
            }).save();

            const token = await JWT.sign({ _id: user._id }, process.env.JWT_TOKEN, { expiresIn: '7d' });

            res.status(200).send({
                success: true,
                userName: user.name,
                token
            })

        } catch (error) {
            console.log("Error at controllers/authLogin.js")
            console.log(error);

            if (error.code === 11000 || error.code === 11001) {
                // Handle the unique constraint violation error
                return res.status(400).send({
                    success: false,
                    message: "Email already registered",
                    redirect: true
                });
            } else {
                // Handle other types of errors
                return res.status(500).send({
                    success: false,
                    message: "Internal server error",
                    error: error.message
                });
            }
        }

    }

    static async loginController(req, res) {
        try {
            const { email, password } = req.body;
            console.log(email);
            console.log(password);
            // Tested -> Working fine 
            if (!email || !password) {
                return res.status(404).send({ "message": "Incomplete Credentials!!", request: req.body });
            }

            const user = await User.findOne({ email });
            // Tested -> Working fine
            if (!user) {
                return res.status(404).json({ message: "Please Create Account First", redirect: true });
            }

            const check = await PasswordUtils.comparePasswords(password, user.password);
            console.log("Checking passwords after comparing");
            console.log(check);

            // Tested -> Working fine
            if (!check) {
                return res.status(200).send(
                    {
                        "success": false,
                        "message": "Invalid Password"
                    }
                );
            }

            // Tested -> Working fine
            const token = JWT.sign({ _id: user._id }, process.env.JWT_TOKEN, { expiresIn: '7d' });

            res.status(200).json({
                success: true,
                message: "Login Succesfull",
                token
            });

        } catch (error) {

            console.log(error);
            res.status(500).send({
                message: "error in login",
                success: false
            })
        }
    }
}

module.exports = RegistrationControllers;