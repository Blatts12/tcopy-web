import { EntityId } from "@reduxjs/toolkit";

class PostNotFoundError extends Error {
  constructor(postId: EntityId) {
    super(`Post with id ${postId} not found `);
  }
}

export default PostNotFoundError;
