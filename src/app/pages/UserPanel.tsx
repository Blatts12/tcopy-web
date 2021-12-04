import React, { useCallback, useMemo } from "react";
import { Outlet, useNavigate } from "react-router";
import Button from "../../common/components/Button";
import Drawer from "../../common/components/Drawer";
import { useAppDispatch, useAppSelector } from "../../common/hooks/storeHooks";
import { logoutUser } from "../../features/auth/authActions";

const UserPanel: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user, authenticated } = useAppSelector((state) => state.auth);

  const handleLogout = useCallback(() => {
    dispatch(logoutUser());
  }, [dispatch]);

  const unauthUser = useMemo(
    () => (
      <>
        <Button type="action" length="long" onClick={() => navigate("login")}>
          Login
        </Button>
        <Button
          type="action"
          length="long"
          onClick={() => navigate("register")}
        >
          Sign up
        </Button>
      </>
    ),
    [navigate]
  );

  const authUser = useMemo(() => {
    if (!user) return <></>;
    return (
      <>
        <span>Hello, {user.user_tag}!</span>
        <Button
          type="action"
          length="long"
          onClick={() => navigate(`/user/${user.user_tag}`)}
        >
          Profile
        </Button>
        <Button type="action" length="long" onClick={handleLogout}>
          Logout
        </Button>
      </>
    );
  }, [handleLogout, user]);

  return (
    <Drawer zIndex={1} title="User Panel" closeFunction={() => navigate("/")}>
      {authenticated ? authUser : unauthUser}
      <Outlet />
    </Drawer>
  );
};

export default UserPanel;
