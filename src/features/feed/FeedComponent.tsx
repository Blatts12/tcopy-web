import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../common/storeHooks";
import PostComponent from "../post/PostComponent";
import { User } from "../user/userTypes";
import { fetchFeedByCursor } from "./feedReducer";

const ListContainer = styled.main`
  border-width: 0 1px 0 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.palette.border};
  height: calc(100% - 45px);
`;

const unknownAuthor: User = {
  username: "unknown",
  date_joined: "unknown",
  email: "unknown",
  id: -1,
  is_active: false,
  is_staff: false,
};

const FeedComponent = () => {
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
    <ListContainer>
      {posts?.ids.map((postId) => {
        const post = posts.entities[postId];
        const author = post ? users.entities[post.author] : unknownAuthor;

        if (author && post)
          return <PostComponent post={post} author={author} />;
        return "Wut?";
      })}
      {loading && <div>Loading...</div>}
      {!next && !loading && <div>End</div>}
      {next && <button onClick={fetchMore}>Load More</button>}
    </ListContainer>
  );
};

export default FeedComponent;
