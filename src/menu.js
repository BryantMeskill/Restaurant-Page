export default function renderMenu() {
  const section = document.createElement("div");
  const menuTitle = document.createElement("div");
  const menuDesc = document.createElement("p");

  menuTitle.textContent = "Menu";
  menuDesc.textContent =
    "Some items are subject to availability of fresh local ingredients.";

  section.appendChild(menuTitle);
  section.appendChild(menuDesc);

  return section;
}
