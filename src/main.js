import { upcoming, completed } from "./event.js";

const createEventCard = (name, descS, dateS, timeS) => {
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
  //           <p>${desc || "lorem ipsum dollar sit amet"}</p>
  //         </article>
  //       </li>`;
  const gridItem = document.createElement("li");
  gridItem.className = "grid-item box";
  const article = document.createElement("article");
  article.className = "content"
  const dateTimeContainer = document.createElement("div");
  dateTimeContainer.className = "date-time-container";
  const date = document.createElement("p");
  date.className = "date";
  date.innerText = dateString;
  const time = document.createElement("p");
  time.className = "time";
  time.innerText = timeString;
  dateTimeContainer.append(date);
  dateTimeContainer.append(time);
  const title = document.createElement("h2");
  title.className = "logo righteous tricolor-shadow";
  title.innerText = name;

  const desc = document.createElement("p");
  desc.innerText = descS || "lorem ipsum dollar sit amet";

  article.append(dateTimeContainer);
article.append(title)
article.append(desc)
  gridItem.append(article);
  return gridItem;
};

const displayEvents = (events, grid,deletePrev=false, equal = true) => {
  if (deletePrev)
  grid.innerHTML = `<ul class="grid"></ul>`
  let grid_row = grid.lastElementChild;
  if (grid_row.childElementCount == 3) {
    grid_row = document.createElement("ul");
    grid_row.className = "grid" + (equal ? " equal" : "");
  }
  for (const event of events) {
    console.log(grid_row.childElementCount);
    const { name, desc, date, time } = event;

    const eventCard = createEventCard(name, desc, date, time);
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
export {displayEvents, upcoming,completed}