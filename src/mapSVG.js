import { alabama } from "./states/alabama";
import { insertInfo } from "./stateInfo";

const sortSVG = (state) => {
  const main = document.getElementById("main");

  if (state == "AL") {
    document.getElementById("mainTitle").innerHTML = "Alabama";
    document.getElementById("svgHome").innerHTML = alabama;
    showInfo(state);
  }
};

const showInfo = (state) => {
  const counties = document.getElementsByClassName("counties");
  let countiesArray = [...counties];

  countiesArray.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      const name = e.target.id;
      document.getElementById("infoBox").style.display = "block";
      insertInfo(state, name);
    });
  });
};
export { sortSVG };
