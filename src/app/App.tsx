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
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="user/:user_tag">
              <Route path=":user_tag" element={<UserProfile />} />
            </Route>
            <Route path="add_post" element={<AddPost />} />
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
