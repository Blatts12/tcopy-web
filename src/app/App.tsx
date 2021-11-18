import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import { useAppDispatch } from "../common/hooks/storeHooks";
import { loadUser } from "../features/auth/authActions";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";
import AddPost from "./pages/AddPost";
import UserPanel from "./pages/UserPanel";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedElement from "../common/components/ProtectedElement";
import PostPage from "./pages/PostPage";
import Toasts from "../features/toast/Toasts";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const loadUserPromise = dispatch(loadUser());
    return () => {
      loadUserPromise.abort();
    };
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="app">
        <Toasts />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="user">
              <Route path=":user_tag" element={<UserProfile />} />
              <Route path=":user_tag/:post_id" element={<PostPage />} />
            </Route>
            <Route
              path="add_post"
              element={
                <ProtectedElement>
                  <AddPost />
                </ProtectedElement>
              }
            />
            <Route path="user_panel" element={<UserPanel />}>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
