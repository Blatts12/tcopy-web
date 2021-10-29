import React from "react";

interface Props {
  title: string;
  openDrawer: () => void;
}

const Navbar: React.FC<Props> = ({ title, openDrawer }) => {
  return (
    <nav className="navbar">
      <div className="navbar__avatar">
        <div className="avatar"></div>
      </div>
      <header className="navbar__header">{title}</header>
      <button onClick={openDrawer}>D</button>
    </nav>
  );
};

export default Navbar;
