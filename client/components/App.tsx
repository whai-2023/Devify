import { Outlet } from 'react-router-dom'
import Navbar from './layout/Navbar'

function App() {
  return (
    <>
      <header>
        <h1 className="text-3xl font-bold underline bg-blue-300">
          <Navbar />
        </h1>
      </header>

      <Outlet />
    </>
  )
}

export default App
