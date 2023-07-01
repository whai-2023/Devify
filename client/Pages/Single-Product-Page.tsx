import { useQuery } from '@tanstack/react-query'
import { getProductsById } from '../apis/products'
import { Link, useParams } from 'react-router-dom'
import { ChangeEvent, useState } from 'react'

// export default function SinglePage() {
//   const { category, id } = useParams()
//   const productId = Number(id)
//   const {
//     data: product,
//     isError,
//     isLoading,
//   } = useQuery(['product'], () => getProductsById(productId))
//   console.log(productId)
//   console.log(category)

//   if (isError) {
//     return <div>Error occured while getting a product</div>
//   }

//   if (isLoading) {
//     return <div>Product is loading...</div>
//   }
//   return (
//     <>
//       <div className="bg-white font-sans">
//         <div className="flex mx-auto max-w-2xl px-4 py-5 ">
//           <div className="">
//             <div className="bg-white p-4">
//               <img
//                 src={product.imageUrl}
//                 alt={product.name}
//                 className="object-cover"
//               />
//             </div>
//           </div>
//           <div>
//             <h3 className="mt-4 text-xl font-extrabold text-gray-700">
//               {product.name}
//             </h3>
//             <p className="mt-1 text-lg font-normal text-gray-900">
//               {product.description}
//             </p>
//             <p className="mt-1 text-lg font-medium text-gray-900">
//               ${product.price}
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

export default function SinglePage() {
  const { category, id } = useParams()
  const productId = Number(id)
  const {
    data: product,
    isError,
    isLoading,
  } = useQuery(['product'], () => getProductsById(productId))
  const [quantity, setQuantity] = useState(1)

  const handleQuantityChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuantity(parseInt(e.target.value))
  }

  const handleAddToCart = () => {
    // Add logic for adding the product to the cart
  }

  const handleBuyNow = () => {
    // Add logic for buying the product
  }
  console.log(productId)
  console.log(category)

  if (isError) {
    return <div>Error occurred while getting a product</div>
  }

  if (isLoading) {
    return <div>Product is loading...</div>
  }

  return (
    <>
      <div className="bg-white font-sans">
        <div className="container mx-auto px-4 py-5 mt-36">
          <div className="flex flex-wrap items-start">
            <div className="w-full md:w-1/2">
              <div className="bg-white p-4">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 pl-4">
              <h1 className="text-4xl font-bold text-gray-700 mb-2">
                {product.name}
              </h1>
              <p className="text-lg text-gray-900 mb-4">
                {product.description}
              </p>
              <p className="text-lg font-medium text-gray-900 mb-4">
                ${product.price}
              </p>
              <div className="flex items-center mb-4">
                <label htmlFor="quantity" className="mr-2">
                  Quantity:
                </label>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="w-16 p-2 border border-gray-400"
                />
              </div>
              <div className="flex gap-x-6">
                <button
                  onClick={handleBuyNow}
                  className="px-4 py-2 bg-blue-500 text-white font-medium rounded-md"
                >
                  Buy Now
                </button>
                <button
                  onClick={handleAddToCart}
                  className="px-4 py-2 bg-blue-500 text-white font-medium rounded-md"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
