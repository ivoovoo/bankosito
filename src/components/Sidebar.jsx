import { GoHome } from "react-icons/go";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { TiCreditCard } from "react-icons/ti";
import { PiChatTeardropDots } from "react-icons/pi";
import { RiFileHistoryLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <footer className="flex justify-around py-6 z-0 backdrop-blur-[16px]  left-0 fixed bottom-0 w-full rounded-t-2xl">
      <NavLink
        to="/"
        className={({ isActive }) => isActive ? "text-[#F2FE8D]" : "text-white"}
      >
        <GoHome className="w-6 h-6" />
      </NavLink>

      <NavLink className={({ isActive }) => isActive ? "text-[#F2FE8D]" : "text-white"} to={'/login'}>
           <HiOutlineShoppingBag  className="text-white w-6 h-6" />
      </NavLink>

      <NavLink
        to="/cards"
        className={({ isActive }) => isActive ? "text-[#F2FE8D]" : "text-white"}
      >
        <TiCreditCard className="w-6 h-6" />
      </NavLink>

      <NavLink to="/transfer"
        className={({ isActive }) => isActive ? "text-[#F2FE8D]" : "text-white"}>
          <PiChatTeardropDots className="text-white w-6 h-6" />
      </NavLink>

      <NavLink to="/budget"
        className={({ isActive }) => isActive ? "text-[#F2FE8D]" : "text-white"}>
          <RiFileHistoryLine className="text-white w-6 h-6" />
      </NavLink>
    </footer>
  );
};

export default Sidebar;
