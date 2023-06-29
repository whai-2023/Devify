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
          <div>
            <h1>{links.name}</h1>
            {links.submenu && (
              <div>
                <div>
                  <div>
                    {links.sublinks.map((mysublinks) => (
                      <div key={mysublinks.Head}>
                        <h1 className="text-lg font-semibold">
                          {mysublinks.Head}
                        </h1>
                        {mysublinks.sublink.map((slink) => (
                          <li key={slink.name}>
                            <Link to={slink.link}>{slink.name}</Link>
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
