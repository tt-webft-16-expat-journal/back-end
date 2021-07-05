const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../secret");

module.exports = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        res.status(401).json({ message: "Cannot authorize user (missing token.)" });
    } else {
        jwt.verify(token, jwtSecret, (err, decoded) => {
            if (err) {
                res.status(401).json({ message: "Encountered an issue while validating token: " + err.message });
            } else {
                req.decodedToekn = decoded;
                next();
            }
        });
    }
};
