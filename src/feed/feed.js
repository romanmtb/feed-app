import { Post } from "./post";

const POSTS_LIMIT = 5;

export class Feed {
  constructor() {
    this.posts = [];
    this.postsLimit = POSTS_LIMIT;
  }

  async getPosts() {
    // [{model}, {model}, ...]
    //   |        |
    // [Post,    Post,...]
    try {
      const models = await fetch("../data.json").then(res => res.json()); // [{model}, {model}, ...]
      const posts = models.map(model => new Post(model)); // [Post,    Post,...]

      this.posts = posts;
    } catch (error) {}
  }

  findPost(postIds) {
    // 1 || [1, 2, 3]
    if (Array.isArray(postIds)) {
      // postIds = [1, 2, 3]
      return this.posts.filter(post => postIds.indexOf(post.id) > -1);
    } else {
      // postIds = 1
      return this.posts.filter(post => post.id === postIds);
    }
  }

  showPosts() {
    const container = document.getElementById("wrap_posts");

    container.innerHTML = null;

    this.posts
      .filter((_, i) => i < this.postsLimit)
      .forEach(post => container.appendChild(post.render()));

    this.postsLimit = this.postsLimit + POSTS_LIMIT;
  }

  renderPost(ids) {
    const container = document.getElementById("wrap_posts");

    container.innerHTML = null;

    this.findPost(ids).forEach(post => container.appendChild(post.render()));
  }
}
