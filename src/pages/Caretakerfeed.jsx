// ===========================
import { useEffect, useState } from "react";
import home from "../assets/feed.png";

import { useNavigate } from "react-router";

// import { Shimmer } from "react-shimmer";

const StepCard = ({ stepNumber, title, description, imgSrc }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white shadow-md p-4 rounded-lg font-Poppins">
      <div className="text-2xl font-bold text-gray-800 mb-2">{stepNumber}</div>
      <img src={imgSrc} alt={title} className="w-54 h-54 mb-4" />
      <h3 className="text-lg font-semibold text-gray-700 mb-2">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

const Caretakerfeed = () => {
  const [caretakers, setCaretakers] = useState([]);
  const [pincode, setPincode] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const handleBookNow = (id) => {
    navigate(`/userfeed/${id}`);
  };

  const steps = [
    {
      stepNumber: 1,
      title: "Go Down",
      description: "Please wait for the book to arrive",
      imgSrc:
        "https://chefkart-strapi-media.s3.ap-south-1.amazonaws.com/Register_on_app_4372ed1276.svg", // Replace with actual image path
    },
    {
      stepNumber: 2,
      title: "Select Your User",
      description: "Once the Book arrives open and see all the data of user",
      imgSrc:
        "https://chefkart-strapi-media.s3.ap-south-1.amazonaws.com/select_your_service_7ba59dddd5.svg", // Replace with actual image path
    },
    {
      stepNumber: 3,
      title: "Choose the Preferences",
      description: "select the accept button or reject button ",
      imgSrc:
        "https://chefkart-strapi-media.s3.ap-south-1.amazonaws.com/make_payment_50309d2915.svg", // Replace with actual image path
    },
    {
      stepNumber: 4,
      title: "Get a User",
      description:
        "After selected on accept call the user to let them know that you accepted",
      imgSrc:
        "https://chefkart-strapi-media.s3.ap-south-1.amazonaws.com/Get_a_cook_b0e201f46a.svg", // Replace with actual image path
    },
  ];

  // Fetch caretakers based on pincode
  const fetchCaretakers = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("No token found");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/enterthepincode", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ pincode }), // Send pincode in the request body
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message);
        throw new Error(data.message || "Error fetching caretakers");
      }

      console.log("Fetched caretakers data:", data);

      if (data.data && Array.isArray(data.data)) {
        setCaretakers(data.data); // Set caretakers to the state
        setError(null); // Reset error
      } else {
        setError("No caretakers found");
        console.error("Fetched data is not an array:", data);
      }
    } catch (error) {
      console.error("Error fetching caretakers:", error);
      setError("An error occurred while fetching caretakers.");
    }
  };

  // Handle search button click
  const handleSearch = () => {
    if (pincode) {
      fetchCaretakers();
    } else {
      setError("Please enter a pincode");
    }
  };

  return (
    <section className=" ">
      <div
        className=""
        style={{
          backgroundImage: `url(${home})`,
          backgroundSize: "cover", // Ensures the image covers the entire width and height
          backgroundPosition: "center", // Centers the image
          backgroundRepeat: "no-repeat", // Prevents the image from repeating
          width: "100%", // Ensures it fits the container width
          height: "100vh", // Makes the background image cover the full viewport height
        }}
      >
        <div className="max-w-screen-xl mx-auto px-4 h-full ">
          <div className="flex flex-col gap-4 text-start justify-center h-full font-Poppins">
            {/* <p className="text-4xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent"> */}
            <p className="text-sm uppercase w-96 h-8 font-semibold  text-[#fff] bg-[#593f62] font-Poppins px-2 py-2 rounded-lg">
              Now available across Delhi and Gurgaon
            </p>
            <p className="text-5xl font-semibold  text-white font-Poppins">
              Choose your caretaker <br></br>
              <span className="text-5xl">
                online and give the best services
              </span>
            </p>
            <h1 className="text-xl text-green-500 font-light font-Poppins">
              Find Your Perfect Elderly
            </h1>
            <div className=" flex flex-row justify-start gap-16">
              <button className=" w-52 h-10 bg-[#0c376f] text-white font-Poppins text-xl rounded-md">
                Download App
              </button>
            </div>
          </div>
          {/* adding affordable section  */}
          <div className="mt-12">
            <div>
              {/* <div className="flex justify-center font-Poppins font-semibold text-2xl">
                <h1>How it Works</h1>
              </div> */}
            </div>
            <div className="flex flex-row justify-between">
              <div className="max-w-6xl  mx-auto py-10 px-4">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                  How It Works
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
                  {steps.map((step, index) => (
                    <StepCard
                      key={index}
                      stepNumber={step.stepNumber}
                      title={step.title}
                      description={step.description}
                      imgSrc={step.imgSrc}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex flex-row justify-between">
              <h2 className="text-xl font-semibold mb-4">
                Search Caretakers by Pincode
              </h2>
              <input
                type="text"
                placeholder="Enter pincode"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                className="pincode-input border border-gray-300 rounded-md p-2 mb-4 w-[400px]"
              />
              <button
                onClick={handleSearch}
                className="w-52 h-10 bg-[#0c376f] text-white font-Poppins text-xl rounded-md"
              >
                Search
              </button>
            </div>

            {/* Show error message if any */}
            {error && <p className="error-message text-red-500">{error}</p>}

            {/* Display fetched caretaker data */}
            {/* <S /> */}
            {/* <ShimmerDiv mode="light" height={100} width={100} /> */}
            {caretakers.length > 0 ? (
              <div className="caretaker-list mt-6 flex flex-wrap    gap-4">
                {caretakers.map((caretaker, index) => (
                  // <div
                  //   key={index}
                  //   className={`caretaker-card  ${
                  //     caretaker.status === "accepted"
                  //       ? "bg-white  border-2   "
                  //       : "bg-white"
                  //   } shadow-lg rounded-lg p-4 flex flex-col md:flex-row items-start w-[380px] h-[280px] gap-8`}
                  // >
                  //   <img
                  //     src={caretaker.imageUrl} // Ensure you have the correct URL for the image
                  //     alt={`${caretaker.name}`}
                  //     className="w-24 h-24 rounded-full border-2 border-green-500 mr-4"
                  //   />

                  //   <div className="flex flex-row justify-around font-Poppins leading-8">
                  //     <div className="flex flex-col">
                  //       <h3 className="text-lg font-bold">
                  //         {caretaker.firstname}
                  //       </h3>
                  //       <p className="text-sm text-gray-500">
                  //         {caretaker.address}
                  //       </p>
                  //       <p className="text-md font-semibold text-yellow-300">
                  //         ★★★★ {caretaker.rating} ({caretaker.ratingCount}{" "}
                  //         Ratings)
                  //       </p>
                  //       <p className="text-sm">
                  //         Phone: {caretaker.phonenumber}
                  //       </p>
                  //       <p className="text-sm">
                  //         Experience: {caretaker.experience} Years
                  //       </p>
                  //       <span className="bg-green-100 w-20 h-5 text-green-700 text-sm font-semibold flex justify-center text-center rounded-full mt-2">
                  //         Verified
                  //       </span>
                  //       {caretaker.status === "accepted" && (
                  //         <span className="text-red-500  text-sm mt-2 font-semibold">
                  //           currently Unavailable
                  //         </span>
                  //       )}
                  //       <div className="flex flex-row justify-center mt-[32px]">
                  //         <button
                  //           className="w-32 h-10 bg-[#0c376f] text-white font-Poppins text-xl rounded-md"
                  //           onClick={() => handleBookNow(caretaker._id)}
                  //         >
                  //           Book Now
                  //         </button>
                  //       </div>
                  //     </div>
                  //   </div>
                  // </div>
                  <div
                    key={index}
                    className={`caretaker-card  ${
                      caretaker.status === "accepted"
                        ? "bg-white border-2"
                        : "bg-white"
                    } shadow-lg rounded-lg p-4 flex flex-col md:flex-row items-start w-[380px] h-[280px] gap-8`}
                  >
                    {/* Show Shimmer until the image is loaded */}

                    {/* Show the image and hide the shimmer after the image is loaded */}
                    <img
                      src={caretaker.imageUrl} // Ensure you have the correct URL for the image
                      alt={`${caretaker.name}`}
                      className={`w-24 h-24 rounded-full border-2 border-green-500 mr-4 ${
                        isImageLoaded ? "block" : "hidden"
                      }`} // Hide the image until it has loaded
                      onLoad={() => setIsImageLoaded(true)} // Once the image is loaded, update the state
                    />

                    <div className="flex flex-col justify-around font-Poppins leading-8">
                      <h3 className="text-lg font-bold">
                        {caretaker.firstname}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {caretaker.address}
                      </p>
                      <p className="text-md font-semibold text-yellow-300">
                        ★★★★ {caretaker.rating} ({caretaker.ratingCount}{" "}
                        Ratings)
                      </p>
                      <p className="text-sm">Phone: {caretaker.phonenumber}</p>
                      <p className="text-sm">
                        Experience: {caretaker.experience} Years
                      </p>
                      <span className="bg-green-100 w-20 h-5 text-green-700 text-sm font-semibold flex justify-center text-center rounded-full mt-2">
                        Verified
                      </span>
                      {caretaker.status === "accepted" && (
                        <span className="text-red-500 text-sm mt-2 font-semibold">
                          Currently Unavailable
                        </span>
                      )}
                      <div
                        className="flex flex-row justify-center mt-[32px]"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <button
                          className="w-32 h-10 bg-[#0c376f] text-white font-Poppins text-xl rounded-md"
                          onClick={() => handleBookNow(caretaker._id)}
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                {/* <div>
                  <CaretakerCard caretaker={caretakers} />
                </div> */}
              </div>
            ) : (
              <p>No caretakers found for this pincode</p>
            )}
          </div>
          {/* =============== */}
        </div>
      </div>
      <div className="mt-[400px] h-[450px]"></div>
    </section>
  );
};

export default Caretakerfeed;
