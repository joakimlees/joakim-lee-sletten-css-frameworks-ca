import { registerFormListener } from "./handlers/register.mjs";
import { loginFormListener } from "./handlers/login.mjs";
import * as templates from "./templates/index.mjs";
import { createPostListener } from "./handlers/createPost.mjs";
import { getPosts, updatePost } from "./api/posts/index.mjs";
import { updatePostListener } from "./handlers/updatePost.mjs";

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
    templates.posts();
    break;
  case "/post/":
    templates.post();
    break;
  case "/post/edit/":
    updatePostListener();
    break;
  case "/profile/":
    templates.profile();
}
