import { displayEvents, upcoming, completed } from "./main.js";
const search = document.querySelector("#search");
const match = (a, b) => {
  return a.split(" ").some((word1) => {
    return b.split(" ").some((word2) => {
      return word1.indexOf(word2) == 0;
    });
  });
};
const filterByName = (event) => match(event.name.toLowerCase(), search.value.trim().toLowerCase());
const filterCards = function () {
   displayEvents(
    upcoming[1].filter(filterByName),
    document.querySelector(".container"),
    true
  );
  displayEvents(
    completed[1].filter(filterByName).filter((e) => !upcoming[0].has(e.name)),
    document.querySelector(".container")
  );
};
search.addEventListener("input", filterCards);
search.addEventListener("blur", function(){
     const noCards =  !upcoming[1].filter(filterByName).length &&  !completed[1].filter(filterByName).length;
    
     if (noCards){
    this.value = "";
    filterCards()
     }
});
