import { Products, Categories } from '../../../models/products'
import connection from '../connection'

export async function getAllProducts(db = connection): Promise<Products[]> {
  const response = await db('products').select()
  return response
}

export async function getAllCategories(db = connection): Promise<Categories[]> {
  const response = await db('categories').select()
  return response
}

export async function getProductsById(
  id: number,
  db = connection
): Promise<Products | undefined> {
  const product = await db('products').select().where('id', id).first()
  return product
}

export async function getProductsByCategory(
  category: string,
  db = connection
): Promise<Products[] | undefined> {
  const categoryId = await db('categories')
    .select('id')
    .where('name', category)
    .first()

  const products = await db('products')
    .select()
    .where('category_id', categoryId.id)
  return products
}
