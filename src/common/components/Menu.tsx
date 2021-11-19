import React from "react";
import Button from "./Button";

interface Props {
  children: React.ReactNode;
  closeFunction: () => void;
}

const Menu = React.memo(({ children, closeFunction }: Props) => {
  const closeMenu: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();

    if (e.target === e.currentTarget) {
      closeFunction();
    }
  };

  return (
    <div className="menu" onClick={closeMenu}>
      <div className="menu__body">
        <div className="menu__close">
          <Button type="action" length="long" onClick={closeFunction}>
            Close
          </Button>
        </div>
        <div className="menu__content">{children}</div>
      </div>
    </div>
  );
});

export default Menu;
