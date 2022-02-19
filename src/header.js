export default function renderHeader() {
  const titleContainer = document.createElement("div");
  const title = document.createElement("h1");
  const header = document.createElement("div");
  const btnContainer = document.createElement("div");
  const homeBtn = document.createElement("button");
  const menuBtn = document.createElement("button");
  const contactBtn = document.createElement("button");

  title.textContent = "Tres Amigos Mexican Restaraunt";
  homeBtn.textContent = "Home";
  menuBtn.textContent = "Menu";
  contactBtn.textContent = "Contact";

  title.classList.add("title");
  titleContainer.classList.add("title-container");
  btnContainer.classList.add("btn-container");
  header.classList.add("header");
  homeBtn.classList.add("home");
  menuBtn.classList.add("menu");
  contactBtn.classList.add("contact");

  titleContainer.appendChild(title);
  btnContainer.appendChild(homeBtn);
  btnContainer.appendChild(menuBtn);
  btnContainer.appendChild(contactBtn);
  header.appendChild(titleContainer);
  header.appendChild(btnContainer);

  return header;
}
