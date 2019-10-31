'use strict';
const { promisify } = require('util');
const execFile = promisify(require('child_process').execFile);


class Android {

  constructor() {
    if (!!Android.instance) return Android.instance;
    else Android.instance = this;
  }

  async vibrate(duration=1000, force=false) {
    const args = ['-d', `${duration}`];
    if (force === true) args.push('-f');
    try {
      return await execFile('termux-vibrate', args);
    } catch (error) {
      console.log(`UH-OH! Something broke: ${error}`);
    }
  }

  async cameraInfoHI() {
    try {
      return await execFile('termux-camera-info');
    } catch (error) {
      console.log(`UH-OH! Something broke: ${error}`);
    }
  }

  async cameraInfoLO() {
    try {
      return await execFile('/data/data/com.termux/files/usr/libexec/termux-api', ['CameraInfo']);
    } catch (error) {
      console.log(`UH-OH! Something broke: ${error}`);
    }
  }
}


module.exports = { Android };

