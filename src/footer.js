export default function renderFooter() {
  const footer = document.createElement("div");
  const image = document.createElement("img");
  const userLink = document.createElement("a");

  footer.classList.add("footer");
  userLink.classList.add("user-link");

  image.src = "../src/assets/img/github.png";
  image.alt = "Bryant Meskill's GitHub";
  userLink.href = "https://www.github.com/BryantMeskill";

  userLink.appendChild(image);
  footer.appendChild(userLink);

  return footer;
}
