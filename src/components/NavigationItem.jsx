import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavigationItem = ({ to, icon: Icon, label }) => {
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);

  // Check if the current path matches the `to` prop
  useEffect(() => {
    setIsActive(location.pathname === to);
  }, [location.pathname, to]);

  return (
    <li
      className={`${isActive ? 'border-[#32CCBC] bg-white' : 'border-transparent'} text-center p-4 cursor-pointer font-medium flex items-center justify-center border-t-4`}
    >
      <Link to={to} className="flex items-center gap-2 text-[15px]">
        <span className={`${isActive ? 'text-[#32ccbc]' : 'text-black'}`}>
          <Icon size={20} /> 
        </span>
        {label}
      </Link>
    </li>
  );
};

export default NavigationItem;






