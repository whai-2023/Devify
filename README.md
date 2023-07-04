# Devify

## 🚀 About the project

## ⚡️ Getting Started

This repository uses [TailwindCSS](https://tailwindcss.com/) for styling. For the best developer experience, install the [TailwindCSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) extension for VSCode. Optionally, if you prefer, you may choose to use CSS Modules for a more traditional CSS experience.

### Frontend:

- [React](https://react.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [React Router](https://reactrouter.com/)
- [Vite](https://vitejs.dev/)
- [React Query](https://tanstack.com/query/latest/docs/react/overview)

### Backend:

- [Express](https://expressjs.com/)
- [Knex](http://knexjs.org/)
- [SQLite3](https://www.sqlite.org/index.html)

### Testing:

- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Vitest](https://vitest.dev/)
- [nock](https://github.com/nock/nock)
- [supertest](https://github.com/visionmedia/supertest)

## About the Project

### Backend

#### DB Schema

![db diagram](/public/images/db.png)

<details>
<summary>ERD code</summary>

```ts
Table categories {
  id increments [primary key]
  name string
  imageUrl string
}

Table products {
  id increments [primary key]
  name string
  description text
  price integer
  imageUrl string
  category_id integer

}




Ref: products.category_id > categories.id

```

## </details>

#### Wireframe

## ![db diagram](/public/images/Wireframe.png)

## Front End

### Routes

#### GET `/api/v1/products/`

<details>

Request:
`GET /api/v1/products`

Response:

```json
[
  { "id": 1, "name": "iphones", "imageUrl": "/images/Iphone-14-Pro.jpeg" },
  { "id": 2, "name": "macbooks", "imageUrl": "/images/Macbook-Pro-14-M1.jpeg" },
  { "id": 3, "name": "ipads", "imageUrl": "/images/Ipad-Pro.jpeg" },
  { "id": 4, "name": "airpods", "imageUrl": "/images/Airpod-Pro.jpeg" },
  { "id": 5, "name": "animals", "imageUrl": "/images/Cream.png" }
]
```

</details>

#### GET `/api/v1/products/items/:id`

<details>
Request:
`GET /api/v1/products/items/1`

Response:

```json
{
  "id": 1,
  "name": "Iphone 14 Pro",
  "price": 1999,
  "description": "Experience the pinnacle of innovation with the Apple iPhone 14 Pro. Boasting a 6.7-inch Super Retina XDR display with ProMotion technology, it delivers breathtaking visuals. Powered by the A16 Bionic chip and 8GB of RAM, this device offers unmatched performance and smooth multitasking. Capture professional-quality photos and videos with the triple-camera system and take advantage of the LiDAR scanner for augmented reality experiences. Your data remains secure with Face ID, and the larger battery supports fast charging and wireless charging. With 5G connectivity and iOS 15, the iPhone 14 Pro is a testament to Apple's commitment to excellence.",
  "imageUrl": "/images/Iphone-14-Pro.jpeg",
  "category_id": 1
}
```

</details>

#### GET `/api/v1/products/:category`

<details>
Request:
`GET /api/v1/products/phones`

Response:

```json
[
  {
    "category_id": 1,
    "description": "Experience the pinnacle of innovation with the Apple iPhone 14 Pro. Boasting a 6.7-inch Super Retina XDR display with ProMotion technology, it delivers breathtaking visuals. Powered by the A16 Bionic chip and 8GB of RAM, this device offers unmatched performance and smooth multitasking. Capture professional-quality photos and videos with the triple-camera system and take advantage of the LiDAR scanner for augmented reality experiences. Your data remains secure with Face ID, and the larger battery supports fast charging and wireless charging. With 5G connectivity and iOS 15, the iPhone 14 Pro is a testament to Apple's commitment to excellence.",
    "id": 1,
    "imageUrl": "/images/Iphone-14-Pro.jpeg",
    "name": "Iphone 14 Pro",
    "price": 1999
  },
  {
    "category_id": 1,
    "description": "Introducing the iPhone 14 Plus, the epitome of innovation and elegance in the world of smartphones. With its larger display and cutting-edge features, this device takes your mobile experience to a whole new level. The iPhone 14 Plus boasts a generous 6.5-inch Super Retina XDR display, offering vibrant colors and stunning visuals. Powered by the latest A16 Bionic chip, it delivers unrivaled speed and efficiency for seamless performance. Capture your life's moments in breathtaking detail with the advanced camera system, while Face ID ensures top-notch security. Embrace the future with 5G connectivity, and enjoy the latest iOS features for an unparalleled user experience. The iPhone 14 Plus is a perfect blend of style and substance, making it the ideal choice for those seeking the best in technology and design.",
    "id": 6,
    "imageUrl": "/images/Iphone-14-Plus.jpeg",
    "name": "Iphone 14 Plus",
    "price": 1799
  },
  {
    "category_id": 1,
    "description": "Introducing the iPhone 14, the next evolution in smartphone technology. With its sleek design and groundbreaking features, the iPhone 14 sets a new standard for innovation. Equipped with a stunning 6.1-inch Super Retina XDR display, this device delivers immersive visuals with vibrant colors and sharp details. Powered by the advanced A16 Bionic chip, it offers blazing-fast performance and enhanced efficiency for seamless multitasking. Capture professional-quality photos and videos with the improved camera system, and enjoy enhanced security with Face ID. Stay connected with lightning-fast 5G connectivity, and explore the latest iOS features that redefine the way you interact with your phone. The iPhone 14 is the epitome of excellence, combining cutting-edge technology with unmatched style.",
    "id": 7,
    "imageUrl": "/images/Iphone-14.jpeg",
    "name": "Iphone 14",
    "price": 1599
  },
  {
    "category_id": 1,
    "description": "Introducing the iPhone 13, a device that takes smartphone technology to new heights. With its sleek and refined design, this iPhone is a true epitome of elegance. The 6.1-inch Super Retina XDR display showcases vibrant colors and incredible clarity, making every image and video come to life. Powered by the powerful A15 Bionic chip, the iPhone 13 offers exceptional performance, ensuring seamless multitasking and smooth gaming experiences. Capture stunning photos and videos with the advanced camera system, and enjoy enhanced low-light performance and improved image stabilization. With all-day battery life, Face ID for secure authentication, and 5G connectivity, the iPhone 13 is designed to keep up with your fast-paced lifestyle. Experience the next generation of smartphones with the iPhone 13 and elevate your mobile experience to a whole new level.",
    "id": 8,
    "imageUrl": "/images/Iphone-13.jpeg",
    "name": "Iphone 13",
    "price": 1399
  }
]
```

</details>

## Running Tests

To run tests, run the following command

```bash
  npm run test
```

To show test coverage summary

```bash
  npm run test -- -coverage
```

## Authors ✍🏻 & Links 🔗

### Jiho Burgess-Kim

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jiho-burgess-kim-b7882a160/)
[![github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://www.github.com/jiho-burgesskim)

### James-Idiens

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/) [![github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/James-Idiens)

### William Chu

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/william-chu-b1912b158/) [![github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/WillChu1733)
