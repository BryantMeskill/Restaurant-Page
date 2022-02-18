export default function renderMenu() {
  const section = document.createElement("div");
  const title = document.createElement("div");
  const desc = document.createElement("p");
  const beef = [
    "Quesadilla - $9.29",
    "Street Tacos - $11.99",
    "Beefy Nachos - $12.49",
    "Beefy Queso Dip - $6.49",
    "Kids Taco - $2.49",
  ];

  section.classList.add("section");
  title.classList.add("title");

  title.textContent = "Menu";
  desc.textContent =
    "Some items are subject to availability of fresh local ingredients.";

  section.appendChild(title);
  section.appendChild(desc);

  return section;
}
