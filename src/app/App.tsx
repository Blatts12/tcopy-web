import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import { useAppDispatch } from "../common/hooks/storeHooks";
import { loadUser } from "../features/auth/authActions";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";

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
          <Route path="/" element={<Home />} />
          <Route path="/:user_tag" element={<UserProfile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
