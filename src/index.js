import { Feed } from "./feed";
import Calendar from "./calendar";
import Profile from "./profile";
import Search from "./search";
import Tab from "./tabs";

const feed = new Feed();

let btn = document.createElement("input");
btn.type = "button";
btn.value = "Show More";
btn.addEventListener("click", () => feed.showPosts());
document.getElementById("posts").appendChild(btn);

document.addEventListener("DOMContentLoaded", async () => {
  await feed.getPosts();

  // feed.renderPost(["5b3a64a948208773858a50f9", "5b3a64a9ba5e67189b095c96", "5b3a64a9fe1844d6922eecd6"]);
  feed.showPosts();
});

// feed.getPosts();  скачує всі наші пости
// feed.showPost(); показує перші 5 постів, а при повторному виклиці показує наступці 5
// feed.renderPost(); приймає id або масив id і виводить на екран
