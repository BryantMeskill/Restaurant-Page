export default function renderFooter() {
  const footer = document.createElement("div");
  const copyright = document.createElement("div");
  const userLink = document.createElement("a");

  footer.classList.add("footer");
  copyright.classList.add("copyright");
  userLink.classList.add("user-link");

  copyright.textContent = "Created by";
  userLink.textContent = "Bryant Meskill";
  userLink.href = "www.github.com/BryantMeskill";

  footer.appendChild(copyright);
  footer.appendChild(userLink);

  return footer;
}
