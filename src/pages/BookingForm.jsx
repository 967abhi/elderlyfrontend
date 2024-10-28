// // // // // import { useState } from "react";

// // // // // const BookingForm = () => {
// // // // //   const [formData, setFormData] = useState({
// // // // //     name: "",
// // // // //     lastname: "",
// // // // //     email: "",
// // // // //     phoneNumber: "",
// // // // //     pincode: "",
// // // // //     address: "",
// // // // //     bookingTime: "",
// // // // //     duration: "1",
// // // // //     price: 200,
// // // // //   });

// // // // //   const handleChange = (e) => {
// // // // //     const duration = e.target.value;
// // // // //     setFormData({
// // // // //       ...formData,
// // // // //       duration,
// // // // //       price: duration * 200, // Calculate price based on duration
// // // // //     });
// // // // //   };

// // // // //   const handleSubmit = (e) => {
// // // // //     e.preventDefault();
// // // // //     // Handle form submission logic
// // // // //     console.log(formData);
// // // // //   };

// // // // //   return (
// // // // //     <div className="max-w-8xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
// // // // //       {/* <h2 className="text-2xl font-bold mb-4 text-center">Booking Form</h2> */}
// // // // //       <form onSubmit={handleSubmit} className="space-y-6 font-Poppins text-md">
// // // // //         <div className="flex flex-row justify-between gap-5 ">
// // // // //           <div className="w-3/5">
// // // // //             <label className="block text-gray-700">First Name</label>
// // // // //             <input
// // // // //               type="text"
// // // // //               name="name"
// // // // //               value={formData.name}
// // // // //               onChange={handleChange}
// // // // //               className="w-full px-4 py-2 border border-gray-300 rounded-md"
// // // // //               placeholder="Enter your first name"
// // // // //               required
// // // // //             />
// // // // //           </div>

// // // // //           <div className="w-3/5">
// // // // //             <label className="block text-gray-700">Last Name</label>
// // // // //             <input
// // // // //               type="text"
// // // // //               name="lastname"
// // // // //               value={formData.lastname}
// // // // //               onChange={handleChange}
// // // // //               className="w-full px-4 py-2 border border-gray-300 rounded-md"
// // // // //               placeholder="Enter your last name"
// // // // //               required
// // // // //             />
// // // // //           </div>
// // // // //         </div>
// // // // //         <div className="flex flex-row justify-between gap-5">
// // // // //           <div className="w-3/5">
// // // // //             <label className="block text-gray-700">Email</label>
// // // // //             <input
// // // // //               type="email"
// // // // //               name="email"
// // // // //               value={formData.email}
// // // // //               onChange={handleChange}
// // // // //               className="w-full px-4 py-2 border border-gray-300 rounded-md"
// // // // //               placeholder="Enter your email"
// // // // //               required
// // // // //             />
// // // // //           </div>

// // // // //           <div className="w-3/5">
// // // // //             <label className="block text-gray-700">Phone Number</label>
// // // // //             <input
// // // // //               type="tel"
// // // // //               name="phoneNumber"
// // // // //               value={formData.phoneNumber}
// // // // //               onChange={handleChange}
// // // // //               className="w-full px-4 py-2 border border-gray-300 rounded-md"
// // // // //               placeholder="Enter your phone number"
// // // // //               required
// // // // //             />
// // // // //           </div>
// // // // //         </div>

// // // // //         <div className="flex flex-row justify-between gap-5">
// // // // //           <div className="w-3/5">
// // // // //             <label className="block text-gray-700">Current Pincode</label>
// // // // //             <input
// // // // //               type="text"
// // // // //               name="pincode"
// // // // //               value={formData.pincode}
// // // // //               onChange={handleChange}
// // // // //               className="w-full px-4 py-2 border border-gray-300 rounded-md"
// // // // //               placeholder="Enter your pincode"
// // // // //               required
// // // // //             />
// // // // //           </div>

// // // // //           <div className="w-3/5">
// // // // //             <label className="block text-gray-700">Current Address</label>
// // // // //             <textarea
// // // // //               name="address"
// // // // //               value={formData.address}
// // // // //               onChange={handleChange}
// // // // //               className="w-full px-4 py-2 border border-gray-300 rounded-md"
// // // // //               placeholder="Enter your address"
// // // // //               rows="3"
// // // // //               required
// // // // //             ></textarea>
// // // // //           </div>
// // // // //         </div>
// // // // //         <div className="flex flex-row justify-between gap-5">
// // // // //           <div className="w-3/5">
// // // // //             <label className="block text-gray-700"> Starting Time</label>
// // // // //             <input
// // // // //               type="datetime-local"
// // // // //               name="bookingTime"
// // // // //               value={formData.bookingTime}
// // // // //               onChange={handleChange}
// // // // //               className="w-full px-4 py-2 border border-gray-300 rounded-md"
// // // // //               required
// // // // //             />
// // // // //           </div>
// // // // //           <div className="w-3/5">
// // // // //             <label className="block text-gray-700">Ending time </label>
// // // // //             <input
// // // // //               type="datetime-local"
// // // // //               name="bookingTime"
// // // // //               value={formData.bookingTime}
// // // // //               onChange={handleChange}
// // // // //               className="w-full px-4 py-2 border border-gray-300 rounded-md"
// // // // //               required
// // // // //             />
// // // // //           </div>
// // // // //         </div>
// // // // //         <div className="flex flex-row justify-between gap-5">
// // // // //           <div className="w-3/5">
// // // // //             <label className="block text-gray-700">Duration</label>
// // // // //             <select
// // // // //               name="duration"
// // // // //               value={formData.duration}
// // // // //               onChange={handleSubmit}
// // // // //               className="w-full px-4 py-2 border border-gray-300 rounded-md"
// // // // //               required
// // // // //             >
// // // // //               <option value="1">1 Hour</option>
// // // // //               <option value="2">2 Hours</option>
// // // // //               <option value="3">3 Hours</option>
// // // // //               <option value="4">4 Hours</option>
// // // // //               <option value="5">5 Hours</option>
// // // // //               <option value="6">6 Hours</option>
// // // // //               <option value="7">7 Hours</option>
// // // // //               <option value="8">8 Hours</option>
// // // // //               <option value="9">9 Hours</option>
// // // // //               <option value="10">10 Hours</option>
// // // // //               <option value="11">11 Hours</option>
// // // // //               <option value="12">12 Hours</option>
// // // // //               <option value="24">24 Hours</option>
// // // // //             </select>
// // // // //           </div>

// // // // //           <div className="w-3/5">
// // // // //             <label className="block text-gray-700">Price</label>
// // // // //             <input
// // // // //               type="text"
// // // // //               name="price"
// // // // //               value={`₹${formData.price}`} // Automatically update based on duration
// // // // //               className="w-full px-4 py-2 border border-gray-300 rounded-md"
// // // // //               readOnly
// // // // //             />
// // // // //           </div>
// // // // //         </div>

// // // // //         <div className="text-center">
// // // // //           <button
// // // // //             type="submit"
// // // // //             className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-md"
// // // // //           >
// // // // //             Submit
// // // // //           </button>
// // // // //         </div>
// // // // //       </form>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default BookingForm;
// // // // // ==============================================
// // // // import { useState, useEffect } from "react";
// // // // import axios from "axios";

// // // // const BookingForm = () => {
// // // //   const [formData, setFormData] = useState({
// // // //     name: "",
// // // //     lastname: "",
// // // //     email: "",
// // // //     phoneNumber: "",
// // // //     pincode: "",
// // // //     address: "",
// // // //     startTime: "",
// // // //     endTime: "",
// // // //     duration: "1",
// // // //     price: 200,
// // // //   });

// // // //   // Handle form changes for all fields, including duration and time fields
// // // //   const handleChange = (e) => {
// // // //     const { name, value } = e.target;
// // // //     setFormData((prevData) => ({
// // // //       ...prevData,
// // // //       [name]: name === "duration" ? value : value,
// // // //       price: name === "duration" ? value * 200 : prevData.price,
// // // //     }));
// // // //   };

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();
// // // //     // Handle form submission logic
// // // //     try {
// // // //       const response = await axios.post(
// // // //         "http://localhost:3000/bookingRoutes",
// // // //         formData,
// // // //         {
// // // //           headers: { "Content-Type": "application/json" },
// // // //         }
// // // //       );
// // // //       console.log(response.data);
// // // //       alert("Form submitted successfully ");
// // // //     } catch (err) {
// // // //       console.log("Error encounter in form", err);
// // // //       alert("Failed to submit booking");
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="max-w-8xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
// // // //       <form onSubmit={handleSubmit} className="space-y-6 font-Poppins text-md">
// // // //         {/* First Name and Last Name */}
// // // //         <div className="flex flex-row justify-between gap-5">
// // // //           <div className="w-3/5">
// // // //             <label className="block text-gray-700">First Name</label>
// // // //             <input
// // // //               type="text"
// // // //               name="name"
// // // //               value={formData.name}
// // // //               onChange={handleChange}
// // // //               className="w-full px-4 py-2 border border-gray-300 rounded-md"
// // // //               placeholder="Enter your first name"
// // // //               required
// // // //             />
// // // //           </div>

// // // //           <div className="w-3/5">
// // // //             <label className="block text-gray-700">Last Name</label>
// // // //             <input
// // // //               type="text"
// // // //               name="lastname"
// // // //               value={formData.lastname}
// // // //               onChange={handleChange}
// // // //               className="w-full px-4 py-2 border border-gray-300 rounded-md"
// // // //               placeholder="Enter your last name"
// // // //               required
// // // //             />
// // // //           </div>
// // // //         </div>

// // // //         {/* Email and Phone Number */}
// // // //         <div className="flex flex-row justify-between gap-5">
// // // //           <div className="w-3/5">
// // // //             <label className="block text-gray-700">Email</label>
// // // //             <input
// // // //               type="email"
// // // //               name="email"
// // // //               value={formData.email}
// // // //               onChange={handleChange}
// // // //               className="w-full px-4 py-2 border border-gray-300 rounded-md"
// // // //               placeholder="Enter your email"
// // // //               required
// // // //             />
// // // //           </div>

// // // //           <div className="w-3/5">
// // // //             <label className="block text-gray-700">Phone Number</label>
// // // //             <input
// // // //               type="tel"
// // // //               name="phoneNumber"
// // // //               value={formData.phoneNumber}
// // // //               onChange={handleChange}
// // // //               className="w-full px-4 py-2 border border-gray-300 rounded-md"
// // // //               placeholder="Enter your phone number"
// // // //               required
// // // //             />
// // // //           </div>
// // // //         </div>

// // // //         {/* Pincode and Address */}
// // // //         <div className="flex flex-row justify-between gap-5">
// // // //           <div className="w-3/5">
// // // //             <label className="block text-gray-700">Current Pincode</label>
// // // //             <input
// // // //               type="text"
// // // //               name="pincode"
// // // //               value={formData.pincode}
// // // //               onChange={handleChange}
// // // //               className="w-full px-4 py-2 border border-gray-300 rounded-md"
// // // //               placeholder="Enter your pincode"
// // // //               required
// // // //             />
// // // //           </div>

// // // //           <div className="w-3/5">
// // // //             <label className="block text-gray-700">Current Address</label>
// // // //             <textarea
// // // //               name="address"
// // // //               value={formData.address}
// // // //               onChange={handleChange}
// // // //               className="w-full px-4 py-2 border border-gray-300 rounded-md"
// // // //               placeholder="Enter your address"
// // // //               rows="3"
// // // //               required
// // // //             ></textarea>
// // // //           </div>
// // // //         </div>

// // // //         {/* Start Time and End Time */}
// // // //         <div className="flex flex-row justify-between gap-5">
// // // //           <div className="w-3/5">
// // // //             <label className="block text-gray-700">Starting Time</label>
// // // //             <input
// // // //               type="datetime-local"
// // // //               name="startTime"
// // // //               value={formData.startTime}
// // // //               onChange={handleChange}
// // // //               className="w-full px-4 py-2 border border-gray-300 rounded-md"
// // // //               required
// // // //             />
// // // //           </div>

// // // //           <div className="w-3/5">
// // // //             <label className="block text-gray-700">Ending Time</label>
// // // //             <input
// // // //               type="datetime-local"
// // // //               name="endTime"
// // // //               value={formData.endTime}
// // // //               onChange={handleChange}
// // // //               className="w-full px-4 py-2 border border-gray-300 rounded-md"
// // // //               required
// // // //             />
// // // //           </div>
// // // //         </div>

// // // //         {/* Duration and Price */}
// // // //         <div className="flex flex-row justify-between gap-5">
// // // //           <div className="w-3/5">
// // // //             <label className="block text-gray-700">Duration</label>
// // // //             <select
// // // //               name="duration"
// // // //               value={formData.duration}
// // // //               onChange={handleChange} // Corrected to use handleChange
// // // //               className="w-full px-4 py-2 border border-gray-300 rounded-md"
// // // //               required
// // // //             >
// // // //               <option value="1">1 Hour</option>
// // // //               <option value="2">2 Hours</option>
// // // //               <option value="3">3 Hours</option>
// // // //               <option value="4">4 Hours</option>
// // // //               <option value="5">5 Hours</option>
// // // //               <option value="6">6 Hours</option>
// // // //               <option value="7">7 Hours</option>
// // // //               <option value="8">8 Hours</option>
// // // //               <option value="9">9 Hours</option>
// // // //               <option value="10">10 Hours</option>
// // // //               <option value="11">11 Hours</option>
// // // //               <option value="12">12 Hours</option>
// // // //               <option value="24">24 Hours</option>
// // // //             </select>
// // // //           </div>

// // // //           <div className="w-3/5">
// // // //             <label className="block text-gray-700">Price</label>
// // // //             <input
// // // //               type="text"
// // // //               name="price"
// // // //               value={`₹${formData.price}`}
// // // //               className="w-full px-4 py-2 border border-gray-300 rounded-md"
// // // //               readOnly
// // // //             />
// // // //           </div>
// // // //         </div>

// // // //         <div className="text-center">
// // // //           <button
// // // //             type="submit"
// // // //             className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-md"
// // // //           >
// // // //             Submit
// // // //           </button>
// // // //         </div>
// // // //       </form>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default BookingForm;
// // // // ================================================
// // // import { useState } from "react";
// // // import axios from "axios";

// // // const BookingForm = () => {
// // //   const [formData, setFormData] = useState({
// // //     name: "",
// // //     lastname: "",
// // //     email: "",
// // //     phoneNumber: "",
// // //     pincode: "",
// // //     address: "",
// // //     startTime: "",
// // //     endTime: "",
// // //     duration: "1",
// // //     price: 200,
// // //   });

// // //   // Handle form changes for all fields, including duration and time fields
// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setFormData((prevData) => ({
// // //       ...prevData,
// // //       [name]: name === "duration" ? value : value,
// // //       price: name === "duration" ? value * 200 : prevData.price,
// // //     }));
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();

// // //     try {
// // //       const response = await axios.post(
// // //         "http://localhost:3000/bookingRoutes",
// // //         JSON.stringify(formData), // Stringify data for JSON format
// // //         {
// // //           headers: { "Content-Type": "application/json" },
// // //         }
// // //       );
// // //       console.log(response.data);
// // //       alert("Form submitted successfully!");
// // //     } catch (err) {
// // //       console.log("Error encountered in form submission", err);
// // //       alert("Failed to submit booking");
// // //     }
// // //   };

// // //   return (
// // //     <div className="max-w-8xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
// // //       <form onSubmit={handleSubmit} className="space-y-6 font-Poppins text-md">
// // //         {/* First Name and Last Name */}
// // //         <div className="flex flex-row justify-between gap-5">
// // //           <div className="w-3/5">
// // //             <label className="block text-gray-700">First Name</label>
// // //             <input
// // //               type="text"
// // //               name="name"
// // //               value={formData.name}
// // //               onChange={handleChange}
// // //               className="w-full px-4 py-2 border border-gray-300 rounded-md"
// // //               placeholder="Enter your first name"
// // //               required
// // //             />
// // //           </div>

// // //           <div className="w-3/5">
// // //             <label className="block text-gray-700">Last Name</label>
// // //             <input
// // //               type="text"
// // //               name="lastname"
// // //               value={formData.lastname}
// // //               onChange={handleChange}
// // //               className="w-full px-4 py-2 border border-gray-300 rounded-md"
// // //               placeholder="Enter your last name"
// // //               required
// // //             />
// // //           </div>
// // //         </div>

// // //         {/* Email and Phone Number */}
// // //         <div className="flex flex-row justify-between gap-5">
// // //           <div className="w-3/5">
// // //             <label className="block text-gray-700">Email</label>
// // //             <input
// // //               type="email"
// // //               name="email"
// // //               value={formData.email}
// // //               onChange={handleChange}
// // //               className="w-full px-4 py-2 border border-gray-300 rounded-md"
// // //               placeholder="Enter your email"
// // //               required
// // //             />
// // //           </div>

// // //           <div className="w-3/5">
// // //             <label className="block text-gray-700">Phone Number</label>
// // //             <input
// // //               type="tel"
// // //               name="phoneNumber"
// // //               value={formData.phoneNumber}
// // //               onChange={handleChange}
// // //               className="w-full px-4 py-2 border border-gray-300 rounded-md"
// // //               placeholder="Enter your phone number"
// // //               required
// // //             />
// // //           </div>
// // //         </div>

// // //         {/* Pincode and Address */}
// // //         <div className="flex flex-row justify-between gap-5">
// // //           <div className="w-3/5">
// // //             <label className="block text-gray-700">Current Pincode</label>
// // //             <input
// // //               type="text"
// // //               name="pincode"
// // //               value={formData.pincode}
// // //               onChange={handleChange}
// // //               className="w-full px-4 py-2 border border-gray-300 rounded-md"
// // //               placeholder="Enter your pincode"
// // //               required
// // //             />
// // //           </div>

// // //           <div className="w-3/5">
// // //             <label className="block text-gray-700">Current Address</label>
// // //             <textarea
// // //               name="address"
// // //               value={formData.address}
// // //               onChange={handleChange}
// // //               className="w-full px-4 py-2 border border-gray-300 rounded-md"
// // //               placeholder="Enter your address"
// // //               rows="3"
// // //               required
// // //             ></textarea>
// // //           </div>
// // //         </div>

// // //         {/* Start Time and End Time */}
// // //         <div className="flex flex-row justify-between gap-5">
// // //           <div className="w-3/5">
// // //             <label className="block text-gray-700">Starting Time</label>
// // //             <input
// // //               type="datetime-local"
// // //               name="startTime"
// // //               value={formData.startTime}
// // //               onChange={handleChange}
// // //               className="w-full px-4 py-2 border border-gray-300 rounded-md"
// // //               required
// // //             />
// // //           </div>

// // //           <div className="w-3/5">
// // //             <label className="block text-gray-700">Ending Time</label>
// // //             <input
// // //               type="datetime-local"
// // //               name="endTime"
// // //               value={formData.endTime}
// // //               onChange={handleChange}
// // //               className="w-full px-4 py-2 border border-gray-300 rounded-md"
// // //               required
// // //             />
// // //           </div>
// // //         </div>

// // //         {/* Duration and Price */}
// // //         <div className="flex flex-row justify-between gap-5">
// // //           <div className="w-3/5">
// // //             <label className="block text-gray-700">Duration</label>
// // //             <select
// // //               name="duration"
// // //               value={formData.duration}
// // //               onChange={handleChange}
// // //               className="w-full px-4 py-2 border border-gray-300 rounded-md"
// // //               required
// // //             >
// // //               {[...Array(12).keys()].map((i) => (
// // //                 <option value={i + 1} key={i}>{`${i + 1} Hour${
// // //                   i > 0 ? "s" : ""
// // //                 }`}</option>
// // //               ))}
// // //               <option value="24">24 Hours</option>
// // //             </select>
// // //           </div>

// // //           <div className="w-3/5">
// // //             <label className="block text-gray-700">Price</label>
// // //             <input
// // //               type="text"
// // //               name="price"
// // //               value={`₹${formData.price}`}
// // //               className="w-full px-4 py-2 border border-gray-300 rounded-md"
// // //               readOnly
// // //             />
// // //           </div>
// // //         </div>

// // //         <div className="text-center">
// // //           <button
// // //             type="submit"
// // //             className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-md"
// // //           >
// // //             Submit
// // //           </button>
// // //         </div>
// // //       </form>
// // //     </div>
// // //   );
// // // };

// // // export default BookingForm;
// // // ===============================================
// // import { useState, useEffect } from "react";
// // import { useNavigate, useParams } from "react-router-dom";
// // // import navigate from {us}
// // import axios from "axios";

// // const BookingForm = () => {
// //   const navigate = useNavigate();
// //   const { id } = useParams();
// //   const [formData, setFormData] = useState({
// //     firstname: "",
// //     lastname: "",
// //     email: "",
// //     phoneNumber: "",
// //     currentPincode: "",
// //     currentAddress: "",
// //     startingTime: "",
// //     endTime: "",
// //     Duration: "1",
// //     Price: 200,
// //   });
// //   const [submitForm, setSubmitForm] = useState(false);

// //   // Update price based on duration
// //   const BASE_PRICE = 200;

// //   // Handle form changes
// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     if (name === "duration") {
// //       // Update duration and calculate price based on it
// //       const updatedPrice = value * BASE_PRICE;
// //       setFormData({
// //         ...formData,
// //         duration: value,
// //         price: updatedPrice,
// //       });
// //     } else {
// //       setFormData({
// //         ...formData,
// //         [name]: value,
// //       });
// //     }
// //   };

// //   // Trigger data submission on form submit
// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     setSubmitForm(true);
// //   };

// //   useEffect(() => {
// //     const postData = async () => {
// //       try {
// //         const response = await axios.post(
// //           `http://localhost:3000/update/${id}`,
// //           formData,
// //           {
// //             headers: { "Content-Type": "application/json" },
// //           }
// //         );
// //         console.log(response.data);
// //         alert("Form submitted successfully");
// //         navigate("/ordernow");
// //       } catch (err) {
// //         console.log("Error encountered in form submission", err);
// //         alert("Failed to submit booking");
// //       } finally {
// //         setSubmitForm(false);
// //       }
// //     };

// //     if (submitForm) {
// //       postData();
// //     }
// //   }, [submitForm, formData]);

// //   return (
// //     <div className="max-w-8xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
// //       <form onSubmit={handleSubmit} className="space-y-6 font-Poppins text-md">
// //         {/* First Name and Last Name */}
// //         <div className="flex flex-row justify-between gap-5">
// //           <div className="w-3/5">
// //             <label className="block text-gray-700">First Name</label>
// //             <input
// //               type="text"
// //               name="firstname"
// //               value={formData.firstname}
// //               onChange={handleChange}
// //               className="w-full px-4 py-2 border border-gray-300 rounded-md"
// //               placeholder="Enter your first name"
// //               required
// //             />
// //           </div>
// //           <div className="w-3/5">
// //             <label className="block text-gray-700">Last Name</label>
// //             <input
// //               type="text"
// //               name="lastname"
// //               value={formData.lastname}
// //               onChange={handleChange}
// //               className="w-full px-4 py-2 border border-gray-300 rounded-md"
// //               placeholder="Enter your last name"
// //               required
// //             />
// //           </div>
// //         </div>

// //         {/* Email and Phone Number */}
// //         <div className="flex flex-row justify-between gap-5">
// //           <div className="w-3/5">
// //             <label className="block text-gray-700">Email</label>
// //             <input
// //               type="email"
// //               name="email"
// //               value={formData.email}
// //               onChange={handleChange}
// //               className="w-full px-4 py-2 border border-gray-300 rounded-md"
// //               placeholder="Enter your email"
// //               required
// //             />
// //           </div>
// //           <div className="w-3/5">
// //             <label className="block text-gray-700">Phone Number</label>
// //             <input
// //               type="tel"
// //               name="phoneNumber"
// //               value={formData.phoneNumber}
// //               onChange={handleChange}
// //               className="w-full px-4 py-2 border border-gray-300 rounded-md"
// //               placeholder="Enter your phone number"
// //               required
// //             />
// //           </div>
// //         </div>

// //         {/* Pincode and Address */}
// //         <div className="flex flex-row justify-between gap-5">
// //           <div className="w-3/5">
// //             <label className="block text-gray-700">Current Pincode</label>
// //             <input
// //               type="text"
// //               name="currentPincode"
// //               value={formData.currentPincode}
// //               onChange={handleChange}
// //               className="w-full px-4 py-2 border border-gray-300 rounded-md"
// //               placeholder="Enter your pincode"
// //               required
// //             />
// //           </div>
// //           <div className="w-3/5">
// //             <label className="block text-gray-700">Current Address</label>
// //             <textarea
// //               name="currentAddress"
// //               value={formData.currentAddress}
// //               onChange={handleChange}
// //               className="w-full px-4 py-2 border border-gray-300 rounded-md"
// //               placeholder="Enter your address"
// //               rows="3"
// //               required
// //             ></textarea>
// //           </div>
// //         </div>

// //         {/* Start Time and End Time */}
// //         <div className="flex flex-row justify-between gap-5">
// //           <div className="w-3/5">
// //             <label className="block text-gray-700">Starting Time</label>
// //             <input
// //               type="datetime-local"
// //               name="startingTime"
// //               value={formData.startingTime}
// //               onChange={handleChange}
// //               className="w-full px-4 py-2 border border-gray-300 rounded-md"
// //               required
// //             />
// //           </div>
// //           <div className="w-3/5">
// //             <label className="block text-gray-700">Ending Time</label>
// //             <input
// //               type="datetime-local"
// //               name="endTime"
// //               value={formData.endTime}
// //               onChange={handleChange}
// //               className="w-full px-4 py-2 border border-gray-300 rounded-md"
// //               required
// //             />
// //           </div>
// //         </div>

// //         {/* Duration and Price */}
// //         <div className="flex flex-row justify-between gap-5">
// //           <div className="w-3/5">
// //             <label className="block text-gray-700">Duration</label>
// //             <select
// //               name="duration"
// //               value={formData.duration}
// //               onChange={handleChange}
// //               className="w-full px-4 py-2 border border-gray-300 rounded-md"
// //               required
// //             >
// //               {[...Array(24).keys()].map((hour) => (
// //                 <option key={hour + 1} value={hour + 1}>
// //                   {hour + 1} Hour{hour > 0 ? "s" : ""}
// //                 </option>
// //               ))}
// //             </select>
// //           </div>

// //           <div className="w-3/5">
// //             <label className="block text-gray-700">Price</label>
// //             <input
// //               type="text"
// //               name="price"
// //               value={`₹${formData.price}`}
// //               className="w-full px-4 py-2 border border-gray-300 rounded-md"
// //               readOnly
// //             />
// //           </div>
// //         </div>

// //         <div className="text-center">
// //           <button
// //             type="submit"
// //             className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-md"
// //           >
// //             Submit
// //           </button>
// //         </div>
// //       </form>
// //     </div>
// //   );
// // };

// // export default BookingForm;
// // =============================
// import { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import axios from "axios";

// const BookingForm = () => {
//   const navigate = useNavigate();
//   const { id } = useParams(); // Get user ID from the route params
//   const [formData, setFormData] = useState({
//     userfirstname: "",
//     userlastname: "",
//     useremail: "",
//     userphonenumber: "",
//     userpincode: "",
//     usercurrentaddress: "",
//     userstartingtime: "",
//     userendingtime: "",
//     userduration: "1",
//     userprice: 200,
//   });
//   const [submitForm, setSubmitForm] = useState(false);

//   // Base price for calculation
//   const BASE_PRICE = 200;

//   // Handle form changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     if (name === "userduration") {
//       // Update duration and calculate price based on it
//       const updatedPrice = value * BASE_PRICE;
//       setFormData((prevFormData) => ({
//         ...prevFormData,
//         userduration: value,
//         userprice: updatedPrice,
//       }));
//       setSubmitForm(true); // Submit on dropdown change
//     } else {
//       setFormData((prevFormData) => ({
//         ...prevFormData,
//         [name]: value,
//       }));
//     }
//   };

//   // Trigger data submission on form submit
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitForm(true);
//   };

//   useEffect(() => {
//     const postData = async () => {
//       try {
//         const response = await axios.post(
//           `http://localhost:3000/update/${id}`,
//           formData,
//           {
//             headers: { "Content-Type": "application/json" },
//           }
//         );
//         console.log(response.data);
//         alert("Form submitted successfully");
//         navigate("/ordernow");
//       } catch (err) {
//         console.log("Error encountered in form submission", err);
//         alert("Failed to submit booking");
//       } finally {
//         setSubmitForm(false);
//       }
//     };

//     if (submitForm) {
//       postData();
//     }
//   }, [submitForm, formData, navigate, id]);

//   return (
//     <div className="max-w-8xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
//       <form onSubmit={handleSubmit} className="space-y-6 font-Poppins text-md">
//         <div className="flex flex-row justify-between gap-5">
//           <div className="w-3/5">
//             <label className="block text-gray-700">First Name</label>
//             <input
//               type="text"
//               name="userfirstname"
//               value={formData.userfirstname}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md"
//               placeholder="Enter your first name"
//               required
//             />
//           </div>
//           <div className="w-3/5">
//             <label className="block text-gray-700">Last Name</label>
//             <input
//               type="text"
//               name="userlastname"
//               value={formData.userlastname}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md"
//               placeholder="Enter your last name"
//               required
//             />
//           </div>
//         </div>

//         {/* Additional form fields for Email, Phone Number, etc. */}
//         {/* //         Email and Phone Number */}
//         <div className="flex flex-row justify-between gap-5">
//           <div className="w-3/5">
//             <label className="block text-gray-700">Email</label>
//             <input
//               type="email"
//               name="useremail"
//               value={formData.useremail}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md"
//               placeholder="Enter your email"
//               required
//             />
//           </div>
//           <div className="w-3/5">
//             <label className="block text-gray-700">Phone Number</label>
//             <input
//               type="tel"
//               name="userphonenumber"
//               value={formData.userphonenumber}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md"
//               placeholder="Enter your phone number"
//               required
//             />
//           </div>
//         </div>

//         {/* Pincode and Address */}
//         <div className="flex flex-row justify-between gap-5">
//           <div className="w-3/5">
//             <label className="block text-gray-700">Current Pincode</label>
//             <input
//               type="text"
//               name="userpincode"
//               value={formData.userpincode}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md"
//               placeholder="Enter your pincode"
//               required
//             />
//           </div>
//           <div className="w-3/5">
//             <label className="block text-gray-700">Current Address</label>
//             <textarea
//               name="usercurrentAddress"
//               value={formData.usercurrentAddress}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md"
//               placeholder="Enter your address"
//               rows="3"
//               required
//             ></textarea>
//           </div>
//         </div>

//         {/* Start Time and End Time */}
//         <div className="flex flex-row justify-between gap-5">
//           <div className="w-3/5">
//             <label className="block text-gray-700">Starting Time</label>
//             <input
//               type="datetime-local"
//               name="userstartingtime"
//               value={formData.userstartingtime}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md"
//               required
//             />
//           </div>
//           <div className="w-3/5">
//             <label className="block text-gray-700">Ending Time</label>
//             <input
//               type="datetime-local"
//               name="userendingtime"
//               value={formData.userendingtime}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md"
//               required
//             />
//           </div>
//         </div>
//         {/* Additional form fields for Email, Phone Number, etc. */}

//         <div className="flex flex-row justify-between gap-5">
//           <div className="w-3/5">
//             <label className="block text-gray-700">Duration</label>
//             <select
//               name="userduration"
//               onChange={handleChange}
//               value={formData.userduration}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md"
//               required
//             >
//               {[...Array(24).keys()].map((hour) => (
//                 <option key={hour + 1} value={hour + 1}>
//                   {hour + 1} Hour{hour > 0 ? "s" : ""}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div className="w-3/5">
//             <label className="block text-gray-700">Price</label>
//             <input
//               type="text"
//               name="userprice"
//               value={`₹${formData.userprice}`}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md"
//               readOnly
//             />
//           </div>
//         </div>

//         <div className="text-center">
//           <button
//             type="submit"
//             className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-md"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default BookingForm;
// ======================
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { format } from "date-fns";

const BookingForm = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Get user ID from the route params
  const [formData, setFormData] = useState({
    userfirstname: "",
    userlastname: "",
    useremail: "",
    userphonenumber: "",
    userpincode: "",
    usercurrentaddress: "",
    userstartingtime: "",
    userendingtime: "",
    userduration: "1",
    userprice: 200,
  });
  const [submitForm, setSubmitForm] = useState(false);

  // Base price for calculation
  const BASE_PRICE = 200;

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "userduration") {
      // Update duration and calculate price based on it
      const updatedPrice = value * BASE_PRICE;
      setFormData((prevFormData) => ({
        ...prevFormData,
        userduration: value,
        userprice: updatedPrice,
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  // Trigger data submission on form submit
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    setSubmitForm(true); // Set the state to trigger the useEffect for submission
  };

  useEffect(() => {
    const postData = async () => {
      try {
        // Convert to IST (UTC+5:30)
        const convertToIST = (dateString) => {
          const date = new Date(dateString);
          const utcDate = date.getTime() + date.getTimezoneOffset() * 60000;
          return new Date(utcDate + 5.5 * 60 * 60000).toISOString(); // Convert to IST
        };

        const dataToSubmit = {
          ...formData,
          userstartingtime: convertToIST(formData.userstartingtime),
          userendingtime: convertToIST(formData.userendingtime),
        };

        const response = await axios.post(
          `http://localhost:3000/update/${id}`,
          dataToSubmit,
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        console.log(response.data);
        alert("Form submitted successfully");
        navigate("/ordernow"); // Redirect after successful submission
      } catch (err) {
        console.log("Error encountered in form submission", err);
        alert("Failed to submit booking");
      } finally {
        setSubmitForm(false); // Reset submission state
      }
    };

    if (submitForm) {
      postData();
    }
  }, [submitForm, formData, navigate, id]);

  return (
    <div className="max-w-8xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-6 font-Poppins text-md">
        <div className="flex flex-row justify-between gap-5">
          <div className="w-3/5">
            <label className="block text-gray-700">First Name</label>
            <input
              type="text"
              name="userfirstname"
              value={formData.userfirstname}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Enter your first name"
              required
            />
          </div>
          <div className="w-3/5">
            <label className="block text-gray-700">Last Name</label>
            <input
              type="text"
              name="userlastname"
              value={formData.userlastname}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Enter your last name"
              required
            />
          </div>
        </div>

        {/* Additional form fields for Email, Phone Number, etc. */}
        <div className="flex flex-row justify-between gap-5">
          <div className="w-3/5">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="useremail"
              value={formData.useremail}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="w-3/5">
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="tel"
              name="userphonenumber"
              value={formData.userphonenumber}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Enter your phone number"
              required
            />
          </div>
        </div>

        {/* Pincode and Address */}
        <div className="flex flex-row justify-between gap-5">
          <div className="w-3/5">
            <label className="block text-gray-700">Current Pincode</label>
            <input
              type="text"
              name="userpincode"
              value={formData.userpincode}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Enter your pincode"
              required
            />
          </div>
          <div className="w-3/5">
            <label className="block text-gray-700">Current Address</label>
            <textarea
              name="usercurrentAddress"
              value={formData.usercurrentAddress}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Enter your address"
              rows="3"
              required
            ></textarea>
          </div>
        </div>

        {/* Start Time and End Time */}

        {/* Additional form fields for Email, Phone Number, etc. */}

        <div className="flex flex-row justify-between gap-5">
          <div className="w-3/5">
            <label className="block text-gray-700">Starting Time</label>
            <input
              type="datetime-local"
              name="userstartingtime"
              value={formData.userstartingtime}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="w-3/5">
            <label className="block text-gray-700">Ending Time</label>
            <input
              type="datetime-local"
              name="userendingtime"
              value={formData.userendingtime}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
        </div>

        <div className="flex flex-row justify-between gap-5">
          <div className="w-3/5">
            <label className="block text-gray-700">Duration</label>
            <select
              name="userduration"
              value={formData.userduration}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            >
              {[...Array(24).keys()].map((hour) => (
                <option key={hour + 1} value={hour + 1}>
                  {hour + 1} Hour{hour > 0 ? "s" : ""}
                </option>
              ))}
            </select>
          </div>

          <div className="w-3/5">
            <label className="block text-gray-700">Price</label>
            <input
              type="text"
              name="userprice"
              value={`₹${formData.userprice}`}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              readOnly
            />
          </div>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
