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

  console.log(newPostsList);
  //return newPostsList;
}

export async function getPost(id) {
  if (!id) {
    throw new Error("My own Error requires a postID to view a post");
  }

  const postId = id;

  const getPostURL = `${API_SOCIAL_URL}${action}/${postId}${authorURL}`;

  const response = await authFetch(getPostURL);

  const { ...post } = await response.json();

  const postItem = new PostObject(post.author.name, post.author.email, post.id);
  console.log(postItem);

  // return await response.json();
}
