import React from "react";
import { User } from "../user/userTypes";
import { Post } from "./postTypes";

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

const PostComponent: React.FC<Props> = ({ post, author }) => {
  return (
    <div className="post">
      <div className="post__avatar">
        <div className="avatar avatar--small"></div>
      </div>
      <div className="post__header">
        <span className="post__name">{author.display_name}</span>
        <span className="post__tag">@{author.user_tag}</span>
        <span className="post__date">{parseDate(post.pub_date)}</span>
      </div>
      <div className="post__body">
        <p className="post__content">{post.content}</p>
      </div>
    </div>
  );
};

export default PostComponent;
