import { load } from "../storage/index.mjs";

// authentication function. Which returns the correct header for the user (with the token).
export function headers() {
  const token = load("token");

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

// returns fetch, with the correct header.
export async function authFetch(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: headers(),
  });
}
