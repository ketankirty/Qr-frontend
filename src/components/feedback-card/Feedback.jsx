import { useState } from "react";
import { Send } from "lucide-react";

function Feedback() {
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://qr-backend-ywri.onrender.com/api/feedback", {
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
    <div className="p-4 shadow-lg rounded-2xl bg-gradient-to-t from-orange-100 to-yellow-100 w-full max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-3 text-center">We Value Your Feedback</h2>

      {submitted && (
        <div className="bg-green-400 text-white p-2 mb-3 rounded-lg text-center">
          ✅ Thanks for your feedback!
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Rating */}
        <div className="flex justify-center gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              className={`text-3xl ${star <= rating ? "text-yellow-500" : "text-gray-400"}`}
            >
              ★
            </button>
          ))}
        </div>

        {/* Message */}
        <textarea
          className="border-2 rounded-lg p-2 h-28"
          placeholder="Write your feedback here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        {/* Submit */}
        <button
          type="submit"
          className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:scale-105 transition-transform"
        >
          <Send size={18} /> Submit Feedback
        </button>
      </form>
    </div>
  );
}

export default Feedback;
