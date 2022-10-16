import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";
import { PostObject } from "../../domains/index.mjs";

const action = "/posts";
const authorURL = "?_author=true";

/**
 * Function the fetch all posts from the api.
 * destructuring the array of objects(all the posts) returned from the api.
 * making new objects with the PostObjects class.
 * 
 * The function returns array of objects which is posts.
 
 * @ returns {Object}

 */
export async function getPosts() {
  const getPostsURL = `${API_SOCIAL_URL}${action}/${authorURL}`;

  try {
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
  } catch (error) {
    console.log(error);
  }
}

export async function getPost(postId) {
  if (!postId) {
    throw new Error("My own Error requires a postID to view a post");
  }

  const thisPostId = postId;

  const getPostURL = `${API_SOCIAL_URL}${action}/${thisPostId}${authorURL}`;

  try {
    const response = await authFetch(getPostURL);

    const result = await response.json();

    const author = result.author;

    const { name, email, avatar } = author;

    const { title, body, created, updated, id } = result;

    const newPostItem = new PostObject(name, email, avatar, title, body, created, updated, id);

    return newPostItem;
  } catch (error) {
    console.log(error);
  }
}
