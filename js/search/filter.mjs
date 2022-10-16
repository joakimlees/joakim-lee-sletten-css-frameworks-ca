import { getPosts } from "../api/posts/read.mjs";
import * as render from "../templates/render/posts.mjs";
import { load } from "../storage/index.mjs";

export async function filterPosts() {
  const container = document.querySelector("#posts-container");
  const filterForm = document.querySelector("#filter-form-posts");
  const allPosts = await getPosts();
  const profile = load("profile");

  const filteredUserPost = allPosts.filter(({ email }) => {
    return email === profile.email;
  });

  filterForm.addEventListener("change", () => {
    const usersPosts = filterForm.usersPosts.checked;

    if (usersPosts === true) {
      container.innerHTML = "";
      render.posts(filteredUserPost, container);
    } else if (usersPosts === false) {
      container.innerHTML = "";
      render.posts(allPosts, container);
    }
  });
}
