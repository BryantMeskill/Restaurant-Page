import menuImageOne from "./assets/img/chickenandrice.jpg";
import menuImageTwo from "./assets/img/streettacos.jpg";

export default function renderMenu() {
  const section = document.createElement("div");
  const subtitle = document.createElement("h1");
  const desc = document.createElement("p");
  const menu = document.createElement("div");
  const imageContainer = document.createElement("div");
  const image = document.createElement("img");
  const imageTwo = document.createElement("img");
  const beefMenu = document.createElement("ul");
  const chickenMenu = document.createElement("ul");
  const sidesMenu = document.createElement("ul");
  const drinksMenu = document.createElement("ul");

  const beef = [
    "BEEF:",
    "Quesadilla - $9.29",
    "Street Tacos - $11.99",
    "Beefy Nachos - $12.49",
    "Beefy Queso Dip - $6.49",
    "Kids Taco - $2.49",
  ];

  const chicken = [
    "CHICKEN:",
    "Quesadilla - $9.29",
    "Street Tacos - $11.99",
    "Chicken Nachos - $12.49",
    "Chicken and Rice - $13.49",
    "Kids Taco - $2.49",
  ];

  const sides = [
    "SIDES:",
    "Queso - $4.99",
    "Guac - $5.99",
    "Tortillas 3pc - $3.99",
    "Chips and Salsa - $4.99",
    "Flan - 5.99",
  ];

  const drinks = [
    "DRINKS:",
    "Soft Drinks - $1.99",
    "Sweet Tea - $1.99",
    "Tequila (shot) - $4.99",
    "Margarita - $7.99",
    "Virgin Daquiri - $6.99",
  ];

  createMenu(beef, beefMenu);
  createMenu(chicken, chickenMenu);
  createMenu(sides, sidesMenu);
  createMenu(drinks, drinksMenu);

  imageContainer.classList.add("image-container");
  image.classList.add("menu-img");
  imageTwo.classList.add("menu-img");
  menu.classList.add("menu-list");
  section.classList.add("section");
  subtitle.classList.add("subtitle");
  desc.classList.add("menu-desc");

  subtitle.textContent = "Menu";
  desc.textContent =
    "Some items are subject to availability of fresh local ingredients.";

  image.src = menuImageOne;
  image.alt = "Dish of Chicken and Rice";
  imageTwo.src = menuImageTwo;
  imageTwo.alt = "Dish of tacos";

  menu.appendChild(beefMenu);
  menu.appendChild(chickenMenu);
  menu.appendChild(sidesMenu);
  menu.appendChild(drinksMenu);

  imageContainer.appendChild(image);
  imageContainer.appendChild(imageTwo);

  section.appendChild(subtitle);
  section.appendChild(imageContainer);
  section.appendChild(desc);
  section.appendChild(menu);

  return section;
}

const createMenu = (array, ul) => {
  array.forEach((item) => {
    let li = document.createElement("li");
    li.innerText = item;
    ul.appendChild(li);
  });
};
