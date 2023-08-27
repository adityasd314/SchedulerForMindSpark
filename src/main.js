import { upcoming, completed } from "./event.js";
const createElement = (tagName, object) => {
  const element = document.createElement(tagName);

  for (const property in object) {
    if (Object.hasOwnProperty.call(object, property)) {
      const value = object[property];
      element[property] = value;

    }
  }
  return element;
}
const createEventCard = (name, descS, dateS, timeS, tags, link, buildings, round) => {
  const { hour_start, minute_start } = timeS;

  const timeString =
    hour_start > 12
      ? hour_start - 12 + String(minute_start || "") + " PM"
      : hour_start + String(minute_start || "") + " AM";
  const dateString = dateS.toString().split(" ").slice(1, 3).join(" ");
  // Format ex `Aug 15`

  //    `
  //     <li class="grid-item">
  //         <article>
  //             <div class="date-time-container">
  //                 <h5 class="date">${dateString}</h5>
  //                 <h5 class="time">${timeString}</h5>
  //             </div>
  //           <h2>${name}</h2>
  //           <div class="tag-container"><code class="tag">${name}</code></div>
  //       #    <p>${desc || "lorem ipsum dollar sit amet"}</p>
  //
  // <div class="venue">
  //   <span class="department">Department: XYZ</span>
  //   <span class="building">AC101</span>
  // </div>
  //         </article>
  //       </li>`;
  const gridItem = createElement("li", { className: "grid-item box" });
  const article = createElement("article", { className: "content" });
  const dateTimeContainer = createElement("div", { className: "date-time-container" });
  const url = createElement("a", { className: "event-page-link", innerText: "Go To Event", href: link });
  const date = createElement("p", { className: "date", innerText: dateString });

  const time = createElement("p", { className: "time", innerText: timeString });

  dateTimeContainer.append(date);
  dateTimeContainer.append(time);
  const title = createElement("h2", { className: "logo righteous tricolor-shadow", innerText: name + " R" + round });
  const tagContainer = createElement("div", { className: "tag-container" })
  console.log('tags :>> ', tags);
  for (const tag of tags) {
    const tagElement = createElement("code", { className: `tag ${tag}`, innerText: tag });
    tagContainer.append(tagElement);
  }
  console.log("motroajs", buildings)
  const venue = createElement("div", { className: "venue" })
  const department = createElement("div", { className: "department" },);
  console.log('buildings :>> ', buildings);
  const buildingsContainer = createElement("div", { className: "building" })
  article.append(title)
  article.append(tagContainer);
  article.append(dateTimeContainer);
  venue.append(department)
  venue.append(buildingsContainer)
  article.append(venue)

  // article.append(buildingsContainer)
  console.log('buildings :>> ', buildings);
  buildings.forEach((building, i) => {

    buildingsContainer.innerText += ((i > 0) ? ", " : "") + building.name;
    // buildingsContainer.innerText += i + 1 ? ", " : "";
    department.innerText += department.innerText ? "" : building.venue
  })
  article.append(url)
  gridItem.append(article);
  return gridItem;
};

const displayEvents = (events, grid, deletePrev = false, equal = true) => {
  if (deletePrev)
    grid.innerHTML = `<ul class="grid"></ul>`
  let grid_row = grid.lastElementChild;
  if (grid_row.childElementCount == 3) {
    grid_row = document.createElement("ul");
    grid_row.className = "grid" + (equal ? " equal" : "");
  }
  for (const event of events) {
    console.log(grid_row.childElementCount);
    const { name, desc, date, time, tags, link, buildings, round } = event;
    debugger
    const eventCard = createEventCard(name, desc, date, time, tags, link, buildings, round);
    grid_row.appendChild(eventCard);
    if (grid_row.childElementCount == 3) {
      grid.appendChild(grid_row);
      grid_row = document.createElement("ul");
      grid_row.className = "grid" + (equal ? " equal" : "");
    }
  }
  grid.append(grid_row);
};
displayEvents(upcoming[1], document.querySelector(".container"));
displayEvents(
  completed[1].filter((e) => !upcoming[0].has(e.name)),
  document.querySelector(".container")
);
export { displayEvents, upcoming, completed }