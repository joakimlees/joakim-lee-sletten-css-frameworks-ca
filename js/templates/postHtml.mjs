export function createPostHtml() {
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

  return parsedPostHtml;
}

export const postHtml = createPostHtml();
