import { EntityId } from "@reduxjs/toolkit";
import React from "react";
import { useNavigate, useParams } from "react-router";
import Drawer from "../../common/components/Drawer";

interface Params {
  post_id: EntityId;
}

const PostPage: React.FC = () => {
  const navigate = useNavigate();
  const { post_id } = useParams();

  return (
    <Drawer title="" closeFunction={() => navigate("/")}>
      Post ID: {post_id}
      <i>WIP</i>
    </Drawer>
  );
};

export default PostPage;
