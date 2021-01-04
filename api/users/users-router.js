const router = require("express").Router();
const Users = require("./users-model");
const restricted = require("../../config/middleware/restricted");

// USER ENDPOINTS //
router.get("/", restricted, (req, res) => {
    Users.get()
        .then((users) => {
            res.status(200).json(users);
        })
        .catch((err) => {
            res.status(500).json({ message: err.message });
        });
});


module.exports = router;
