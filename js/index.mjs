import * as templates from "./templates/index.mjs";
import * as listeners from "./handlers/index.mjs";
import { logOut } from "./api/auth/logout.mjs";

logOut();

const path = location.pathname;

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
    listeners.removePostListener();
    break;
  case "/profile/":
    listeners.createPostListener();
    templates.profile();
    break;
}
