import { useQuery } from '@tanstack/react-query'
import { getAllProducts } from '../../apis/products'
import { Link } from 'react-router-dom'

export default function ProductDisplay() {
  const {
    data: products,
    isError,
    isLoading,
  } = useQuery(['products'], () => getAllProducts())

  if (isError) {
    return <div>Error occured while getting Products</div>
  }

  if (isLoading) {
    return <div>Products are loading...</div>
  }

  return (
    <div className="bg-stone-100 font-sans font-bold py-6 px-4">
      <div className="flex my-2 mx-1 justify-between">
        <h1 className="text-xl">Collection list</h1>
        <Link to={'/'}>
          <p className="text-xs pt-2 font-light">View all</p>
        </Link>
      </div>
      <div className="flex max-w-4xl flex-wrap w-full m-auto items-center text-center justify-center object-contain">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-1/2 h-1/2 bg-white border-8 border-stone-100 p-5 "
          >
            <Link to={'/'}>
              <div className="group p-3">
                <p className="group-hover:-translate-y-3 transform transition-transform">
                  {product.name}
                </p>
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-64 m-auto mt-2 group-hover:scale-110 transform transition-transform rounded-md"
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
