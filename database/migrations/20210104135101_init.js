
exports.up = function(knex) {
  return knex.schema
//   ID, username, password
    .createTable("users", tbl => {
        tbl.increments(); // ID
        tbl.string("username", 128).notNullable().unique().index();
        tbl.string("password", 256).notNullable();
    })
//  ID, title, description, image (blob?), user_id (FK)
    .createTable("posts", tbl => {
        tbl.increments();
        tbl.string("title", 256).notNullable();
        tbl.string("description", 1000).notNullable();
        tbl.integer("user_id")
            .unsigned().notNullable()
            .references("id").inTable("users")
            .onUpdate("CASCADE").onDelete("RESTRICT");
    });
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists("posts")
        .dropTableIfExists("users");
};
