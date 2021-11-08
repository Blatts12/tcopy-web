import React, { useCallback, useEffect, useState } from "react";
import { Virtuoso } from "react-virtuoso";
import Loading from "../../common/components/Loading";
import NoMoreContent from "../../common/components/NoMoreContent";
import { useAppDispatch, useAppSelector } from "../../common/hooks/storeHooks";
import PostComponent from "../post/PostComponent";
import PostMenu from "../post/PostMenu";
import { Post } from "../post/postTypes";
import { User } from "../user/userTypes";
import { fetchFeedByCursor } from "./feedActions";
import { FeedType } from "./feedTypes";

interface Props {
  type: FeedType;
}

const FeedComponent: React.FC<Props> = ({ type }) => {
  const [feedCursor, setFeedCursor] = useState("");
  const dispatch = useAppDispatch();
  const { loading, next, posts, users } = useAppSelector((state) => state.feed);
  const [menu, setMenu] = useState<{ post: Post | null; author: User | null }>({
    post: null,
    author: null,
  });

  const selectPost = useCallback((post: Post, author: User) => {
    setMenu({ post, author });
  }, []);

  const closeMenu = useCallback(() => {
    setMenu({ post: null, author: null });
  }, []);

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
    <>
      {menu.post && menu.author && (
        <PostMenu closeMenu={closeMenu} post={menu.post} author={menu.author} />
      )}

      <Virtuoso
        className="feed"
        data={posts.ids}
        endReached={fetchMore}
        overscan={3}
        itemContent={(index, postId) => {
          const post = posts.entities[postId];
          const author = post ? users.entities[post.author] : null;

          if (author && post)
            return (
              <PostComponent
                key={postId}
                post={post}
                author={author}
                selectPost={selectPost}
              />
            );
        }}
        components={{
          Footer: () => {
            if (loading) {
              return <Loading />;
            }
            if (!loading && !next) {
              return <NoMoreContent />;
            }
            return <></>;
          },
        }}
      />
    </>
  );
};

export default FeedComponent;
