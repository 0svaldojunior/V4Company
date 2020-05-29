// A chave primária foi de escolha simples, um incrementador para auxiliar indentificação
// juntamente com suas colunas do tipo string, que melhor se indentificou com as informações
// solicitadas.
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
