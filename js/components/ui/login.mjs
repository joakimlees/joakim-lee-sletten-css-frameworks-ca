export function loginSuccess(container) {
  container.innerHTML = `<div class="d-flex flex-column align-items-center mt-4">
                          <p class="row text-success">You are now logged in<p>
                          <button id="continue-button" class="btn btn-success">Continue to profile</button>
                         </div> `;

  const continueBtn = document.querySelector("#continue-button");

  continueBtn.addEventListener("click", () => {
    location.href = "/profile/";
  });
}

export function loginFailure(element, message) {
  element.innerText = message;
}
