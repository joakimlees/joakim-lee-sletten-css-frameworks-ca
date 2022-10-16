import * as template from "../creators/index.mjs";

export function post(postData, parent) {
  parent.append(template.postTemplate(postData));
}
