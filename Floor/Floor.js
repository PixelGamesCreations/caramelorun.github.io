/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Floor extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Floor/costumes/costume1.svg", {
        x: 311,
        y: 17.84376525878909
      }),
      new Costume("costume2", "./Floor/costumes/costume2.svg", {
        x: 256.3025695067626,
        y: 184.47740363363343
      })
    ];

    this.sounds = [new Sound("pop", "./Floor/sounds/pop.wav")];

    this.triggers = [];
  }
}
