import React, { useState } from "react";
import styled from "styled-components";
import { Avatar } from "../../common/components/Avatar";
import { SubmitButton } from "../../common/components/Button";
import { useAppDispatch } from "../../common/hooks/storeHooks";
import { createPost } from "./postActions";

const FormContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 9fr;
  grid-template-areas:
    "avatar content"
    "avatar buttons";

  width: 100%;
  padding: 10px 8px;

  border-width: 0 0 1px 0;
  border-style: solid;
  border-color: ${({ theme }) => theme.palette.border};
`;

const AvatarContainer = styled.div`
  grid-area: avatar;
  margin-right: 8px;
`;

const ContentContainer = styled.div`
  grid-area: content;

  width: 100%;
  min-height: 25px;
  margin-bottom: 8px;

  color: ${({ theme }) => theme.palette.font};
  border-bottom: 3px solid ${({ theme }) => theme.palette.border};

  &:focus-within {
    border-color: ${({ theme }) => theme.palette.primary};
  }
`;

const ContentTextArea = styled.textarea`
  width: 100%;
  height: 25px;

  resize: none;
  border: none;
  outline: none;
  background: ${({ theme }) => theme.palette.background};
  color: inherit;
  font-family: inherit;
  font-size: inherit;
`;

const CreatePostForm: React.FC = () => {
  const [postContent, setPostContent] = useState("");
  const disptach = useAppDispatch();

  const handlePostContentChange: React.ChangeEventHandler<HTMLTextAreaElement> =
    (e) => {
      e.target.style.height = `25px`;
      e.target.style.height = `${e.target.scrollHeight}px`;
      setPostContent(e.target.value);
    };

  const handleCreatePost: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const content = postContent.trim();

    if (content === "") {
      alert("empty content");
    } else {
      disptach(createPost({ content, author_id: 1 }));
    }
  };

  return (
    <FormContainer>
      <AvatarContainer>
        <Avatar />
      </AvatarContainer>
      <form onSubmit={handleCreatePost}>
        <ContentContainer>
          <ContentTextArea
            onChange={handlePostContentChange}
            maxLength={512}
            placeholder="O czym myślisz?"
            required={true}
          />
        </ContentContainer>
        <SubmitButton value="Post" />
      </form>
    </FormContainer>
  );
};

export default CreatePostForm;
