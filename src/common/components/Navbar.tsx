import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks/storeHooks";
import { BsPlusCircleFill } from "react-icons/bs";
import { logoutUser } from "../../features/auth/authActions";

interface Props {
  title: string;
  openDrawer: () => void;
}

const Navbar: React.FC<Props> = ({ title, openDrawer }) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);
  const authenticated = useAppSelector((state) => state.auth.authenticated);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <nav className="navbar">
      <div className="navbar__avatar">
        <div className="avatar" tabIndex={0} onClick={handleLogout}></div>
      </div>
      <header className="navbar__header">{`${title} [${user.display_name}]`}</header>
      {authenticated && (
        <button className="button--circle" onClick={openDrawer}>
          <BsPlusCircleFill />
        </button>
      )}
    </nav>
  );
};

export default Navbar;
