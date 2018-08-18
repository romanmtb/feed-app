let tab_container = document.getElementById("tab_container");
let profAvatar = document.getElementById("profAvat");

let arr = Array.from(tab_container.children); // refactor collection of children tab_container to array

let tabHandler = arr.map(item => {
  let curPos = item.dataset.id; // set current position of item
  item.addEventListener("click", e => {
    e.preventDefault();

    let tab_content = document.querySelectorAll(".tab_content"); // get all block with class tab_content
    let arrTabContent = Array.from(tab_content); // refactor collection of tab_content to array

    //this function show content if data-attribute id equals between tab_container.children and tab_content
    arrTabContent.map(tab => {
      if (item.dataset.id === tab.dataset.id) {
        tab.classList.add("show");
      } else {
        tab.classList.remove("show");
        tab.classList.add("hide");
      }
    });
    // this block add class 'active' for chosen element and remove class for previous
    arr.map(activeLine => {
      activeLine.classList.remove("active");
      arr[curPos - 1].classList.add("active");
    });
  });
  profAvatar.addEventListener("click", e => {
    let tab_content = document.querySelectorAll(".tab_content");
    let arrTabContent = Array.from(tab_content);
    arrTabContent.map(tab => {
      if (profAvatar.dataset.id === tab.dataset.id) {
        tab.classList.add("show");
      } else {
        tab.classList.remove("show");
        tab.classList.add("hide");
      }
    });
    arr.map(activeLine => {
      activeLine.classList.remove("active");
      arr[curPos - 1].classList.add("active");
    });
  });
});

export default tabHandler;
