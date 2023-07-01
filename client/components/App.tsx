import { Outlet } from 'react-router-dom'
import Navbar from './layout/Navbar'
import ProductDisplay from './layout/Product-Display'
import Footer from './layout/Footer'

function App() {
  return (
    <>
      <header className="z-40 fixed top-0 w-full bg-white">
        <h1 className="text-3xl font-bold underline border-stone-100">
          <Navbar />
        </h1>
      </header>

      <Outlet />
      <Footer />
    </>
  )
}

export default App
