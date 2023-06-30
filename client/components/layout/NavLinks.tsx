import React from 'react'
import { Link } from 'react-router-dom'

export default function NavLink() {
  const links = [
    {
      name: 'Shop',
      submenu: true,
      sublinks: [
        {
          Head: 'Collection',
          sublink: [
            { name: 'Iphone', link: '/' },
            { name: 'Macbook', link: '/' },
            { name: 'Ipad', link: '/' },
            { name: 'Airpods', link: '/' },
            { name: 'Cream', link: '/' },
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
          <div className="px-3 text-left md:cursor-pointer group">
            <h1 className="py-7">{links.name}</h1>
            {links.submenu && (
              <div>
                <div className="w-full absolute top-20 left-0 hidden group-hover:md:block hover:md:block  ">
                  <div className="py-4">
                    <div className="w-4 h-4 left-3 absolute mt-1 bg-black rotate-45"></div>
                  </div>
                  <div className="bg-white px-52 pt-5 grid grid-cols-3 gap-10 border-2 border-t-slate-800">
                    {links.sublinks.map((mysublinks) => (
                      <div key={mysublinks.Head}>
                        <h1 className="text-2xl font-semibold">
                          {mysublinks.Head}
                        </h1>
                        {mysublinks.sublink.map((slink) => (
                          <li
                            key={slink.name}
                            className="text-lg text-gray-600 my2.5"
                          >
                            <Link
                              to={slink.link}
                              className="hover:text-primary"
                            >
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  )
}
