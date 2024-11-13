import React, { useState } from "react";

const PaymentOptions = () => {
  const [paymentMethod, setPaymentMethod] = useState("");

  const handlePaymentSelection = (method) => {
    setPaymentMethod(method);
    // Add any additional actions based on payment method here
  };

  const handleConfirmPayment = () => {
    if (paymentMethod) {
      alert(`You selected ${paymentMethod} as your payment method.`);
      // Trigger any action to proceed with payment
    } else {
      alert("Please select a payment method.");
    }
  };

  return (
    <div className="w-full mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Choose Payment Method
      </h2>

      <div className="flex flex-col space-y-4">
        <button
          onClick={() => handlePaymentSelection("Online Payment")}
          className={`py-2 px-4 rounded-md ${
            paymentMethod === "Online Payment"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Pay Online
        </button>

        <button
          onClick={() => handlePaymentSelection("Cash on Delivery")}
          className={`py-2 px-4 rounded-md ${
            paymentMethod === "Cash on Delivery"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Cash on Delivery
        </button>
      </div>

      <div className="mt-6 text-center">
        <button
          onClick={handleConfirmPayment}
          className="w-full py-2 px-4 bg-green-500 text-white rounded-md font-semibold hover:bg-green-600"
        >
          Confirm Payment
        </button>
      </div>
    </div>
  );
};

export default PaymentOptions;
