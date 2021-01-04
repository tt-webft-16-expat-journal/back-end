exports.seed = function(knex) {
    const posts = [
        { title: "Test Post 1", description: "Remember how free clouds are. They just lay around in the sky all day long.", user_id: 1 },
        { title: "Test Post 2", description: "Play with the angles. Maybe we got a few little happy bushes here, just covered with snow.", user_id: 2 }
    ];

    return knex("posts")
        .insert(posts)
        .then(() => console.log("\n== Seed data for posts table succesfully added. ==\n"));
};
