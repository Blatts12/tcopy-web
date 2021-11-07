import { EntityId } from "@reduxjs/toolkit";
import React, { useRef } from "react";
import { useClickAway } from "react-use";
import { useAppSelector } from "../hooks/storeHooks";

interface Props {
  selectedPost: EntityId;
  selectedAuhtor: EntityId;
  closeFunction: () => void;
}

const PostDropdown = React.memo(
  ({ selectedPost, selectedAuhtor, closeFunction }: Props) => {
    const dropdownRef = useRef(null);
    useClickAway(dropdownRef, () => {
      console.log("wut");
      //   closeFunction();
    });

    // const posts = useAppSelector((state) => state.feed.posts);
    const users = useAppSelector((state) => state.feed.users);

    // const post = posts.entities[selectedPost];
    const author = users.entities[selectedAuhtor];

    return (
      <div ref={dropdownRef} className="dropdown">
        Block {author?.display_name}
      </div>
    );
  }
);

export default PostDropdown;
