import { sortSVG } from "./mapSVG";

const mainSort = () => {
  const states = document.getElementsByClassName("state");
  const statesArray = [...states];

  statesArray.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      const name = e.target.id;
      sortSVG(name);
    });
  });

  const dropDown = document.getElementsByTagName("option");
  const dropDownArray = [...dropDown];

  dropDownArray.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      const name = e.target.value;
      sortSVG(name);
    });
  });
};

export { mainSort };
