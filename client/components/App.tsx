import { Outlet } from 'react-router-dom'
import ProductDisplay from './layout/Product-Display'

function App() {
  return (
    <>
      <header>
        <h1 className="text-3xl font-bold underline bg-blue-300">
          My Collection
        </h1>
      </header>
      <p className="bg-blue-300">Is it working</p>
      <Outlet />
    </>
  )
}

export default App
