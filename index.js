import {
  Project,
  Sprite
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Player from "./Player/Player.js";
import Coin from "./Coin/Coin.js";
import Floor from "./Floor/Floor.js";
import HabilityButton from "./HabilityButton/HabilityButton.js";
import Car from "./Car/Car.js";
import GameOver from "./GameOver/GameOver.js";
import HabilityPlayer from "./HabilityPlayer/HabilityPlayer.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Player: new Player({
    x: 40,
    y: -93,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 800,
    visible: false,
    layerOrder: 3
  }),
  Coin: new Coin({
    x: 26,
    y: 17,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 110.00000000000001,
    visible: true,
    layerOrder: 2
  }),
  Floor: new Floor({
    x: -5,
    y: 4.0000027126733855,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 115.11575415413759,
    visible: true,
    layerOrder: 1
  }),
  HabilityButton: new HabilityButton({
    x: 0,
    y: 126.99999932183165,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 3,
    size: 40,
    visible: true,
    layerOrder: 5
  }),
  Car: new Car({
    x: 29,
    y: -39,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 110.00000000000001,
    visible: true,
    layerOrder: 4
  }),
  GameOver: new GameOver({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 7
  }),
  HabilityPlayer: new HabilityPlayer({
    x: 40,
    y: -93,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 800,
    visible: false,
    layerOrder: 6
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
