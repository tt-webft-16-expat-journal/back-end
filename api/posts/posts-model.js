const db = require("../../database/dbConfig");

module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    editPost,
    deletePost,
};

function getAllPosts() {
    return db("posts").select("id", "title", "description", "user_id").orderBy("id");
}

function getPostById(id) {
    return db("posts").where({ id }).first();
}

function createPost(post) {
    return db("posts").insert(post, "id");
}

function editPost(edits, id) {   
    return db("posts").where({ id }).update(edits);
}

function deletePost(id) {
    return db("posts").where({ id }).del();
}
