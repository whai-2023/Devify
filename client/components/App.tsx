import { Outlet } from 'react-router-dom'
import Navbar from './layout/Navbar'
import ProductDisplay from './layout/Product-Display'

function App() {
  return (
    <>
      <header>
        <h1 className="text-3xl font-bold underline border-stone-100">
          <Navbar />
        </h1>
      </header>

      <Outlet />
      <ProductDisplay />
    </>
  )
}

export default App
