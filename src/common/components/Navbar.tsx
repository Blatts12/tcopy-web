import React from "react";
import { useAppSelector } from "../hooks/storeHooks";
import { BsPlusCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router";

interface Props {
  title: string;
}

const Navbar = React.memo(({ title }: Props) => {
  const navigate = useNavigate();
  const authenticated = useAppSelector((state) => state.auth.authenticated);

  return (
    <nav className="navbar">
      <div className="navbar__avatar">
        <div
          className="avatar"
          tabIndex={0}
          onClick={() => navigate("/user_panel")}
        ></div>
      </div>
      <header className="navbar__header">{title}</header>
      {authenticated && (
        <button
          className="button--circle"
          onClick={() => navigate("/add_post")}
        >
          <BsPlusCircleFill />
        </button>
      )}
    </nav>
  );
});

export default Navbar;
