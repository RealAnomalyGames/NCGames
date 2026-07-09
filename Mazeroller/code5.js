gdjs.Game_32_45_32L1L3Code = {};
gdjs.Game_32_45_32L1L3Code.localVariables = [];
gdjs.Game_32_45_32L1L3Code.idToCallbackMap = new Map();
gdjs.Game_32_45_32L1L3Code.GDFinishHoleObjects1= [];
gdjs.Game_32_45_32L1L3Code.GDFinishHoleObjects2= [];
gdjs.Game_32_45_32L1L3Code.GDFloorObjects1= [];
gdjs.Game_32_45_32L1L3Code.GDFloorObjects2= [];
gdjs.Game_32_45_32L1L3Code.GDWallObjects1= [];
gdjs.Game_32_45_32L1L3Code.GDWallObjects2= [];
gdjs.Game_32_45_32L1L3Code.GDMetalBallObjects1= [];
gdjs.Game_32_45_32L1L3Code.GDMetalBallObjects2= [];
gdjs.Game_32_45_32L1L3Code.GDTransparentDarkJoystickObjects1= [];
gdjs.Game_32_45_32L1L3Code.GDTransparentDarkJoystickObjects2= [];
gdjs.Game_32_45_32L1L3Code.GDBGObjects1= [];
gdjs.Game_32_45_32L1L3Code.GDBGObjects2= [];


gdjs.Game_32_45_32L1L3Code.mapOfGDgdjs_9546Game_959532_959545_959532L1L3Code_9546GDMetalBallObjects1Objects = Hashtable.newFrom({"MetalBall": gdjs.Game_32_45_32L1L3Code.GDMetalBallObjects1});
gdjs.Game_32_45_32L1L3Code.mapOfGDgdjs_9546Game_959532_959545_959532L1L3Code_9546GDWallObjects1Objects = Hashtable.newFrom({"Wall": gdjs.Game_32_45_32L1L3Code.GDWallObjects1});
gdjs.Game_32_45_32L1L3Code.mapOfGDgdjs_9546Game_959532_959545_959532L1L3Code_9546GDWallObjects1Objects = Hashtable.newFrom({"Wall": gdjs.Game_32_45_32L1L3Code.GDWallObjects1});
gdjs.Game_32_45_32L1L3Code.eventsList0 = function(runtimeScene) {

{

/* Reuse gdjs.Game_32_45_32L1L3Code.GDMetalBallObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32_45_32L1L3Code.GDMetalBallObjects1.length;i<l;++i) {
    if ( gdjs.Game_32_45_32L1L3Code.GDMetalBallObjects1[i].getAverageForce().getLength() < 0 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32_45_32L1L3Code.GDMetalBallObjects1[k] = gdjs.Game_32_45_32L1L3Code.GDMetalBallObjects1[i];
        ++k;
    }
}
gdjs.Game_32_45_32L1L3Code.GDMetalBallObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32_45_32L1L3Code.GDMetalBallObjects1 */
{for(var i = 0, len = gdjs.Game_32_45_32L1L3Code.GDMetalBallObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32L1L3Code.GDMetalBallObjects1[i].clearForces();
}
}
}

}


};gdjs.Game_32_45_32L1L3Code.mapOfGDgdjs_9546Game_959532_959545_959532L1L3Code_9546GDMetalBallObjects1Objects = Hashtable.newFrom({"MetalBall": gdjs.Game_32_45_32L1L3Code.GDMetalBallObjects1});
gdjs.Game_32_45_32L1L3Code.mapOfGDgdjs_9546Game_959532_959545_959532L1L3Code_9546GDFinishHoleObjects1Objects = Hashtable.newFrom({"FinishHole": gdjs.Game_32_45_32L1L3Code.GDFinishHoleObjects1});
gdjs.Game_32_45_32L1L3Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("TransparentDarkJoystick"), gdjs.Game_32_45_32L1L3Code.GDTransparentDarkJoystickObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32_45_32L1L3Code.GDTransparentDarkJoystickObjects1.length;i<l;++i) {
    if ( gdjs.Game_32_45_32L1L3Code.GDTransparentDarkJoystickObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32_45_32L1L3Code.GDTransparentDarkJoystickObjects1[k] = gdjs.Game_32_45_32L1L3Code.GDTransparentDarkJoystickObjects1[i];
        ++k;
    }
}
gdjs.Game_32_45_32L1L3Code.GDTransparentDarkJoystickObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MetalBall"), gdjs.Game_32_45_32L1L3Code.GDMetalBallObjects1);
/* Reuse gdjs.Game_32_45_32L1L3Code.GDTransparentDarkJoystickObjects1 */
{gdjs.scene3d.camera.setCameraRotationX(runtimeScene, (( gdjs.Game_32_45_32L1L3Code.GDTransparentDarkJoystickObjects1.length === 0 ) ? 0 :gdjs.Game_32_45_32L1L3Code.GDTransparentDarkJoystickObjects1[0].StickForceX(null)) / 3, "", 0);
}
{gdjs.scene3d.camera.setCameraRotationY(runtimeScene, (( gdjs.Game_32_45_32L1L3Code.GDTransparentDarkJoystickObjects1.length === 0 ) ? 0 :gdjs.Game_32_45_32L1L3Code.GDTransparentDarkJoystickObjects1[0].StickForceY(null)) / 3, "", 0);
}
{gdjs.scene3d.camera.setCameraRotationX(runtimeScene, (( gdjs.Game_32_45_32L1L3Code.GDTransparentDarkJoystickObjects1.length === 0 ) ? 0 :gdjs.Game_32_45_32L1L3Code.GDTransparentDarkJoystickObjects1[0].StickForceX(null)) / 3, "Hole Layer", 0);
}
{gdjs.scene3d.camera.setCameraRotationY(runtimeScene, (( gdjs.Game_32_45_32L1L3Code.GDTransparentDarkJoystickObjects1.length === 0 ) ? 0 :gdjs.Game_32_45_32L1L3Code.GDTransparentDarkJoystickObjects1[0].StickForceY(null)) / 3, "Hole Layer", 0);
}
{gdjs.scene3d.camera.setCameraRotationX(runtimeScene, (( gdjs.Game_32_45_32L1L3Code.GDTransparentDarkJoystickObjects1.length === 0 ) ? 0 :gdjs.Game_32_45_32L1L3Code.GDTransparentDarkJoystickObjects1[0].StickForceX(null)) / 3, "Floor Layer", 0);
}
{gdjs.scene3d.camera.setCameraRotationY(runtimeScene, (( gdjs.Game_32_45_32L1L3Code.GDTransparentDarkJoystickObjects1.length === 0 ) ? 0 :gdjs.Game_32_45_32L1L3Code.GDTransparentDarkJoystickObjects1[0].StickForceY(null)) / 3, "Floor Layer", 0);
}
{for(var i = 0, len = gdjs.Game_32_45_32L1L3Code.GDMetalBallObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32L1L3Code.GDMetalBallObjects1[i].addForce((( gdjs.Game_32_45_32L1L3Code.GDTransparentDarkJoystickObjects1.length === 0 ) ? 0 :gdjs.Game_32_45_32L1L3Code.GDTransparentDarkJoystickObjects1[0].StickForceX(null)) * 4, (( gdjs.Game_32_45_32L1L3Code.GDTransparentDarkJoystickObjects1.length === 0 ) ? 0 :gdjs.Game_32_45_32L1L3Code.GDTransparentDarkJoystickObjects1[0].StickForceY(null)) * 4, 1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MetalBall"), gdjs.Game_32_45_32L1L3Code.GDMetalBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Wall"), gdjs.Game_32_45_32L1L3Code.GDWallObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32_45_32L1L3Code.mapOfGDgdjs_9546Game_959532_959545_959532L1L3Code_9546GDMetalBallObjects1Objects, gdjs.Game_32_45_32L1L3Code.mapOfGDgdjs_9546Game_959532_959545_959532L1L3Code_9546GDWallObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32_45_32L1L3Code.GDMetalBallObjects1 */
/* Reuse gdjs.Game_32_45_32L1L3Code.GDWallObjects1 */
{for(var i = 0, len = gdjs.Game_32_45_32L1L3Code.GDMetalBallObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32L1L3Code.GDMetalBallObjects1[i].separateFromObjectsList(gdjs.Game_32_45_32L1L3Code.mapOfGDgdjs_9546Game_959532_959545_959532L1L3Code_9546GDWallObjects1Objects, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MetalBall"), gdjs.Game_32_45_32L1L3Code.GDMetalBallObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32_45_32L1L3Code.GDMetalBallObjects1.length;i<l;++i) {
    if ( gdjs.Game_32_45_32L1L3Code.GDMetalBallObjects1[i].getAverageForce().getLength() > 0 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32_45_32L1L3Code.GDMetalBallObjects1[k] = gdjs.Game_32_45_32L1L3Code.GDMetalBallObjects1[i];
        ++k;
    }
}
gdjs.Game_32_45_32L1L3Code.GDMetalBallObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32_45_32L1L3Code.GDMetalBallObjects1 */
{for(var i = 0, len = gdjs.Game_32_45_32L1L3Code.GDMetalBallObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32L1L3Code.GDMetalBallObjects1[i].addForce((gdjs.Game_32_45_32L1L3Code.GDMetalBallObjects1[i].getAverageForce().getX()) * -0.025, (gdjs.Game_32_45_32L1L3Code.GDMetalBallObjects1[i].getAverageForce().getY()) * -0.025, 1);
}
}

{ //Subevents
gdjs.Game_32_45_32L1L3Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("FinishHole"), gdjs.Game_32_45_32L1L3Code.GDFinishHoleObjects1);
gdjs.copyArray(runtimeScene.getObjects("MetalBall"), gdjs.Game_32_45_32L1L3Code.GDMetalBallObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.Game_32_45_32L1L3Code.mapOfGDgdjs_9546Game_959532_959545_959532L1L3Code_9546GDMetalBallObjects1Objects, gdjs.Game_32_45_32L1L3Code.mapOfGDgdjs_9546Game_959532_959545_959532L1L3Code_9546GDFinishHoleObjects1Objects, 20, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level Complete", true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.doesSceneExist(runtimeScene, "Game - L1L1");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MetalBall"), gdjs.Game_32_45_32L1L3Code.GDMetalBallObjects1);
{gdjs.evtTools.sound.setSoundOnChannelVolume(runtimeScene, 1, (( gdjs.Game_32_45_32L1L3Code.GDMetalBallObjects1.length === 0 ) ? 0 :gdjs.Game_32_45_32L1L3Code.GDMetalBallObjects1[0].getAverageForce().getLength()) * 2);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "ballroll.mp3", 1, true, 0, 1);
}
}

}


};

gdjs.Game_32_45_32L1L3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32_45_32L1L3Code.GDFinishHoleObjects1.length = 0;
gdjs.Game_32_45_32L1L3Code.GDFinishHoleObjects2.length = 0;
gdjs.Game_32_45_32L1L3Code.GDFloorObjects1.length = 0;
gdjs.Game_32_45_32L1L3Code.GDFloorObjects2.length = 0;
gdjs.Game_32_45_32L1L3Code.GDWallObjects1.length = 0;
gdjs.Game_32_45_32L1L3Code.GDWallObjects2.length = 0;
gdjs.Game_32_45_32L1L3Code.GDMetalBallObjects1.length = 0;
gdjs.Game_32_45_32L1L3Code.GDMetalBallObjects2.length = 0;
gdjs.Game_32_45_32L1L3Code.GDTransparentDarkJoystickObjects1.length = 0;
gdjs.Game_32_45_32L1L3Code.GDTransparentDarkJoystickObjects2.length = 0;
gdjs.Game_32_45_32L1L3Code.GDBGObjects1.length = 0;
gdjs.Game_32_45_32L1L3Code.GDBGObjects2.length = 0;

gdjs.Game_32_45_32L1L3Code.eventsList1(runtimeScene);
gdjs.Game_32_45_32L1L3Code.GDFinishHoleObjects1.length = 0;
gdjs.Game_32_45_32L1L3Code.GDFinishHoleObjects2.length = 0;
gdjs.Game_32_45_32L1L3Code.GDFloorObjects1.length = 0;
gdjs.Game_32_45_32L1L3Code.GDFloorObjects2.length = 0;
gdjs.Game_32_45_32L1L3Code.GDWallObjects1.length = 0;
gdjs.Game_32_45_32L1L3Code.GDWallObjects2.length = 0;
gdjs.Game_32_45_32L1L3Code.GDMetalBallObjects1.length = 0;
gdjs.Game_32_45_32L1L3Code.GDMetalBallObjects2.length = 0;
gdjs.Game_32_45_32L1L3Code.GDTransparentDarkJoystickObjects1.length = 0;
gdjs.Game_32_45_32L1L3Code.GDTransparentDarkJoystickObjects2.length = 0;
gdjs.Game_32_45_32L1L3Code.GDBGObjects1.length = 0;
gdjs.Game_32_45_32L1L3Code.GDBGObjects2.length = 0;


return;

}

gdjs['Game_32_45_32L1L3Code'] = gdjs.Game_32_45_32L1L3Code;
