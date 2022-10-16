import { API_SOCIAL_URL } from "../constants.mjs";
import * as storage from "../../storage/index.mjs";
import * as domain from "../../domains/index.mjs";
import * as ux from "../../components/ui/index.mjs";

const action = "/auth/login";
const method = "post";

/**
 * function which sends data to the API and stores response in localStorage.
 * Using the UserObject class as the blueprint for storing the response object returned from the api, in localStorage.
 * @param {object} profile containing a users information.
 * @example
 * ```js
 * // login(profile);
 * // 
 *Profile {
    username: "Rick";
    email: "rick@citadel.com";
    image: "website.host.url.com";
    banner: "website.host.url.com";
  }
}
 * ```
 */
export async function login(profile) {
  const loginURL = API_SOCIAL_URL + action;
  //making our profile object into a string
  const body = JSON.stringify(profile);

  // fetching the url for the API.
  // and "send" - "post" the data/our object(which is made into a string) and setting the content-type to json (telling the server "this is json").
  try {
    const response = await fetch(loginURL, {
      headers: {
        "Content-Type": "application/json",
      },
      method,
      body,
    });

    // destructuring the object returned from the API, as accessToken and the others a user.
    const { accessToken, ...user } = await response.json();

    const loginForm = document.querySelector("#login-form");
    const errorMessage = document.querySelector("#error-message-login");

    // if user got a property called message - display the message using the loginFailure function.
    if ("message" in user) {
      ux.loginFailure(errorMessage, user.message);
    } else {
      ux.loginSuccess(loginForm);
    }

    // storing the accessToken and user in localStorage, using the save function.
    storage.save("token", accessToken);
    storage.save("profile", new domain.UserObject(user.id, user.name, user.email, user.avatar, user.banner));
  } catch (error) {
    console.log(error);
  }
}
