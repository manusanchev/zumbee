/**
 * @param { import("knex").Knex } knex
 * @returns {Knex.SchemaBuilder}
 */
export function up(knex) {
  return knex.schema.createTable("conversations", (table) => {
      table.uuid("id").primary();
      table.timestamps()
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns {Knex.SchemaBuilder}
 */
export function down(knex) {
  return knex.schema.dropTable("conversations")
};
