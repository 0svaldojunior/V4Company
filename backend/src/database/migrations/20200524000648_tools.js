
exports.up = (knex) => {
  return knex.schema.createTable('tools', (table) => {
    table.increments('tool_id').primary();
    table.string('tag').notNull();
    table.string('name').notNull();
    table.string('link').notNull();
    table.string('description').notNull();
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('tools');
};
