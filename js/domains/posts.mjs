export class PostsObject {

  listOfPosts = [];

  constructor(username, email, title, content, created, updated, id) {
    this.username = username;
    this.email = email;
    this.title = title;
    this.content = content;
    this.published = created;
    this.updated = updated;
    this.id = id;
  }

  newPostList(this) {
    const newArray = this.listOfPosts.push(this.postsObject);

   return newArray;


  }

}