import React from "react";
import { Link } from "react-router-dom";

const SubscriptionInfo = ({ price, id }) => {
  return (
    <div className="ml-auto flex items-center gap-10">
      <p className={`text-lg font-extrabold cursor-pointer ${price > 0 ? "text-red-500" : "text-teal-500"}`}>
        {price > 0 ? "PAID" : "FREE"}
      </p>
      <Link to={`/course/${id}/register`}>
        <button className="bg-[#32CCBC] border-2 border-[#32ccbc] text-sm px-6 py-2 text-white font-medium tracking-wider cursor-pointer hover:bg-transparent hover:text-black">
          Enroll Now
        </button>
      </Link>
    </div>
  );
};

export default SubscriptionInfo;
