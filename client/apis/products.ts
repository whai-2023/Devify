import request from 'superagent'

export async function getAllProducts() {
  const response = await request.get('./api/v1/products')
  return response.body
}

export async function getProductsById(id: number) {
  const response = await request.get(`./api/v1/products/${id}`)
  return response.body
}
