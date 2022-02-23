import "./style.css";
import menuImageOne from "./assets/img/chickenandrice.jpg";
import menuImageTwo from "./assets/img/streettacos.jpg";
import footerImage from "./assets/img/github.png";
import headerImage from "./assets/img/headerstyle.png";
import mapImage from "./assets/img/map.png";
import mainImage from "./assets/img/spread.jpg";
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
