import { Outlet } from 'react-router-dom'
import Navbar from './layout/Navbar'
import ProductDisplay from './layout/Product-Display'

function App() {
  return (
    <>
      <header>
        <h1 className="text-3xl font-bold underline bg-blue-300">
          <Navbar />
        </h1>
      </header>

      <Outlet />
      <ProductDisplay />
    </>
  )
}

export default App
