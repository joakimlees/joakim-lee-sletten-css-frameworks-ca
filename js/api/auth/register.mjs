import { API_SOCIAL_URL } from "../constants.mjs";
import * as ux from "../../components/ui/index.mjs";

const action = "/auth/register";
const method = "post";

/**
 * function which register a user on the API.
 * 
 * @param {object} profile containing a users information.
 * @example
 * ```js
 * // login(profile);
 * // 
 * {
    id: 1234
    name: Rick;
    email: rick@citadel.com;
    avatar: "website.host.url.com";
    banner: "website.host.url.com";
  }
}
 * ```
 */
export async function register(profile) {
  const registerURL = API_SOCIAL_URL + action;
  const body = JSON.stringify(profile);

  // fetching the url for the API.
  // and "send" - "post" the data/our object(which is made into a string) and setting the content-type to json (telling the server "this is json").

  try {
    const response = await fetch(registerURL, {
      headers: {
        "Content-Type": "application/json",
      },
      method,
      body,
    });

    //getting the response from the server
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
  } catch (error) {
    console.log(error);
  }
}
