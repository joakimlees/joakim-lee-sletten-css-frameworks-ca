//login functionality

const loginHeading = document.getElementById("login-heading");
const makeAccountBtn = document.getElementById("switch-form-btn");
const loginForm = document.getElementById("login-form");
const createAccountHeading = document.getElementById("create-account-heading");

const createAccountContent = `
<div class="mt-5">
  <label for="username-login" class="form-label text-white">Username</label>
  <input type="text" class="form-control" id="username-register" aria-describedby="username" required />
</div>
<div class="mt-2">
  <label for="email-login" class="form-label text-white">Email address</label>
  <input type="email" class="form-control" id="email-register" aria-describedby="email-address" required />
</div>
<div class="mb-3 mt-2">
  <label for="exampleInputPassword1" class="form-label text-white">Password</label>
  <input type="password" class="form-control" id="password-register" required />
</div>
<div class="d-grid mx-auto">
  <button type="submit" class="btn btn-primary" id="create-account-btn">Create Account and login</button>
</div>

`;

const loginContent = `
<div class="mt-5">
  <label for="email-login" class="form-label text-white">Email address</label>
  <input type="email" class="form-control" id="email-login" aria-describedby="email-address" required />
</div>
<div class="mb-3">
  <label for="exampleInputPassword1" class="form-label text-white">Password</label>
  <input type="password" class="form-control" id="password-login" required />
</div>
<div class="d-grid mx-auto">
  <button type="submit" class="btn btn-primary">Login</button>
</div>
`;

function makeLogin() {
  loginHeading.innerText = "Login to SoMe";
  createAccountHeading.innerText = "New user??";
  makeAccountBtn.innerText = "Create account here";
}

function makeCreateAccount() {
  loginHeading.innerText = "Create account";
  createAccountHeading.innerText = "Already have an account?";
  makeAccountBtn.innerText = "Go to login";
}

function changeContent(content, text) {
  loginForm.innerHTML = content;
  text();
}

makeAccountBtn.addEventListener("click", () => {
  switch (loginHeading.innerHTML) {
    case "Login to SoMe":
      changeContent(createAccountContent, makeCreateAccount);
      break;
    case "Create account":
      changeContent(loginContent, makeLogin);
      break;
    default:
      changeContent(loginContent, makeLogin);
  }
});
