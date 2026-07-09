gdjs.Game_32_45_32L1L12Code = {};
gdjs.Game_32_45_32L1L12Code.localVariables = [];
gdjs.Game_32_45_32L1L12Code.idToCallbackMap = new Map();
gdjs.Game_32_45_32L1L12Code.GDFinishHoleObjects1= [];
gdjs.Game_32_45_32L1L12Code.GDFinishHoleObjects2= [];
gdjs.Game_32_45_32L1L12Code.GDFinishHoleObjects3= [];
gdjs.Game_32_45_32L1L12Code.GDHoleObjects1= [];
gdjs.Game_32_45_32L1L12Code.GDHoleObjects2= [];
gdjs.Game_32_45_32L1L12Code.GDHoleObjects3= [];
gdjs.Game_32_45_32L1L12Code.GDFloorObjects1= [];
gdjs.Game_32_45_32L1L12Code.GDFloorObjects2= [];
gdjs.Game_32_45_32L1L12Code.GDFloorObjects3= [];
gdjs.Game_32_45_32L1L12Code.GDWallObjects1= [];
gdjs.Game_32_45_32L1L12Code.GDWallObjects2= [];
gdjs.Game_32_45_32L1L12Code.GDWallObjects3= [];
gdjs.Game_32_45_32L1L12Code.GDMetalBallObjects1= [];
gdjs.Game_32_45_32L1L12Code.GDMetalBallObjects2= [];
gdjs.Game_32_45_32L1L12Code.GDMetalBallObjects3= [];
gdjs.Game_32_45_32L1L12Code.GDTransparentDarkJoystickObjects1= [];
gdjs.Game_32_45_32L1L12Code.GDTransparentDarkJoystickObjects2= [];
gdjs.Game_32_45_32L1L12Code.GDTransparentDarkJoystickObjects3= [];
gdjs.Game_32_45_32L1L12Code.GDBGObjects1= [];
gdjs.Game_32_45_32L1L12Code.GDBGObjects2= [];
gdjs.Game_32_45_32L1L12Code.GDBGObjects3= [];


gdjs.Game_32_45_32L1L12Code.mapOfGDgdjs_9546Game_959532_959545_959532L1L12Code_9546GDMetalBallObjects1Objects = Hashtable.newFrom({"MetalBall": gdjs.Game_32_45_32L1L12Code.GDMetalBallObjects1});
gdjs.Game_32_45_32L1L12Code.mapOfGDgdjs_9546Game_959532_959545_959532L1L12Code_9546GDWallObjects1Objects = Hashtable.newFrom({"Wall": gdjs.Game_32_45_32L1L12Code.GDWallObjects1});
gdjs.Game_32_45_32L1L12Code.mapOfGDgdjs_9546Game_959532_959545_959532L1L12Code_9546GDWallObjects1Objects = Hashtable.newFrom({"Wall": gdjs.Game_32_45_32L1L12Code.GDWallObjects1});
gdjs.Game_32_45_32L1L12Code.eventsList0 = function(runtimeScene) {

{

/* Reuse gdjs.Game_32_45_32L1L12Code.GDMetalBallObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32_45_32L1L12Code.GDMetalBallObjects1.length;i<l;++i) {
    if ( gdjs.Game_32_45_32L1L12Code.GDMetalBallObjects1[i].getAverageForce().getLength() < 0 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32_45_32L1L12Code.GDMetalBallObjects1[k] = gdjs.Game_32_45_32L1L12Code.GDMetalBallObjects1[i];
        ++k;
    }
}
gdjs.Game_32_45_32L1L12Code.GDMetalBallObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32_45_32L1L12Code.GDMetalBallObjects1 */
{for(var i = 0, len = gdjs.Game_32_45_32L1L12Code.GDMetalBallObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32L1L12Code.GDMetalBallObjects1[i].clearForces();
}
}
}

}


};gdjs.Game_32_45_32L1L12Code.mapOfGDgdjs_9546Game_959532_959545_959532L1L12Code_9546GDMetalBallObjects1Objects = Hashtable.newFrom({"MetalBall": gdjs.Game_32_45_32L1L12Code.GDMetalBallObjects1});
gdjs.Game_32_45_32L1L12Code.mapOfGDgdjs_9546Game_959532_959545_959532L1L12Code_9546GDFinishHoleObjects1Objects = Hashtable.newFrom({"FinishHole": gdjs.Game_32_45_32L1L12Code.GDFinishHoleObjects1});
gdjs.Game_32_45_32L1L12Code.mapOfGDgdjs_9546Game_959532_959545_959532L1L12Code_9546GDMetalBallObjects1Objects = Hashtable.newFrom({"MetalBall": gdjs.Game_32_45_32L1L12Code.GDMetalBallObjects1});
gdjs.Game_32_45_32L1L12Code.mapOfGDgdjs_9546Game_959532_959545_959532L1L12Code_9546GDHoleObjects1Objects = Hashtable.newFrom({"Hole": gdjs.Game_32_45_32L1L12Code.GDHoleObjects1});
gdjs.Game_32_45_32L1L12Code.mapOfGDgdjs_9546Game_959532_959545_959532L1L12Code_9546GDMetalBallObjects3Objects = Hashtable.newFrom({"MetalBall": gdjs.Game_32_45_32L1L12Code.GDMetalBallObjects3});
gdjs.Game_32_45_32L1L12Code.asyncCallback21729940 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32_45_32L1L12Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("MetalBall"), gdjs.Game_32_45_32L1L12Code.GDMetalBallObjects3);

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_32_45_32L1L12Code.mapOfGDgdjs_9546Game_959532_959545_959532L1L12Code_9546GDMetalBallObjects3Objects, 165, 33, "");
}
{for(var i = 0, len = gdjs.Game_32_45_32L1L12Code.GDMetalBallObjects3.length ;i < len;++i) {
    gdjs.Game_32_45_32L1L12Code.GDMetalBallObjects3[i].getBehavior("Resizable").setSize(18.302083333333332, 20);
}
}
gdjs.Game_32_45_32L1L12Code.localVariables.length = 0;
}
gdjs.Game_32_45_32L1L12Code.idToCallbackMap.set(21729940, gdjs.Game_32_45_32L1L12Code.asyncCallback21729940);
gdjs.Game_32_45_32L1L12Code.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32_45_32L1L12Code.localVariables);
for (const obj of gdjs.Game_32_45_32L1L12Code.GDMetalBallObjects2) asyncObjectsList.addObject("MetalBall", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Game_32_45_32L1L12Code.asyncCallback21729940(runtimeScene, asyncObjectsList)), 21729940, asyncObjectsList);
}
}

}


};gdjs.Game_32_45_32L1L12Code.asyncCallback21729868 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32_45_32L1L12Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("MetalBall"), gdjs.Game_32_45_32L1L12Code.GDMetalBallObjects2);

{for(var i = 0, len = gdjs.Game_32_45_32L1L12Code.GDMetalBallObjects2.length ;i < len;++i) {
    gdjs.Game_32_45_32L1L12Code.GDMetalBallObjects2[i].clearForces();
}
}

{ //Subevents
gdjs.Game_32_45_32L1L12Code.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Game_32_45_32L1L12Code.localVariables.length = 0;
}
gdjs.Game_32_45_32L1L12Code.idToCallbackMap.set(21729868, gdjs.Game_32_45_32L1L12Code.asyncCallback21729868);
gdjs.Game_32_45_32L1L12Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32_45_32L1L12Code.localVariables);
for (const obj of gdjs.Game_32_45_32L1L12Code.GDMetalBallObjects1) asyncObjectsList.addObject("MetalBall", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.09), (runtimeScene) => (gdjs.Game_32_45_32L1L12Code.asyncCallback21729868(runtimeScene, asyncObjectsList)), 21729868, asyncObjectsList);
}
}

}


};gdjs.Game_32_45_32L1L12Code.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("TransparentDarkJoystick"), gdjs.Game_32_45_32L1L12Code.GDTransparentDarkJoystickObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32_45_32L1L12Code.GDTransparentDarkJoystickObjects1.length;i<l;++i) {
    if ( gdjs.Game_32_45_32L1L12Code.GDTransparentDarkJoystickObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32_45_32L1L12Code.GDTransparentDarkJoystickObjects1[k] = gdjs.Game_32_45_32L1L12Code.GDTransparentDarkJoystickObjects1[i];
        ++k;
    }
}
gdjs.Game_32_45_32L1L12Code.GDTransparentDarkJoystickObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MetalBall"), gdjs.Game_32_45_32L1L12Code.GDMetalBallObjects1);
/* Reuse gdjs.Game_32_45_32L1L12Code.GDTransparentDarkJoystickObjects1 */
{gdjs.scene3d.camera.setCameraRotationX(runtimeScene, (( gdjs.Game_32_45_32L1L12Code.GDTransparentDarkJoystickObjects1.length === 0 ) ? 0 :gdjs.Game_32_45_32L1L12Code.GDTransparentDarkJoystickObjects1[0].StickForceX(null)) / 3, "", 0);
}
{gdjs.scene3d.camera.setCameraRotationY(runtimeScene, (( gdjs.Game_32_45_32L1L12Code.GDTransparentDarkJoystickObjects1.length === 0 ) ? 0 :gdjs.Game_32_45_32L1L12Code.GDTransparentDarkJoystickObjects1[0].StickForceY(null)) / 3, "", 0);
}
{gdjs.scene3d.camera.setCameraRotationX(runtimeScene, (( gdjs.Game_32_45_32L1L12Code.GDTransparentDarkJoystickObjects1.length === 0 ) ? 0 :gdjs.Game_32_45_32L1L12Code.GDTransparentDarkJoystickObjects1[0].StickForceX(null)) / 3, "Hole Layer", 0);
}
{gdjs.scene3d.camera.setCameraRotationY(runtimeScene, (( gdjs.Game_32_45_32L1L12Code.GDTransparentDarkJoystickObjects1.length === 0 ) ? 0 :gdjs.Game_32_45_32L1L12Code.GDTransparentDarkJoystickObjects1[0].StickForceY(null)) / 3, "Hole Layer", 0);
}
{gdjs.scene3d.camera.setCameraRotationX(runtimeScene, (( gdjs.Game_32_45_32L1L12Code.GDTransparentDarkJoystickObjects1.length === 0 ) ? 0 :gdjs.Game_32_45_32L1L12Code.GDTransparentDarkJoystickObjects1[0].StickForceX(null)) / 3, "Floor Layer", 0);
}
{gdjs.scene3d.camera.setCameraRotationY(runtimeScene, (( gdjs.Game_32_45_32L1L12Code.GDTransparentDarkJoystickObjects1.length === 0 ) ? 0 :gdjs.Game_32_45_32L1L12Code.GDTransparentDarkJoystickObjects1[0].StickForceY(null)) / 3, "Floor Layer", 0);
}
{for(var i = 0, len = gdjs.Game_32_45_32L1L12Code.GDMetalBallObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32L1L12Code.GDMetalBallObjects1[i].addForce((( gdjs.Game_32_45_32L1L12Code.GDTransparentDarkJoystickObjects1.length === 0 ) ? 0 :gdjs.Game_32_45_32L1L12Code.GDTransparentDarkJoystickObjects1[0].StickForceX(null)) * 4, (( gdjs.Game_32_45_32L1L12Code.GDTransparentDarkJoystickObjects1.length === 0 ) ? 0 :gdjs.Game_32_45_32L1L12Code.GDTransparentDarkJoystickObjects1[0].StickForceY(null)) * 4, 1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MetalBall"), gdjs.Game_32_45_32L1L12Code.GDMetalBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Wall"), gdjs.Game_32_45_32L1L12Code.GDWallObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32_45_32L1L12Code.mapOfGDgdjs_9546Game_959532_959545_959532L1L12Code_9546GDMetalBallObjects1Objects, gdjs.Game_32_45_32L1L12Code.mapOfGDgdjs_9546Game_959532_959545_959532L1L12Code_9546GDWallObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32_45_32L1L12Code.GDMetalBallObjects1 */
/* Reuse gdjs.Game_32_45_32L1L12Code.GDWallObjects1 */
{for(var i = 0, len = gdjs.Game_32_45_32L1L12Code.GDMetalBallObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32L1L12Code.GDMetalBallObjects1[i].separateFromObjectsList(gdjs.Game_32_45_32L1L12Code.mapOfGDgdjs_9546Game_959532_959545_959532L1L12Code_9546GDWallObjects1Objects, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MetalBall"), gdjs.Game_32_45_32L1L12Code.GDMetalBallObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32_45_32L1L12Code.GDMetalBallObjects1.length;i<l;++i) {
    if ( gdjs.Game_32_45_32L1L12Code.GDMetalBallObjects1[i].getAverageForce().getLength() > 0 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32_45_32L1L12Code.GDMetalBallObjects1[k] = gdjs.Game_32_45_32L1L12Code.GDMetalBallObjects1[i];
        ++k;
    }
}
gdjs.Game_32_45_32L1L12Code.GDMetalBallObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32_45_32L1L12Code.GDMetalBallObjects1 */
{for(var i = 0, len = gdjs.Game_32_45_32L1L12Code.GDMetalBallObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32L1L12Code.GDMetalBallObjects1[i].addForce((gdjs.Game_32_45_32L1L12Code.GDMetalBallObjects1[i].getAverageForce().getX()) * -0.025, (gdjs.Game_32_45_32L1L12Code.GDMetalBallObjects1[i].getAverageForce().getY()) * -0.025, 1);
}
}

{ //Subevents
gdjs.Game_32_45_32L1L12Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("FinishHole"), gdjs.Game_32_45_32L1L12Code.GDFinishHoleObjects1);
gdjs.copyArray(runtimeScene.getObjects("MetalBall"), gdjs.Game_32_45_32L1L12Code.GDMetalBallObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.Game_32_45_32L1L12Code.mapOfGDgdjs_9546Game_959532_959545_959532L1L12Code_9546GDMetalBallObjects1Objects, gdjs.Game_32_45_32L1L12Code.mapOfGDgdjs_9546Game_959532_959545_959532L1L12Code_9546GDFinishHoleObjects1Objects, 20, false);
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
gdjs.copyArray(runtimeScene.getObjects("MetalBall"), gdjs.Game_32_45_32L1L12Code.GDMetalBallObjects1);
{gdjs.evtTools.sound.setSoundOnChannelVolume(runtimeScene, 1, (( gdjs.Game_32_45_32L1L12Code.GDMetalBallObjects1.length === 0 ) ? 0 :gdjs.Game_32_45_32L1L12Code.GDMetalBallObjects1[0].getAverageForce().getLength()) * 2);
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


{

gdjs.copyArray(runtimeScene.getObjects("Hole"), gdjs.Game_32_45_32L1L12Code.GDHoleObjects1);
gdjs.copyArray(runtimeScene.getObjects("MetalBall"), gdjs.Game_32_45_32L1L12Code.GDMetalBallObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.Game_32_45_32L1L12Code.mapOfGDgdjs_9546Game_959532_959545_959532L1L12Code_9546GDMetalBallObjects1Objects, gdjs.Game_32_45_32L1L12Code.mapOfGDgdjs_9546Game_959532_959545_959532L1L12Code_9546GDHoleObjects1Objects, 20, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21728964);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32_45_32L1L12Code.GDMetalBallObjects1 */
{for(var i = 0, len = gdjs.Game_32_45_32L1L12Code.GDMetalBallObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32L1L12Code.GDMetalBallObjects1[i].getBehavior("Tween").addObjectWidthTween2("BallHole", 0, "linear", 0.15, true);
}
}
{for(var i = 0, len = gdjs.Game_32_45_32L1L12Code.GDMetalBallObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32L1L12Code.GDMetalBallObjects1[i].getBehavior("Tween").addObjectHeightTween2("BallHole2", 0, "linear", 0.15, true);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "ballhole.mp3", false, 100, 1);
}

{ //Subevents
gdjs.Game_32_45_32L1L12Code.eventsList2(runtimeScene);} //End of subevents
}

}


};

gdjs.Game_32_45_32L1L12Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32_45_32L1L12Code.GDFinishHoleObjects1.length = 0;
gdjs.Game_32_45_32L1L12Code.GDFinishHoleObjects2.length = 0;
gdjs.Game_32_45_32L1L12Code.GDFinishHoleObjects3.length = 0;
gdjs.Game_32_45_32L1L12Code.GDHoleObjects1.length = 0;
gdjs.Game_32_45_32L1L12Code.GDHoleObjects2.length = 0;
gdjs.Game_32_45_32L1L12Code.GDHoleObjects3.length = 0;
gdjs.Game_32_45_32L1L12Code.GDFloorObjects1.length = 0;
gdjs.Game_32_45_32L1L12Code.GDFloorObjects2.length = 0;
gdjs.Game_32_45_32L1L12Code.GDFloorObjects3.length = 0;
gdjs.Game_32_45_32L1L12Code.GDWallObjects1.length = 0;
gdjs.Game_32_45_32L1L12Code.GDWallObjects2.length = 0;
gdjs.Game_32_45_32L1L12Code.GDWallObjects3.length = 0;
gdjs.Game_32_45_32L1L12Code.GDMetalBallObjects1.length = 0;
gdjs.Game_32_45_32L1L12Code.GDMetalBallObjects2.length = 0;
gdjs.Game_32_45_32L1L12Code.GDMetalBallObjects3.length = 0;
gdjs.Game_32_45_32L1L12Code.GDTransparentDarkJoystickObjects1.length = 0;
gdjs.Game_32_45_32L1L12Code.GDTransparentDarkJoystickObjects2.length = 0;
gdjs.Game_32_45_32L1L12Code.GDTransparentDarkJoystickObjects3.length = 0;
gdjs.Game_32_45_32L1L12Code.GDBGObjects1.length = 0;
gdjs.Game_32_45_32L1L12Code.GDBGObjects2.length = 0;
gdjs.Game_32_45_32L1L12Code.GDBGObjects3.length = 0;

gdjs.Game_32_45_32L1L12Code.eventsList3(runtimeScene);
gdjs.Game_32_45_32L1L12Code.GDFinishHoleObjects1.length = 0;
gdjs.Game_32_45_32L1L12Code.GDFinishHoleObjects2.length = 0;
gdjs.Game_32_45_32L1L12Code.GDFinishHoleObjects3.length = 0;
gdjs.Game_32_45_32L1L12Code.GDHoleObjects1.length = 0;
gdjs.Game_32_45_32L1L12Code.GDHoleObjects2.length = 0;
gdjs.Game_32_45_32L1L12Code.GDHoleObjects3.length = 0;
gdjs.Game_32_45_32L1L12Code.GDFloorObjects1.length = 0;
gdjs.Game_32_45_32L1L12Code.GDFloorObjects2.length = 0;
gdjs.Game_32_45_32L1L12Code.GDFloorObjects3.length = 0;
gdjs.Game_32_45_32L1L12Code.GDWallObjects1.length = 0;
gdjs.Game_32_45_32L1L12Code.GDWallObjects2.length = 0;
gdjs.Game_32_45_32L1L12Code.GDWallObjects3.length = 0;
gdjs.Game_32_45_32L1L12Code.GDMetalBallObjects1.length = 0;
gdjs.Game_32_45_32L1L12Code.GDMetalBallObjects2.length = 0;
gdjs.Game_32_45_32L1L12Code.GDMetalBallObjects3.length = 0;
gdjs.Game_32_45_32L1L12Code.GDTransparentDarkJoystickObjects1.length = 0;
gdjs.Game_32_45_32L1L12Code.GDTransparentDarkJoystickObjects2.length = 0;
gdjs.Game_32_45_32L1L12Code.GDTransparentDarkJoystickObjects3.length = 0;
gdjs.Game_32_45_32L1L12Code.GDBGObjects1.length = 0;
gdjs.Game_32_45_32L1L12Code.GDBGObjects2.length = 0;
gdjs.Game_32_45_32L1L12Code.GDBGObjects3.length = 0;


return;

}

gdjs['Game_32_45_32L1L12Code'] = gdjs.Game_32_45_32L1L12Code;
