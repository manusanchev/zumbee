/**
 * @param { import("knex").Knex } knex
 * @returns { Knex.SchemaBuilder }
 */
export function up(knex) {
    return knex.schema.createTable("users", (table) => {
        table.uuid("id").primary();
        table.string("username").unique();
        table.string("email").unique();
        table.boolean("email_confirmed").defaultTo(0);
        table.string("password");
        table.timestamps()
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Knex.SchemaBuilder }
 */
export function down(knex) {
    return knex.schema.dropTable("users");
};
