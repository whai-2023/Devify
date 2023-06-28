import { createRoutesFromElements, Route } from 'react-router-dom'
import App from './components/App'
import Home from './Pages/Home'

export const routes = createRoutesFromElements(
  <>
    <Route element={<App />}>
      <Route index element={<Home />} />
      {/* <Route path="products" element={<Products />} />
      <Route path="products/:id" element={<ProductDetail />} />
      <Route path="cart" element={<Cart />} />
      <Route path="checkout" element={<Checkout />} /> */}
    </Route>
    {/* <Route path="*" element={<NotFound />} /> */}
  </>
)
