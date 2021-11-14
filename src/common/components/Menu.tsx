import React from "react";

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
          <button className="button button--action" onClick={closeFunction}>
            Close
          </button>
        </div>
        <div className="menu__content">{children}</div>
      </div>
    </div>
  );
});

export default Menu;
