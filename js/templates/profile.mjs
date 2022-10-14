import * as render from "./render/index.mjs";
import * as postMethods from "../api/posts/index.mjs";
import { load } from "../storage/index.mjs";

export async function profile() {
  const profile = load("profile");

  const allPosts = await postMethods.getPosts();

  const container = document.querySelector("#profile-posts-container");

  const profileEmail = allPosts.filter(({ author: { email } }) => {
    return email === profile.email;
  });

  render.posts(profileEmail, container);
}
