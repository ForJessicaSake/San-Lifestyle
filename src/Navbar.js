import React, { useState } from "react";
import { Transition } from "@headlessui/react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="text-ash">
        <div className="lg:ml-12 ml-6 mr-12">
          <div className="flex items-center justify-between h-16">
            <div className="flex justify-between w-screen">
            <h2 className="text-xl text-center text-gray"><span className="font-bold text-black">SAN</span> LIFESTYLE.</h2>
              <div className="flex-shrink-0">
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-b space-x-4">
                  <ul className="nav-links flex justify-between w-80 font-medium xxs:absolute xxm:absolute xms:absolute">
                    <li>
                      <a href="/" className="border-b-2 border-green">
                        Home
                      </a>
                    </li>
                    <li>
                    <a href="/signin">Sign In</a>
                  </li>

                  <li>
                    <a href="/signup">Sign Up</a>
                  </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-black inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div
                ref={ref}
                className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black h-screen text-white"
              >
                <ul className="nav-links flex flex-col items-center justify-between h-80 mt-10 font-medium ">
                  <li>
                    <a href="/" className="border-b-2 border-green ">
                      Home
                    </a>
                  </li>

                  <li>
                    <a href="/signin">Sign In</a>
                  </li>

                  <li>
                    <a href="/signup">Sign Up</a>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;