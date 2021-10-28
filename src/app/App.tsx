import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router";
import { useAppDispatch } from "../common/hooks/storeHooks";
import { loadUser } from "../features/auth/authActions";
import Home from "./pages/Home";

// const AppContainer = styled.div`
//   position: relative;
//   display: grid;
//   grid-template-areas: "leftbar content rightbar";
//   grid-template-columns: 1fr 2fr 1fr;

//   width: 1200px;

//   margin: 0px auto;

//   @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
//     width: 400px;
//     grid-template-columns: 1fr 4fr 0fr;
//     background: red;
//   }

//   @media (min-width: ${({ theme }) => theme.breakpoints.tablet_portrait}) {
//     width: 570px;
//     grid-template-columns: 1fr 4fr 0fr;
//     background: green;
//   }

//   @media (min-width: ${({ theme }) => theme.breakpoints.tablet_landscape}) {
//     width: 800px;
//     grid-template-columns: 1fr 4fr 0fr;
//     background: blue;
//   }

//   @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
//     grid-template-columns: 1fr 2fr 1fr;
//     width: 1100px;
//     background: yellow;
//   }

//   @media (min-width: ${({ theme }) => theme.breakpoints.desktop_big}) {
//     grid-template-columns: 1fr 2fr 1fr;
//     width: 1300px;
//     background: brown;
//   }

//   @media (min-width: ${({ theme }) => theme.breakpoints.desktop_super_big}) {
//     grid-template-columns: 1fr 2fr 1fr;
//     width: 1600px;
//     background: white;
//   }
// `;

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
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
      {/* <Theme>
        <GlobalStyle />
        <AppContainer>
          <Leftbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
          </Switch>
          <Rightbar />
        </AppContainer>
      </Theme> */}
    </BrowserRouter>
  );
}

export default App;
