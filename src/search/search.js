import createNode from "./createNode";

const SearchFunc = (model, feed) => {
  let s,
    obj,
    uniqueArr,
    inp_search,
    inp_val,
    btn_search,
    result_search,
    a,
    block_overlay,
    result_array,
    wr_posts;

  inp_search = document.getElementById("inp_search");
  result_search = document.getElementById("result_search");
  a = result_search.getElementsByTagName("a");
  block_overlay = document.getElementById("block_overlay");

  inp_search.addEventListener("input", e => {
    e.preventDefault();

    result_search.style.visibility = "visible";
    result_search.style.opacity = "1";
    block_overlay.style.display = "block";
    result_search.innerHTML = null;

    inp_val = e.target.value.toLowerCase();
    result_array = model.filter(item => {
      if (item.tags.includes(inp_val)) {
        return item;
      }
      if (item.name.toLowerCase().includes(inp_val)) {
        return item;
      }
    });

    result_array.map(item => {
      if (item.tags.includes(inp_val)) {
        a = createNode("a", item.tags, item.id);

        a.onclick = e => {
          let click_item_id = item.id;
          document
            .querySelector('.tab_content[data-id="1"]')
            .classList.add("show");
          document
            .querySelector('.tab_content[data-id="2"]')
            .classList.remove("show");
          result_search.innerHTML = null;
          result_search.style.visibility = null;
          result_search.style.opacity = null;
          block_overlay.style.display = null;

          feed.renderPost(click_item_id);
        };

        a.style.cursor = "pointer";
        result_search.appendChild(a);
      }
      if (item.name.includes(inp_val)) {
        a = createNode("a", item.name, item.id);

        a.onclick = e => {
          let click_item_id = item.id;
          document
            .querySelector('.tab_content[data-id="1"]')
            .classList.add("show");
          document
            .querySelector('.tab_content[data-id="2"]')
            .classList.remove("show");
          result_search.innerHTML = null;
          result_search.style.visibility = null;
          result_search.style.opacity = null;
          block_overlay.style.display = null;

          feed.renderPost(click_item_id);
        };

        a.style.cursor = "pointer";
        result_search.appendChild(a);
      }
    });
  });

  block_overlay.addEventListener("click", e => {
    e.preventDefault();
    result_search.innerHTML = null;
    result_search.style.visibility = null;
    result_search.style.opacity = null;
    block_overlay.style.display = null;
  });
};

export default SearchFunc;
