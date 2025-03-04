import { useState } from "react";

interface RatingProps {
  onSubmit: (rating: number) => void;
}

const Rating = ({ onSubmit }: RatingProps) => {
  const [rating, setRating] = useState(0);

  const handleRating = (value: number) => {
    setRating(value);
  };

  const handleSubmit = () => {
    onSubmit(rating); // Pass the rating back to the parent
  };

  return (
    <div>
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((value) => (
          <span
            key={value}
            onClick={() => handleRating(value)}
            style={{
              cursor: "pointer",
              color: value <= rating ? "gold" : "gray",
            }}
          >
            ★
          </span>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Submit Feedback
      </button>
    </div>
  );
};

export default Rating;
