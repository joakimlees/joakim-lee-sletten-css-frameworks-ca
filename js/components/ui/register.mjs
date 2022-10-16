export function registerSuccess(message, name, email, password, error) {
  message.innerText = "Account Created";

  message.classList.remove("text-white");
  message.classList.add("text-success");
  name.classList.add("bg-success");
  email.classList.add("bg-success");
  password.classList.add("bg-success");
  error.classList.add("d-none");
}
