import { load } from "../storage/index.mjs";

const profile = load("profile");

function postsTemplate(postData) {
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
  const viewButton = document.createElement("button");
  const editButton = document.createElement("button");

  const postCreated = postData.created.slice(0, 10);
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
  viewButton.classList.add("btn", "btn-secondary");
  editButton.classList.add("btn", "btn-danger", "ms-4");

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
  buttonWrapper.appendChild(viewButton);
  buttonWrapper.appendChild(editButton);

  username.innerText = "@" + postData.author.name;
  postTitle.innerText = postData.title;
  postContent.innerHTML = postContent.innerHTML + postData.body;
  viewButton.innerText = "View post";
  editButton.innerText = "Edit post";
  postAvatar.src = postData.author.avatar;
  dateCreated.innerText = "created: " + postCreated;
  dateUpdated.innerText = "updated: " + postUpdated;

  if (editButton) {
    editButton.addEventListener("click", () => {
      document.location.href = `/post/edit/?id=${postData.id}`;
    });
  }

  viewButton.addEventListener("click", () => {
    document.location.href = `/post/?id=${postData.id}`;
  });

  if (postData.author.avatar === "" || postData.author.avatar === null || postData.author.avatar === undefined) {
    postAvatar.src = "../../../images/some-default-avatar.jpg";
  }
  if (postData.author.email !== profile.email) {
    editButton.classList.add("d-none");
  }

  return postsContainer;
}

export function renderPosts(postDataList, parent) {
  parent.append(...postDataList.map(postsTemplate));
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
