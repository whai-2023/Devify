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
            { name: 'Iphones', link: '/iphones' },
            { name: 'Macbooks', link: '/macbooks' },
            { name: 'Ipads', link: '/ipads' },
            { name: 'Airpods', link: '/airpods' },
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
        <div className="h-full" key={links.name}>
          <div className="px-5 md:cursor-pointer group hover:text-primary h-full flex justify-center">
            <h1 className="py-4 my-auto">{links.name}</h1>
            {links.submenu && (
              <div className="w-full absolute top-20 left-0 hidden group-hover:md:block">
                <div className="bg-white flex border-2 border-t-slate-800 justify-center">
                  {links.sublinks.map((mysublinks) => (
                    <div key={mysublinks.Head} className="">
                      <h1 className="text-base ml-24 pt-10 pb-4">
                        {mysublinks.Head}
                      </h1>
                      {mysublinks.sublink.map((slink) => (
                        <li
                          key={slink.name}
                          className="text-2xl text-gray-600 ml-24 py-2"
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
