import * as templates from "./templates/index.mjs";
import * as listeners from "./handlers/index.mjs";

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
    listeners.logOutListener();
    break;
  case "/post/":
    templates.post();
    listeners.logOutListener();
    break;
  case "/post/edit/":
    listeners.updatePostListener();
    listeners.removePostListener();
    listeners.logOutListener();
    break;
  case "/profile/":
    listeners.createPostListener();
    templates.profile();
    listeners.logOutListener();
    break;
}
