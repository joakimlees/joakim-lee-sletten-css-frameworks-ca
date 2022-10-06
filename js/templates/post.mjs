export function postTemplate(postData) {
  /*
  const postContainer = document.createElement("div");
  const postWrapper = document.createElement("div");
  const postAvatarContainer = document.createElement("div");
  const postAvatar = document.createElement("img");
  const postContentWrapper = document.createElement("div");
  const postContent = document.createElement("p");
  const postUsername = document.createElement("strong");

  postContainer.classList.add("my-4", "p-3", "rounded", "shadow-sm");
  postWrapper.classList.add("row", "pt-3");
  postAvatarContainer.classList.add("col");
  postAvatar.classList.add("rounded", "contact-image");
  postContentWrapper.classList.add("col-8", "col-md-9", "col-lg-10");
  postContent.classList.add("pb-5", "lh-sm", "border-bottom", "border-md-light-gray", "text-white");
  postUsername.classList.add("d-block", "text-primary");

  postContainer.appendChild(postWrapper);
  postWrapper.appendChild(postAvatarContainer);
  postWrapper.appendChild(postContentWrapper);
  postAvatarContainer.appendChild(postAvatar);
  postContentWrapper.appendChild(postContent);
  postContent.appendChild(postUsername);

  //postAvatar.src = postData.media;
  postUsername.innerText = postData.author;
  postContent.innerText = postData.body;

  */
  const postContainer = document.createElement("div");
  const postWrapper = document.createElement("div");
  const postAvatarContainer = document.createElement("div");
  const postAvatar = document.createElement("img");
  const postContentWrapper = document.createElement("div");
  const postContent = document.createElement("p");
  const postUsername = document.createElement("strong");
  postContainer.classList.add("container", "my-4", "p-3", "rounded", "shadow-sm");
  postWrapper.classList.add("wrapper", "row", "pt-3");
  postAvatarContainer.classList.add("avatarContainer", "col");
  postContentWrapper.classList.add("contentWrapper", "col-8", "col-md-9", "col-lg-10");
  postUsername.classList.add("d-block", "text-primary");
  postContent.classList.add("pb-5", "lh-sm", "border-bottom", "border-md-light-gray", "text-white");

  postContainer.appendChild(postWrapper);
  postWrapper.appendChild(postAvatarContainer);
  postWrapper.appendChild(postContentWrapper);
  postAvatarContainer.appendChild(postAvatar);
  postContentWrapper.appendChild(postContent);
  postContent.appendChild(postUsername);

  postUsername.innerText = "@" + postData.author.name;
  postContent.innerHTML = postContent.innerHTML + postData.body;

  return postContainer;

  /*
  const post = document.createElement("div");
  post.classList.add("post");
  post.innerText = postData.author.name;
  return post;
  */
}

export function renderPost(postData, parent) {
  parent.append(postTemplate(postData));
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
