import { getPosts } from "../api/posts/read.mjs";
import * as render from "../templates/render/posts.mjs";

export async function searchPosts() {
  const container = document.querySelector("#posts-container");
  const posts = await getPosts();
  const testFormSearch = document.querySelector("#search-form-posts");

  testFormSearch.onkeyup = (event) => {
    const searchValue = event.target.value.trim().toLowerCase();

    const searchResult = posts.filter((post) => {
      if (post.username.toLowerCase().startsWith(searchValue)) {
        return true;
      }
    });
    console.log(searchResult);
  };
}
