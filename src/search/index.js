import Search from "./search";
import TagsPage from "./tags";
import { Feed } from "../feed";
import createNode from "./createNode";

let feed = new Feed();
let model;
feed.getPosts().then(res => {
  model = feed.posts.map(old => {
    return {
      id: old.id,
      name: `${old.author.firstName} ${old.author.lastName}`,
      tags: old.tags.map(item => item.toLowerCase())
    };
  });
  Search(model, feed);
  TagsPage(model, feed);
});
