/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class HabilityButton extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./HabilityButton/costumes/costume1.png", {
        x: 474,
        y: 277
      }),
      new Costume("costume4", "./HabilityButton/costumes/costume4.png", {
        x: 474,
        y: 277
      }),
      new Costume("costume2", "./HabilityButton/costumes/costume2.png", {
        x: 474,
        y: 277
      }),
      new Costume("costume3", "./HabilityButton/costumes/costume3.png", {
        x: 474,
        y: 277
      })
    ];

    this.sounds = [
      new Sound("pop", "./HabilityButton/sounds/pop.wav"),
      new Sound("hability", "./HabilityButton/sounds/hability.mp3")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked2),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = true;
    while (true) {
      if (this.toString(this.stage.vars.dash) === "true") {
        this.costume = "costume1";
        if (this.touching("mouse")) {
          this.costume = "costume4";
        }
      } else {
        this.costume = "costume2";
        if (this.touching("mouse")) {
          this.costume = "costume3";
        }
      }
      yield;
    }
  }

  *whenthisspriteclicked() {
    while (!(this.toString(this.stage.vars.dash) === "false")) {
      if (this.toString(this.stage.vars.dash) === "true") {
        yield* this.startSound("hability");
      }
      yield;
    }
  }

  *whenthisspriteclicked2() {
    if (this.toString(this.stage.vars.dash) === "true") {
      this.costume = "costume2";
      this.broadcast("Hability");
      yield* this.wait(10);
      this.stage.vars.coins = 0;
      this.stage.costume = "Blue Sky";
      this.visible = true;
    }
  }

  *whenthisspriteclicked3() {
    while (!(this.toString(this.stage.vars.dash) === "false")) {
      if (this.toString(this.stage.vars.dash) === "true") {
        this.visible = false;
        yield* this.wait(0.1);
        this.stage.costumeNumber++;
        yield* this.wait(0.1);
        this.stage.costumeNumber++;
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.costumeNumber === 2) {
        this.broadcast("UnHabiliyu");
      }
      if (this.costumeNumber === 3) {
        this.broadcast("UnHabiliyu");
      }
      yield;
    }
  }
}
