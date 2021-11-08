import React, { useCallback } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useNavigate, useParams } from "react-router";

const UserProfile: React.FC = () => {
  const params = useParams();
  const navigate = useNavigate();

  const goHome = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="user_profile">
      <header className="drawer__header">
        <div className="drawer__back_container">
          <button
            className="button--circle button--circle--back"
            onClick={goHome}
          >
            <BsFillArrowLeftCircleFill />
          </button>
        </div>
        <div className="drawer__title_container">{params.user_tag}</div>
      </header>
    </div>
  );
};

export default UserProfile;
