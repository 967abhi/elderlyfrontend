// import { useState } from "react";

// const BookingForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     lastname: "",
//     email: "",
//     phoneNumber: "",
//     pincode: "",
//     address: "",
//     bookingTime: "",
//     duration: "1",
//     price: 200,
//   });

//   const handleChange = (e) => {
//     const duration = e.target.value;
//     setFormData({
//       ...formData,
//       duration,
//       price: duration * 200, // Calculate price based on duration
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic
//     console.log(formData);
//   };

//   return (
//     <div className="max-w-8xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
//       {/* <h2 className="text-2xl font-bold mb-4 text-center">Booking Form</h2> */}
//       <form onSubmit={handleSubmit} className="space-y-6 font-Poppins text-md">
//         <div className="flex flex-row justify-between gap-5 ">
//           <div className="w-3/5">
//             <label className="block text-gray-700">First Name</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
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
//               name="lastname"
//               value={formData.lastname}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md"
//               placeholder="Enter your last name"
//               required
//             />
//           </div>
//         </div>
//         <div className="flex flex-row justify-between gap-5">
//           <div className="w-3/5">
//             <label className="block text-gray-700">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
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
//               name="phoneNumber"
//               value={formData.phoneNumber}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md"
//               placeholder="Enter your phone number"
//               required
//             />
//           </div>
//         </div>

//         <div className="flex flex-row justify-between gap-5">
//           <div className="w-3/5">
//             <label className="block text-gray-700">Current Pincode</label>
//             <input
//               type="text"
//               name="pincode"
//               value={formData.pincode}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md"
//               placeholder="Enter your pincode"
//               required
//             />
//           </div>

//           <div className="w-3/5">
//             <label className="block text-gray-700">Current Address</label>
//             <textarea
//               name="address"
//               value={formData.address}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md"
//               placeholder="Enter your address"
//               rows="3"
//               required
//             ></textarea>
//           </div>
//         </div>
//         <div className="flex flex-row justify-between gap-5">
//           <div className="w-3/5">
//             <label className="block text-gray-700"> Starting Time</label>
//             <input
//               type="datetime-local"
//               name="bookingTime"
//               value={formData.bookingTime}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md"
//               required
//             />
//           </div>
//           <div className="w-3/5">
//             <label className="block text-gray-700">Ending time </label>
//             <input
//               type="datetime-local"
//               name="bookingTime"
//               value={formData.bookingTime}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md"
//               required
//             />
//           </div>
//         </div>
//         <div className="flex flex-row justify-between gap-5">
//           <div className="w-3/5">
//             <label className="block text-gray-700">Duration</label>
//             <select
//               name="duration"
//               value={formData.duration}
//               onChange={handleSubmit}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md"
//               required
//             >
//               <option value="1">1 Hour</option>
//               <option value="2">2 Hours</option>
//               <option value="3">3 Hours</option>
//               <option value="4">4 Hours</option>
//               <option value="5">5 Hours</option>
//               <option value="6">6 Hours</option>
//               <option value="7">7 Hours</option>
//               <option value="8">8 Hours</option>
//               <option value="9">9 Hours</option>
//               <option value="10">10 Hours</option>
//               <option value="11">11 Hours</option>
//               <option value="12">12 Hours</option>
//               <option value="24">24 Hours</option>
//             </select>
//           </div>

//           <div className="w-3/5">
//             <label className="block text-gray-700">Price</label>
//             <input
//               type="text"
//               name="price"
//               value={`₹${formData.price}`} // Automatically update based on duration
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
// ==============================================
import { useState } from "react";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    phoneNumber: "",
    pincode: "",
    address: "",
    startTime: "",
    endTime: "",
    duration: "1",
    price: 200,
  });

  // Handle form changes for all fields, including duration and time fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "duration") {
      // Update price based on duration
      setFormData({
        ...formData,
        [name]: value,
        price: value * 200,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

  return (
    <div className="max-w-8xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-6 font-Poppins text-md">
        {/* First Name and Last Name */}
        <div className="flex flex-row justify-between gap-5">
          <div className="w-3/5">
            <label className="block text-gray-700">First Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
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
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Enter your last name"
              required
            />
          </div>
        </div>

        {/* Email and Phone Number */}
        <div className="flex flex-row justify-between gap-5">
          <div className="w-3/5">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
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
              name="phoneNumber"
              value={formData.phoneNumber}
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
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Enter your pincode"
              required
            />
          </div>

          <div className="w-3/5">
            <label className="block text-gray-700">Current Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Enter your address"
              rows="3"
              required
            ></textarea>
          </div>
        </div>

        {/* Start Time and End Time */}
        <div className="flex flex-row justify-between gap-5">
          <div className="w-3/5">
            <label className="block text-gray-700">Starting Time</label>
            <input
              type="datetime-local"
              name="startTime"
              value={formData.startTime}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="w-3/5">
            <label className="block text-gray-700">Ending Time</label>
            <input
              type="datetime-local"
              name="endTime"
              value={formData.endTime}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
        </div>

        {/* Duration and Price */}
        <div className="flex flex-row justify-between gap-5">
          <div className="w-3/5">
            <label className="block text-gray-700">Duration</label>
            <select
              name="duration"
              value={formData.duration}
              onChange={handleChange} // Corrected to use handleChange
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            >
              <option value="1">1 Hour</option>
              <option value="2">2 Hours</option>
              <option value="3">3 Hours</option>
              <option value="4">4 Hours</option>
              <option value="5">5 Hours</option>
              <option value="6">6 Hours</option>
              <option value="7">7 Hours</option>
              <option value="8">8 Hours</option>
              <option value="9">9 Hours</option>
              <option value="10">10 Hours</option>
              <option value="11">11 Hours</option>
              <option value="12">12 Hours</option>
              <option value="24">24 Hours</option>
            </select>
          </div>

          <div className="w-3/5">
            <label className="block text-gray-700">Price</label>
            <input
              type="text"
              name="price"
              value={`₹${formData.price}`}
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
