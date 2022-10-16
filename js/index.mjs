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

const testFormSort = document.querySelector("#sort-form-posts");
const testFormFilter = document.querySelector("#filter-form-posts");

testFormSort.addEventListener("change", (event) => {
  const sortValue = event.target.value;

  if (sortValue === "newest") {
    console.log("new");
  } else if (sortValue === "oldest") {
    console.log("old");
  }
});

testFormFilter.addEventListener("change", () => {
  const hasAvatar = testFormFilter.hasAvatar.checked;
  const today = testFormFilter.today.checked;

  if (hasAvatar === true) {
    console.log("show user with avatar");
  } else if (hasAvatar === false) {
    console.log("hide users with avatar");
  }
  if (today === true) {
    console.log("show posts from today");
  } else if (today === false) {
    console.log("remove filter today posts");
  }
});
