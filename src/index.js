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

function render() {
  const homeBtn = document.querySelector(".home");
  const menuBtn = document.querySelector(".menu");
  const contactBtn = document.querySelector(".contact");

  homeBtn.addEventListener("click", () => {
    content.innerHTML = "";
    content.appendChild(renderHeader());
    content.appendChild(renderMain());
    content.appendChild(renderFooter());
    render();
  });

  menuBtn.addEventListener("click", () => {
    content.innerHTML = "";
    content.appendChild(renderHeader());
    content.appendChild(renderMenu());
    content.appendChild(renderFooter());
    render();
  });

  contactBtn.addEventListener("click", () => {
    content.innerHTML = "";
    content.appendChild(renderHeader());
    content.appendChild(renderContact());
    content.appendChild(renderFooter());
    render();
  });
}

render();
//removes child Nodes, but will leave behind event handlers, which can cause memory leak.
//content.innerHTML = "";
