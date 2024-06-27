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
            <h5 className="text-center text-2xl font-semibold leading-2 text-stone-800 mb-5">Our Partners</h5>
            <div className='container inline-flex flex-nowrap overflow-hidden  px-4 lg:px-0'>
                <ul ref={logosRef} className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                <li>
                    <img className='h-8 w-auto object-contain' src="images/companies/merobachat.png" alt="merobachat" />
                </li>
                <li>
                    <img className='h-8 w-auto object-contain' src="images/companies/eacademy.png" alt="eacademy" />
                </li>
                <li>
                    <img className='h-8 w-auto object-contain' src="images/companies/meroclassroom-logo.png" alt="meroclassroom" />
                </li>
                <li>
                    <img className='h-8 w-auto object-contain' src="images/companies/sms-sarara.png" alt="sms-sarara" />
                </li>
                <li>
                    <img className='h-8 w-auto object-contain' src="images/companies/lekhankan.png" alt="lekhankan" />
                </li>
                <li>
                    <img className='h-8 w-auto object-contain' src="images/companies/basisthan.png" alt="basisthan" />
                </li>
               
                </ul>
            </div>
      </div>
    );
}

export default CompanySlider;