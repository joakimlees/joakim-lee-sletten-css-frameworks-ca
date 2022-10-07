import { registerFormListener } from "./handlers/register.mjs";
import { loginFormListener } from "./handlers/login.mjs";
import * as postMethods from "./api/posts/index.mjs";
import * as templates from "./templates/index.mjs";
import { createPostListener } from "./handlers/createPost.mjs";

// list of posts
/*
async function testPostsTemplate() {
  const posts = await postMethods.getPosts();
  const container = document.querySelector("#posts-container");

  templates.renderPosts(posts, container);
}
*/
// Single post

async function testPostTemplate() {
  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  const newId = id.slice(0, -13);

  const post = await postMethods.getPost(newId);

  const container = document.querySelector("#post-container");

  templates.renderPost(post, container);
}

testPostTemplate();

/*
const path = location.pathname;

switch (path) {
  case "/profile/login/":
    loginFormListener();
    break;
  case "/profile/register/":
    registerFormListener();
    break;
  case "/posts/":
    createPostListener();
    testPostsTemplate();
    break;
}
*/
// postMethods.getPosts().then(console.log);

// Single post
/*
async function testTemplate() {
  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  const posts = await postMethods.getPost(id);

  const post = posts;
  const container = document.querySelector("#post-container");

  templates.renderPost(post, container);
}
testTemplate();
*/
