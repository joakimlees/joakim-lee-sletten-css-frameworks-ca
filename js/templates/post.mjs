import * as render from "./render/index.mjs";
import * as postMethods from "../api/posts/index.mjs";

export async function post() {
  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  const post = await postMethods.getPost(id);

  const container = document.querySelector("#post-container");

  render.post(post, container);
}
