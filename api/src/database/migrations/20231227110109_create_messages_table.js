/**
 * @param { import("knex").Knex } knex
 * @returns {Knex.SchemaBuilder}
 */
export function up(knex) {
  return knex.schema.createTable("messages", (table) => {
    table.uuid("id").primary();
    table.uuid("sender_id").references("id").inTable("users");
    table.uuid("conversation_id").references("id").inTable("conversations");
    table.text("content");
    table.timestamps();
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns {Knex.SchemaBuilder}
 */
export function down(knex) {
  return knex.schema.dropTable("messages");
}
