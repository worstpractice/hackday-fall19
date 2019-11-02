'use strict';
const { android } = require('./src');

// const android = new Android();

process.on('unhandledRejection', console.log);

const DEBUG = true;


//////////////////////////////////////////////////////////////////////////////////////////////////////////


const ls = async () => {
  if (DEBUG) console.log('\nandroid.ls() begin...');
  const { stdout } = await android.ls();
  const result = await stdout.split(`\n`);
  console.log(await result.filter((string) => !!string));
  if (DEBUG) console.log('android.ls() done!\n');
};


const rm = async (pathToFile) => {
  if (DEBUG) console.log('\nandroid.rm() begin...');
  try {
    await android.rm(pathToFile);
  } catch (error) {
    if (error.code === 'ENOENT') DEBUG ? console.log(`Not running on Android! That's fine. Skipping...`) : void (0);
    else throw error;
  }
  finally {
    if (DEBUG) console.log('android.rm() done!\n');
  }
};

const touchFile = async (newFileName) => {
  if (DEBUG) console.log('\nandroid.touchFile() begin...');
  try {
    await android.touchFile(newFileName);
  } catch (error) {
    if (error.code === 'ENOENT') DEBUG ? console.log(`Not running on Android! That's fine. Skipping...`) : void (0);
    else throw error;
  }
  finally {
    if (DEBUG) console.log('android.touchFile() done!\n');
  }
};


const vibratePhone = async (ms) => {
  if (DEBUG) console.log('\nandroid.vibratePhone() begin...');
  try {
    await android.vibratePhone(ms);
  } catch (error) {
    if (error.code === 'ENOENT') DEBUG ? console.log(`Not running on Android! That's fine. Skipping...`) : void (0);
    else throw error;
  }
  finally {
    if (DEBUG) console.log('android.vibratePhone() done!\n');
  }
};


const getCameraInfo = async () => {
  if (DEBUG) console.log('\nandroid.getCameraInfo() begin...');
  try {
    const { stdout } = await android.getCameraInfo();
    console.log(await JSON.parse(stdout));
  } catch (error) {
    if (error.code === 'ENOENT') DEBUG ? console.log(`Not running on Android! That's fine. Skipping...`) : void (0);
    else throw error;
  }
  finally {
    if (DEBUG) console.log('android.getCameraInfo() done!\n');
  }
};


const getBackCameraInfo = async () => {
  if (DEBUG) console.log('\nandroid.getCameraInfo() begin...');
  try {
    const { stdout } = await android.getCameraInfo();
    const cameras = await JSON.parse(stdout);
    console.log(await cameras[0]);
  } catch (error) {
    if (error.code === 'ENOENT') DEBUG ? console.log(`Not running on Android! That's fine. Skipping...`) : void (0);
    else throw error;
  }
  finally {
    if (DEBUG) console.log('android.getCameraInfo() done!\n');
  }
};


const getFrontCameraInfo = async () => {
  if (DEBUG) console.log('\nandroid.getCameraInfo() begin...');
  try {
    const { stdout } = await android.getCameraInfo();
    const cameras = await JSON.parse(stdout);
    console.log(await cameras[1]);
  } catch (error) {
    if (error.code === 'ENOENT') DEBUG ? console.log(`Not running on Android! That's fine. Skipping...`) : void (0);
    else throw error;
  }
  finally {
    if (DEBUG) console.log('android.getCameraInfo() done!\n');
  }
};


const setUpStorage = async () => {
  if (DEBUG) console.log('\nandroid.setUpStorage() begin...');
  try {
    await android.setUpStorage();
  } catch (error) {
    if (error.code === 'ENOENT') DEBUG ? console.log(`Not running on Android! That's fine. Skipping...`) : void (0);
    else throw error;
  }
  finally {
    if (DEBUG) console.log('android.setUpStorage() done!\n');
  }
};


const takeFaceCamPhoto = async (saveAsName) => {
  if (DEBUG) console.log('\nandroid.takeFaceCamPhoto() begin...');
  try {
    await android.takeFaceCamPhoto(saveAsName);
  } catch (error) {
    if (error.code === 'ENOENT') DEBUG ? console.log(`Not running on Android! That's fine. Skipping...`) : void (0);
    else throw error;
  } finally {
    if (DEBUG) console.log('android.takeFaceCamPhoto() done!\n');
  }
};


const takeBackCamPhoto = async (saveAsName) => {
  if (DEBUG) console.log('\nandroid.takeBackCamPhoto() begin...');
  try {
    await android.takeBackCamPhotoSync(saveAsName);
  } catch (error) {
    if (error.code === 'ENOENT') DEBUG ? console.log(`Not running on Android! That's fine. Skipping...`) : void (0);
    else throw error;
  } finally {
    if (DEBUG) console.log('android.takeBackCamPhoto() done!\n');
  }
};


const showFile = async (pathToFile) => {
  if (DEBUG) console.log('\nandroid.showFile() begin...');
  try {
    await android.showFile(pathToFile);
  } catch (error) {
    if (error.code === 'ENOENT') DEBUG ? console.log(`Not running on Android! That's fine. Skipping...`) : void (0);
    else throw error;
  }
  if (DEBUG) console.log('android.showFile() done!\n');
};


const openURL = async () => {
  if (DEBUG) console.log('\nandroid.openURL() begin...');
  try {
    await android.openURL(`https://www.study-at-salt.com`);
  } catch (error) {
    if (error.code === 'ENOENT') DEBUG ? console.log(`Not running on Android! That's fine. Skipping...`) : void (0);
    else throw error;
  } finally {
    if (DEBUG) console.log('android.openURL() done!\n');
  }
};


const showDialog = async () => {
  if (DEBUG) console.log('\nandroid.showDialog() begin...');
  try {
    const { stdout } = await android.showDialog(`What is your favorite color?`, `Don't answer yellow...`);
    console.log(await JSON.parse(stdout));
  } catch (error) {
    if (error.code === 'ENOENT') DEBUG ? console.log(`Not running on Android! That's fine. Skipping...`) : void (0);
    else throw error;
  } finally {
    if (DEBUG) console.log('android.showDialog() done!\n');
  }
};

const turnFlashlightOn = async () => {
  if (DEBUG) console.log('\nandroid.turnFlashlightOn() begin...');
  try {
    await android.turnFlashlightOn();
  } catch (error) {
    if (error.code === 'ENOENT') DEBUG ? console.log(`Not running on Android! That's fine. Skipping...`) : void (0);
    else throw error;
  } finally {
    if (DEBUG) console.log('android.turnFlashlightOn() done!\n');
  }
}


const turnFlashlightOff = async () => {
  if (DEBUG) console.log('\nandroid.turnFlashlightOff() begin...');
  try {
    await android.turnFlashlightOff();
  } catch (error) {
    if (error.code === 'ENOENT') DEBUG ? console.log(`Not running on Android! That's fine. Skipping...`) : void (0);
    else throw error;
  } finally {
    if (DEBUG) console.log('android.turnFlashlightOff() done!\n');
  }
}
 

const toggleFlashlight = async () => {
  if (DEBUG) console.log('\nandroid.toggleFlashlight() begin...');
  try {
    await android.toggleFlashlight();
  } catch (error) {
    if (error.code === 'ENOENT') DEBUG ? console.log(`Not running on Android! That's fine. Skipping...`) : void (0);
    else throw error;
  } finally {
    if (DEBUG) console.log('android.toggleFlashlight() done!\n');
  }
}

const getLocationInfo = async () => {
  if (DEBUG) console.log('\nandroid.getLocationInfo() begin...');
  try {
    await android.getLocationInfo();
  } catch (error) {
    if (error.code === 'ENOENT') DEBUG ? console.log(`Not running on Android! That's fine. Skipping...`) : void (0);
    else throw error;
  } finally {
    if (DEBUG) console.log('android.getLocationInfo() done!\n');
  }
};

const echo = async (message) => {
  if (DEBUG) console.log('\nandroid.echo() begin...');
  try {
    await android.echo(message);
  } catch (error) {
    if (error.code === 'ENOENT') DEBUG ? console.log(`Not running on Android! That's fine. Skipping...`) : void (0);
    else throw error;
  } finally {
    if (DEBUG) console.log('android.echo() done!\n');
  }
};


//////////////////////////////////////////////////////////////////////////////////////////////////////////


const main = async () => {

  const createAndDeleteFileDemo = [
    [echo, `\nDEMO: We list the contents of the phone's working directory...\n`],
    [ls],
    [echo, `\nDEMO: Notice, no file named "dummyFile.txt" exists...\n`],
    [touchFile, `dummyFile.txt`],
    [echo, `\nDEMO: We run the shell "touch" command on the phone...\n`],
    [ls],
    [echo, `\nDEMO: Presto! Now "dummyfile.txt" exists...\n`],
    [rm, `dummyFile.txt`],
    [echo, `\nDEMO: We run the shell "rm" command on "dummyFile.txt"...\n`],
    [ls],
    [echo, `\nDEMO: ...aaaaand it's gone.\n`],
  ];

  const toggleFlashlightDemo = [
    [echo, `\nDEMO: We ensure the flashlight is OFF before starting...\n`],
    [turnFlashlightOff],
    [echo, `\nDEMO: And so -- assuming the flashlight is OFF...\n`],
    [toggleFlashlight],
    [echo, `\nDEMO: Now it should be ON instead...\n`],
    [toggleFlashlight],
    [echo, `\nDEMO: And now it should be OFF once again...\n`],
    [toggleFlashlight],
    [echo, `\nDEMO: And ON again...\n`],
    [toggleFlashlight],
    [echo, `\nDEMO: And finally OFF.\n`],
  ];

  const getPhoneCameraInfo = [
    [echo, `\nDEMO: Wonder which cameras are available on this phone...'\n`],
    [echo, `\nDEMO: let's find out!'\n`],
    [getCameraInfo],
    [echo, `\nDEMO: Whoah! That's a lot of info!\n`],
    [takeFaceCamPhoto, `test_photo`],
    [echo, `\nDEMO: Let's just focus on the front camera...\n`],
    [getFrontCameraInfo],
    [echo, `\nDEMO: There, that's better...\n`],
    [echo, `\nDEMO: And how about the back camera?\n`],
    [getBackCameraInfo],
    [echo, `\nDEMO: Cool! So we know we have some cameras to work with.\n`],
  ];

  const snapFaceCamAndShowPhoto = [
    [rm, `dummyFile.txt`],  // Pre-emptive cleanup
    [echo, `\nDEMO: We examine the contents of the current directory...'\n`],
    [ls],
    [echo, `\nDEMO: Dang. We have no sweet selfies of our user...'\n`],
    [echo, `\nDEMO: Well, no problem. Let's snap a fresh pic with the face camera...'\n`],
    [echo, `\nDEMO: Say cheese!'\n`],
    [takeFaceCamPhoto, `dope_selfie`],
    [vibratePhone, `500`],  // Some tactile feedback
    [echo, `\nDEMO: There we are. Did it save properly?'\n`],
    [ls],
    [echo, `\nDEMO: See any "dope_selfie.jpg"?'\n`],
    [echo, `\nDEMO: Allright, let's dislay it to the user!'\n`],
    [showFile, `dope_selfie.jpg`],
    [echo, `\nDEMO: My man!'\n`],
  ];

  const vibrationDemo = [
    [echo, `\nDEMO: The intentful stare (250ms vibration)...'\n`],
    [vibratePhone, 250],
    [echo, `\nDEMO: The throat-clearer (500ms vibration)...'\n`],
    [vibratePhone, 500],
    [echo, `\nDEMO: The shoulder tap (1000ms vibration)...'\n`],
    [vibratePhone, 1000],
    [echo, `\nDEMO: The prolonged sigh (2000ms vibration)'\n`],
    [vibratePhone, 2000],
  ];

  const demoReels = [
    createAndDeleteFileDemo,
    // toggleFlashlightDemo,
    // vibrationDemo,
    // getPhoneCameraInfo,
    // snapFaceCamAndShowPhoto,
  ];

  for (const reel of demoReels) {
    if (DEBUG) console.log(`\nDEMO: Next reel...\n`);
    for (const demo of reel) {
      const [demoFunction, demoArguments] = demo;
      if (DEBUG) console.log(`\nDEMO: Next demo...\n`);
      await demoFunction(demoArguments);
    }
  };
}

main();
