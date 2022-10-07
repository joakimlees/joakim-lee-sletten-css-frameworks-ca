import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/posts";
const authorURL = "?_author=true";

export async function getPosts() {
  const getPostsURL = `${API_SOCIAL_URL}${action}/${authorURL}`;

  const response = await authFetch(getPostsURL);

  return await response.json();
}

export async function getPost(id) {
  if (!id) {
    throw new Error("My own Error requires a postID to view a post");
  }

  const postId = id;

  const getPostURL = `${API_SOCIAL_URL}${action}/${postId}${authorURL}`;

  const response = await authFetch(getPostURL);

  return await response.json();
}
