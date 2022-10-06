import { registerFormListener } from "./handlers/register.mjs";
import { loginFormListener } from "./handlers/login.mjs";
import * as postMethods from "./api/posts/index.mjs";
import * as templates from "./templates/index.mjs";
import { createPostListener } from "./handlers/createPost.mjs";

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
    break;
}

// postMethods.getPosts().then(console.log);

// Single post
/*
async function testTemplate() {
  const posts = await postMethods.getPosts();

  const post = posts[34];
  const container = document.querySelector("#posts-container");

  templates.renderPost(post, container);
}
testTemplate();
*/

// list of posts

async function testTemplate() {
  const posts = await postMethods.getPosts();
  const container = document.querySelector("#posts-container");

  templates.renderPosts(posts, container);
}

testTemplate();
