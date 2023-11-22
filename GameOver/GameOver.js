/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class GameOver extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("fantasia1", "./GameOver/costumes/fantasia1.png", {
        x: 480,
        y: 360
      })
    ];

    this.sounds = [
      new Sound("saltar", "./GameOver/sounds/saltar.wav"),
      new Sound("Game_Over", "./GameOver/sounds/Game_Over.mp3")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Death" }, this.whenIReceiveDeath),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Death" },
        this.whenIReceiveDeath2
      ),
      new Trigger(Trigger.BROADCAST, { name: "Death" }, this.whenIReceiveDeath3)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveDeath() {
    this.visible = true;
    this.effects.ghost = 100;
    for (let i = 0; i < 19; i++) {
      this.effects.ghost -= 10;
      yield;
    }
    yield* this.startSound("Game_Over");
  }

  *whenIReceiveDeath2() {
    while (true) {
      this.stage.vars.score = 0;
      yield;
    }
  }

  *whenIReceiveDeath3() {
    while (true) {
      this.stage.vars.coins = 0;
      yield;
    }
  }
}
