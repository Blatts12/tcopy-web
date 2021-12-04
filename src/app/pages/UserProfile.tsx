import React, { useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router";
import Drawer from "../../common/components/Drawer";
import Loading from "../../common/components/Loading";
import { useAppDispatch, useAppSelector } from "../../common/hooks/storeHooks";
import { fetchUserByUserTag } from "../../features/user/userActions";

interface Params {
  user_tag: string;
}

const UserProfile: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    user,
    ui: { loading },
  } = useAppSelector((state) => state.user);
  const { user_tag } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserPromise = dispatch(
      fetchUserByUserTag({ user_tag: user_tag || "" })
    );
    fetchUserPromise.unwrap().catch(() => {
      navigate("/");
    });
    return () => {
      fetchUserPromise.abort();
    };
  }, [user_tag]);

  return (
    <Drawer
      zIndex={1}
      title={user && !loading ? user.display_name : ""}
      closeFunction={() => navigate("/")}
    >
      {user && !loading ? user.display_name : <Loading />}
      <i>WIP</i>
    </Drawer>
  );
};

export default UserProfile;
