import React, { useState } from "react";
import { generateCardNumber, generateCVV, getCurrentDate } from "../utils/cardUtils";

function CreditCard({ color }) {
  const [flipped, setFlipped] = useState(false);
  const [cardNumber, setCardNumber] = useState(generateCardNumber());
  const [cvv, setCVV] = useState(generateCVV());
  const [bankName, setBankName] = useState("SCAM BANK");
  const [expiryDate, setExpiryDate] = useState("12/27");

  // Improved gradient backgrounds for better visual effect
  const frontGradient = {
    gold: "bg-gradient-to-br from-yellow-400 via-orange-500 to-yellow-700",
    blue: "bg-gradient-to-br from-blue-500 via-indigo-600 to-blue-900",
    black: "bg-gradient-to-br from-gray-800 via-gray-700 to-black",
  };

  const handleGenerate = () => {
    setCardNumber(generateCardNumber());
    setCVV(generateCVV());
    setExpiryDate(getCurrentDate());
  };

  return (
    <div className="flex flex-col items-center m-4 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
      <div
        className="relative w-full aspect-[16/9] perspective-1000"
        onMouseEnter={() => setFlipped(true)}
        onMouseLeave={() => setFlipped(false)}
      >
        <div
          className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
            flipped ? "rotate-y-180" : ""
          }`}
          style={{
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Front Side */}
          <div
            className={`absolute w-full h-full ${frontGradient[color]} rounded-xl p-6 flex flex-col justify-between shadow-2xl`}
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="text-white text-lg sm:text-xl font-bold">{bankName}</div>
            <div className="text-white text-lg sm:text-2xl tracking-widest">
              {cardNumber}
            </div>
            <div className="flex justify-between text-white text-sm sm:text-md">
              <span>Jammel M. Broña</span>
              <span>{expiryDate}</span>
            </div>
          </div>

          {/* Back Side */}
          <div
            className="absolute w-full h-full bg-gray-900 rounded-xl p-6 flex flex-col justify-center shadow-2xl"
            style={{
              transform: "rotateY(180deg)",
              backfaceVisibility: "hidden",
            }}
          >
            <div className="bg-black h-10 w-full mb-4"></div>

            {/* Fake Barcode */}
            <div className="h-8 w-3/4 mx-auto bg-gradient-to-r from-gray-800 via-gray-300 to-gray-800 rounded-sm mb-4"></div>

            <div className="text-white text-sm sm:text-md text-center">CVV: {cvv}</div>
          </div>
        </div>
      </div>

      <button
        onClick={handleGenerate}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-700 transition"
      >
        Generate New Card
      </button>
    </div>
  );
}

export default CreditCard;
  