import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NavLinks from './NavLinks'
import { useShoppingCart } from '../../context/ShoppingCartContext'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { openCart, cartQuantity } = useShoppingCart()
  return (
    <>
      <nav className="bg-border-stone-100">
        <div className="flex items-center font-medium justify-between ml-2">
          <div>
            <h1 className="md:cursor-pointer font-bold absolute top-7 px-8 tracking-widest antialiased text-4xl">
              DEVIFY
            </h1>
          </div>
          <div>
            <ul className="md:flex hidden uppercase items-center gap-10">
              <NavLinks />
            </ul>
          </div>
          <div className="md:cursor-pointer justify-end flex items-center gap-5">
            <ion-icon name="search-outline"></ion-icon>

            <ion-icon name="person-outline"></ion-icon>

            <ion-icon name="cart-outline"></ion-icon>
            <button className="relative" onClick={openCart}>
              Hi
            </button>
            <div className="rounded bg-red flex justify-center  bottom-3 opacity-70">
              {cartQuantity}
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
