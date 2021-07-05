const jwt = require("jsonwebtoken");

module.exports = (user) => {
    const jwtSecret = require("../secret").jwtSecret;
    const payload = {
        subject: user.id,
        username: user.username
    };
    const options = {
        expiresIn: "24h" // Token expires after 24 hours.
    };

    return jwt.sign(payload, jwtSecret, options);
};
