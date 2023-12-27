/**
 * @param { import("knex").Knex } knex
 * @returns {Knex.SchemaBuilder}
 */
export function up(knex) {
  return knex.schema.createTable("conversations_users", (table) => {
    table.uuid("id").primary();
    table.uuid("user_id").references("id").inTable("users");
    table.uuid("conversation_id").references("id").inTable("conversations");
    table.timestamps();
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns {Knex.SchemaBuilder}
 */
export function down(knex) {
    return knex.schema.dropTable("conversations_users");
}
