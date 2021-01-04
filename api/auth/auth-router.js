const router = require("express").Router();
const bcryptjs = require("bcryptjs");

const Users = require("../users/users-model");
const { isValid } = require("../users/users-service");

// AUTH ENDPOINTS // 
router.post("/register", (req, res) => {
    const credentials = req.body;

    if (isValid(credentials)) {
        const rounds = process.env.BCRYPT_ROUNDS || 8;
        const hash = bcryptjs.hashSync(credentials.password, rounds);
        credentials.password = hash;

        Users.add(credentials)
            .then((user) => {
                res.status(201).json({ data: user });
            })
            .catch((err) => {
                res.status(500).json({ message: err.message });
            });
    } else {
        res.status(400).json({
            message: "Please provide a unique username and an alphanumeric password."
        });
    }
});

module.exports = router;
