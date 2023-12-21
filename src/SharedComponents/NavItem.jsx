import { NavLink } from "react-router-dom";

const NavItem = ({ itemName, pathName }) => {
  return (
    <NavLink
      to={pathName}
      className={({ isActive, isPending }) =>
        isPending
          ? "pending"
          : isActive
          ? "border-b-2 border-black-300 text-black-300 font-bold bg-slate-300"
          : ""
      }
    >
      {itemName}
    </NavLink>
  );
};

export default NavItem;
