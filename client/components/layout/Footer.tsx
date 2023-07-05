import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-white font-sans">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link to="/" className="flex items-center mb-4 sm:mb-0">
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              DEVIFY
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li className="mr-4 hover:underline md:mr-6">
              <Link to="https://github.com/jiho-burgesskim">
                Jiho
                <img
                  src="/assets/github.svg"
                  alt="github"
                  className="inline-block ml-2"
                />
              </Link>
            </li>
            <li className="mr-4 hover:underline md:mr-6 ">
              James
              <Link to="https://github.com/James-Idiens">
                <img
                  src="/assets/github.svg"
                  alt="github"
                  className="inline-block ml-2"
                />
              </Link>
            </li>
            <li className="hover:underline">
              <Link to="https://github.com/WillChu1733">
                William
                <img
                  src="/assets/github.svg"
                  alt="github"
                  className="inline-block ml-2"
                />
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{' '}
          <Link to="/" className="hover:underline">
            Devify™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}
