'use strict';

/**
 * Mate Robot Factory impressed by your success, they are ready to accept
 * you into the Tech team, you will learn to program robots together
 * with the team! Are you in business As a test task, you will need to
 * program our equipment that makes robots.
 *
 * Create a makeRobot function that takes the string name and the number
 * wheels, version and returns the robot object.
 * The robot coming off the assembly line must be able to:
 *  - Provide information about yourself through getter info.
 *    robot.info === 'name:%name%, chip version: %version%, wheels: %wheels%'
 *  - Provide the coordinates of your location via getter location.
 *    robot.location === '%name%: x=14, y=21'
 *  - Have methods to move goForward, goBack, goRight, goLeft.
 *  - Movement methods must be able to be used with a chain.
 *    robot.goForward().goForward().goForward().goLeft()
 *  - Default methods that move the work by 1 in the right direction.
 *    This value can be increased by passing the desired number to the method.
 *    Negative numbers should not affect the location of the robot. goLeft(3)
 *  - The coordinates of the robot must be stored in the object coords,
 *    the keys x and y inside the robot.
 *  - The robot must be able to request the evacuation of robot.evacuate(),
 *    which will call rescuers and transfer it to the service center
 *    at the coordinates x: 1400, y: 500.
 *
 * return the robot object.
 * robot.info === 'name:%name%, chip version: %version%, wheels: %wheels%'
 * robot.location === '%name%: x=14, y=21'
 *
 * methods to move goForward(y+1), goBack(y-1), goRight(x+1), goLeft(x-1).
 * This value can be increased by passing the desired number to the method
 * x = %number y = %number
 * x = -number - ignore
 *
 * coords {
 * x:
 * y: }
 *
 * robot.evacuate() ==> x: 1400, y: 500
 *
 * @typedef {object} Robot
 * @property {string} name
 * @property {number} wheels
 * @property {number} version
 * @property {function} info
 *
 * @param {string} name
 * @param {number} wheels
 * @param {number} version
 *
 * @return {Robot}
 */
function makeRobot(name, wheels, version) {
  // write code here
  const robot = {
    'name': name,
    'chip version': version,
    'wheels': wheels,
    'coords': {
      x: 0,
      y: 0,
    },

    get info() {
      return `name: ${name}, chip version: ${version}, wheels: ${wheels}`;
    },

    get location() {
      return `${this.name}: x=${this.coords.x}, y=${this.coords.y}`;
    },

    goForward(steps) {
      if (!steps) {
        this.coords.y++;
      };

      if (steps > 0) {
        this.coords.y += steps;
      };

      if (steps < 0) {
        return robot;
      };

      return robot;
    },

    goBack(steps) {
      if (!steps) {
        this.coords.y--;
      };

      if (steps > 0) {
        this.coords.y -= steps;
      };

      if (steps < 0) {
        return robot;
      };

      return robot;
    },

    goRight(steps) {
      if (!steps) {
        this.coords.x++;
      };

      if (steps > 0) {
        this.coords.x += steps;
      };

      if (steps < 0) {
        return robot;
      };

      return robot;
    },

    goLeft(steps) {
      if (!steps) {
        this.coords.x--;
      };

      if (steps > 0) {
        this.coords.x -= steps;
      };

      if (steps < 0) {
        return robot;
      };

      return robot;
    },

    evacuate() {
      this.coords.x = 1400;
      this.coords.y = 500;
    },
  };

  return robot;
}

module.exports = makeRobot;
