import { load } from "../../storage/index.mjs";

export function postTemplate(postData) {
  const profile = load("profile");

  const postsContainer = document.createElement("div");
  const postWrapper = document.createElement("div");
  const postAvatarContainer = document.createElement("div");
  const postAvatar = document.createElement("img");
  const postContentWrapper = document.createElement("div");
  const username = document.createElement("div");
  const postContent = document.createElement("p");
  const postTitle = document.createElement("h3");
  const bottomContentWrapper = document.createElement("div");
  const dateWrapper = document.createElement("div");
  const dateCreated = document.createElement("div");
  const dateUpdated = document.createElement("div");
  const buttonWrapper = document.createElement("div");
  const primaryButton = document.createElement("button");
  const secondaryButton = document.createElement("button");

  const postCreated = postData.published.slice(0, 10);
  const postUpdated = postData.updated.slice(0, 10);

  postsContainer.classList.add("container", "my-4", "p-3", "rounded", "shadow-sm");
  postWrapper.classList.add("wrapper", "row", "pt-3");
  postAvatarContainer.classList.add("avatarContainer", "col");
  postAvatar.classList.add("rounded", "contact-image");
  postContentWrapper.classList.add("contentWrapper", "col-8", "col-md-9", "col-lg-10");
  username.classList.add("text-secondary");
  postTitle.classList.add("d-block", "text-primary", "fs-6");
  postContent.classList.add("pb-3", "lh-sm", "text-white");
  bottomContentWrapper.classList.add("row", "border-top", "border-md-light-gray", "pt-3");
  dateWrapper.classList.add("col", "d-flex", "justify-content-end", "mb-2");
  dateCreated.classList.add("fs-6", "text-center", "text-white");
  dateUpdated.classList.add("fs-6", "ms-4", "text-center", "text-white");
  buttonWrapper.classList.add("col", "d-flex", "justify-content-end", "mb-2");
  primaryButton.classList.add("btn", "btn-secondary");
  secondaryButton.classList.add("btn", "btn-danger", "ms-4");

  postsContainer.appendChild(postWrapper);
  postWrapper.appendChild(postAvatarContainer);
  postWrapper.appendChild(postContentWrapper);
  postAvatarContainer.appendChild(postAvatar);
  postContentWrapper.appendChild(username);
  postContentWrapper.appendChild(postContent);
  postContent.appendChild(postTitle);
  postsContainer.appendChild(bottomContentWrapper);
  bottomContentWrapper.appendChild(dateWrapper);
  bottomContentWrapper.appendChild(buttonWrapper);
  dateWrapper.appendChild(dateCreated);
  dateWrapper.appendChild(dateUpdated);
  buttonWrapper.appendChild(primaryButton);
  buttonWrapper.appendChild(secondaryButton);

  username.innerText = "@" + postData.username;
  postTitle.innerText = postData.title;
  postContent.innerHTML = postContent.innerHTML + postData.content;
  primaryButton.innerText = "View post";
  secondaryButton.innerText = "Edit post";

  // Check if the post belong to the user, if not hide the edit button
  if (postData.email !== profile.email) {
    secondaryButton.classList.add("d-none");
  }

  if (location.pathname === "/post/") {
    primaryButton.classList.add("d-none");
  } else if (location.pathname === "/post/" && postData.email !== profile.email) {
    primaryButton.classList.add("d-none");
    secondaryButton.classList.add("d-none");
  }

  primaryButton.addEventListener("click", () => {
    document.location.href = `/post/?id=${postData.id}`;
  });

  secondaryButton.addEventListener("click", () => {
    document.location.href = `/post/edit/?id=${postData.id}`;
  });

  // Check if user got an avatar, if not, set a default image
  switch (postData.avatar) {
    case null || undefined || "":
      postAvatar.src = "../../../images/some-default-avatar.jpg";
      break;
    default:
      postAvatar.src = postData.avatar;
  }

  dateCreated.innerText = "created: " + postCreated;
  dateUpdated.innerText = "updated: " + postUpdated;

  return postsContainer;
}

// html structure
/*
  <h2 class="text-white">Recent posts</h2>

        <div class="my-4 p-3 rounded shadow-sm">
          <div class="row pt-3">
            <div class="col">
              <img class="rounded contact-image" src="/images/Hege_fullstakk.jpg" alt="#" />
            </div>
            <div class="col-8 col-md-9 col-lg-10">
              <p class="pb-5 lh-sm border-bottom border-md-light-gray text-white">
                <strong class="d-block text-primary">@username</strong>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quia quis vel temporibus magnam at! Minus quisquam voluptates suscipit quasi cupiditate fuga dolorum consectetur! Laudantium, necessitatibus. Reiciendis commodi aliquam nesciunt.
              </p>
            </div>
          </div>
        </div>



                    <div class="d-flex justify-content-end">
              <button class="btn btn-secondary">View</button>
              <button class="btn btn-danger ms-2">Edit</button>
            </div>
*/
