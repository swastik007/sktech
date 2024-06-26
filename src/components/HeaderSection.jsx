import React, { useState, useEffect } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const nav = document.getElementById('nav');
    const navMobileBtn = document.getElementById('nav-mobile-btn');

    const handleNavToggle = () => {
      setIsOpen(!isOpen);
    };

    const handleDocumentClick = (event) => {
      if (isOpen && !nav.contains(event.target) && !navMobileBtn.contains(event.target)) {
        setIsOpen(false);
      }
    };

    navMobileBtn.addEventListener('click', handleNavToggle);
    document.addEventListener('click', handleDocumentClick);

    // Clean up event listeners on component unmount
    return () => {
      navMobileBtn.removeEventListener('click', handleNavToggle);
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [isOpen]);


  return (
    <>
     <>
  {/* Header Section */}
  <header className="relative z-50 w-full h-24">
    <div className="container flex items-center justify-center h-full max-w-6xl px-8 mx-auto sm:justify-between xl:px-0">
      <a
        href="/"
        className="relative flex items-center inline-block h-5 h-full font-black leading-none max-w-sm"
      >
        
        <img
              src="images/logo.png"
              className="h-6 object-contain"
              alt="Logo"
            />  
        <span className="ml-3 text-xl text-gray-800">
          Sahakarya Tech<span className="text-pink-500">.</span>
        </span>
      </a>
      <nav
        id="nav"
        className="absolute top-0 left-0 z-50 flex flex-col items-center justify-between hidden w-full h-64 pt-5 mt-24 text-sm text-gray-800 bg-white border-t border-gray-200 md:w-auto md:flex-row md:h-24 lg:text-base md:bg-transparent md:mt-0 md:border-none md:py-0 md:flex md:relative"
      >
        <a
          href="#"
          className="ml-0 mr-0 font-bold duration-100 md:ml-12 md:mr-3 lg:mr-8 transition-color hover:text-green-600"
        >
          Home
        </a>
        <a
          href="#features"
          className="mr-0 font-bold duration-100 md:mr-3 lg:mr-8 transition-color hover:text-green-600"
        >
          Features
        </a>
        <a
          href="#pricing"
          className="mr-0 font-bold duration-100 md:mr-3 lg:mr-8 transition-color hover:text-green-600"
        >
          Pricing
        </a>
        <a
          href="#testimonials"
          className="font-bold duration-100 transition-color hover:text-green-600"
        >
          Testimonials
        </a>
        <div className="flex flex-col block w-full font-medium border-t border-gray-200 md:hidden">
          <a
            href="#_"
            className="w-full py-2 font-bold text-center text-pink-500"
          >
            Login
          </a>
          <a
            href="#_"
            className="relative inline-block w-full px-5 py-3 text-sm leading-none text-center text-white bg-black fold-bold w-auto h-fit"
          >
            Get Started
          </a>
        </div>
      </nav>
      <div className="absolute left-0 flex-col items-center justify-center hidden w-full pb-8 mt-48 border-b border-gray-200 md:relative md:w-auto md:border-none md:mt-0 md:flex-row md:p-0 md:items-end md:flex md:justify-between bg-white text-green-700">
        <a
          href="#_"
          className="relative z-40 px-3 py-2 mr-0 text-sm font-bold md:px-5 bg-white text-green-700 sm:mr-3 md:mt-0 hover:bg-black hover:text-white"
        >
          Login
        </a>
        <a
          href="#_"
          className="relative z-40 inline-block w-auto h-full px-5 py-3 text-sm font-bold leading-none text-white transition-all transition duration-100 duration-300 bg-green-600 rounded shadow-md fold-bold  sm:w-full lg:shadow-none hover:shadow-xl"
        >
          Get Started
        </a>
        <svg
          className="absolute top-0 left-0 hidden w-screen max-w-3xl -mt-64 -ml-12 lg:block"
          viewBox="0 0 818 815"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="c">
              <stop stopColor="#F2F2F2" offset="0%" />
              <stop stopColor="#FFFFBF" offset="100%" />
            </linearGradient>
            <linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="f">
              <stop stopColor="#F1F1F1" offset="0%" />
              <stop stopColor="#FFFFF1" offset="100%" />
            </linearGradient>
            <filter
              x="-4.7%"
              y="-3.3%"
              width="109.3%"
              height="109.3%"
              filterUnits="objectBoundingBox"
              id="a"
            >
              <feOffset dy={8} in="SourceAlpha" result="shadowOffsetOuter1" />
              <feGaussianBlur
                stdDeviation={8}
                in="shadowOffsetOuter1"
                result="shadowBlurOuter1"
              />
              <feColorMatrix
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                in="shadowBlurOuter1"
              />
            </filter>
            <filter
              x="-4.7%"
              y="-3.3%"
              width="109.3%"
              height="109.3%"
              filterUnits="objectBoundingBox"
              id="d"
            >
              <feOffset dy={8} in="SourceAlpha" result="shadowOffsetOuter1" />
              <feGaussianBlur
                stdDeviation={8}
                in="shadowOffsetOuter1"
                result="shadowBlurOuter1"
              />
              <feColorMatrix
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                in="shadowBlurOuter1"
              />
            </filter>
            <path
              d="M160.52 108.243h497.445c17.83 0 24.296 1.856 30.814 5.342 6.519 3.486 11.635 8.602 15.12 15.12 3.487 6.52 5.344 12.985 5.344 30.815v497.445c0 17.83-1.857 24.296-5.343 30.814-3.486 6.519-8.602 11.635-15.12 15.12-6.52 3.487-12.985 5.344-30.815 5.344H160.52c-17.83 0-24.296-1.857-30.814-5.343-6.519-3.486-11.635-8.602-15.12-15.12-3.487-6.52-5.343-12.985-5.343-30.815V159.52c0-17.83 1.856-24.296 5.342-30.814 3.486-6.519 8.602-11.635 15.12-15.12 6.52-3.487 12.985-5.343 30.815-5.343z"
              id="b"
            />
            <path
              d="M159.107 107.829H656.55c17.83 0 24.296 1.856 30.815 5.342 6.518 3.487 11.634 8.602 15.12 15.12 3.486 6.52 5.343 12.985 5.343 30.816V656.55c0 17.83-1.857 24.296-5.343 30.815-3.486 6.518-8.602 11.634-15.12 15.12-6.519 3.486-12.985 5.343-30.815 5.343H159.107c-17.83 0-24.297-1.857-30.815-5.343-6.519-3.486-11.634-8.602-15.12-15.12-3.487-6.519-5.343-12.985-5.343-30.815V159.107c0-17.83 1.856-24.297 5.342-30.815 3.487-6.519 8.602-11.634 15.12-15.12 6.52-3.487 12.985-5.343 30.816-5.343z"
              id="e"
            />
          </defs>
          <g fill="none" fillRule="evenodd" opacity=".9">
            <g transform="rotate(65 416.452 409.167)">
              <use fill="#000" filter="url(#a)" xlinkHref="#b" />
              <use fill="url(#c)" xlinkHref="#b" />
            </g>
            <g transform="rotate(29 421.929 414.496)">
              <use fill="#000" filter="url(#d)" xlinkHref="#e" />
              <use fill="url(#f)" xlinkHref="#e" />
            </g>
          </g>
        </svg>
      </div>
      <div
        id="nav-mobile-btn"
        className="absolute top-0 right-0 z-50 block w-6 mt-8 mr-10 cursor-pointer select-none md:hidden sm:mt-10"
      >
        <span className="block w-full h-1 mt-2 duration-200 transform bg-gray-800 rounded-full sm:mt-1" />
        <span className="block w-full h-1 mt-1 duration-200 transform bg-gray-800 rounded-full" />
      </div>
    </div>
  </header>
  {/* End Header Section*/}
</>

    <section className="hidden sticky z-50 bg-gray-100/90 top-0">
         <div className="container max-w-screen-2xl mx-auto ">
      
      <nav className="flex items-center justify-between flex-wrap p-6">
      <div className="flex items-center flex-shrink-0 text-stone-800 mr-6 lg:mr-72">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="images/logo.png"
              className="w-60 h-6 object-contain"
              alt="Logo"
            />
           
          </a>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        >
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full block lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}
      >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
            <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
        </li>
        <li>
            <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
        </li>
        <li>
            <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
        </li>
        <li>
            <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
        </li>
        </ul>
        <div className="flex space-x-2 mt-2 lg:mt-0">
          <a href="/registration"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Registration
          </a>
          <a href=""
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Login
            </a>
        </div>
      </div>
      </nav>

          </div>
    </section>
    </>
   
   
  );
};

export default Header;

