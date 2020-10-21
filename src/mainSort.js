import { sortSVG } from "./sortSVG";

const mainSort = () => {
  addStateListeners();

  // adds click on each dropdown element
  const dropDown = document.getElementsByTagName("option");
  const dropDownArray = [...dropDown];

  dropDownArray.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      const name = e.target.value;
      sortSVG(name);
    });
  });
};

const addStateListeners = () => {
  // adds click on each state on usa map
  const states = document.getElementsByClassName("state");
  const statesArray = [...states];

  statesArray.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      const name = e.target.id;
      document.getElementById("usMap").style.animation = "slideOut 1.5s ease;";

      sortSVG(name);
    });
  });
};

export { mainSort, addStateListeners };
