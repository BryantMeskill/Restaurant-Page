export default function renderMain() {
  const section = document.createElement("div");
  const title = document.createElement("h1");
  const mainImage = document.createElement("img");
  const desc = document.createElement("p");

  mainImage.classList.add("front-pic");
  section.classList.add("section");
  title.classList.add("title");
  desc.classList.add("desc");

  mainImage.src = "../src/spread.jpg";
  mainImage.alt = "A dish of chicken and rice.";

  title.textContent = "Tres Amigos Mexican Restaraunt";
  desc.textContent =
    "Welcome to Tres Amigos Mexican restaraunt. We've been serving the\r\n";
  desc.textContent +=
    "local community delicious, authentic Mexican cuisine for over 40 years.\r\n";
  desc.textContent +=
    "We take pride in every customer served, and look forward to seeing you\r\n";
  desc.textContent +=
    "and your family for many more years to come. Thanks for your continued\r\n";
  desc.textContent +=
    "patronage! Check the menu and call us if you have any questions.";

  //setting this css style allows new line in textContent
  desc.setAttribute("style", "white-space: pre;");

  section.appendChild(title);
  section.appendChild(mainImage);
  section.appendChild(desc);

  return section;
}
