import colors from "./colors";
import useRGB from "../hooks/useRGB";
import planetColors from "./planetColors";

const details1 = {
  circle: {
    color: "yellow",
    imageSource: require("../assets/planets/venus.jpg"),
  },

  section1: {
    text: "Venus",
    textColor: "black",
    bgColor: colors.orange,
  },

  section2: {
    text: "Mars",
    textColor: "white",
    bgColor: colors.red,
  },

  section3: {
    text: "Artemis",
    textColor: "white",
    bgColor: "orange",
  },
};
const details2 = {
  circle: {
    color: colors.lightBlue3,
    imageSource: require("../assets/planets/earth.jpg"),
  },

  section1: {
    text: "Earth",
    textColor: "black",
    bgColor: colors.blue1,
  },

  section2: {
    text: "Jupiter",
    textColor: "white",
    bgColor: colors.lightBrown,
  },

  section3: {
    text: "StarShip",
    textColor: "white",
    bgColor: "orange",
  },
};
const details3 = {
  circle: {
    color: "yellow",
    imageSource: require("../assets/planets/pluto.jpg"),
  },

  section1: {
    text: "Pluto",
    textColor: "black",
    bgColor: colors.purple2,
  },

  section2: {
    text: "Saturn",
    textColor: "white",
    bgColor: colors.lightBrown,
  },

  section3: {
    text: "StarShip",
    textColor: "white",
    bgColor: "orange",
  },
};
const details4 = {
  circle: {
    color: "yellow",
    imageSource: require("../assets/planets/venus.jpg"),
  },

  section1: {
    text: "Mars",
    textColor: "black",
    bgColor: "red",
  },

  section2: {
    text: "Earth",
    textColor: "white",
    bgColor: colors.blue1,
  },

  section3: {
    text: "Artemis",
    textColor: "white",
    bgColor: "orange",
  },
};

export default Data = [
  { id: 1, details: details1 },
  { id: 2, details: details2 },
  { id: 3, details: details3 },
  { id: 4, details: details4 },
];
