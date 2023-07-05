import { useQuery } from '@tanstack/react-query'
import { getAllCategories } from '../../apis/products'
import { Link } from 'react-router-dom'

export default function ProductDisplay() {
  const {
    data: categories,
    isError,
    isLoading,
  } = useQuery(['categories'], () => getAllCategories())

  if (isError) {
    return <div>Error occured while getting Products</div>
  }

  if (isLoading) {
    return <div>Products are loading...</div>
  }

  const isOdd = categories.length % 2 !== 0

  return (
    <div className="bg-stone-100 font-sans font-bold py-6 px-4 ">
      <div className="mx-auto max-w-4xl px-4 py-5 sm:px-6 sm:py-24 lg:max-w-5xl lg:px-8">
        <div className="flex my-2 mx-1 justify-between">
          <h1 className="text-2xl lg:text-4xl">Collection list</h1>
          <Link to={'/'}>
            <p className="text-md pt-2 font-light">View all</p>
          </Link>
        </div>
        <div className="border-stone-100 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-4 xl:gap-x-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`bg-white p-4 sm:col-span-2 ${
                isOdd ? 'sm:last:col-start-2' : ''
              }`}
            >
              <Link to={`/${category.name}`} className="group">
                <div className="w-full overflow-hidden rounded-lg">
                  <p className="mt-4 text-md text-gray-700 group-hover:-translate-y-3 transform transition-transform text-center">
                    {category.name.toUpperCase()}
                  </p>
                  <img
                    src={category.imageUrl}
                    alt={category.name}
                    className="h-full w-full object-cover object-center group-hover:opacity-75 group-hover:scale-110 transform transition-transform p-5"
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
