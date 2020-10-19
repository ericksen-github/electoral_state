import { alabama } from "./states/alabama";
import { usa } from "./usaSVG";
import { insertInfo } from "./stateInfo";
import { addStateListeners } from "./mainSort";

const sortSVG = (state) => {
  document.getElementById("stateDropDown").style.display = "none";

  handleHomeButtons("show");

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

const handleHomeButtons = (status) => {
  const homeButton = document.getElementsByClassName("homeButton");
  const buttonArray = [...homeButton];

  if (status == "show") {
    buttonArray.forEach((button) => {
      button.classList.remove("hide");
      button.classList.add("show");
      button.addEventListener("click", (e) => {
        document.getElementById("svgHome").innerHTML = usa;
        document.getElementById("stateDropDown").style.display = "block";
        handleHomeButtons("hide");
        addStateListeners();
      });
    });
  } else {
    buttonArray.forEach((button) => {
      button.classList.remove("show");
      button.classList.add("hide");
    });
  }
};

export { sortSVG };
