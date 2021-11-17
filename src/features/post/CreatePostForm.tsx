import React, { useEffect, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../common/hooks/storeHooks";
import { createPost } from "./postActions";

interface CreatePostInputs {
  content: string;
}

interface Props {
  closeFunction?: () => void;
}

const CreatePostForm: React.FC<Props> = ({ closeFunction }) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);
  const [nonFieldErrors, setNonFieldErrors] = useState<string>("");
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const {
    register,
    handleSubmit,
    setError,
    watch,
    reset,
    formState: { errors },
  } = useForm<CreatePostInputs>();
  const { ref, ...rest } = register("content", {
    required: true,
  });
  const watchContent = watch("content");

  const onSubmit: SubmitHandler<CreatePostInputs> = (data) => {
    let parsedContent = data.content.trim();
    parsedContent = parsedContent.replace(/[\r\n]{3,}/g, "\n\n");

    if (parsedContent === "") {
      setError("content", {
        message: "Content is empty",
      });
    } else {
      dispatch(createPost({ content: parsedContent, author: user }))
        .unwrap()
        .then((_) => {
          reset();
          if (closeFunction) {
            closeFunction();
          }
        })
        .catch((errors) => {
          if (errors.non_field_errors) {
            setNonFieldErrors(errors.non_field_errors.join("\n"));
          }
          if (errors.content) {
            setError("content", {
              message: errors.content.join("\n"),
            });
          }
        });
    }
  };

  useEffect(() => {
    if (textAreaRef.current) {
      const area = textAreaRef.current;
      area.style.height = "25px";
      area.style.height = `${area.scrollHeight + 2}px`;
    }
  }, [watchContent]);

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <textarea
        className="post-area"
        placeholder="What are you thinking about?"
        maxLength={512}
        ref={(e) => {
          ref(e);
          textAreaRef.current = e;
        }}
        {...rest}
      />
      <div className="error-block">{errors.content?.message}</div>
      <input className="button button--submit" type="submit" value="Post" />
      <div className="error-block text-center">{nonFieldErrors}</div>
    </form>
  );
};

export default CreatePostForm;
