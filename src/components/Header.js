import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { LOGO } from "../utils/constants";
const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between items-center">
      <img className="w-56 mx-auto md:mx-0" alt="logo" src={LOGO} />
    </div>

export default Header;
