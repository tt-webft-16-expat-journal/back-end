const router = require("express").Router();
const Posts = require("./posts-model");
const restricted = require("../../config/middleware/restricted");

// POST ENDPOINTS //

// getAllPosts
router.get("/", restricted, (req, res) => {
    Posts.getAllPosts()
        .then((posts) => {
            res.status(200).json(posts);
        })
        .catch((err) => {
            res.status(500).json({ message: err.message });
        });
});

// getPostById
router.get("/:id", restricted, (req, res) => {
    const id = req.params.id;
    Posts.getPostById(id)
        .then((post) => {
            res.status(200).json(post);
        })
        .catch((err) => {
            res.status(500).json({ message: err.message });
        });
});

// createPost
router.post("/create", restricted, (req, res) => {
    const id = req.params.id;
    Posts.createPost(req.body, id)
        .then((post) => {
            res.status(201).json(post);
        })
        .catch((err) => {
            res.status(500).json({ message: err.message });
        });
});

// editPost
router.put("/:id", restricted, (req, res) => {
    const id = req.params.id;
    const edits = req.body;
    Posts.editPost(edits, id)
        .then((update) => {
            res.status(204).json({ message: "Specified post updated."});
            update;
        })
        .catch((err) => {
            res.status(500).json({ message: err.message });
        });
});

// deletePost
router.delete("/:id", restricted, (req, res) => {
    const id = req.params.id;
    Posts.deletePost(id)
        .then((deleted) => {
            res.status(204).json({ message: "Specified post deleted." }),
            deleted;
        })
        .catch((err) => {
            res.status(500).json({ message: err.message });
        });
});

module.exports = router;
