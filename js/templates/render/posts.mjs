import * as template from "../creators/index.mjs";

export function posts(postDataList, parent) {
  parent.append(...postDataList.map(template.postTemplate));
}
