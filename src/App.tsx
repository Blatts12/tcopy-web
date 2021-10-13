import { useEffect, useState } from "react";
import Header from "./components/common/Header";
import Container from "./components/utils/Container";
import { useAppDispatch, useAppSelector } from "./hooks";
import { fetchFeedByCursor } from "./store/features/feed/feedReducer";
import { GlobalStyle, Theme } from "./theme";

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [feedCursor, setFeedCursor] = useState("");
  const dispatch = useAppDispatch();
  const { loading, next, previous, posts, users } = useAppSelector(
    (state) => state.feed
  );

  useEffect(() => {
    const fetchPromise = dispatch(fetchFeedByCursor(feedCursor));
    return () => {
      fetchPromise.abort();
    };
  }, [dispatch, feedCursor]);

  const fetchMore = () => {
    if (!next) return;
    const url = new URL(next);
    setFeedCursor(url.searchParams.get("cursor") || "");
  };

  return (
    <Theme darkTheme={darkTheme}>
      <GlobalStyle />
      <Container>
        <Header>Najnowsze</Header>
        {posts?.ids.map((postId) => {
          const post = posts.entities[postId];
          const user = users.entities[post?.author || 0];

          return (
            <div key={postId}>
              {post?.content} by {user?.username}
            </div>
          );
        })}
        {loading && <div>Loading...</div>}
        {!next && !loading && <div>End</div>}
        {next && <button onClick={fetchMore}>Load More</button>}
        <button onClick={() => setDarkTheme(!darkTheme)}>Change Theme</button>
      </Container>
    </Theme>
  );
}

export default App;
