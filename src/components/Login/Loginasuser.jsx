// // import React from 'react'

// const Loginasuser = () => {
//   return <div>Loginasuser</div>;
// };

// export default Loginasuser;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../signupform.css";

const Loginasuser = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(` Login Data:`, formData);

    try {
      const response = await fetch("http://localhost:3000/userlogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Error: ${response.status} ${errorData.message || ""}`);
      }

      const data = await response.json();
      console.log("Response from server:", data);

      // Store the token in localStorage
      localStorage.setItem("token", data.token);

      // Navigate to the feed page (dashboard)
      navigate("/userfeed");
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-white flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 w-[1200px]">
      <div className="w-full rounded-lg shadow dark:border sm:max-w-md xl:p-0 bg-white">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
            Login as a User
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium font-Poppins text-black"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium font-Poppins text-black"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full text-white bg-green-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Login as User
            </button>
            <p className="text-base font-medium text-black">
              Don't have an account?{" "}
              <a
                href="/signupascaretaker"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Sign up here
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Loginasuser;
