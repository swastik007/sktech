

import React, { useState } from 'react';


// const HeroSection = () => {
//     return(
//         <section
//         id="home"
//         className="bg-gradient-to-b from-emerald-50 from-1% via-green-50 via-90% to-green-100 relative z-10 pt-[120px] pb-[110px] md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
      
//       >
//         <div className="container mx-auto">
//           <div className="flex flex-wrap mx-[-16px]">
//             <div className="w-full px-4">
//               <div
//                 className="mx-auto max-w-[570px] text-center"
                
//               >
//                 <div className="flex flex-wrap items-center justify-center gap-6 xl:justify-start">
                        
//                                 <div className="flex items-center gap-x-2 text-gray-500 text-sm">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
//                     <path fillRule="evenodd" d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
//                 </svg>
//                 400 ratings
//                                 </div>
//                                 <div className="flex items-center gap-x-2 text-gray-500 text-sm">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
//                     <path fillRule="evenodd" d="M1 4.75C1 3.784 1.784 3 2.75 3h14.5c.966 0 1.75.784 1.75 1.75v10.515a1.75 1.75 0 01-1.75 1.75h-1.5c-.078 0-.155-.005-.23-.015H4.48c-.075.01-.152.015-.23.015h-1.5A1.75 1.75 0 011 15.265V4.75zm16.5 7.385V11.01a.25.25 0 00-.25-.25h-1.5a.25.25 0 00-.25.25v1.125c0 .138.112.25.25.25h1.5a.25.25 0 00.25-.25zm0 2.005a.25.25 0 00-.25-.25h-1.5a.25.25 0 00-.25.25v1.125c0 .108.069.2.165.235h1.585a.25.25 0 00.25-.25v-1.11zm-15 1.11v-1.11a.25.25 0 01.25-.25h1.5a.25.25 0 01.25.25v1.125a.25.25 0 01-.164.235H2.75a.25.25 0 01-.25-.25zm2-4.24v1.125a.25.25 0 01-.25.25h-1.5a.25.25 0 01-.25-.25V11.01a.25.25 0 01.25-.25h1.5a.25.25 0 01.25.25zm13-2.005V7.88a.25.25 0 00-.25-.25h-1.5a.25.25 0 00-.25.25v1.125c0 .138.112.25.25.25h1.5a.25.25 0 00.25-.25zM4.25 7.63a.25.25 0 01.25.25v1.125a.25.25 0 01-.25.25h-1.5a.25.25 0 01-.25-.25V7.88a.25.25 0 01.25-.25h1.5zm0-3.13a.25.25 0 01.25.25v1.125a.25.25 0 01-.25.25h-1.5a.25.25 0 01-.25-.25V4.75a.25.25 0 01.25-.25h1.5zm11.5 1.625a.25.25 0 01-.25-.25V4.75a.25.25 0 01.25-.25h1.5a.25.25 0 01.25.25v1.125a.25.25 0 01-.25.25h-1.5zm-9 3.125a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z" clipRule="evenodd" />
//                 </svg>
//                 Trusted
//                                 </div>
//                                 <div className="flex items-center gap-x-2 text-gray-500 text-sm">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
//                     <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
//                 </svg>
//                 Trusted videos
//                                 </div>
                            
//                     </div>
//                 <h1 className="text-black font-bold text-3xl sm:text-4xl md:text-5xl leading-tight sm:leading-tight md:leading-tight mb-5">
//                   Startup Focused Tailwind CSS Template
//                 </h1>
//                 <p className="font-medium text-lg md:text-xl leading-relaxed md:leading-relaxed text-body-color  mb-12">
//                   A Complete Tailwind CSS Web Template Crafted for - Startup, SaaS,
//                   Business, Software and Agencies. Comes with high-quality design and
//                   everything you need!
//                 </p>
//                 <div className="flex items-center justify-center">
//                   <a
//                     href="#features"
//                     className="text-base font-semibold text-gray-800 bg-white py-4 px-8 hover:bg-opacity-80 mx-2 rounded-md transition duration-300 ease-in-out"
//                   >
//                     Get Started
//                   </a>
//                   <a
//                     href="#about"
//                     className="text-base font-semibold text-white bg-emerald-900 py-4 px-8 hover:bg-opacity-20 mx-2 rounded-md transition duration-300 ease-in-out"
//                   >
//                     Learn More
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
       

//         {/* <img src='images/banner0.png' className="w-full h-[500px] object-contain" alt="basisthan banner" /> */}
//         <div className="absolute top-0 right-0 z-[-1]">
//           <svg
//             width={450}
//             height={556}
//             viewBox="0 0 450 556"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <circle cx={277} cy={63} r={225} fill="url(#paint0_linear_25:217)" />
//             <circle cx="17.9997" cy={182} r={18} fill="url(#paint1_radial_25:217)" />
//             <circle cx="76.9997" cy={288} r={34} fill="url(#paint2_radial_25:217)" />
//             <circle
//               cx="325.486"
//               cy="302.87"
//               r={180}
//               transform="rotate(-37.6852 325.486 302.87)"
//               fill="url(#paint3_linear_25:217)"
//             />
//             <circle
//               opacity="0.8"
//               cx="184.521"
//               cy="315.521"
//               r="132.862"
//               transform="rotate(114.874 184.521 315.521)"
//               stroke="url(#paint4_linear_25:217)"
//             />
//             <circle
//               opacity="0.8"
//               cx={356}
//               cy={290}
//               r="179.5"
//               transform="rotate(-30 356 290)"
//               stroke="url(#paint5_linear_25:217)"
//             />
//             <circle
//               opacity="0.8"
//               cx="191.659"
//               cy="302.659"
//               r="133.362"
//               transform="rotate(133.319 191.659 302.659)"
//               fill="url(#paint6_linear_25:217)"
//             />
//             <defs>
//               <linearGradient
//                 id="paint0_linear_25:217"
//                 x1="-54.5003"
//                 y1={-178}
//                 x2={222}
//                 y2={288}
//                 gradientUnits="userSpaceOnUse"
//               >
//                 <stop stopColor="#4A6CF7" />
//                 <stop offset={1} stopColor="#4A6CF7" stopOpacity={0} />
//               </linearGradient>
//               <radialGradient
//                 id="paint1_radial_25:217"
//                 cx={0}
//                 cy={0}
//                 r={1}
//                 gradientUnits="userSpaceOnUse"
//                 gradientTransform="translate(17.9997 182) rotate(90) scale(18)"
//               >
//                 <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity={0} />
//                 <stop offset={1} stopColor="#4A6CF7" stopOpacity="0.08" />
//               </radialGradient>
//               <radialGradient
//                 id="paint2_radial_25:217"
//                 cx={0}
//                 cy={0}
//                 r={1}
//                 gradientUnits="userSpaceOnUse"
//                 gradientTransform="translate(76.9997 288) rotate(90) scale(34)"
//               >
//                 <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity={0} />
//                 <stop offset={1} stopColor="#4A6CF7" stopOpacity="0.08" />
//               </radialGradient>
//               <linearGradient
//                 id="paint3_linear_25:217"
//                 x1="226.775"
//                 y1="-66.1548"
//                 x2="292.157"
//                 y2="351.421"
//                 gradientUnits="userSpaceOnUse"
//               >
//                 <stop stopColor="#4A6CF7" />
//                 <stop offset={1} stopColor="#4A6CF7" stopOpacity={0} />
//               </linearGradient>
//               <linearGradient
//                 id="paint4_linear_25:217"
//                 x1="184.521"
//                 y1="182.159"
//                 x2="184.521"
//                 y2="448.882"
//                 gradientUnits="userSpaceOnUse"
//               >
//                 <stop stopColor="#4A6CF7" />
//                 <stop offset={1} stopColor="white" stopOpacity={0} />
//               </linearGradient>
//               <linearGradient
//                 id="paint5_linear_25:217"
//                 x1={356}
//                 y1={110}
//                 x2={356}
//                 y2={470}
//                 gradientUnits="userSpaceOnUse"
//               >
//                 <stop stopColor="#4A6CF7" />
//                 <stop offset={1} stopColor="white" stopOpacity={0} />
//               </linearGradient>
//               <linearGradient
//                 id="paint6_linear_25:217"
//                 x1="118.524"
//                 y1="29.2497"
//                 x2="166.965"
//                 y2="338.63"
//                 gradientUnits="userSpaceOnUse"
//               >
//                 <stop stopColor="#4A6CF7" />
//                 <stop offset={1} stopColor="#4A6CF7" stopOpacity={0} />
//               </linearGradient>
//             </defs>
//           </svg>
//         </div>
//         <div className="absolute bottom-0 left-0 z-[-1]">
//           <svg
//             width={364}
//             height={201}
//             viewBox="0 0 364 201"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
//               stroke="url(#paint0_linear_25:218)"
//             />
//             <path
//               d="M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24"
//               stroke="url(#paint1_linear_25:218)"
//             />
//             <path
//               d="M-53.1107 72.3303C-25.3401 66.4798 42.3965 64.9086 91.1783 105.427C152.155 156.076 170.59 162.093 205.333 166.607C240.076 171.12 278.718 183.657 303.889 212.24"
//               stroke="url(#paint2_linear_25:218)"
//             />
//             <path
//               d="M-98.1618 65.0889C-68.1416 60.0601 4.73364 60.4882 56.0734 102.431C120.248 154.86 139.905 161.419 177.137 166.956C214.37 172.493 255.575 186.165 281.856 215.481"
//               stroke="url(#paint3_linear_25:218)"
//             />
//             <circle
//               opacity="0.8"
//               cx="214.505"
//               cy="60.5054"
//               r="49.7205"
//               transform="rotate(-13.421 214.505 60.5054)"
//               stroke="url(#paint4_linear_25:218)"
//             />
//             <circle cx={220} cy={63} r={43} fill="url(#paint5_radial_25:218)" />
//             <defs>
//               <linearGradient
//                 id="paint0_linear_25:218"
//                 x1="184.389"
//                 y1="69.2405"
//                 x2="184.389"
//                 y2="212.24"
//                 gradientUnits="userSpaceOnUse"
//               >
//                 <stop stopColor="#4A6CF7" stopOpacity={0} />
//                 <stop offset={1} stopColor="#4A6CF7" />
//               </linearGradient>
//               <linearGradient
//                 id="paint1_linear_25:218"
//                 x1="156.389"
//                 y1="69.2405"
//                 x2="156.389"
//                 y2="212.24"
//                 gradientUnits="userSpaceOnUse"
//               >
//                 <stop stopColor="#4A6CF7" stopOpacity={0} />
//                 <stop offset={1} stopColor="#4A6CF7" />
//               </linearGradient>
//               <linearGradient
//                 id="paint2_linear_25:218"
//                 x1="125.389"
//                 y1="69.2405"
//                 x2="125.389"
//                 y2="212.24"
//                 gradientUnits="userSpaceOnUse"
//               >
//                 <stop stopColor="#4A6CF7" stopOpacity={0} />
//                 <stop offset={1} stopColor="#4A6CF7" />
//               </linearGradient>
//               <linearGradient
//                 id="paint3_linear_25:218"
//                 x1="93.8507"
//                 y1="67.2674"
//                 x2="89.9278"
//                 y2="210.214"
//                 gradientUnits="userSpaceOnUse"
//               >
//                 <stop stopColor="#4A6CF7" stopOpacity={0} />
//                 <stop offset={1} stopColor="#4A6CF7" />
//               </linearGradient>
//               <linearGradient
//                 id="paint4_linear_25:218"
//                 x1="214.505"
//                 y1="10.2849"
//                 x2="212.684"
//                 y2="99.5816"
//                 gradientUnits="userSpaceOnUse"
//               >
//                 <stop stopColor="#4A6CF7" />
//                 <stop offset={1} stopColor="#4A6CF7" stopOpacity={0} />
//               </linearGradient>
//               <radialGradient
//                 id="paint5_radial_25:218"
//                 cx={0}
//                 cy={0}
//                 r={1}
//                 gradientUnits="userSpaceOnUse"
//                 gradientTransform="translate(220 63) rotate(90) scale(43)"
//               >
//                 <stop offset="0.145833" stopColor="white" stopOpacity={0} />
//                 <stop offset={1} stopColor="white" stopOpacity="0.08" />
//               </radialGradient>
//             </defs>
//           </svg>
//         </div>
//         <div className="flex justify-center mt-10 absolute top-auto -bottom-[30rem] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
//             <img
//               className="object-cover w-full h-96 rounded-xl lg:w-4/5"
//               src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
//             />
//           </div>
//       </section>
      
//     );
// }

// export default HeroSection;

const HeroSection = () => {
  return (
      // <section>
      //     <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 md:px-8">
      //         <div className="space-y-5 max-w-4xl mx-auto text-center">
      //             <h1 className="text-sm text-indigo-600 font-medium">
      //                 Build products for everyone
      //             </h1>
      //             <h2 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">
      //                 Design your projects faster with  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">the largest figma UI kit</span>
      //             </h2>
      //             <p className="max-w-2xl mx-auto">
      //                 Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
      //             </p>
      //             <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
      //                 <a href="javascript:void(0)" className="block py-2 px-4 text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none">
      //                     Browse courses
      //                 </a>
      //                 <a href="javascript:void(0)" className="block py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg">
      //                     Get access
      //                 </a>
      //             </div>
      //         </div>
      //         <div className="mt-14">
      //             <img src="https://raw.githubusercontent.com/sidiDev/remote-assets/main/Safari%20(Big%20Sur)%20-%20Light.png" className="w-full shadow-lg rounded-lg border" alt="" />
      //         </div>
      //     </div>
      // </section>
      <>
  {/* component */}
  <section className="pt-24 bg-white">
  <div className='absolute inset-0 blur-xl h-[580px]' style={{ background: "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)" }}></div>
           
    <div className="px-12 mx-auto max-w-7xl">
      <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
        <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
          <span>Start</span>{" "}
          <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline">
            building a buzz
          </span>{" "}
          <span>around your product ?</span>
        </h1>
        <p className="px-0 mb-8 text-lg text-gray-600 md:text-xl lg:px-24">
          Start gaining the traction you've always wanted with our next-level
          templates and designs. Crafted to help you tell your story.
        </p>
        <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
          <a
            href="#_"
            className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-green-400 rounded-2xl sm:w-auto sm:mb-0"
          >
            Get Started
            <svg
              className="w-4 h-4 ml-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="#_"
            className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg bg-gray-100 rounded-2xl sm:w-auto sm:mb-0"
          >
            Learn More
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="w-full mx-auto mt-20 text-center md:w-10/12">
        <div className="relative z-0 w-full mt-8">
          <div className="relative overflow-hidden shadow-2xl">
            <div className="flex items-center flex-none px-4 bg-green-400 rounded-b-none h-11 rounded-xl">
              <div className="flex space-x-1.5">
                <div className="w-3 h-3 border-2 border-white rounded-full" />
                <div className="w-3 h-3 border-2 border-white rounded-full" />
                <div className="w-3 h-3 border-2 border-white rounded-full" />
              </div>
            </div>
            <img src="https://cdn.devdojo.com/images/march2021/green-dashboard.jpg" />
          </div>
        </div>
      </div>
    </div>
  </section>
</>

  )
}
export default HeroSection;