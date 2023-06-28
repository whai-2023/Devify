import { Router } from 'express'
import * as db from '../db/functions/products'

const router = Router()

// GET all
router.get('/', async (req, res) => {
  try {
    const products = await db.getAllProducts()
    res.json(products)
  } catch (error) {
    console.error(error)
    res.status(500).send({ error: 'Could not get products' })
  }
})

// Get /api/v1/products/:id
router.get('/:id', async (req, res) => {
  const id = Number(req.params.id)
  if (isNaN(id)) {
    res.status(400).send('ID must be a number')
    return
  }
  try {
    const productId = await db.getProductsById(id)
    if (!productId) {
      res.status(404).send('That product does not exist')
    }
    res.json(productId)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Could not get product' })
  }
})

export default router
