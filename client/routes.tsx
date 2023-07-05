import { createRoutesFromElements, Route } from 'react-router-dom'
import App from './components/App'
import Home from './Pages/Home'
import CategoryPage from './Pages/Category-Page'
import SinglePage from './Pages/Single-Product-Page'
import CheckoutSuccess from './Pages/Checkout-Success'
import CheckoutFailure from './Pages/Checkout-failure'

export const routes = createRoutesFromElements(
  <>
    <Route element={<App />}>
      <Route index element={<Home />} />
      <Route path="/:category" element={<CategoryPage />} />
      <Route path="/:category/:id" element={<SinglePage />} />
      <Route path="/checkout-success" element={<CheckoutSuccess />} />
      <Route path="/checkout-failure" element={<CheckoutFailure />} />
    </Route>
  </>
)
