import React from "react";
import { NavLink } from "react-router";

const CommonNav = ({ to, children }) => {
  return (
    <div>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `${isActive && "text-purple-500 border-b border-purple-500"}`
        }
      >
        {children}
      </NavLink>
    </div>
  );
};

export default CommonNav;
