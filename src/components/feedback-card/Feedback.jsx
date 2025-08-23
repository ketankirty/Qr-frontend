import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Star } from "lucide-react";
import step from "../feedback-card/stepdown.jpg";

const categories = [
  "Food Quality",
  "Service",
  "Ambiance",
  "Value for Money",
  "Overall Experience",
];

const StarRatingForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const [ratings, setRatings] = useState({
    "Food Quality": 0,
    Service: 0,
    Ambiance: 0,
    "Value for Money": 0,
    "Overall Experience": 0,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleRating = (category, value) => {
    setRatings((prev) => ({ ...prev, [category]: value }));
  };

  const onSubmit = async (data) => {
    const feedbackData = {
      name: data.name,
      message: data.message,
      foodQuality: ratings["Food Quality"],
      service: ratings["Service"],
      ambiance: ratings["Ambiance"],
      valueForMoney: ratings["Value for Money"],
      overallExperience: ratings["Overall Experience"],
    };

    try {
      const res = await fetch("http://localhost:5000/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(feedbackData),
      });

      if (!res.ok) throw new Error("Failed to submit feedback");

      reset();
      setRatings({
        "Food Quality": 0,
        Service: 0,
        Ambiance: 0,
        "Value for Money": 0,
        "Overall Experience": 0,
      });
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error("❌ Error submitting feedback:", err);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Image */}
      <div className="w-full md:w-1/2 h-64 md:h-auto">
        <img
          src={step}
          alt="Feedback"
          className="w-full h-full object-cover rounded-t-2xl md:rounded-tl-2xl md:rounded-bl-2xl"
        />
      </div>

      {/* Right Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-gray-50 p-8 rounded-b-2xl md:rounded-tr-2xl md:rounded-br-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          We Value Your Feedback
        </h2>

        <form
          className="w-full max-w-md space-y-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Name Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Your Name
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
            />
          </div>

          {/* Star Ratings */}
          <div className="space-y-4">
            {categories.map((category) => (
              <div key={category}>
                <span className="block font-semibold text-gray-700 mb-1">
                  {category}
                </span>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, index) => {
                    const starValue = index + 1;
                    return (
                      <Star
                        key={index}
                        size={28}
                        className={`cursor-pointer ${starValue <= ratings[category]
                            ? "text-yellow-400"
                            : "text-gray-300"
                          }`}
                        onClick={() => handleRating(category, starValue)}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Your Feedback
            </label>
            <textarea
              {...register("message", { required: true })}
              placeholder="Write your feedback here..."
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Submit Feedback
          </button>

          {/* Thank You Message */}
          {submitted && (
            <p className="text-green-600 font-semibold text-center mt-4">
              Thanks for your valuable feedback!
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default StarRatingForm;
