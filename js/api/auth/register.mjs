import { API_SOCIAL_URL } from "../constants.mjs";
import * as ux from "../../components/index.mjs";

const action = "/auth/register";
const method = "post";

export async function register(profile) {
  const registerURL = API_SOCIAL_URL + action;
  const body = JSON.stringify(profile);

  const response = await fetch(registerURL, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body,
  });

  const result = await response.json();

  const errorMessage = document.querySelector("#error-message-register");
  const registerHeading = document.querySelector("#register-heading");
  const username = document.querySelector("#username-register");
  const email = document.querySelector("#email-register");
  const password = document.querySelector("#password-register");

  if ("message" in result) {
    ux.loginFailure(errorMessage, result.message);
  } else {
    ux.registerSuccess(registerHeading, username, email, password, errorMessage);
  }

  return result;
}
