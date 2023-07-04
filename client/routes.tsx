import { createRoutesFromElements, Route } from 'react-router-dom'
import App from './components/App'
import Home from './Pages/Home'
import CategoryPage from './Pages/Category-Page'
import SinglePage from './Pages/Single-Product-Page'

export const routes = createRoutesFromElements(
  <>
    <Route element={<App />}>
      <Route index element={<Home />} />
      <Route path="/:category" element={<CategoryPage />} />
      <Route path="/:category/:id" element={<SinglePage />} />
    </Route>
  </>
)
