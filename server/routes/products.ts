import { Router } from 'express'
import * as db from '../db/functions/products'

const router = Router()

// GET all
router.get('/', async (req, res) => {
  try {
    const categories = await db.getAllCategories()
    res.json(categories)
  } catch (error) {
    console.error(error)
    res.status(500).send({ error: 'Could not get categories' })
  }
})

// GET /api/v1/products/all
router.get('/all', async (req, res) => {
  try {
    const products = await db.getAllProducts()
    res.json(products)
  } catch (error) {
    console.error(error)
    res.status(500).send({ error: 'Could not get products' })
  }
})

// Get /api/v1/items/:id
router.get('/items/:id', async (req, res) => {
  const id = Number(req.params.id)

  // req.params = { categories: 'wdaowa', id: '2' }
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

router.get('/:category', async (req, res) => {
  const category = req.params.category
  try {
    const products = await db.getProductsByCategory(category)
    if (
      !['iphones', 'ipads', 'macbooks', 'airpods', 'animals'].includes(
        category.toLowerCase()
      )
    ) {
      res.status(404).send('That category does not exist')
      return
    }
    res.json(products)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Could not get products by category' })
  }
})

export default router
