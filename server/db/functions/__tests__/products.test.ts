import { afterAll, beforeAll, beforeEach, describe, expect, it } from 'vitest'

import connection from '../../connection'
import {
  getAllProducts,
  getProductsById,
  getAllCategories,
  getProductsByCategory,
} from '../products'

beforeAll(() => {
  return connection.migrate.latest()
})

beforeEach(async () => {
  await connection.seed.run()
})

afterAll(() => {
  return connection.destroy()
})

describe('getAllProducts', () => {
  it('should return all the products', async () => {
    const products = await getAllProducts()
    expect(products).toHaveLength(6)
  })
})

describe('getAllCategories', () => {
  it('should return all the categories', async () => {
    const categories = await getAllCategories()
    expect(categories).toHaveLength(5)
  })
})

describe('getProductsById', () => {
  it('should return the correct product', async () => {
    const expectedOutput = {
      id: 1,
      name: 'Iphone',
      price: 1500,
      description:
        'Introducing iPhone by Apple: a game-changer in the world of smartphones. Experience a seamless blend of stunning design, powerful performance, and innovative features. With an advanced camera system, immersive display, and Face ID security, iPhone sets the standard for excellence. Stay connected, capture memories, and unlock endless possibilities with the iconic iPhone.',
      imageUrl: '/images/Iphone-14-Pro.jpeg',
      category_id: 1,
    }
    const product = await getProductsById(1)

    expect(product).toEqual(expectedOutput)
  })
})
//how
describe('getProductsByCategory', () => {
  it('should return correct array of products', async () => {
    const products = await getProductsByCategory('phones')
    console.log(products)

    expect(products).toMatchInlineSnapshot(`
      [
        {
          "category_id": 1,
          "description": "Introducing iPhone by Apple: a game-changer in the world of smartphones. Experience a seamless blend of stunning design, powerful performance, and innovative features. With an advanced camera system, immersive display, and Face ID security, iPhone sets the standard for excellence. Stay connected, capture memories, and unlock endless possibilities with the iconic iPhone.",
          "id": 1,
          "imageUrl": "/images/Iphone-14-Pro.jpeg",
          "name": "Iphone",
          "price": 1500,
        },
        {
          "category_id": 1,
          "description": "Introducing MacBook by Apple: the epitome of portable power. Experience unparalleled performance, stunning Retina display, and exceptional craftsmanship. With a sleek design, cutting-edge processors, and all-day battery life, MacBook takes productivity to new heights. From creative projects to business tasks, MacBook is the ultimate tool for professionals on the go. Unleash your potential with MacBook.",
          "id": 6,
          "imageUrl": "/images/Iphone-14-Pro.jpeg",
          "name": "Iphone 13",
          "price": 1000,
        },
      ]
    `)
  })
})
