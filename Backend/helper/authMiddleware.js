const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const ACCESS_TOKEN = process.env.JWT_TOKEN;

const validateToken = async (req, res, next) => {
    let token = req.headers.authorization.split(" ")[1];
    // console.log(token);

    try {
        jwt.verify(token, ACCESS_TOKEN, (err, decoded) => {

            if (err) {
                res.status(401);
                console.log("Error in jwt Validation @helper/authMiddleware");
                return res.json({
                    success: false,
                    message: 'Invalid Token Provided'
                })
            }

            req.user = decoded;
            console.log(decoded);
            next();
        })
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

module.exports = { validateToken };