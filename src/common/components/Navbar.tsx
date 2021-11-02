import React from "react";
import { useAppSelector } from "../hooks/storeHooks";
import { BsPlusCircleFill } from "react-icons/bs";

interface Props {
  title: string;
  openDrawer: () => void;
}

const Navbar: React.FC<Props> = ({ title, openDrawer }) => {
  const user = useAppSelector((state) => state.auth.user);

  return (
    <nav className="navbar">
      <div className="navbar__avatar">
        <div className="avatar" tabIndex={0}></div>
      </div>
      <header className="navbar__header">{`${title} [${user.display_name}]`}</header>
      <button className="button--circle" onClick={openDrawer}>
        <BsPlusCircleFill />
      </button>
    </nav>
  );
};

export default Navbar;
