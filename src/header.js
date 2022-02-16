export default function renderHeader() {
  const header = document.createElement("div");
  const homeBtn = document.createElement("button");
  const menuBtn = document.createElement("button");
  const contactBtn = document.createElement("button");

  homeBtn.textContent = "Home";
  menuBtn.textContent = "Menu";
  contactBtn.textContent = "Contact";

  header.classList.add("header");
  homeBtn.classList.add("home");
  menuBtn.classList.add("menu");
  contactBtn.classList.add("contact");

  header.appendChild(homeBtn);
  header.appendChild(menuBtn);
  header.appendChild(contactBtn);

  return header;
}
