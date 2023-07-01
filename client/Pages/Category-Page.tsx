import { useQuery } from '@tanstack/react-query'
import { getProductsByCategory } from '../apis/products'
import { Link, useParams } from 'react-router-dom'

export default function CategoryPage() {
  const { category } = useParams<{ category: string }>()
  const {
    data: products,
    isError,
    isLoading,
  } = useQuery(['products'], () => getProductsByCategory(category as string))

  if (isError) {
    return <div>Error occured while getting Products</div>
  }

  if (isLoading) {
    return <div>Products are loading...</div>
  }

  return (
    <>
      <div className="bg-stone-100">
        <div className="mx-auto max-w-2xl px-4 py-5 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="flex my-2 mx-1 justify-between">
            <h1 className="text-xl">{category} list</h1>
          </div>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white p-4">
                <Link to={`/${category}/${product.id}`} className="group">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">
                    ${product.price}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
