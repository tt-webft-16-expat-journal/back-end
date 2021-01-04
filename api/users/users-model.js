const db = require("../../database/dbConfig");

module.exports = {
    add,
    get,
    getBy,
    getById,
};

function get() {
    return db("users").select("id", "username").orderBy("id");
}

function getBy(filter) {
    return db("users").where(filter);
}

function getById(id) {
    return db("users").where({ id }).first();
}

async function add(user) {
    const [id] = await db("users").insert(user, "id");
    return getById(id);
}
