import React, { useCallback, useEffect, useState } from "react";
import { Virtuoso } from "react-virtuoso";
import { useAppDispatch, useAppSelector } from "../../common/hooks/storeHooks";
import CreatePostForm from "../post/CreatePostForm";
import PostComponent from "../post/PostComponent";
import { User } from "../user/userTypes";
import { fetchFeedByCursor } from "./feedActions";
import { FeedType } from "./feedTypes";

const unknownAuthor: User = {
  id: -1,
  display_name: "unknown",
  user_tag: "unknown",
  date_joined: "unknown",
  last_login: "unknown",
  email: "unknown",
  is_staff: false,
};

interface Props {
  type: FeedType;
}

const FeedComponent: React.FC<Props> = ({ type }) => {
  const [feedCursor, setFeedCursor] = useState("");
  const dispatch = useAppDispatch();
  const { loading, next, posts, users } = useAppSelector((state) => state.feed);

  useEffect(() => {
    const fetchPromise = dispatch(
      fetchFeedByCursor({ cursor: feedCursor, type })
    );
    return () => {
      fetchPromise.abort();
    };
  }, [dispatch, type, feedCursor]);

  const fetchMore = useCallback((next) => {
    if (!next) return;
    const url = new URL(next);
    setFeedCursor(url.searchParams.get("cursor") || "");
  }, []);

  return (
    <>
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
    </>
  );
};

export default FeedComponent;
