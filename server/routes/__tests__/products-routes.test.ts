import request from 'supertest'
import { describe, expect, it, vi } from 'vitest'

import { getAllCategories } from '../../db/functions/products'
import server from '../../server'

vi.mock('../../db/functions/products')

describe('Get /api/v1/products', () => {
  it('should return array of products', async () => {
    vi.mocked(getAllCategories).mockResolvedValue([
      { id: 1, name: 'iphones', imageUrl: '/images/Iphone-14-Pro.jpeg' },
    ])

    const response = await request(server).get('/api/v1/products')

    expect(response.body).toMatchInlineSnapshot(`
      [
        {
          "id": 1,
          "imageUrl": "/images/Iphone-14-Pro.jpeg",
          "name": "iphones",
        },
      ]
    `)
  })

  it('should return an error message when db fails', async () => {
    vi.mocked(getAllCategories).mockRejectedValue(
      new Error('SQLITE ERROR: SOMETHING')
    )
    vi.spyOn(console, 'error').mockImplementation(() => {})

    const response = await request(server).get('/api/v1/products')

    expect(console.error).toHaveBeenCalledWith(
      new Error('SQLITE ERROR: SOMETHING')
    )
    expect(response.body.error).toBe('Could not get categories')
  })
})
