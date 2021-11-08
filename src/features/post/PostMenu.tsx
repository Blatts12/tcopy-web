import React from "react";
import {
  BsFillCursorFill,
  BsFillShareFill,
  BsFillTrashFill,
} from "react-icons/bs";
import Menu from "../../common/components/Menu";
import { User } from "../user/userTypes";
import { Post } from "./postTypes";

interface Props {
  post: Post;
  author: User;
  closeMenu: () => void;
}

const PostMenu = React.memo(({ post, author, closeMenu }: Props) => {
  return (
    <Menu closeFunction={closeMenu}>
      <button className="button button--menu">
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
