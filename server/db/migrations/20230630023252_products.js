/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('products', function (table) {
    table.increments('id').primary()
    table.string('name')
    table.text('description')
    table.integer('price')
    table.string('imageUrl')
    table.integer('category_id').references('categories.id')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('products')
}
