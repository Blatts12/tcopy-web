import React from "react";
import { useNavigate, useParams } from "react-router";
import Drawer from "../../common/components/Drawer";

const UserProfile: React.FC = () => {
  const params = useParams();
  const navigate = useNavigate();

  return (
    <Drawer
      zIndex={1}
      title={`${params.user_tag}`}
      closeFunction={() => navigate("/")}
    >
      {params.user_tag}
    </Drawer>
  );
};

export default UserProfile;
