import React from "react";

interface Props {
  children: React.ReactNode;
  title: string;
  open: boolean;
  closeFunction: () => void;
}

const Drawer: React.FC<Props> = ({ children, title, open, closeFunction }) => {
  return (
    <div className={`drawer ${open ? "drawer--open" : "drawer--close"}`}>
      <div className="drawer__header">
        <div className="drawer__back_container">
          <button className="drawer__back" onClick={closeFunction}>
            &lt;
          </button>
        </div>
        <div className="drawer__title_container">{title}</div>
      </div>
      <div className="drawer__body">{children}</div>
    </div>
  );
};

export default Drawer;
