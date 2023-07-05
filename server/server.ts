import express from 'express'
import path from 'path'
import productsRoutes from './routes/products'
import stripe from './routes/stripe'

const server = express()

server.use(express.json())
server.use('/api/v1', stripe)
server.use('/api/v1/products', productsRoutes)

if (process.env.NODE_ENV === 'production') {
  server.use('/assets', express.static(path.resolve(__dirname, '../assets')))
  server.use('/', express.static(path.resolve(__dirname, '../../public')))

  server.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../index.html'))
  })
}

export default server
