import { load } from "../storage/index.mjs";

const profile = load("profile");

function postTemplate(postData) {
  const postContainer = document.createElement("div");
  const postWrapper = document.createElement("div");
  const postAvatarContainer = document.createElement("div");
  const postAvatar = document.createElement("img");
  const postContentWrapper = document.createElement("div");
  const postContent = document.createElement("p");
  const postUsername = document.createElement("strong");
  const buttonWrapper = document.createElement("div");
  const viewButton = document.createElement("button");
  const editButton = document.createElement("button");

  postContainer.classList.add("container", "my-4", "p-3", "rounded", "shadow-sm");
  postWrapper.classList.add("wrapper", "row", "pt-3");
  postAvatarContainer.classList.add("avatarContainer", "col");
  postAvatar.classList.add("rounded", "contact-image");
  postContentWrapper.classList.add("contentWrapper", "col-8", "col-md-9", "col-lg-10");
  postUsername.classList.add("d-block", "text-primary");
  postContent.classList.add("pb-5", "lh-sm", "border-bottom", "border-md-light-gray", "text-white");
  buttonWrapper.classList.add("d-flex", "justify-content-end");
  viewButton.classList.add("btn", "btn-secondary");
  editButton.classList.add("btn", "btn-danger", "ms-2");

  postContainer.appendChild(postWrapper);
  postWrapper.appendChild(postAvatarContainer);
  postWrapper.appendChild(postContentWrapper);
  postAvatarContainer.appendChild(postAvatar);
  postContentWrapper.appendChild(postContent);
  postContent.appendChild(postUsername);
  postContainer.appendChild(buttonWrapper);
  buttonWrapper.appendChild(viewButton);
  buttonWrapper.appendChild(editButton);

  postUsername.innerText = "@" + postData.author.name;
  postContent.innerHTML = postContent.innerHTML + postData.body;
  viewButton.innerText = "View post";
  editButton.innerText = "Edit post";
  postAvatar.src = postData.author.avatar;

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

  return postContainer;
}

export function renderPosts(postDataList, parent) {
  parent.append(...postDataList.map(postTemplate));
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
