import React from "react";
import { Link } from "react-router-dom";
const PaymentCard = () => {
  return (
 <div>
 <h3 className="text-[32px] font-semibold leading-[48px] text-center my-5">OUR PRICE</h3>
   <h1 className="text-center font-normal text-xl font-semibold mb-5">
    Unbeatable prices, no contracts,simple & easy
    </h1>
     <div className="flex justify-center items-center gap-10 mt-5">
  

     <a
    href="#"
    className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
  >
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Get Pro Features
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
  Unlock the full potential of our survey platform with our Pro features. For only <span className="text-2xl font-bold">$20</span>, gain access to advanced functionalities and enhance your survey experience.
</p>
    <ul role="list" className="space-y-4 text-gray-500 dark:text-gray-400 py-6">
      <li className="flex space-x-2 rtl:space-x-reverse items-center">
        <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
        </svg>
        <span className="leading-tight">Comment on Surveys</span>
      </li>
      <li className="flex space-x-2 rtl:space-x-reverse items-center">
        <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
        </svg>
        <span className="leading-tight">Detailed Survey Analysis</span>
      </li>
      <li className="flex space-x-2 rtl:space-x-reverse items-center">
        <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
        </svg>
        <span className="leading-tight">Priority Support</span>
      </li>
      <li className="flex space-x-2 rtl:space-x-reverse items-center">
        <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
        </svg>
        <span className="leading-tight">Early Access to New Features</span>
      </li>
    </ul>
    <Link to="/payment">
      <button
        type="button"
        className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
      >
        Make Payment
      </button>
    </Link>
  </a>
</div>
 </div>
  );
};

export default PaymentCard;
