/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Player extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Caramelo-Walk2", "./Player/costumes/Caramelo-Walk2.png", {
        x: 16,
        y: 16
      }),
      new Costume("Caramelo-Walk3", "./Player/costumes/Caramelo-Walk3.png", {
        x: 16,
        y: 16
      }),
      new Costume("Caramelo-Walk4", "./Player/costumes/Caramelo-Walk4.png", {
        x: 14,
        y: -2
      })
    ];

    this.sounds = [new Sound("Meow", "./Player/sounds/Meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Hability" },
        this.whenIReceiveHability
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "UnHabiliyu" },
        this.whenIReceiveUnhabiliyu
      ),
      new Trigger(Trigger.BROADCAST, { name: "Death" }, this.whenIReceiveDeath)
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.death = "false";
    this.goto(0, -93);
    this.visible = true;
    while (true) {
      yield* this.wait(0.1);
      this.costume = "Caramelo-Walk2";
      yield* this.wait(0.1);
      this.costume = "Caramelo-Walk3";
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.keyPressed("right arrow")) {
        this.x += 10;
      }
      if (this.keyPressed("left arrow")) {
        this.x -= 10;
      }
      yield;
    }
  }

  *whenIReceiveHability() {
    this.visible = false;
  }

  *whenIReceiveUnhabiliyu() {
    while (true) {
      if (this.toString(this.stage.vars.dash) === "false") {
        if (this.toString(this.stage.vars.death) === "false") {
          this.visible = true;
        }
      }
      yield;
    }
  }

  *whenIReceiveDeath() {
    this.stage.vars.death = "true";
    this.visible = false;
  }
}
