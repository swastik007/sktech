import React, { useEffect, useRef } from 'react';
const CompanySlider = () => {
    const logosRef = useRef(null);

    useEffect(() => {
      const ul = logosRef.current;
      if (ul) {
        const clonedUl = ul.cloneNode(true);
        clonedUl.setAttribute('aria-hidden', 'true');
        ul.parentNode.appendChild(clonedUl);
      }
    }, []);
  
    return (
        <div className="w-full  bg-gradient-to-r from-gray-100 to-stone-100 mx-auto flex justify-center py-24 flex-col">
            <h5 className="text-center text-xl font-semibold leading-2 text-stone-800">Our Partners</h5>
            <div className='container inline-flex flex-nowrap overflow-hidden'>
                <ul ref={logosRef} className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                <li>
                    <img src="images/facebook.svg" alt="Facebook" />
                </li>
                <li>
                    <img src="images/disney.svg" alt="Disney" />
                </li>
                <li>
                    <img src="images/airbnb.svg" alt="Airbnb" />
                </li>
                <li>
                    <img src="images/apple.svg" alt="Apple" />
                </li>
                <li>
                    <img src="images/spark.svg" alt="Spark" />
                </li>
                <li>
                    <img src="images/samsung.svg" alt="Samsung" />
                </li>
                <li>
                    <img src="images/quora.svg" alt="Quora" />
                </li>
                <li>
                    <img src="images/sass.svg" alt="Sass" />
                </li>
                </ul>
            </div>
      </div>
    );
}

export default CompanySlider;