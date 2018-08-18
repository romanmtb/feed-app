import createNode from "./createNode";

const TagsPage = (model, feed) => {
  let a, result_array, wr_tags;

  wr_tags = document.getElementById("tags");
  a = wr_tags.getElementsByTagName("a");

  let xTags = [];
  model.map(item => {
    item.tags.map(tag => xTags.push(tag));
  });
  const filterUnique = (val, ind, elem) => elem.indexOf(val) === ind;
  result_array = xTags.filter(filterUnique);

  wr_tags.innerHTML = null;

  result_array.map(item => {
    a = createNode("a", item);

    a.onclick = e => {
      let serachRes = model.filter(post => {
        return post.tags.some(tag => tag === item);
      });
      serachRes = serachRes.map(post => post.id);

      feed.renderPost(serachRes);

      document
        .querySelector('.tab_content[data-id="1"]')
        .classList.toggle("show");
      document
        .querySelector('.tab_content[data-id="3"]')
        .classList.toggle("show");
    };

    a.style.cursor = "pointer";
    wr_tags.appendChild(a);
  });
};

export default TagsPage;
