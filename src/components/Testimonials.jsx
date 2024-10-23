// Testimonial.js

import React from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Jane Doe",
    image: "https://via.placeholder.com/150",
    review:
      "This product exceeded my expectations! I would definitely recommend it to others.",
    rating: 5,
  },
  {
    id: 2,
    name: "John Smith",
    image: "https://via.placeholder.com/150",
    review:
      "Great quality and fast shipping. The customer service was also very helpful.",
    rating: 4,
  },
  {
    id: 3,
    name: "Sara Lee",
    image: "https://via.placeholder.com/150",
    review:
      "I love the design and the functionality of this product.  It's perfect for my needs.",
    rating: 5,
  },
  {
    id: 4,
    name: "Michael Johnson",
    image: "https://via.placeholder.com/150",
    review:
      "Affordable and reliable. I've been using it for a whilenow and it hasn't disappointed.",
    rating: 4,
  },
  {
    id: 5,
    name: "Emily Watson",
    image: "https://via.placeholder.com/150",
    review:
      "The best product in its category. I can't imagine going back to anything else.",
    rating: 5,
  },
  {
    id: 6,
    name: "David Lee",
    image: "https://via.placeholder.com/150",
    review: "Solid performance and great value for money. Highly recommended!",
    rating: 5,
  },
];

const Testimonial = () => {
  const handleCardClick = (id) => {
    console.log(`Card with ID ${id} clicked!`);
    // You can also navigate to a detailed page or perform any action here
  };

  return (
    <div className="flex flex-col items-center p-6  text-black ">
      <h1 className="text-3xl font-bold text-black mb-8">Testimonials</h1>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8
 max-w-6xl"
      >
        {testimonials.map(({ id, name, image, review, rating }) => (
          <div
            key={id}
            className="bg-white rounded-lg p-6 shadow-lg hover:transform 
                        hover:transition-transform hover:duration-200 hover:scale-105 cursor-pointer"
            onClick={() => handleCardClick(id)} // Make the card clickable
          >
            <div className="flex items-center mb-4">
              <img
                className="w-16 h-16 rounded-full mr-4"
                src={image}
                alt={name}
              />
              <div>
                <h2 className="font-semibold text-lg">{name}</h2>
                <div className="flex text-yellow-500">
                  {[...Array(rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600 italic">
              <FaQuoteLeft className="inline mr-2 text-gray-400" />
              {review}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
