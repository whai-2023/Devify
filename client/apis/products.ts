import request from 'superagent'
import { Products } from '../../models/products'

export async function getAllProducts(): Promise<Products[]> {
  const response = await request.get('./api/v1/products')
  return response.body
}

export async function getProductsById(id: number) {
  const response = await request.get(`./api/v1/products/${id}`)
  return response.body
}
