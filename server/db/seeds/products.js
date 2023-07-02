/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex('products').insert([
    {
      id: 1,
      name: 'Iphone',
      price: 1500,
      description:
        'Introducing iPhone by Apple: a game-changer in the world of smartphones. Experience a seamless blend of stunning design, powerful performance, and innovative features. With an advanced camera system, immersive display, and Face ID security, iPhone sets the standard for excellence. Stay connected, capture memories, and unlock endless possibilities with the iconic iPhone.',
      imageUrl: '/images/Iphone-14-Pro.jpeg',
      category_id: 1,
    },

    {
      id: 2,
      name: 'Macbook',
      price: 3000,
      description:
        'Introducing MacBook by Apple: the epitome of portable power. Experience unparalleled performance, stunning Retina display, and exceptional craftsmanship. With a sleek design, cutting-edge processors, and all-day battery life, MacBook takes productivity to new heights. From creative projects to business tasks, MacBook is the ultimate tool for professionals on the go. Unleash your potential with MacBook.',
      imageUrl: '/images/Macbook-Pro.jpeg',
      category_id: 2,
    },
    {
      id: 3,
      name: 'Ipad',
      price: 2000,
      description:
        'Introducing the iPad by Apple: a remarkable blend of power and versatility. Discover a stunning Retina display, powerful performance, and a world of limitless possibilities. With advanced features like Apple Pencil support, all-day battery life, and a vast selection of apps, the iPad redefines what a tablet can do. Unleash your creativity and productivity with the iPad.',
      imageUrl: '/images/Ipad-Pro.jpeg',
      category_id: 3,
    },
    {
      id: 4,
      name: 'Airpod',
      price: 500,
      description:
        'Introducing Apple AirPods: the epitome of wireless audio. Enjoy crystal-clear sound, seamless connectivity, and effortless convenience. With automatic pairing, intelligent sensors, and Siri integration, they provide a hassle-free experience. Experience up to 5 hours of listening time on a single charge, with the sleek charging case extending it even further. Elevate your audio with AirPods.',
      imageUrl: '/images/Airpod-Pro.jpeg',
      category_id: 4,
    },
    {
      id: 5,
      name: 'Cream',
      price: 350,
      description:
        "Introducing Sarah's Cat, Cream: a purrfect companion filled with endless love and charm. With its soft fur, playful nature, and mesmerizing eyes, this feline friend brings joy to Sarah's life. Whether curling up for cuddles or entertaining with acrobatic antics, Sarah's Cat is a delightful addition to any home. Embrace the love and warmth of Sarah's Cat today.",
      imageUrl: '/images/Cream.png',
      category_id: 5,
    },
    {
      id: 6,
      name: 'Iphone 13',
      price: 1000,
      description:
        'Introducing MacBook by Apple: the epitome of portable power. Experience unparalleled performance, stunning Retina display, and exceptional craftsmanship. With a sleek design, cutting-edge processors, and all-day battery life, MacBook takes productivity to new heights. From creative projects to business tasks, MacBook is the ultimate tool for professionals on the go. Unleash your potential with MacBook.',
      imageUrl: '/images/Iphone-14-Pro.jpeg',
      category_id: 1,
    },
  ])
}
