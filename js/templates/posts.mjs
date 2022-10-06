/*export function postTemplate(postData, parent) {
  const post = document.createElement("div");
  post.classList.add("post");
  post.innerText = postData.body;
  return post;
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
