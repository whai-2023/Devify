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

  return (
    <div className="bg-stone-100 font-sans font-bold py-6 px-4 ">
      <div className="flex my-2 justify-between w-3/4 mx-auto max-w-6xl ">
        <h1 className="text-4xl">Collection list</h1>
        <Link to={'/'}>
          <p className="text-md pt-2 font-light">View all</p>
        </Link>
      </div>
      <div className="flex max-w-6xl flex-wrap w-3/4 m-auto items-center text-center justify-center object-contain">
        {categories.map((category) => (
          <div
            key={category.id}
            className="w-1/2 h-1/2 bg-white border-8 border-stone-100 p-5 "
          >
            <Link to={`/${category.name}`}>
              <div className="group p-3 ">
                <p className="group-hover:-translate-y-3 transform transition-transform text-xl mb-5">
                  {category.name.toUpperCase()}
                </p>
                <img
                  src={category.imageUrl}
                  alt={category.name}
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
