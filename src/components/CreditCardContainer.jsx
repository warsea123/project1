import React from "react";
import CreditCard from "./CreditCard";

function CreditCardContainer() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-r from-gray-900 via-gray-800 to-black p-6">
      {/* Animated Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-blue-500 to-purple-500 animate-pulse mb-8 text-center">
        Credit Card Generator
      </h1>

      {/* Responsive Cards Wrapper */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:justify-center gap-6 w-full max-w-6xl">
        <CreditCard color="gold" />
        <CreditCard color="blue" />
        <CreditCard color="black" />
      </div>
    </div>
  );
}

export default CreditCardContainer;
