import "./style.css";
import renderHeader from "./header";
import renderFooter from "./footer";
import renderMain from "./frontPage";
import renderMenu from "./menu";
import renderContact from "./contact";

const content = document.querySelector(".content");
content.appendChild(renderHeader());
content.appendChild(renderMain());
content.appendChild(renderFooter());

const handleClick = (renderContentCallback) => {
  content.innerHTML = "";
  content.appendChild(renderHeader());
  content.appendChild(renderContentCallback());
  content.appendChild(renderFooter());
  render();
};

function render() {
  const homeBtn = document.querySelector(".home");
  const menuBtn = document.querySelector(".menu");
  const contactBtn = document.querySelector(".contact");

  homeBtn.addEventListener("click", () => {
    handleClick(renderMain);
  });

  menuBtn.addEventListener("click", () => {
    handleClick(renderMenu);
  });

  contactBtn.addEventListener("click", () => {
    handleClick(renderContact);
  });
}

render();
//removes child Nodes, but will leave behind event handlers, which can cause memory leak.
//content.innerHTML = "";
