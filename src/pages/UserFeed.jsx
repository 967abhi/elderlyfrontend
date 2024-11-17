import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Testimonial from "../components/Testimonials";
import BookingForm from "./BookingForm";

const UserFeed = () => {
  const { id } = useParams(); // Get the id from the URL
  const [caretaker, setCaretaker] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCaretaker = async () => {
      try {
        const response = await fetch(`http://localhost:3000/caretaker/${id}`);
        const data = await response.json();

        if (response.ok) {
          setCaretaker(data.caretaker);
          setLoading(false);
        } else {
          setError(data.message || "Error fetching caretaker data");
          setLoading(false);
        }
      } catch (error) {
        setError("An error occurred while fetching caretaker data", error);
        setLoading(false);
      }
    };

    fetchCaretaker();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className=" bg-gray-100">
      <div className="max-w-screen-xl   mx-auto px-4 py-20">
        <div className="w-full">
          <div className="flex flex-row gap-16">
            <div className="w-96  border-2 border-green-500 rounded-md">
              <img src={caretaker.imageUrl} alt="" />
            </div>
            <div className="  flex gap-5 flex-col font-Poppins">
              <div className="flex flex-row gap-10">
                <div className="flex items-center gap-5 mt-4">
                  <span className="text-lg font-bold text-black">
                    FirstName:{" "}
                  </span>
                  <span className="ml-2 text-lg text-gray-800">
                    {caretaker.firstname}
                  </span>
                </div>
                <div className="flex items-center gap-5 mt-4">
                  <span className="text-lg font-bold text-black">
                    LastName:{" "}
                  </span>
                  <span className="ml-2 text-lg text-gray-800">
                    {caretaker.lastname}
                  </span>
                </div>
              </div>
              <div className=" flex flex-col font-Poppins">
                <div className="flex flex-row gap-10">
                  <div className="flex items-center gap-5 mt-4">
                    <span className="text-lg font-bold text-black">
                      Email:{" "}
                    </span>
                    <span className="ml-2 text-lg text-gray-800">
                      {caretaker.email}
                    </span>
                  </div>
                </div>
              </div>
              <div className=" flex flex-col font-Poppins">
                <div className="flex flex-row gap-10">
                  <div className="flex items-center gap-5 mt-4">
                    <span className="text-lg font-bold text-black">
                      Phone-Number:{" "}
                    </span>
                    <span className="ml-2 text-lg text-gray-800">
                      {caretaker.phonenumber}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-10">
                <div className="flex items-center gap-5 mt-4">
                  <span className="text-lg font-bold text-black">Gender: </span>
                  <span className="ml-2 text-lg text-gray-800">
                    {caretaker.gender}
                  </span>
                </div>
                <div className="flex items-center gap-5 mt-4">
                  <span className="text-lg font-bold text-black">
                    PinCode:{" "}
                  </span>
                  <span className="ml-2 text-lg text-gray-800">
                    {caretaker.pincode}
                  </span>
                </div>
              </div>
              <div className=" flex flex-col font-Poppins">
                <div className="flex flex-row gap-10">
                  <div className="flex items-center gap-5 mt-4">
                    <span className="text-lg font-bold text-black">
                      Language :{" "}
                    </span>
                    <span className="ml-2 text-lg text-gray-800">
                      {caretaker.language}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="mt-20 ">
            <div className="flex flex-col gap-5">
              <div className="font-Poppins font-semibold text-4xl">
                <h1>Know More About Caretaker</h1>
              </div>
              <div className="font-Poppins text-black text-2xl leading-normal">
                <h1>{caretaker.description}</h1>
              </div>
            </div>
          </div>
        </div>
        <section className="mt-14">
          <div className="flex flex-col">
            <div className="font-Poppins text-black text-2xl font-semibold">
              <h1>Pricing</h1>
            </div>
            <div className="w-full">
              <div className=" min-h-screen mt-[-72px] flex items-center justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Pricing Card 1 */}
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg  w-[400px]">
                    <div className="p-1 bg-blue-200"></div>
                    <div className="p-8">
                      <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Basic Plan
                      </h2>
                      <p className="text-gray-600 mb-6">Weekly Price</p>
                      <p className="text-4xl font-bold text-gray-800 mb-6">
                        &#8377; {caretaker.weeklyprice}
                      </p>
                      <ul className="text-sm text-gray-600 mb-6 font-Poppins">
                        <li className="mb-2 flex items-center">
                          <svg
                            className="w-4 h-4 mr-2 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          Book for 7 Days
                        </li>
                        <li className="mb-2 flex items-center">
                          <svg
                            className="w-4 h-4 mr-2 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          Assist the user with daily activities like bathing,
                          dressing, and mobility.
                        </li>
                        <li className="flex items-center">
                          <svg
                            className="w-4 h-4 mr-2 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          Administer medications at the prescribed time,
                          ensuring adherence to the treatment plan.
                        </li>
                        <li className="flex items-center">
                          <svg
                            className="w-4 h-4 mr-2 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          Provide companionship and emotional support.
                        </li>
                        <li className="flex items-center">
                          <svg
                            className="w-4 h-4 mr-2 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          Ensure personal hygiene and grooming are maintained.
                        </li>
                        <li className="flex items-center">
                          <svg
                            className="w-4 h-4 mr-2 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          Offer night-time care and support, ensuring the user
                          is comfortable throughout the night.
                        </li>
                      </ul>
                    </div>
                    <div className="p-4">
                      <button className="w-full bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
                        Select Plan
                      </button>
                    </div>
                  </div>

                  {/* Pricing Card 2 */}
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg w-[400px] ">
                    <div className="p-1 bg-green-200"></div>
                    <div className="p-8">
                      <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Pro Plan
                      </h2>
                      <p className="text-gray-600 mb-6">Monthly Price</p>
                      <p className="text-4xl font-bold text-gray-800 mb-6">
                        &#8377; {caretaker.monthlyprice}
                      </p>
                      <ul className="text-sm text-gray-600 mb-6 font-Poppins">
                        <li className="mb-2 flex items-center">
                          <svg
                            className="w-4 h-4 mr-2 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          Book for 30 Days
                        </li>
                        <li className="mb-2 flex items-center">
                          <svg
                            className="w-4 h-4 mr-2 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          Assist the user with daily activities like bathing,
                          dressing, and mobility.
                        </li>
                        <li className="flex items-center">
                          <svg
                            className="w-4 h-4 mr-2 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          Administer medications at the prescribed time,
                          ensuring adherence to the treatment plan.
                        </li>
                        <li className="flex items-center">
                          <svg
                            className="w-4 h-4 mr-2 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          Provide companionship and emotional support.
                        </li>
                        <li className="flex items-center">
                          <svg
                            className="w-4 h-4 mr-2 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          Ensure personal hygiene and grooming are maintained.
                        </li>
                        <li className="flex items-center">
                          <svg
                            className="w-4 h-4 mr-2 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          Offer night-time care and support, ensuring the user
                          is comfortable throughout the night.
                        </li>
                      </ul>
                    </div>
                    <div className="p-4">
                      <button className="w-full bg-green-500 text-white rounded-full px-4 py-2 hover:bg-green-700 focus:outline-none focus:shadow-outline-green active:bg-green-800">
                        Select Plan
                      </button>
                    </div>
                  </div>

                  {/* Pricing Card 3 */}
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg w-[400px]">
                    <div className="p-1 bg-purple-200"></div>
                    <div className="p-8">
                      <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Enterprise Plan
                      </h2>
                      <p className="text-gray-600 mb-6">Yearly Plan</p>
                      <p className="text-4xl font-bold text-gray-800 mb-6">
                        &#8377; {caretaker.yearlyprice}
                      </p>
                      <ul className="text-sm text-gray-600 mb-6 font-Poppins">
                        <li className="mb-2 flex items-center">
                          <svg
                            className="w-4 h-4 mr-2 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          Book for 365 Days
                        </li>
                        <li className="mb-2 flex items-center">
                          <svg
                            className="w-4 h-4 mr-2 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          Assist the user with daily activities like bathing,
                          dressing, and mobility.
                        </li>
                        <li className="flex items-center">
                          <svg
                            className="w-4 h-4 mr-2 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          Administer medications at the prescribed time,
                          ensuring adherence to the treatment plan.
                        </li>
                        <li className="flex items-center">
                          <svg
                            className="w-4 h-4 mr-2 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          Provide companionship and emotional support.
                        </li>
                        <li className="flex items-center">
                          <svg
                            className="w-4 h-4 mr-2 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          Ensure personal hygiene and grooming are maintained.
                        </li>
                        <li className="flex items-center">
                          <svg
                            className="w-4 h-4 mr-2 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          Offer night-time care and support, ensuring the user
                          is comfortable throughout the night.
                        </li>
                      </ul>
                    </div>
                    <div className="p-4">
                      <button className="w-full bg-purple-500 text-white rounded-full px-4 py-2 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple active:bg-purple-800">
                        Select Plan
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className=" mt-14">
          <Testimonial className="" />
        </section>
        <section className="mt-14">
          <div className="font-Poppins text-black text-2xl font-semibold">
            <h1>Please Book Me</h1>
          </div>
          <div>
            <BookingForm />
          </div>
        </section>
      </div>
      <section className="mt-[-1800px]"></section>
    </div>
  );
};

export default UserFeed;
