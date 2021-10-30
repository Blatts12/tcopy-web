import React from "react";
import { useAppSelector } from "../hooks/storeHooks";

interface Props {
  title: string;
  openDrawer: () => void;
}

const Navbar: React.FC<Props> = ({ title, openDrawer }) => {
  const user = useAppSelector((state) => state.auth.user);

  return (
    <nav className="navbar">
      <div className="navbar__avatar">
        <div className="avatar">{user.display_name}</div>
      </div>
      <header className="navbar__header">{title}</header>
      <button onClick={openDrawer}>D</button>
    </nav>
  );
};

export default Navbar;
