/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex('categories').insert([
    { id: 1, name: 'phones', imageUrl: '/images/Iphone-14-Pro.jpeg' },
    { id: 2, name: 'laptops', imageUrl: '/images/Macbook-Pro-14-M1.jpeg' },
    { id: 3, name: 'tablets', imageUrl: '/images/Ipad-Pro.jpeg' },
    { id: 4, name: 'earphones', imageUrl: '/images/Airpod-Pro.jpeg' },
    { id: 5, name: 'animals', imageUrl: '/images/Cream.png' },
  ])
}
