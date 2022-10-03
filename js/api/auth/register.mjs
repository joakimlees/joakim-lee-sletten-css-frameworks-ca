import { API_SOCIAL_URL } from "../constants.mjs";

const action = "/auth/register";
const method = "post";

export async function register(profile) {
  const registerURL = API_SOCIAL_URL + action;

  fetch(registerURL, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body,
  });
  console.log(registerURL);
}
