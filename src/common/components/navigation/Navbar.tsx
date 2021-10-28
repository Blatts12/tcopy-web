import React from "react";

interface Props {
  title: string;
}

const Navbar: React.FC<Props> = ({ title }) => {
  return (
    <nav className="navbar">
      <div className="navbar__avatar">
        <div className="avatar"></div>
      </div>
      <header className="navbar__header">{title}</header>
    </nav>
  );
};

export default Navbar;
