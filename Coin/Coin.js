/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Coin extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Coin/costumes/costume1.svg", {
        x: 56.68907417769509,
        y: 89.59357114242209
      })
    ];

    this.sounds = [new Sound("Coin_Sound", "./Coin/sounds/Coin_Sound.mp3")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    /* TODO: Implement music_setInstrument */ null;
    this.goto(this.random(1, 237), 137);
    this.visible = true;
    while (true) {
      if (this.compare(this.y, -104) < 0) {
        if (this.touching(this.sprites["Player"].andClones())) {
          yield* this.startSound("Coin_Sound");
          this.stage.vars.coins++;
          this.visible = true;
          this.goto(this.random(1, 237), 137);
        }
      }
      if (this.compare(this.y, -200) < 0) {
        this.visible = false;
        yield* this.wait(1);
        this.visible = true;
        this.goto(this.random(1, 237), 137);
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      yield* this.wait(0.2);
      this.y -= 30;
      yield;
    }
  }
}
