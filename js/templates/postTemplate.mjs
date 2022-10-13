import { postHtml } from "./postHtml.mjs";
import { load } from "../storage/index.mjs";

const profile = load("profile");

export function testTemplate(postData) {
  const postParser = new DOMParser();

  const parsedPostHtml = postParser.parseFromString(
    `
    <div class="my-4 p-3 rounded shadow-sm">
      <div class="row pt-3">
        <div class="col">
          <img id="post-image" class="rounded contact-image" src="" alt="" />
        </div>
        <div class="col-8 col-md-9 col-lg-10">
          <h2 id="post-title"></h2>
          <p id="post-copy" class="pb-5 lh-sm border-bottom border-md-light-gray text-white">
            <strong id="username" class="d-block text-primary"></strong>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quia quis vel temporibus magnam at! Minus quisquam voluptates suscipit quasi cupiditate fuga dolorum consectetur! Laudantium, necessitatibus. Reiciendis commodi aliquam nesciunt.
          </p>
        </div>
        <div class="button-wrapper d-flex justify-content-end">
          <button id="btn-primary" class="btn btn-secondary">View post</button>
          <button id="btn-secondary" class="btn btn-danger ms-2">Edit post</button>
        </div>
      </div>
    </div>`,
    "text/html"
  );

  const image = postHtml.getElementById("post-image");
  const username = postHtml.getElementById("username");
  const title = postHtml.getElementById("post-title");
  const postCopy = postHtml.getElementById("post-copy");
  const buttonWrapper = postHtml.getElementById("button-wrapper");
  const buttonPrimary = postHtml.getElementById("btn-primary");
  const buttonSecondary = postHtml.getElementById("btn-secondary");

  username.innerText = "@" + postData.author.name;
  postCopy.innerHTML = postData.body;
  title.innerText = postData.title;

  // Buttons handling - since they differ from /post and /posts - and
  // if users view his/her own post or someone elses post.
  if (location.pathname === "/post/" && postData.author.email !== profile.email) {
    buttonWrapper.classList.add("d-none");
  } else if (location.pathname === "/post/" && postData.author.email === profile.email) {
    buttonPrimary.innerText = "Edit post";
    buttonSecondary.innerText = "Delete post";
  }

  if (location.pathname === "/posts/")
    buttonPrimary.addEventListener("click", () => {
      document.location.href = `/post/?id=${postData.id}?_author=true`;
    });

  const finalHtml = parsedPostHtml.body.innerHTML;

  return finalHtml;
}

export function renderPosts(postDataList, parent) {
  parent.append(...postDataList.map(testTemplate));
}

/*
export function singlePostTemplate(postData) {
  return postData;
}

export function renderPost(postData, parent) {
  parent.append(postTemplate(postData));
}
*/
/*
function postTemplate(postData) {
  if (location.pathname === "/posts/") {
    const viewButton = document.createElement("button");
    viewButton.classList.add("btn", "btn-secondary");
    buttonWrapper.appendChild(viewButton);
    viewButton.innerText = "View post";
    viewButton.addEventListener("click", () => {
      document.location.href = `/post/?id=${postData.id}?_author=true`;
    });
  }
  const editButton = document.createElement("button");

  postContainer.classList.add("container", "my-4", "p-3", "rounded", "shadow-sm");
  postWrapper.classList.add("wrapper", "row", "pt-3");
  postAvatarContainer.classList.add("avatarContainer", "col");
  postAvatar.classList.add("rounded", "contact-image");
  postContentWrapper.classList.add("contentWrapper", "col-8", "col-md-9", "col-lg-10");
  postUsername.classList.add("d-block", "text-primary");
  postContent.classList.add("pb-5", "lh-sm", "border-bottom", "border-md-light-gray", "text-white");
  buttonWrapper.classList.add("d-flex", "justify-content-end");
  editButton.classList.add("btn", "btn-danger", "ms-2");

  postContainer.appendChild(postWrapper);
  postWrapper.appendChild(postAvatarContainer);
  postWrapper.appendChild(postContentWrapper);
  postAvatarContainer.appendChild(postAvatar);
  postContentWrapper.appendChild(postContent);
  postContent.appendChild(postUsername);
  postContainer.appendChild(buttonWrapper);
  buttonWrapper.appendChild(editButton);

  postUsername.innerText = "@" + postData.author.name;
  postContent.innerHTML = postContent.innerHTML + postData.body;
  editButton.innerText = "Edit post";
  postAvatar.src = postData.author.avatar;

  if (editButton) {
    editButton.addEventListener("click", () => {
      document.location.href = `/post/edit/?id=${postData.id}`;
    });
  }

  if (postData.author.avatar === "" || postData.author.avatar === null || postData.author.avatar === undefined) {
    postAvatar.src = "../../../images/some-default-avatar.jpg";
  }
  if (postData.author.email !== profile.email) {
    editButton.classList.add("d-none");
  }

  return postContainer;
}

export function singlePostTemplate(postData) {
  return postData;
}

export function renderPost(postData, parent) {
  parent.append(postTemplate(postData));
}

*/
