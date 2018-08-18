const createNode = (item, name, zid) => {
  let elem = document.createElement(item);
  elem.innerHTML = name;
  if (zid !== undefined) {
    elem.dataset.id = zid;
  }
  return elem;
};

export default createNode;
