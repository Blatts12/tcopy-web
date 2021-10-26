import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Avatar } from "../../common/components/Avatar";
import { SubmitButton } from "../../common/components/input/Button";
import { useAppDispatch, useAppSelector } from "../../common/hooks/storeHooks";
import { createPost } from "./postActions";
import { setNewPost } from "./postReducer";

const postMaxLength = 512;

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
  border-color: ${({ theme }) => theme.palette.neutral[200]};

  animation: fadein 450ms;
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

  color: ${({ theme }) => theme.palette.neutral[50]};
  border-bottom: 3px solid ${({ theme }) => theme.palette.neutral[200]};
  transition: border-color 200ms ease;

  &:focus-within {
    border-color: ${({ theme }) => theme.palette.accent[400]};
  }
`;

const ContentTextArea = styled.textarea`
  width: 100%;
  height: 25px;

  resize: none;
  border: none;
  outline: none;
  overflow: hidden;

  background: ${({ theme }) => theme.palette.background[900]};
  color: inherit;
  font-family: inherit;
  font-size: inherit;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
`;

const LetterCounter = styled.span`
  color: ${({ theme }) => theme.palette.neutral[400]};
`;
const CreatePostForm: React.FC = () => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const { content } = useAppSelector((state) => state.post.newPost);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (textAreaRef.current) {
      const area = textAreaRef.current;
      area.style.height = "25px";
      area.style.height = `${area.scrollHeight}px`;
    }
  }, [content]);

  const handlePostContentChange: React.ChangeEventHandler<HTMLTextAreaElement> =
    (e) => {
      dispatch(
        setNewPost({
          content: e.target.value,
        })
      );
    };

  const handleCreatePost: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    let parsedContent = content.trim();
    parsedContent = parsedContent.replace(/[\r\n]{3,}/g, "\n\n");

    if (content === "") {
      alert("empty content");
    } else {
      dispatch(createPost({ content: parsedContent, author_id: 1 }));
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
            ref={textAreaRef}
            onChange={handlePostContentChange}
            value={content}
            maxLength={postMaxLength}
            placeholder="O czym myślisz?"
            required={true}
          />
        </ContentContainer>
        <ButtonContainer>
          <LetterCounter>{postMaxLength - content.length}</LetterCounter>
          <SubmitButton value="Post" />
        </ButtonContainer>
      </form>
    </FormContainer>
  );
};

export default CreatePostForm;
