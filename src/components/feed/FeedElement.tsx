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
  padding: 10px;
  border-width: 0 0 1px 0;
  border-style: solid;
  border-color: ${({ theme }) => theme.palette.border};
`;

const Avatar = styled.div`
  background: ${({ theme }) => theme.palette.backgroundAccent};
  width: 45px;
  height: 45px;
  border-radius: 50%;
  grid-area: avatar;
`;

const Name = styled.div`
  height: 30px;
  line-height: 30px;
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
`;

interface Props {
  post: Post;
  author: User;
}

const FeedElement: React.FC<Props> = ({ post, author }) => {
  const parseDate = (pubDateString: string) => {
    const pubDate = new Date(pubDateString);
    console.log(pubDate);

    return new Intl.DateTimeFormat("pl-PL", {
      dateStyle: "short",
      timeStyle: "short",
    }).format(pubDate);
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
