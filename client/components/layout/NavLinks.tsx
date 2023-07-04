import React from 'react'
import { Link } from 'react-router-dom'
import NavbarProduct from './Navbar-Product'

export default function NavLink() {
  const links = [
    {
      name: 'Shop',
      submenu: true,
      sublinks: [
        {
          Head: 'Collection',
          sublink: [
            { name: 'Iphone', link: '/phones' },
            { name: 'Macbook', link: '/laptops' },
            { name: 'Ipad', link: '/tablets' },
            { name: 'Airpods', link: '/earphones' },
            { name: 'Animals', link: '/animals' },
          ],
        },
      ],
    },
    { name: 'About Us' },
    { name: 'Contact' },
  ]
  return (
    <>
      {links.map((links) => (
        <div key={links.name}>
          <div className="px-5 md:cursor-pointer group ml-20 hover:text-primary ">
            <h1 className="py-2">{links.name}</h1>
            {links.submenu && (
              <div className="w-full absolute top-20 left-0 hidden group-hover:md:block">
                <div className="bg-white px-52 py-30 pt-4 flex border-2 border-t-slate-800 translate-y-2">
                  {links.sublinks.map((mysublinks) => (
                    <div key={mysublinks.Head}>
                      <h1 className="text-base ml-24 pt-10 pb-4">
                        {mysublinks.Head}
                      </h1>
                      {mysublinks.sublink.map((slink) => (
                        <li
                          key={slink.name}
                          className="text-3xl text-gray-600 my2.5 ml-24 py-5"
                        >
                          <Link to={slink.link} className="hover:text-primary">
                            {slink.name}
                          </Link>
                        </li>
                      ))}
                    </div>
                  ))}
                  <NavbarProduct />
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  )
}
