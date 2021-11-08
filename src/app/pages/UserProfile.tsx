import React from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useParams } from "react-router";

const UserProfile: React.FC = () => {
  const params = useParams();
  return (
    <>
      <header className="drawer__header">
        <div className="drawer__back_container">
          <button className="button--circle button--circle--back">
            <BsFillArrowLeftCircleFill />
          </button>
        </div>
        <div className="drawer__title_container">{params.user_tag}</div>
      </header>
    </>
  );
};

export default UserProfile;
