import { Post } from "../../features/post/postTypes";

class AuthorNotFoundError extends Error {
  post: Post;

  constructor(post: Post) {
    super("Author not found");
    this.post = post;
  }
}

export default AuthorNotFoundError;
