import { Products } from '../../../models/products'
import connection from '../connection'

export async function getAllProducts(db = connection): Promise<Products[]> {
  const response = await db('products').select()
  return response
}

export async function getProductsById(
  id: number,
  db = connection
): Promise<Products> {
  const product = await db('products').select().where('id', id).first()
  return product
}
