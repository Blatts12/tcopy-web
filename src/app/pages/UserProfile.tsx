import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
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
    const loadUserPromise = dispatch(
      fetchUserByUserTag({ user_tag: user_tag || "" })
    );
    loadUserPromise.unwrap().then((result) => {
      if (!result.id) navigate("/");
    });
    return () => {
      loadUserPromise.abort();
    };
  }, [user_tag]);

  return (
    <Drawer
      zIndex={1}
      title={user.display_name}
      closeFunction={() => navigate("/")}
    >
      {loading || user.user_tag !== user_tag ? <Loading /> : user.display_name}
      <i>WIP</i>
    </Drawer>
  );
};

export default UserProfile;
