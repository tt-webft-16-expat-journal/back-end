const router = require("express").Router();
const Users = require("./users-model");
const restricted = require("../../config/middleware/restricted");

// USER ENDPOINTS //
// Return a list of all users.
router.get("/", restricted, (req, res) => {
    Users.get()
        .then((users) => {
            res.status(200).json(users);
        })
        .catch((err) => {
            res.status(500).json({ message: err.message });
        });
});

// Return a single user for a given ID.
router.get("/:id", restricted, (req, res) => {
    const id = req.params.id;
    Users.getById(id)
        .then((user) => {
            const { username } = user;
            res.status(200).json({ username, id });
        })
        .catch((err) => {
            res.status(500).json({ message: err.message });
        });
});

// Return all posts by a given user.
router.get("/:id/posts", restricted, (req, res) => {
    const id = req.params.id;

    // if(!posts), then return "No posts by user."
    Users.getPostsByUser(id)
        .then((posts) => {
            res.status(200).json({ posts });
        })
        .catch((err) => {
            res.status(500).json({ message: err.message });
        });
});

module.exports = router;
