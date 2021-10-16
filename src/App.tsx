import { useState } from "react";
import Header from "./components/common/Header";
import FeedList from "./components/feed/FeedList";
import Container from "./components/utils/Container";
import { GlobalStyle, Theme } from "./theme";

function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  return (
    <Theme darkTheme={darkTheme}>
      <GlobalStyle />
      <Container>
        <Header>Najnowsze</Header>
        <FeedList />
      </Container>
    </Theme>
  );
}

export default App;
