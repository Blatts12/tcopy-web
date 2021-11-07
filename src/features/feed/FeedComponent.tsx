import React, { useCallback, useEffect, useState } from "react";
import { Virtuoso } from "react-virtuoso";
import AuthorNotFoundError from "../../common/errors/AuhtorNotFound";
import PostNotFoundError from "../../common/errors/PostNotFound";
import { useAppDispatch, useAppSelector } from "../../common/hooks/storeHooks";
import PostComponent from "../post/PostComponent";
import { fetchFeedByCursor } from "./feedActions";
import { FeedType } from "./feedTypes";

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

  const fetchMore = useCallback(() => {
    if (!next) return;
    const url = new URL(next);
    setFeedCursor(url.searchParams.get("cursor") || "");
  }, [next]);

  return (
    <Virtuoso
      className="feed"
      data={posts.ids}
      endReached={fetchMore}
      overscan={3}
      itemContent={(index, postId) => {
        const post = posts.entities[postId];
        const author = post ? users.entities[post.author] : null;

        if (author && post)
          return <PostComponent key={postId} post={post} author={author} />;

        if (!post) {
          throw new PostNotFoundError(postId);
        }

        if (!author) {
          throw new AuthorNotFoundError(post);
        }
      }}
      components={{
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
  );
};

export default FeedComponent;
