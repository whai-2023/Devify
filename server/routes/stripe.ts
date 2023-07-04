import { Router } from 'express'
const router = Router()
import * as dotenv from 'dotenv'
dotenv.config()
const stripe = require('stripe')(process.env.STRIPE_KEY)
import { getProductsById } from '../db/functions/products'

interface CartItem {
  id: number
  quantity: number
}

router.post('/create-checkout-session', async (req, res) => {
  const cartItems: CartItem[] = req.body.cartItems

  const line_items = await Promise.all(
    cartItems.map(async (item: CartItem) => {
      const product = await getProductsById(item.id)
      const unitAmount = product ? product.price : 0
      const name = product ? product.name : ''
      const imageUrl = product ? `http://localhost:5173${product.imageUrl}` : ''

      return {
        price_data: {
          currency: 'nzd',
          product_data: {
            name: name,
            images: [imageUrl],
          },
          unit_amount: unitAmount * 100,
        },
        quantity: item.quantity,
      }
    })
  )

  const session = await stripe.checkout.sessions.create({
    shipping_address_collection: {
      allowed_countries: ['NZ', 'AU'],
    },
    shipping_options: [
      {
        shipping_rate_data: {
          type: 'fixed_amount',
          fixed_amount: {
            amount: 0,
            currency: 'nzd',
          },
          display_name: 'Free shipping',
          delivery_estimate: {
            minimum: {
              unit: 'business_day',
              value: 5,
            },
            maximum: {
              unit: 'business_day',
              value: 7,
            },
          },
        },
      },
      {
        shipping_rate_data: {
          type: 'fixed_amount',
          fixed_amount: {
            amount: 1500,
            currency: 'nzd',
          },
          display_name: 'Next day air',
          delivery_estimate: {
            minimum: {
              unit: 'business_day',
              value: 1,
            },
            maximum: {
              unit: 'business_day',
              value: 1,
            },
          },
        },
      },
    ],
    phone_number_collection: {
      enabled: true,
    },
    line_items,
    mode: 'payment',
    success_url: `http://localhost:5173/api/v1/checkout-success`,
    cancel_url: `http://localhost:5173/api/v1/checkout-failure`,
  })

  res.send({ url: session.url })
})

router.get('/checkout-success', async (req, res) => {})

router.get('/checkout-failure', async (req, res) => {})
export default router
