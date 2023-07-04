import { Outlet } from 'react-router-dom'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import { ShoppingCartProvider } from '../context/ShoppingCartContext'

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <div></div>
        <header>
          <Navbar />
        </header>
        <Outlet />
        <Footer />
      </ShoppingCartProvider>
    </>
  )
}

export default App
