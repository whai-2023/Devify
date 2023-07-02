import request from 'supertest'
import { describe, expect, it, vi } from 'vitest'

import { getProductsByCategory } from '../../db/functions/products'
import server from '../../server'

vi.mock('../../db/functions/products')

describe('Get /api/v1/products/:category', () => {
  it('should return array of products in category', async () => {
    vi.mocked(getProductsByCategory).mockResolvedValue([
      {
        id: 3,
        name: 'wdgddg',
        price: 3,
        description: 'dgsdg',
        categoryId: 3,
        imageUrl: 'string',
      },
    ])

    const response = await request(server).get('/api/v1/products/phones')

    expect(response.body).toMatchInlineSnapshot(`
      [
        {
          "categoryId": 3,
          "description": "dgsdg",
          "id": 3,
          "imageUrl": "string",
          "name": "wdgddg",
          "price": 3,
        },
      ]
    `)
  })

  it('should respond with an error when the request fails', async () => {
    vi.mocked(getProductsByCategory).mockRejectedValue(
      new Error('SQLITE Error')
    )
    vi.spyOn(console, 'log').mockImplementation(() => {})

    const response = await request(server).get('/api/v1/products/category')

    expect(response.body.error).toBe('Could not get products by category')
    expect(console.log).toHaveBeenCalledWith(new Error('SQLITE Error'))
  })

  it('should respond with an error if category is undefined', async () => {
    vi.mocked(getProductsByCategory).mockResolvedValue(undefined)

    const response = await request(server).get('/api/v1/products/lajdflk')

    expect(response.status).toBe(404)
  })
})
