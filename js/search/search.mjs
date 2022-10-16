import { getPosts } from "../api/posts/read.mjs";
import * as render from "../templates/render/posts.mjs";

// function to search the post content feed
// for title, username or content which includes the value typed in the search input field.
export async function searchPosts() {
  const container = document.querySelector("#posts-container");
  const posts = await getPosts();
  const testFormSearch = document.querySelector("#search-form-posts");

  testFormSearch.onkeyup = (event) => {
    const searchValue = event.target.value.trim().toLowerCase();

    const searchResult = posts.filter((post) => {
      const { title, username, content } = post;

      if (title.toLowerCase().includes(searchValue) || username.toLowerCase().includes(searchValue) || content.toLowerCase().includes(searchValue)) {
        return true;
      }
    });
    container.innerHTML = "";
    render.posts(searchResult, container);
  };
}
