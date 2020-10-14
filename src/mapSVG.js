const sortSVG = (state) => {
  const main = document.getElementById("main");

  if (state == "alabama") {
    document.getElementById("svgLocation").src =
      "../dist/svgs/Alabama_counties.svg";
  }
};
export { sortSVG };
