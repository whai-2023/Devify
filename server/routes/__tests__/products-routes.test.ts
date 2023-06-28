import request from 'supertest'
import { describe, expect, it, vi } from 'vitest'

import { getAllProducts } from '../../db/functions/products'
import server from '../../server'

vi.mock('../../db/functions/products')

describe('Get /api/v1/products', () => {
  it('should return array of products', async () => {
    vi.mocked(getAllProducts).mockResolvedValue([
      {
        id: 1,
        name: 'iphone',
        price: 1500,
        description:
          'Introducing iPhone by Apple: a game-changer in the world of smartphones. Experience a seamless blend of stunning design, powerful performance, and innovative features. With an advanced camera system, immersive display, and Face ID security, iPhone sets the standard for excellence. Stay connected, capture memories, and unlock endless possibilities with the iconic iPhone.',
      },
    ])

    const response = await request(server).get('/api/v1/products')

    expect(response.body).toMatchInlineSnapshot(`
      [
        {
          "description": "Introducing iPhone by Apple: a game-changer in the world of smartphones. Experience a seamless blend of stunning design, powerful performance, and innovative features. With an advanced camera system, immersive display, and Face ID security, iPhone sets the standard for excellence. Stay connected, capture memories, and unlock endless possibilities with the iconic iPhone.",
          "id": 1,
          "name": "iphone",
          "price": 1500,
        },
      ]
    `)
  })

  it('should return an error message when db fails', async () => {
    vi.mocked(getAllProducts).mockRejectedValue(
      new Error('SQLITE ERROR: SOMETHING')
    )
    vi.spyOn(console, 'error').mockImplementation(() => {})

    const response = await request(server).get('/api/v1/products')

    expect(console.error).toHaveBeenCalledWith(
      new Error('SQLITE ERROR: SOMETHING')
    )
    expect(response.body.error).toBe('Could not get products')
  })
})
