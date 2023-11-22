/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Blue Sky", "./Stage/costumes/Blue Sky.svg", {
        x: 246.95493009614026,
        y: 189.002029085
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3)
    ];

    this.vars.coins = 0;
    this.vars.dash = "false";
    this.vars.death = "true";
    this.vars.score = 0;
    this.vars.Bestscore = 215917;

    this.watchers.coins = new Watcher({
      label: "Coins",
      style: "normal",
      visible: true,
      value: () => this.vars.coins,
      x: 619,
      y: 180
    });
    this.watchers.score = new Watcher({
      label: "Score",
      style: "normal",
      visible: true,
      value: () => this.vars.score,
      x: 240,
      y: 180
    });
  }

  *whenGreenFlagClicked() {
    this.costume = "Blue Sky";
    this.vars.coins = 0;
    while (true) {
      if (this.compare(this.vars.coins, 99) > 0) {
        this.vars.dash = "true";
      } else {
        this.vars.dash = "false";
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    this.vars.score = 0;
    while (true) {
      this.vars.score++;
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      if (this.compare(this.vars.Bestscore, this.vars.score) < 0) {
        this.vars.Bestscore = this.vars.score;
      }
      yield;
    }
  }
}
