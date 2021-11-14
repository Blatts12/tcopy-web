import React, { useCallback } from "react";
import {
  BsFillCursorFill,
  BsFillShareFill,
  BsFillTrashFill,
} from "react-icons/bs";
import Menu from "../../common/components/Menu";
import { useAppDispatch, useAppSelector } from "../../common/hooks/storeHooks";
import { User } from "../user/userTypes";
import { deletePost } from "./postActions";
import { Post } from "./postTypes";

interface Props {
  post: Post;
  author: User;
  closeMenu: () => void;
}

const PostMenu = React.memo(({ post, author, closeMenu }: Props) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);

  const onDeletePost = useCallback(
    (post: Post) => {
      dispatch(deletePost(post))
        .unwrap()
        .then((result) => {
          closeMenu();
        });
    },
    [dispatch, closeMenu]
  );

  return (
    <Menu closeFunction={closeMenu}>
      {user.id === author.id && (
        <button
          className="button button--menu"
          onClick={() => onDeletePost(post)}
        >
          <BsFillTrashFill />
          Delete
        </button>
      )}

      <button className="button button--menu">
        <BsFillCursorFill />
        Open
      </button>
      <button className="button button--menu">
        <BsFillShareFill />
        Get link
      </button>
    </Menu>
  );
});

export default PostMenu;
