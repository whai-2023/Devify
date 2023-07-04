import { Outlet } from 'react-router-dom'
import Navbar from './layout/Navbar'
import ProductDisplay from './layout/Product-Display'
import Footer from './layout/Footer'
import { ShoppingCartProvider } from '../context/ShoppingCartContext'

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <header className="z-40 fixed top-0 w-full bg-white">
          <h1 className=" font-bold underline border-stone-100">
            <Navbar />
          </h1>
        </header>

        <Outlet />
        <Footer />
      </ShoppingCartProvider>
    </>
  )
}

export default App
