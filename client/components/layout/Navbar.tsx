import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NavLinks from './NavLinks'
import { useShoppingCart } from '../../context/ShoppingCartContext'
import { IonIcon } from '@ionic/react'

export default function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart()
  return (
    <>
      <nav className="bg-border-stone-100">
        <div className="flex items-center font-medium justify-between ml-2">
          <div>
            <Link to="/" className="text-black">
              <h1 className="md:cursor-pointer font-bold absolute top-7 px-8 tracking-widest antialiased text-4xl">
                DEVIFY
              </h1>
            </Link>
          </div>
          <div>
            <ul className="md:flex hidden uppercase items-center gap-10">
              <NavLinks />
            </ul>
          </div>
          <div className="md:cursor-pointer justify-end flex items-center gap-5">
            <IonIcon name="search-outline"></IonIcon>

            <IonIcon name="person-outline"></IonIcon>

            <IonIcon name="cart-outline" onClick={openCart}></IonIcon>
            <div className="rounded-full text-xs bg-black flex justify-center items-center text-white w-4 h-4 absolute bottom-20 right-0 transform translate-x-1/4 translate-y-1/4">
              {cartQuantity}
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
