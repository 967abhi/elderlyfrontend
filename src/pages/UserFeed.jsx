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
            <div className="w-96  border-2 border-green-500 ">
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
