import { removePost } from "../api/posts/delete.mjs";

export function removePostListener() {
  const deleteButton = document.querySelector("#delete-post-button");

  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  deleteButton.addEventListener("click", async () => {
    await removePost(id);
    location.href = "/profile/";
  });
}
