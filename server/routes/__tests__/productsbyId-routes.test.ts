import request from 'supertest'
import { describe, expect, it, vi } from 'vitest'

import { getProductsById } from '../../db/functions/products'
import server from '../../server'

vi.mock('../../db/functions/products')

describe('Get /api/v1/products/items/:id', () => {
  it('should return a product', async () => {
    // Arrange
    vi.mocked(getProductsById).mockResolvedValue({
      id: 3,
      name: 'wdgddg',
      price: 3,
      description: 'dgsdg',
      categoryId: 3,
      imageUrl: 'string',
    })

    // Act
    const response = await request(server).get('/api/v1/products/items/3')

    // Assert
    expect(response.body).toMatchInlineSnapshot(`
      {
        "categoryId": 3,
        "description": "dgsdg",
        "id": 3,
        "imageUrl": "string",
        "name": "wdgddg",
        "price": 3,
      }
    `)
  })

  it('should respond with an error when the request fails', async () => {
    // Arrange
    vi.mocked(getProductsById).mockRejectedValue(new Error('SQLITE Error'))
    vi.spyOn(console, 'log').mockImplementation(() => {})

    // Act
    const response = await request(server).get('/api/v1/products/items/3')

    // Assert
    expect(response.body.error).toBe('Could not get product')
    expect(console.log).toHaveBeenCalledWith(new Error('SQLITE Error'))
  })

  it('should respond with an error if productId is not a number', async () => {
    const response = await request(server).get('/api/v1/products/items/a')

    expect(response.text).toBe('ID must be a number')
  })

  it('should respond with an error if product information is undefined', async () => {
    vi.mocked(getProductsById).mockResolvedValue(undefined)

    const response = await request(server).get('/api/v1/products/items/6')

    expect(response.status).toBe(404)
  })
})
