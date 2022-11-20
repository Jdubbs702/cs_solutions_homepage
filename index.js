// create re-usable navBar

// get body element id:
const bodyId = document.getElementsByTagName("body")[0].id;
// get navBar root:
const navBar = document.querySelector("#navBar");

console.log(bodyId);
// create all elements to be used in navBar:

// create links:
const home = createLink("Home");
const about = createLink("About");
const gallery = createLink("Gallery");
const contact = createLink("Contact");

// create list items & append links to li:
const homeItem = createListItem();
homeItem.appendChild(home);

const aboutItem = createListItem();
aboutItem.appendChild(about);

const galleryItem = createListItem();
galleryItem.appendChild(gallery);

const contactItem = createListItem();
contactItem.appendChild(contact);

// create list:
const ul = document.createElement("ul");
ul.className = "nav nav-tabs";

// append list items to list:
ul.append(homeItem, aboutItem, galleryItem, contactItem);

// append list to navBar:
navBar.appendChild(ul);

function createListItem() {
  const listItem = document.createElement("li");
  listItem.className = "nav-item";
  return listItem;
}

function createLink(name) {
  const link = document.createElement("a");
  const text = document.createTextNode(name);
  if (bodyId === name) {
    link.setAttribute("aria-current", "page");
  }
  link.className = bodyId === name ? "nav-link active" : "nav-link";
  link.href = `../${name.toLowerCase()}/${name.toLowerCase()}.html`;
  link.appendChild(text);
  return link;
}
