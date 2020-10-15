import { sortSVG } from "./mapSVG";

const mainSort = () => {
  const states = document.getElementsByClassName("state");

  let statesArray = [...states];

  statesArray.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      const name = e.target.id;
      sortSVG(name);
    });
  });

  console.log(statesArray);

  //   const counties = document.getElementsByClassName("counties");
  //   let countiesArray = [...counties];

  //   countiesArray.forEach((ele) => {
  //     ele.addEventListener("click", (e) => {
  //       const name = e.target.id;
  //       document.getElementById("infoBox").style.display = "block";
  //       insertInfo(state, name);
  //     });
  //   });
};

export { mainSort };
