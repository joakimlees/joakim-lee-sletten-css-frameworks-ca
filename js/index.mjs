import * as templates from "./templates/index.mjs";
import * as listeners from "./handlers/index.mjs";

const path = location.pathname;

console.log("this " + path);

switch (path) {
  case "/profile/login/":
    listeners.loginFormListener();
    break;
  case "/profile/register/":
    listeners.registerFormListener();
    break;
  case "/posts/":
    listeners.createPostListener();
    templates.posts();
    break;
  case "/post/":
    templates.post();
    break;
  case "/post/edit/":
    listeners.updatePostListener();
    break;
  case "/profile/":
    templates.profile();
    break;
}
