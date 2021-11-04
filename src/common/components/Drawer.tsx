import React from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

interface Props {
  children: React.ReactNode;
  title: string;
  open: boolean;
  closeFunction: () => void;
  zIndex?: number;
}

const Drawer: React.FC<Props> = ({
  children,
  title,
  open,
  closeFunction,
  zIndex = 0,
}) => {
  return (
    <div
      className={`drawer ${open ? "drawer--open" : "drawer--close"}`}
      style={{ zIndex: zIndex + 10 }}
    >
      <div className="drawer__header">
        <div className="drawer__back_container">
          <button
            className="button--circle button--circle--back"
            onClick={closeFunction}
          >
            <BsFillArrowLeftCircleFill />
          </button>
        </div>
        <div className="drawer__title_container">{title}</div>
      </div>
      <div className="drawer__body">{children}</div>
    </div>
  );
};

export default Drawer;
