import React from "react";
import { useNavigate } from "react-router";
import Drawer from "../../common/components/Drawer";
import CreatePostForm from "../../features/post/CreatePostForm";

const AddPost: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Drawer zIndex={1} title="Dodaj post" closeFunction={() => navigate("/")}>
      <CreatePostForm closeFunction={() => navigate("/")} />
    </Drawer>
  );
};

export default AddPost;
