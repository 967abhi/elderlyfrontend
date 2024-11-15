import React from "react";

const Contact = () => {
  return (
    <section className="mx-auto px-4  max-w-screen-xl ">
      <div className="flex justify-center text-center text-2xl font-Poppins mt-[60px] font-semibold ">
        <h1>Contact Us</h1>
      </div>
      <div className="mt-[60px] text-4xl font-semibold font-Poppins">
        <h1>
          Get In Touch <span className="text-[#01b43e]">with Us</span>{" "}
        </h1>
      </div>
      <div className="flex mt-[50px]">
        <div className="bg-white shadow-lg w-[650px] ">
          <form
            // onSubmit={handleSubmit}
            className="space-y-6 font-Poppins text-md w-[550px] ml-[50px] pt-8 pb-8  "
          >
            <div className="">
              <label className="block text-gray-700">First Name</label>
              <input
                type="text"
                name="userfirstname"
                //   value={formData.userfirstname}
                //   onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Enter your first name"
                required
              />
            </div>

            <div className="">
              <label className="block text-gray-700">Last Name</label>
              <input
                type="text"
                name="userlastname"
                //   value={formData.userlastname}
                //   onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Enter your last name"
                required
              />
            </div>
            {/* Additional form fields for Email, Phone Number, etc. */}

            <div className="">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="useremail"
                //   value={formData.useremail}
                //   onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="">
              <label className="block text-gray-700">Phone Number</label>
              <input
                type="tel"
                name="userphonenumber"
                //   value={formData.userphonenumber}
                //   onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Enter your phone number"
                required
              />
            </div>

            {/* Pincode and Address */}

            {/* Start Time and End Time */}
            <div className="">
              <label className="block text-gray-700">Message</label>
              <textarea
                name="usercurrentaddress"
                //   value={formData.usercurrentaddress}
                //   onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Enter your Message"
                rows="3"
                required
              ></textarea>
            </div>

            {/* Additional form fields for Email, Phone Number, etc. */}

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
        <div className="ml-6">
          {/* Uncomment and add the image source if needed */}
          {/* <img src="" alt="Location" /> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3332.298292039867!2d77.07753057528463!3d28.51685267572816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d194b386c6f89%3A0x890e1885b02297b4!2sNASSCOM%20Innovation%20Hub!5e1!3m2!1sen!2sin!4v1731652297582!5m2!1sen!2sin"
            width="600"
            height="650"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
          ></iframe>
        </div>
      </div>
      <div className="-mt-[1600px]"></div>
    </section>
  );
};

export default Contact;
