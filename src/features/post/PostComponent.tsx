import React from "react";
import styled from "styled-components";
import { Avatar } from "../../common/components/Avatar";
import { User } from "../user/userTypes";
import { Post } from "./postTypes";

const PostContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 9fr;
  grid-template-areas:
    "avatar header"
    "avatar content"
    "avatar content";

  padding: 10px 8px;

  border-width: 0 0 1px 0;
  border-style: solid;
  border-color: ${({ theme }) => theme.palette.border};

  word-break: break-all;
`;

const AvatarContainer = styled.div`
  grid-area: avatar;
  margin-right: 8px;
`;

const HeaderContainer = styled.header`
  height: 16px;
  line-height: 16px;
  grid-area: header;
`;

const AuthorName = styled.span`
  color: ${({ theme }) => theme.palette.font};
  font-size: ${({ theme }) => theme.fonts.size.normal};
`;

const AuthorTag = styled.span`
  color: ${({ theme }) => theme.palette.fontMuted};
  font-size: ${({ theme }) => theme.fonts.size.small};
  margin-left: 6px;
`;

const PostDate = styled.span`
  color: ${({ theme }) => theme.palette.fontMuted};
  font-size: ${({ theme }) => theme.fonts.size.small};
  margin-left: 6px;

  &::before {
    content: "•  ";
  }
`;

const ContentContainer = styled.main`
  grid-area: content;
  margin-top: 6px;
  line-height: 1.35;
`;

interface Props {
  post: Post;
  author: User;
}

const parseDate = (dateString: string) => {
  const date = new Date(dateString);

  return new Intl.DateTimeFormat("pl-PL", {
    dateStyle: "short",
    timeStyle: "short",
  }).format(date);
};

const PostComponent: React.FC<Props> = ({ post, author }) => {
  return (
    <PostContainer>
      <AvatarContainer>
        <Avatar />
      </AvatarContainer>
      <HeaderContainer>
        <AuthorName>{author.username}</AuthorName>
        <AuthorTag>@{author.username}</AuthorTag>
        <PostDate>{parseDate(post.pub_date)}</PostDate>
      </HeaderContainer>
      <ContentContainer>{post.content}</ContentContainer>
    </PostContainer>
  );
};

export default PostComponent;
