import React, { useCallback, useMemo } from "react";
import { Outlet, useNavigate } from "react-router";
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
        <button
          className="button button--action button--big"
          onClick={() => navigate("login")}
        >
          Login
        </button>
        <button
          className="button button--action button--big"
          onClick={() => navigate("register")}
        >
          Sign up
        </button>
      </>
    ),
    [navigate]
  );

  const authUser = useMemo(
    () => (
      <>
        <span>Hello, {user.user_tag}!</span>
        <button
          onClick={() => navigate(`/user/${user.user_tag}`)}
          className="button button--action button--big"
        >
          Profile
        </button>
        <button
          className="button button--action button--big"
          onClick={handleLogout}
        >
          Logout
        </button>
      </>
    ),
    [handleLogout, user]
  );

  return (
    <Drawer zIndex={1} title="User Panel" closeFunction={() => navigate("/")}>
      {authenticated ? authUser : unauthUser}
      <Outlet />
    </Drawer>
  );
};

export default UserPanel;
