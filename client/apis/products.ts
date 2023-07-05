import request from 'superagent'
import { Categories, Products } from '../../models/products'

export async function getAllProducts(): Promise<Products[]> {
  const response = await request.get('/api/v1/products/all')
  return response.body
}

export async function getAllCategories(): Promise<Categories[]> {
  const response = await request.get('/api/v1/products')
  return response.body
}

export async function getProductsById(id: number) {
  const response = await request.get(`/api/v1/products/items/${id}`)
  return response.body
}

export async function getProductsByCategory(
  category: string
): Promise<Products[]> {
  const response = await request.get(`/api/v1/products/${category}`)
  return response.body
}
