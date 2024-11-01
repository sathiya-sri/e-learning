import React, { useState } from "react";

const sampleReviews = [
  {
    id: 1,
    name: "Alice",
    rating: 4,
    comment: "Great instructor! Very knowledgeable.",
  },
  {
    id: 2,
    name: "Bob",
    rating: 5,
    comment: "I learned a lot from this course.",
  },
];

const ReviewPage = () => {
  const [reviews, setReviews] = useState(sampleReviews);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      id: reviews.length + 1,
      name,
      rating: parseInt(rating),
      comment,
    };
    setReviews([...reviews, newReview]);
    setName("");
    setRating(1);
    setComment("");
  };

  return (
    <div className="flex flex-col px-40 py-10">
     <div className="flex flex-col  gap-4 w-[80%] bg-white p-10 rounded-sm shadow" >
     <h1 className="text-xl font-semibold p-4 tracking-wide">Reviews</h1>

{/* List of Reviews */}
<div className="p-4 rounded ">
  {reviews.map((review) => (
    <div key={review.id} className="border-b py-2">
      <h2 className="text-lg font-medium">{review.name}</h2>
      <p className="text-yellow-500">Rating: {review.rating} </p>
      <p>{review.comment}</p>
    </div>
  ))}
</div>

{/* Review Form */}
<form className="mt-6  p-4 rounded flex items-center  justify-center flex-col" onSubmit={handleSubmit}>
  <h2 className="text-lg font-medium mb-2 ">Leave a Review</h2>
  <div className="flex flex-col gap-2">
    <input
      type="text"
      placeholder="Your Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      className="border-[1px] border-black p-2 rounded w-[500px] outline-none cursor-pointer "
      required
    />
    <select
      value={rating}
      onChange={(e) => setRating(e.target.value)}
      className="border-[1px] border-black p-2 rounded outline-none cursor-pointer"
      required
    >
      <option value="1">1 Star</option>
      <option value="2">2 Stars</option>
      <option value="3">3 Stars</option>
      <option value="4">4 Stars</option>
      <option value="5">5 Stars</option>
    </select>
    <textarea
      placeholder="Your Review"
      value={comment}
      onChange={(e) => setComment(e.target.value)}
      className="border-[1px] border-black outline-none p-2 rounded"
      required
    />
    <button type="submit" className="bg-teal-500 text-white p-2 rounded mt-2 border-2 border-teal-500 hover:text-black hover:bg-transparent">
      Submit Review
    </button>
  </div>
</form>
     </div>
    </div>
  );
};

export default ReviewPage;
