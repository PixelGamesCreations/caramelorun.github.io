/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Car extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Car/costumes/costume1.svg", {
        x: 61.10722999999999,
        y: 268.03244
      })
    ];

    this.sounds = [new Sound("pop", "./Car/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    /* TODO: Implement music_setInstrument */ null;
    this.goto(this.random(1, 277), 137);
    this.visible = true;
    while (true) {
      if (this.touching(this.sprites["Player"].andClones())) {
        this.broadcast("Death");
        this.visible = true;
        this.goto(this.random(1, 292), 137);
      }
      if (this.compare(this.y, -400) < 0) {
        this.visible = false;
        yield* this.wait(1);
        this.visible = true;
        this.goto(this.random(1, 292), 137);
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      yield* this.wait(0.2);
      this.y -= 50;
      yield;
    }
  }
}
