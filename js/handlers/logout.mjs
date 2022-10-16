import { remove } from "../storage/index.mjs";

export function logOutListener() {
  const logOutButton = document.querySelector("#logout-btn");

  logOutButton.addEventListener("click", () => {
    remove("profile");
    remove("token");
  });
}
