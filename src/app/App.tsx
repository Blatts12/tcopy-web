import { useEffect, useState } from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle, Theme } from "./theme";
import { useAppDispatch } from "../common/hooks/storeHooks";
import { loadUser } from "../features/auth/authActions";
import Leftbar from "../common/components/navigation/Leftbar";
import Rightbar from "../common/components/navigation/Rightbar";
import Home from "./pages/Home";
import Login from "./pages/Login";

const AppContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-areas: "leftbar feed rightbar";
  grid-template-columns: 1fr 2fr 1fr;

  width: 1200px;

  margin: 0px auto;
`;

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const loadUserPromise = dispatch(loadUser());
    return () => {
      loadUserPromise.abort();
    };
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Theme darkTheme={darkTheme}>
        <GlobalStyle />
        <AppContainer>
          <Leftbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
          </Switch>
          <Rightbar />
        </AppContainer>
      </Theme>
    </BrowserRouter>
  );
}

export default App;
