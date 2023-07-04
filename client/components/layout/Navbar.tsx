import { Link } from 'react-router-dom'
import NavLinks from './NavLinks'
import { useShoppingCart } from '../../context/ShoppingCartContext'
import { IonIcon } from '@ionic/react'

export default function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart()
  return (
    <>
      <nav>
        <div className="z-40 flex fixed font-medium items-center justify-evenly w-full bg-white h-20">
          <div>
            <Link to="/" className="text-black">
              <h1 className="md:cursor-pointer font-bold px-8 tracking-widest antialiased text-4xl">
                DEVIFY
              </h1>
            </Link>
          </div>
          <div className="h-full align-middle">
            <ul className="md:flex hidden uppercase items-center h-full">
              <NavLinks />
            </ul>
          </div>
          <div className="md:cursor-pointer justify-end flex items-center gap-4">
            <IonIcon className="text-2xl" name="search-outline"></IonIcon>

            <IonIcon className="text-2xl" name="person-outline"></IonIcon>

            <IonIcon
              className="text-2xl"
              name="cart-outline"
              onClick={openCart}
            ></IonIcon>
            <button
              onClick={openCart}
              className="rounded-full text-xs bg-black flex justify-center items-center text-white w-4 h-4 absolute bottom-33 right-30 transform translate-x-1/4 translate-y-1/4"
            >
              {cartQuantity}
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}
