exports.seed = function(knex) {
    const users = [
        { username: "jerry", password: "11111111" },
        { username: "ted", password: "22222222" },
    ];

    return knex("users")
        .insert(users)
        .then(() => console.log("\n== Seed data for users table successfully added. ==\n"));
};
