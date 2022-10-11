import { updatePost } from "../api/posts/update.mjs";

export function updatePostListener() {
  const form = document.querySelector("#update-post-form");

  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());
      post.id = id;

      updatePost(post);
    });
  }
}
