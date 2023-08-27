import { displayEvents, upcoming, completed } from "./main.js";
const search = document.querySelector("#search");
const searchQuery = () => search.value.trim().toLowerCase();
const match = (a, b) => {
  return a.split(" ").some((word1) => {
    return b.split(" ").some((word2) => {
      return word1.indexOf(word2) == 0;
    });
  });
};
const filterByName = (event) => match(event.name.toLowerCase(), searchQuery());
const filterByTags = (event) => event.tags.some((x) => match(x, searchQuery().substr(1)));
const filterCards = function () {
  const isTagSearch = searchQuery()[0] == "@";
  displayEvents(
    upcoming[1].filter(isTagSearch ? filterByTags : filterByName),
    document.querySelector(".container"),
    true
  );
  displayEvents(
    completed[1].filter(isTagSearch ? filterByTags : filterByName).filter((e) => !upcoming[0].has(e.name)),
    document.querySelector(".container")
  );
};
search.addEventListener("input", filterCards);
search.addEventListener("blur", function () {
  const noCards = !upcoming[1].filter(filterByName).length && !completed[1].filter(filterByName).length;

  if (noCards) {
    this.value = "";
    filterCards()
  }
});
