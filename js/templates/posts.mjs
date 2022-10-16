import * as render from "./render/index.mjs";
import * as postMethods from "../api/posts/index.mjs";

export async function posts() {
  const posts = await postMethods.getPosts();
  const container = document.querySelector("#posts-container");

  render.posts(posts, container);
}
