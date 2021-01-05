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

function getPostById() {

}

function createPost() {

}

function editPost() {

}

function deletePost() {
    
}
