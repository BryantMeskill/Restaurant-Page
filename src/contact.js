export default function renderContact() {
  const section = document.createElement("div");
  const title = document.createElement("h1");
  const desc = document.createElement("p");
  const image = document.createElement("img");
  const hoursList = document.createElement("ol");
  const days = [
    "Monday 12-8",
    "Tuesday 12-8",
    "Wednesday 12-8",
    "Thursday 12-8",
    "Friday 12-10",
    "Saturday 12-10",
    "Sunday 11-7",
  ];

  //TODO
  //image.src = "../src/map.jpg";
  //image.alt = "A map of store location";

  hoursList.classList.add("hours-list");
  section.classList.add("section");
  title.classList.add("title");

  title.textContent = "Contact Us";
  desc.textContent =
    "Thanks for considering us for your lunch and dinner needs! Below you will\r\n";
  desc.textContent +=
    "find our phone number and address, as well as our business hours. Walk-ins\r\n";
  desc.textContent +=
    "are always welcome, you may also order by phone. Hope to see you soon!";

  desc.setAttribute("style", "white-space: pre;");

  //create list element for each day and append to parent ol
  days.forEach((day) => {
    let li = document.createElement("li");
    li.innerText = day;
    hoursList.appendChild(li);
  });

  section.appendChild(title);
  section.appendChild(desc);
  section.appendChild(hoursList);

  return section;
}
