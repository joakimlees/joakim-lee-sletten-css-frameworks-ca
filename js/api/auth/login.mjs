import { API_SOCIAL_URL } from "../constants.mjs";
import * as storage from "../../storage/index.mjs";
import * as domain from "../../domains/index.mjs";

const action = "/auth/login";
const method = "post";

export async function login(profile) {
  const loginURL = API_SOCIAL_URL + action;
  const body = JSON.stringify(profile);

  const response = await fetch(loginURL, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body,
  });

  const { accessToken, ...user } = await response.json();

  storage.save("token", accessToken);
  storage.save("profile", new domain.UserObject(user.name, user.email, user.avatar, user.banner));

  console.log("login successful");
}
