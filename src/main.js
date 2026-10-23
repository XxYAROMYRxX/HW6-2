import data from "./data.json";
// import render from "./markup";
import template from "./template.hbs"

const list = document.querySelector(".list");
// list.innerHTML = render(data);
list.innerHTML = template(data);
