import { EntityId } from "@reduxjs/toolkit";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import Drawer from "../../common/components/Drawer";
import { useAppDispatch } from "../../common/hooks/storeHooks";
import { fetchPost } from "../../features/post/postActions";

interface Params {
  post_id: EntityId;
}

const PostPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { post_id } = useParams();

  useEffect(() => {
    const fetchPostPromise = dispatch(fetchPost({ id: post_id || "" }));
    return () => {
      fetchPostPromise.abort();
    };
  }, [post_id]);

  return (
    <Drawer title="" closeFunction={() => navigate("/")}>
      Post ID: {post_id}
      <i>WIP</i>
    </Drawer>
  );
};

export default PostPage;
