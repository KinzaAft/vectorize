import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-900 pt-12 pb-6 px-10 tracking-wide">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:flex lg:items-center">
            <span className="text-white text-[35px] font-semibold">Vectorize</span>
          </div>

          <div className="lg:flex lg:items-center">
            <ul className="flex space-x-6">
              <li>
                <a href="javascript:void(0)">
                  <svg xmlns="http://www.w3.org/2000/svg" className="fill-gray-300 hover:fill-white w-7 h-7" viewBox="0 0 24 24">
                    <path fillRule="evenodd"
                      d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7v-7h-2v-3h2V8.5A3.5 3.5 0 0 1 15.5 5H18v3h-2a1 1 0 0 0-1 1v2h3v3h-3v7h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"
                      clipRule="evenodd" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <svg xmlns="http://www.w3.org/2000/svg" className="fill-gray-300 hover:fill-white w-7 h-7" viewBox="0 0 24 24">
                    <path fillRule="evenodd"
                      d="M21 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5zm-2.5 8.2v5.3h-2.79v-4.93a1.4 1.4 0 0 0-1.4-1.4c-.77 0-1.39.63-1.39 1.4v4.93h-2.79v-8.37h2.79v1.11c.48-.78 1.47-1.3 2.32-1.3 1.8 0 3.26 1.46 3.26 3.26zM6.88 8.56a1.686 1.686 0 0 0 0-3.37 1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 1.57v8.37H5.5v-8.37h2.77z"
                      clipRule="evenodd" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-am mb-6 text-white">Useful links</h4>
            <ul className="space-y-4 pl-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white text-sm">Image Vectorize</a>
              </li>
              <li>
                <a href="/contactUs" className="text-gray-400 hover:text-white text-sm">Contact Us</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-am mb-6 text-white">Information</h4>
            <ul className="space-y-4 pl-2">
              <li>
                <a href="/about" className="text-gray-400 hover:text-white text-sm">About Us</a>
              </li>
              <li>
                <a href="javascript:void(0)" className="text-gray-400 hover:text-white text-sm">Terms &amp; Conditions</a>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-gray-400 text-sm mt-10">© Vectorize. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;
