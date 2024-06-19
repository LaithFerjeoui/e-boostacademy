import { Disclosure } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../../public/logo.png";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import { useState } from "react";
import { Link } from "react-router-dom";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  // State to manage active button
  const [activeButton, setActiveButton] = useState("home"); // Initialize with your default active button

  // Function to handle click on navigation buttons
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    // You can also perform other actions here, like navigating to a different route
  };
  return (
    <Disclosure as="nav" className="bg-white shadow sticky top-0 z-40">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 shadow-sm">
            <div className="flex h-16 justify-between">
              <div className="hidden sm:ml-6 sm:flex sm:items-center sm:gap-3">
                <SecondaryButton text={"تسجيل الدّخول"} />
                <PrimaryButton text={"اشترك الآن"} />
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex items-center gap-5 ">
                <div className="flex  h-16">
                  <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                    <Link
                      to="/points"
                      onClick={() => handleButtonClick("points")}
                      className={classNames(
                        "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium",
                        activeButton === "points"
                          ? "border-indigo-500 text-gray-900"
                          : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                      )}
                    >
                      أساتذتنا
                    </Link>
                    <Link
                      to="/offers"
                      onClick={() => handleButtonClick("offers")} // Example: Handle click for offers button
                      className={classNames(
                        "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium",
                        activeButton === "offers"
                          ? "border-indigo-500 text-gray-900"
                          : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                      )}
                    >
                      عروضنا
                    </Link>
                    <Link
                      to="/about"
                      onClick={() => handleButtonClick("about")} // Example: Handle click for home button
                      className={classNames(
                        "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium",
                        activeButton === "about"
                          ? "border-indigo-500 text-gray-900"
                          : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                      )}
                    >
                      من نحن
                    </Link>
                    <Link
                      to="/"
                      onClick={() => handleButtonClick("home")} // Example: Handle click for home button
                      className={classNames(
                        "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium",
                        activeButton === "home"
                          ? "border-indigo-500 text-gray-900"
                          : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                      )}
                    >
                      الرئيسية
                    </Link>
                  </div>
                </div>
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src={logo}
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-12 w-auto lg:block"
                    src={logo}
                    alt="e-boostacademy"
                  />
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-3 pt-2">
              <Disclosure.Button
                as="a"
                href="/"
                onClick={() => handleButtonClick("home")}
                className={classNames(
                  "text-right block border-l-4 py-2 pl-3 pr-4 text-base font-medium",
                  activeButton === "home"
                    ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                )}
              >
                الرئيسية
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/about"
                onClick={() => handleButtonClick("about")}
                className={classNames(
                  "text-right block border-l-4 py-2 pl-3 pr-4 text-base font-medium",
                  activeButton === "home"
                    ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                )}
              >
                الرئيسية
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/offers"
                onClick={() => handleButtonClick("offers")}
                className={classNames(
                  "text-right block border-l-4 py-2 pl-3 pr-4 text-base font-medium",
                  activeButton === "offers"
                    ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                )}
              >
                عروضنا
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/points"
                onClick={() => handleButtonClick("points")}
                className={classNames(
                  "text-right block border-l-4 py-2 pl-3 pr-4 text-base font-medium",
                  activeButton === "points"
                    ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                )}
              >
                أساتذتنا
              </Disclosure.Button>
            </div>
            <div className="border-t border-gray-200 pb-3 pt-4">
              <div className="flex items-center justify-center px-4">
                <SecondaryButton text={"تسجيل الدّخول"} />
                <PrimaryButton text={"اشترك الآن"} />
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
