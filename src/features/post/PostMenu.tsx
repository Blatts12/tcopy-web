import React, { useCallback } from "react";
import {
  BsFillCursorFill,
  BsFillShareFill,
  BsFillTrashFill,
} from "react-icons/bs";
import Menu from "../../common/components/Menu";
import { useAppDispatch } from "../../common/hooks/storeHooks";
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
      <button
        className="button button--menu"
        onClick={() => onDeletePost(post)}
      >
        <BsFillTrashFill />
        Usuń
      </button>
      <button className="button button--menu">
        <BsFillCursorFill />
        Otwórz
      </button>
      <button className="button button--menu">
        <BsFillShareFill />
        Kopiuj odnośnik
      </button>
    </Menu>
  );
});

export default PostMenu;
