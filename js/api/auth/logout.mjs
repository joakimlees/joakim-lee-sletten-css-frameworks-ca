import { remove } from "../../storage/index.mjs";

export function logOut() {
  const logOutButton = document.querySelector("#logout-btn");

  if (logOutButton) {
    logOutButton.addEventListener("click", () => {
      remove("profile");
      remove("token");
    });
  }
}
