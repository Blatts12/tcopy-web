import React from "react";
import styled from "styled-components";
import { Post } from "../../store/features/post/postTypes";
import { User } from "../../store/features/user/userTypes";

const ElementContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 9fr;
  grid-template-areas:
    "avatar name"
    "avatar content"
    "avatar content";

  padding: 10px 8px;

  border-width: 0 0 1px 0;
  border-style: solid;
  border-color: ${({ theme }) => theme.palette.border};

  word-break: break-all;
`;

const Avatar = styled.div`
  background: ${({ theme }) => theme.palette.backgroundAccent};
  width: 42px;
  height: 42px;
  border-radius: 50%;
  margin-right: 8px;
  grid-area: avatar;
`;

const Name = styled.div`
  height: 16px;
  line-height: 16px;
  grid-area: name;
  color: ${({ theme }) => theme.palette.font};
  font-size: ${({ theme }) => theme.fonts.size.normal};
`;

const AuthorTag = styled.span`
  color: ${({ theme }) => theme.palette.fontMuted};
  font-size: ${({ theme }) => theme.fonts.size.small};
  margin-left: 6px;
`;

const DateSpan = styled.span`
  color: ${({ theme }) => theme.palette.fontMuted};
  font-size: ${({ theme }) => theme.fonts.size.small};
  margin-left: 6px;

  &::before {
    content: "•  ";
  }
`;

const Content = styled.div`
  grid-area: content;
  margin-top: 6px;
  line-height: 1.35;
`;

interface Props {
  post: Post;
  author: User;
}

const FeedElement: React.FC<Props> = ({ post, author }) => {
  const parseDate = (dateString: string) => {
    const date = new Date(dateString);

    return new Intl.DateTimeFormat("pl-PL", {
      dateStyle: "short",
      timeStyle: "short",
    }).format(date);
  };

  return (
    <ElementContainer>
      <Avatar />
      <Name>
        {author.username}
        <AuthorTag>@{author.username}</AuthorTag>
        <DateSpan>{parseDate(post.pub_date)}</DateSpan>
      </Name>
      <Content>{post.content}</Content>
    </ElementContainer>
  );
};

export default FeedElement;
