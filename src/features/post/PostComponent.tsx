import React from "react";
import { User } from "../user/userTypes";
import { Post } from "./postTypes";
import { FiMoreHorizontal } from "react-icons/fi";

const parseDate = (dateString: string) => {
  const date = new Date(dateString);

  return new Intl.DateTimeFormat("pl-PL", {
    dateStyle: "short",
    timeStyle: "short",
  }).format(date);
};

interface Props {
  post: Post;
  author: User;
}

const PostComponent = React.memo(({ post, author }: Props) => {
  return (
    <div className="post">
      <div className="post__avatar">
        <div className="avatar avatar--small"></div>
      </div>
      <div className="post__body">
        <div className="post__header">
          <span className="post__name">{author.display_name}</span>
          <span className="post__tag">@{author.user_tag}</span>
          <a className="post__date" href="/">
            {parseDate(post.pub_date)}
          </a>
          <span className="post__more" tabIndex={0}>
            <FiMoreHorizontal />
          </span>
        </div>

        <div className="post__content">{post.content}</div>
      </div>
    </div>
  );
});

export default PostComponent;
