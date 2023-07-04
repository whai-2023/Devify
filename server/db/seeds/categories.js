/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex('categories').insert([
    { id: 1, name: 'iphones', imageUrl: '/images/Iphone-14-Pro.jpeg' },
    { id: 2, name: 'macbooks', imageUrl: '/images/Macbook-Pro-14-M1.jpeg' },
    { id: 3, name: 'ipads', imageUrl: '/images/Ipad-Pro.jpeg' },
    { id: 4, name: 'airpods', imageUrl: '/images/Airpod-Pro.jpeg' },
    { id: 5, name: 'animals', imageUrl: '/images/Cream.png' },
  ])
}
