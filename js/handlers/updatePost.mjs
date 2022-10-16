import * as postMethods from "../api/posts/index.mjs";

export async function updatePostListener() {
  const form = document.querySelector("#edit-post-form");

  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  if (form) {
    const button = form.querySelector("button");
    button.disabled = true;

    const post = await postMethods.getPost(id);

    form.title.value = post.title;
    form.body.value = post.content;

    button.disabled = false;

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());
      post.id = id;

      await postMethods.updatePost(post);
      location.href = "/post/?id=" + id;
    });
  }
}
