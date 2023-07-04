import { useQuery } from '@tanstack/react-query'
import { getAllCategories } from '../../apis/products'
import { Link } from 'react-router-dom'

export default function NavbarProduct() {
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
    <div className="bg-white font-sans font-bold py-6 px-4 m-auto">
      {/* <div className="flex-row w-1/2 m-auto items-center text-center justify-center object-contain"> */}
      {categories.slice(0, 4).map((category) => (
        <div
          key={category.id}
          className="w-1/3 h-1/3 bg-white p-5 inline-block"
        >
          <Link to={'/'}>
            <div className="group p-3">
              <p className="group-hover:-translate-y-3 transform transition-transform">
                {category.name}
              </p>
              <img
                src={category.imageUrl}
                alt={category.name}
                className="w-80 m-auto mt-2 group-hover:scale-110 transform transition-transform"
              />
            </div>
          </Link>
        </div>
      ))}
      {/* </div> */}
    </div>
  )
}
