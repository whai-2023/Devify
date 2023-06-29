import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NavLinks from './NavLinks'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <nav className="bg-border-stone-100">
        <div className="flex items-center font-medium justify-between">
          <div>
            <h1 className="md:cursor-pointer font-bold absolute top-7 left-10 tracking-widest antialiased text-4xl">
              DEVIFY
            </h1>
          </div>
          <div>
            <ul className="md:flex hidden uppercase items-center gap-10">
              <li>
                <Link to="/" className="py-7 px-3 inline-block">
                  DEVIFY
                </Link>
              </li>
              <NavLinks />
            </ul>
          </div>
          <div className="md:cursor-pointer justify-end flex items-center gap-5">
            <ion-icon name="search-outline"></ion-icon>

            <ion-icon name="person-outline"></ion-icon>

            <ion-icon name="cart-outline"></ion-icon>
          </div>
        </div>
      </nav>
    </>
  )
}
