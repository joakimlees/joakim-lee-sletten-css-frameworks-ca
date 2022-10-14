import { createPost } from "../api/posts/create.mjs";

export function createPostListener() {
  const form = document.querySelector("#create-post-form");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());

      await createPost(post);
      window.location.reload();
      form.title.value = "";
      form.body.value = "";
    });
  }
}
