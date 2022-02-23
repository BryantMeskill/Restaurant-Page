export default function renderContact() {
  const section = document.createElement("div");
  const subtitle = document.createElement("h1");
  const desc = document.createElement("p");
  const image = document.createElement("img");
  const address = document.createElement("div");
  const info = document.createElement("ol");

  const days = [
    "HOURS",
    "Monday 12-8",
    "Tuesday 12-8",
    "Wednesday 12-8",
    "Thursday 12-8",
    "Friday 12-10",
    "Saturday 12-10",
    "Sunday 11-7",
  ];

  image.src = "../dist/a0f8a4358407b9aa07cd.png";
  image.alt = "A map of store location";

  desc.classList.add("contact-desc");
  image.classList.add("img");
  info.classList.add("info");
  section.classList.add("section");
  subtitle.classList.add("subtitle");

  subtitle.textContent = "Contact Us";
  desc.innerHTML = "6957 Santa Fe Ave SE, Albuquerque, NM<br>📞(123)456-7890";

  //create list element for each day and append to parent ol
  days.forEach((day) => {
    let li = document.createElement("li");
    li.innerText = day;
    info.appendChild(li);
  });

  section.appendChild(subtitle);
  section.appendChild(image);
  section.appendChild(desc);
  section.appendChild(info);

  return section;
}
