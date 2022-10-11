import { registerFormListener } from "./handlers/register.mjs";
import { loginFormListener } from "./handlers/login.mjs";
import * as postMethods from "./api/posts/index.mjs";
import * as templates from "./templates/index.mjs";
import { createPostListener } from "./handlers/createPost.mjs";
import { getPosts, updatePost } from "./api/posts/index.mjs";
import { updatePostListener } from "./handlers/updatePost.mjs";
import { load } from "./storage/index.mjs";

const profile = load("profile");
// list of posts

async function testPostsTemplate() {
  const posts = await postMethods.getPosts();
  const container = document.querySelector("#posts-container");

  templates.renderPosts(posts, container);
}

// Single post

async function testPostTemplate() {
  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  const post = await postMethods.getPost(id);

  const container = document.querySelector("#post-container");

  templates.renderPost(post, container);
}

const path = location.pathname;

console.log("this " + path);

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
  case "/post/":
    testPostTemplate();
    break;
  case "/post/edit/":
    updatePostListener();
    break;
}

function testProfile() {
  const returnResult = postMethods.getPosts();

  returnResult.then((data) => {
    for (const myKey in data) {
      if (data[myKey].author.email === profile.email) {
        console.log(data[myKey]);
      }
    }
  });
}

testProfile();

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
