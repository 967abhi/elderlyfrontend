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
        // navigate("/ordernow"); // Redirect after successful submission
        navigate(`/ordernow/${id}`);
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
              name="usercurrentaddress"
              value={formData.usercurrentaddress}
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
