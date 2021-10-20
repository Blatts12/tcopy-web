import React, { useCallback, useEffect, useState } from "react";
import { Virtuoso } from "react-virtuoso";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../common/hooks/storeHooks";
import CreatePostForm from "../post/CreatePostForm";
import PostComponent from "../post/PostComponent";
import { User } from "../user/userTypes";
import { fetchFeedByCursor } from "./feedActions";

const ListContainer = styled.main`
  border-width: 0 1px 0 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.palette.border};
  height: calc(100% - 45px);
`;

const unknownAuthor: User = {
  id: -1,
  username: "unknown",
  date_joined: "unknown",
  email: "unknown",
  is_active: false,
  is_staff: false,
};

const FeedComponent: React.FC = () => {
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

  const fetchMore = useCallback((next) => {
    if (!next) return;
    const url = new URL(next);
    setFeedCursor(url.searchParams.get("cursor") || "");
  }, []);

  return (
    <ListContainer>
      <Virtuoso
        useWindowScroll={true}
        style={{ height: "calc(100vh - 45px)" }}
        data={posts.ids}
        endReached={() => fetchMore(next)}
        itemContent={(index, postId) => {
          const post = posts.entities[postId];
          const author = post ? users.entities[post.author] : unknownAuthor;

          if (author && post)
            return <PostComponent key={postId} post={post} author={author} />;
          return <></>;
        }}
        components={{
          Header: () => <CreatePostForm />,
          Footer: () => {
            if (loading) {
              return <span>Loading</span>;
            }
            if (!loading && !next) {
              return <span>End</span>;
            }
            return <></>;
          },
        }}
      />
    </ListContainer>
  );
};

export default FeedComponent;
