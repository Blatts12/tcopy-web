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
        <button onClick={() => setDarkTheme(!darkTheme)}>Change Theme</button>
      </Container>
    </Theme>
  );
}

export default App;
