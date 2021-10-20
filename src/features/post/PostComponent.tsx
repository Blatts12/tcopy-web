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

  animation: fadein 1s;
`;

const AvatarContainer = styled.div`
  grid-area: avatar;
  margin-right: 8px;
`;

const HeaderContainer = styled.div`
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
`;

const Content = styled.span`
  line-height: 1.35;
  white-space: pre-wrap;
  overflow-wrap: break-word;
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
        <AuthorName>{author.display_name}</AuthorName>
        <AuthorTag>@{author.user_tag}</AuthorTag>
        <PostDate>{parseDate(post.pub_date)}</PostDate>
      </HeaderContainer>
      <ContentContainer>
        <Content>{post.content}</Content>
      </ContentContainer>
    </PostContainer>
  );
};

export default PostComponent;
