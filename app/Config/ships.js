export default {
  StarShip: {
    object: require("../assets/ships/StarShip/StarShip2.obj"),
    material: require("../assets/ships/StarShip/StarShip2.mtl"),
    texture: require("../assets/ships/StarShip/shipBase.jpg"),
    background: require("../assets/ships/StarShip/starship_back.jpg"),
    scaleFactor: 0.2,
    y: 1.5,
  },
  Artemis: {
    object: require("../assets/ships/artemis/artemis.obj"),
    material: null,
    texture: require("../assets/ships/artemis/artemis.png"),
    background: require("../assets/ships/artemis/artemis_back.jpg"),
    scaleFactor: 0.15,
    y: 0.6,
  },
};
