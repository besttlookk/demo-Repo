"use strict";

function Stopwatch() {
  this.duration = 0;
  let startTime;
  let endTime;

  this.start = function () {
    if (startTime) {
      throw new Error("Watch already started");
    }

    startTime = Date.now();
  };

  this.end = function () {
    if (endTime) {
      throw new Error("Watech already stopped. Start again");
    }

    endTime = Date.now();
    this.duration = endTime - startTime;
  };

  this.reset = function () {
    this.duration = 0;
    startTime = undefined;
    endTime = undefined;
  };
}

const sw = new Stopwatch();
