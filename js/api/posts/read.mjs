import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";
import { PostObject } from "../../domains/index.mjs";

const action = "/posts";
const authorURL = "?_author=true";

export async function getPosts() {
  const getPostsURL = `${API_SOCIAL_URL}${action}/${authorURL}`;

  const response = await authFetch(getPostsURL);

  const result = await response.json();

  const newPostsList = result.map((post) => {
    const author = post.author;

    const { name, email, avatar } = author;

    const { title, body, created, updated, id } = post;

    const postsList = new PostObject(name, email, avatar, title, body, created, updated, id);

    return postsList;
  });

  return newPostsList;
  //return newPostsList;
}

export async function getPost(postId) {
  if (!postId) {
    throw new Error("My own Error requires a postID to view a post");
  }

  const thisPostId = postId;

  const getPostURL = `${API_SOCIAL_URL}${action}/${thisPostId}${authorURL}`;

  const response = await authFetch(getPostURL);

  const result = await response.json();

  const author = result.author;

  const { name, email, avatar } = author;

  const { title, body, created, updated, id } = result;

  const newPostItem = new PostObject(name, email, avatar, title, body, created, updated, id);

  return newPostItem;
  // const { ...post } = await response.json();

  /*const postItem = new PostObject(post.author.name, post.author.email, post.id);
   */

  // return await response.json();
}
