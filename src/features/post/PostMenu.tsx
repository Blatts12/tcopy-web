import React, { useCallback } from "react";
import {
  BsFillCursorFill,
  BsFillShareFill,
  BsFillTrashFill,
} from "react-icons/bs";
import { useNavigate } from "react-router";
import Button from "../../common/components/Button";
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
  const navigate = useNavigate();

  const onDeletePost = useCallback(
    (post: Post) => {
      dispatch(deletePost({ post }))
        .unwrap()
        .then((_) => {
          closeMenu();
        });
    },
    [dispatch, closeMenu]
  );

  const navigateTo = useCallback(
    (to: string) => {
      closeMenu();
      navigate(to);
    },
    [closeMenu, navigate]
  );

  return (
    <Menu closeFunction={closeMenu}>
      {user.id === author.id && (
        <Button type="menu" length="long" onClick={() => onDeletePost(post)}>
          <BsFillTrashFill />
          Delete
        </Button>
      )}

      <Button
        type="menu"
        length="long"
        onClick={() => navigateTo(`/user/${author.user_tag}/${post.id}`)}
      >
        <BsFillCursorFill />
        Open
      </Button>
      <Button type="menu" length="long">
        <BsFillShareFill />
        <del>Get link</del>
        <i>WIP</i>
      </Button>
    </Menu>
  );
});

export default PostMenu;
