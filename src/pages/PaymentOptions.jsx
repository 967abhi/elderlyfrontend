import React, { useState } from "react";
// import { useNavigate, Link } from "react-router";
import { Link } from "react-router-dom";

const PaymentOptions = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  // const navigate = useNavigate();

  // const handlePaymentSelection = (method) => {
  //   setPaymentMethod(method);
  //   // Add any additional actions based on payment method here
  // };

  // const handleConfirmPayment = () => {
  //   if (paymentMethod) {
  //     alert(`You selected ${paymentMethod} as your payment method.`);

  //     // Trigger any action to proceed with payment
  //   } else {
  //     alert("Please select a payment method.");
  //   }
  // };

  return (
    <div className="w-full mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Choose Payment Method
      </h2>

      <div className="flex flex-col justify-center text-center text-xl space-y-4">
        <div
          className="bg-green-500  text-white
          "
        >
          <Link to="/Online-Payment">
            <button
              // onClick={() => handlePaymentSelection("Online Payment")}
              className="bg-green-500 py-2 px-4 text-white
          "
            >
              Pay Online
            </button>
          </Link>
        </div>

        <button
          // onClick={() => handlePaymentSelection("Cash on Delivery")}
          // className={`py-2 px-4 rounded-md ${
          //   paymentMethod === "Cash on Delivery"
          //     ? "bg-blue-500 text-white"
          //     : "bg-gray-200 text-gray-700"
          // }`}
          className="bg-green-500 py-2 px-4 text-white
          "
        >
          Cash on Delivery
        </button>
      </div>

      <div className="mt-6 text-center">
        {/* <button
          onClick={handleConfirmPayment}
          className="w-full py-2 px-4 bg-green-500 text-white rounded-md font-semibold hover:bg-green-600"
        >
          Confirm Payment
        </button> */}
      </div>
    </div>
  );
};

export default PaymentOptions;
