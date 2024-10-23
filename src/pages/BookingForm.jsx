import { useState } from "react";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    phoneNumber: "",
    pincode: "",
    address: "",
    bookingTime: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

  return (
    <div className="max-w-8xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      {/* <h2 className="text-2xl font-bold mb-4 text-center">Booking Form</h2> */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
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

        <div>
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

        <div>
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

        <div>
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

        <div>
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

        <div>
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

        <div>
          <label className="block text-gray-700">Time of Booking</label>
          <input
            type="datetime-local"
            name="bookingTime"
            value={formData.bookingTime}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
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
