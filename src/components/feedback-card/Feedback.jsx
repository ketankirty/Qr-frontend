import { useState } from "react";
import { Send } from "lucide-react";

function Feedback() {
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rating, message }),
      });

      const result = await res.json();
      console.log("✅ Backend Response:", result);

      setSubmitted(true);
      setMessage("");
      setRating(0);

      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      console.error("❌ Error submitting feedback:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 shadow-lg rounded-xl bg-white">
      {submitted && (
        <div className="bg-green-300 p-2 rounded mb-2 text-center">
          ✅ Thank you for your feedback!
        </div>
      )}

      {/* Rating stars */}
      <div className="flex gap-2 mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => setRating(star)}
            className={`cursor-pointer text-3xl ${
              rating >= star ? "text-yellow-500" : "text-gray-400"
            }`}
          >
            ★
          </span>
        ))}
      </div>

      {/* Message */}
      <textarea
        className="w-full border-2 rounded-lg p-2 mb-4"
        placeholder="Write your feedback..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />

      {/* Submit */}
      <button
        type="submit"
        className="border-2 px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg flex items-center gap-2"
      >
        <Send size={20} /> Submit Feedback
      </button>
    </form>
  );
}

export default Feedback;
