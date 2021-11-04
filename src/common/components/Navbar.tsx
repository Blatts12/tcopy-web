import React from "react";
import { useAppSelector } from "../hooks/storeHooks";
import { BsPlusCircleFill } from "react-icons/bs";
import { useToggle } from "react-use";
import Drawer from "./Drawer";
import UserPanel from "./UserPanel";

interface Props {
  title: string;
  openDrawer: () => void;
}

const Navbar: React.FC<Props> = ({ title, openDrawer }) => {
  const user = useAppSelector((state) => state.auth.user);
  const authenticated = useAppSelector((state) => state.auth.authenticated);
  const [openUserPanel, toggleUserPanel] = useToggle(false);

  return (
    <nav className="navbar">
      <div className="navbar__avatar">
        <div className="avatar" tabIndex={0} onClick={toggleUserPanel}></div>
      </div>
      <Drawer
        title="Twój panel"
        open={openUserPanel}
        closeFunction={toggleUserPanel}
      >
        <UserPanel />
      </Drawer>
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
