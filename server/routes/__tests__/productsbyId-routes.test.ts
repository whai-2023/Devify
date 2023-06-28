import request from 'supertest'
import { describe, expect, it, vi } from 'vitest'

import { getProductsById } from '../../db/functions/products'
import server from '../../server'

vi.mock('../../db/functions/products')

describe('Get /api/v1/products/:id', () => {
  it.todo('should return a product', async () => {
    vi
  })
})
