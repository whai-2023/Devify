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
    expect(products).toHaveLength(20)
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
      name: 'Iphone 14 Pro',
      price: 1999,
      description: `Experience the pinnacle of innovation with the Apple iPhone 14 Pro. Boasting a 6.7-inch Super Retina XDR display with ProMotion technology, it delivers breathtaking visuals. Powered by the A16 Bionic chip and 8GB of RAM, this device offers unmatched performance and smooth multitasking. Capture professional-quality photos and videos with the triple-camera system and take advantage of the LiDAR scanner for augmented reality experiences. Your data remains secure with Face ID, and the larger battery supports fast charging and wireless charging. With 5G connectivity and iOS 15, the iPhone 14 Pro is a testament to Apple's commitment to excellence.`,
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
    const products = await getProductsByCategory('iphones')
    console.log(products)

    expect(products).toMatchInlineSnapshot(`
      [
        {
          "category_id": 1,
          "description": "Experience the pinnacle of innovation with the Apple iPhone 14 Pro. Boasting a 6.7-inch Super Retina XDR display with ProMotion technology, it delivers breathtaking visuals. Powered by the A16 Bionic chip and 8GB of RAM, this device offers unmatched performance and smooth multitasking. Capture professional-quality photos and videos with the triple-camera system and take advantage of the LiDAR scanner for augmented reality experiences. Your data remains secure with Face ID, and the larger battery supports fast charging and wireless charging. With 5G connectivity and iOS 15, the iPhone 14 Pro is a testament to Apple's commitment to excellence.",
          "id": 1,
          "imageUrl": "/images/Iphone-14-Pro.jpeg",
          "name": "Iphone 14 Pro",
          "price": 1999,
        },
        {
          "category_id": 1,
          "description": "Introducing the iPhone 14 Plus, the epitome of innovation and elegance in the world of smartphones. With its larger display and cutting-edge features, this device takes your mobile experience to a whole new level. The iPhone 14 Plus boasts a generous 6.5-inch Super Retina XDR display, offering vibrant colors and stunning visuals. Powered by the latest A16 Bionic chip, it delivers unrivaled speed and efficiency for seamless performance. Capture your life's moments in breathtaking detail with the advanced camera system, while Face ID ensures top-notch security. Embrace the future with 5G connectivity, and enjoy the latest iOS features for an unparalleled user experience. The iPhone 14 Plus is a perfect blend of style and substance, making it the ideal choice for those seeking the best in technology and design.",
          "id": 6,
          "imageUrl": "/images/Iphone-14-Plus.jpeg",
          "name": "Iphone 14 Plus",
          "price": 1799,
        },
        {
          "category_id": 1,
          "description": "Introducing the iPhone 14, the next evolution in smartphone technology. With its sleek design and groundbreaking features, the iPhone 14 sets a new standard for innovation. Equipped with a stunning 6.1-inch Super Retina XDR display, this device delivers immersive visuals with vibrant colors and sharp details. Powered by the advanced A16 Bionic chip, it offers blazing-fast performance and enhanced efficiency for seamless multitasking. Capture professional-quality photos and videos with the improved camera system, and enjoy enhanced security with Face ID. Stay connected with lightning-fast 5G connectivity, and explore the latest iOS features that redefine the way you interact with your phone. The iPhone 14 is the epitome of excellence, combining cutting-edge technology with unmatched style.",
          "id": 7,
          "imageUrl": "/images/Iphone-14.jpeg",
          "name": "Iphone 14",
          "price": 1599,
        },
        {
          "category_id": 1,
          "description": "Introducing the iPhone 13, a device that takes smartphone technology to new heights. With its sleek and refined design, this iPhone is a true epitome of elegance. The 6.1-inch Super Retina XDR display showcases vibrant colors and incredible clarity, making every image and video come to life. Powered by the powerful A15 Bionic chip, the iPhone 13 offers exceptional performance, ensuring seamless multitasking and smooth gaming experiences. Capture stunning photos and videos with the advanced camera system, and enjoy enhanced low-light performance and improved image stabilization. With all-day battery life, Face ID for secure authentication, and 5G connectivity, the iPhone 13 is designed to keep up with your fast-paced lifestyle. Experience the next generation of smartphones with the iPhone 13 and elevate your mobile experience to a whole new level.",
          "id": 8,
          "imageUrl": "/images/Iphone-13.jpeg",
          "name": "Iphone 13",
          "price": 1399,
        },
      ]
    `)
  })
})
