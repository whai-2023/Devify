import { useQuery } from '@tanstack/react-query'
import { getProductsById } from '../apis/products'
import { Link, useParams } from 'react-router-dom'

export default function SinglePage() {
  const { category, id } = useParams()
  const productId = Number(id)
  const {
    data: product,
    isError,
    isLoading,
  } = useQuery(['product'], () => getProductsById(productId))
  console.log(productId)
  console.log(category)

  if (isError) {
    return <div>Error occured while getting a product</div>
  }

  if (isLoading) {
    return <div>Product is loading...</div>
  }
  return (
    <>
      <div>{product.name}</div>
    </>
  )
}
