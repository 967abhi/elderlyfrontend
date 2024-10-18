// import React from 'react'

// const singupforcaretaker = () => {
//   return (
//     <div>singupforcaretaker</div>
//   )
// }

// export default singupforcaretaker
// =====
import { useState } from "react";
import "./signupform.css";

const Singupforcaretaker = ({ role }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${role} Signup Data:`, formData);
    // Handle form submission logic here (e.g., API call)
  };

  return (
    <section className="bg-gray-50 dark:bg-white flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 w-[1200px]">
      <div className="w-full rounded-lg shadow dark:border sm:max-w-md xl:p-0 bg-white">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
            Create an account as a {role}
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium font-Poppins text-black"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your Name"
                required
              />
            </div>
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
            <div>
              <label
                htmlFor="phoneNumber"
                className="block mb-2 text-sm font-medium text-black"
              >
                Phone Number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                id="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:text-black  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your Phone Number"
                required
              />
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  required
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="terms" className="font-light text-black ">
                  I accept the{" "}
                  <a
                    href="#"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Terms and Conditions
                  </a>
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-green-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Create an account as {role}
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Already have an account?{" "}
              <a
                href="#"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Login here
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Singupforcaretaker;
