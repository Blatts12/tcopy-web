import { useState } from "react";
import Header from "../common/components/Header";
import Container from "../common/components/Container";
import { GlobalStyle, Theme } from "./theme";
import FeedComponent from "../features/feed/FeedComponent";

function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  return (
    <Theme darkTheme={darkTheme}>
      <GlobalStyle />
      <Container>
        <Header>Najnowsze</Header>
        <FeedComponent />
      </Container>
    </Theme>
  );
}

export default App;
