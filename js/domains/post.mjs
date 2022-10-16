// class for post object
export class PostObject {
  constructor(username, email, avatar, title, content, created, updated, id) {
    this.username = username;
    this.email = email;
    this.avatar = avatar;
    this.title = title;
    this.content = content;
    this.published = created;
    this.updated = updated;
    this.id = id;
  }
}
