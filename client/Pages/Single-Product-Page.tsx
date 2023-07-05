import { useQuery } from '@tanstack/react-query'
import { getProductsById } from '../apis/products'
import { useParams } from 'react-router-dom'
import { useShoppingCart } from '../context/ShoppingCartContext'

export default function SinglePage() {
  const { id } = useParams()
  const productId = Number(id)
  const {
    data: product,
    isError,
    isLoading,
  } = useQuery(['product'], () => getProductsById(productId))

  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart()
  const items = getItemQuantity(productId)

  if (isError) {
    return <div>Error occurred while getting a product</div>
  }

  if (isLoading) {
    return <div>Product is loading...</div>
  }

  return (
    <>
      <div className="bg-white font-sans ">
        <div className="container mx-auto px-4 pt-28 pb-5">
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

              <div className="flex gap-x-6">
                <div>
                  {items === 0 ? (
                    <button
                      className="px-4 py-2 bg-blue-500 text-white font-medium rounded-md"
                      onClick={() => increaseCartQuantity(productId)}
                    >
                      Add to cart
                    </button>
                  ) : (
                    <div className="flex gap-x-6">
                      <div className="px-4 py-2 bg-blue-500 text-white font-medium rounded-md">
                        <div className="flex flex-rowrounded-lg relative bg-transparent mt-1">
                          <button
                            onClick={() => decreaseCartQuantity(productId)}
                            className=" w-12 rounded-l cursor-pointer"
                          >
                            <span>−</span>
                          </button>
                          <span className="text-center font-medium md:text-basecursor-default items-center">
                            {items}
                          </span>
                          <button
                            onClick={() => increaseCartQuantity(productId)}
                            className="w-12 rounded-r cursor-pointer"
                          >
                            <span>+</span>
                          </button>
                        </div>
                      </div>
                      <button
                        className="px-4 py-2 bg-red-500 text-white font-medium rounded-md"
                        onClick={() => removeFromCart(productId)}
                      >
                        Remove
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
