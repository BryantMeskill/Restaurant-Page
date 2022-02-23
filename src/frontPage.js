export default function renderMain() {
  const section = document.createElement("div");
  const title = document.createElement("h1");
  const mainImage = document.createElement("img");
  const desc = document.createElement("p");

  mainImage.classList.add("img");
  section.classList.add("section");
  desc.classList.add("desc");

  mainImage.src = "../dist/d248d26897f3f67b219e.jpg";
  mainImage.alt = "A dish of chicken and rice.";

  desc.innerHTML =
    "Welcome to Tres Amigos Mexican restaraunt. We've been serving the<br>local community delicious, authentic Mexican cuisine for over 40 years.<br>We take pride in every customer served, and look forward to seeing you<br>and your family for many more years to come. Thanks for your continued<br>patronage! Check the menu and call us if you have any questions.";

  //setting this css style allows new line in textContent
  desc.setAttribute("style", "white-space: pre;");

  section.appendChild(mainImage);
  section.appendChild(desc);

  return section;
}
