gdjs.Game_32_45_32L2L8Code = {};
gdjs.Game_32_45_32L2L8Code.localVariables = [];
gdjs.Game_32_45_32L2L8Code.idToCallbackMap = new Map();
gdjs.Game_32_45_32L2L8Code.forEachIndex2 = 0;

gdjs.Game_32_45_32L2L8Code.forEachObjects2 = [];

gdjs.Game_32_45_32L2L8Code.forEachTemporary2 = null;

gdjs.Game_32_45_32L2L8Code.forEachTotalCount2 = 0;

gdjs.Game_32_45_32L2L8Code.GDFinishHoleObjects1= [];
gdjs.Game_32_45_32L2L8Code.GDFinishHoleObjects2= [];
gdjs.Game_32_45_32L2L8Code.GDFinishHoleObjects3= [];
gdjs.Game_32_45_32L2L8Code.GDFinishHoleObjects4= [];
gdjs.Game_32_45_32L2L8Code.GDHoleObjects1= [];
gdjs.Game_32_45_32L2L8Code.GDHoleObjects2= [];
gdjs.Game_32_45_32L2L8Code.GDHoleObjects3= [];
gdjs.Game_32_45_32L2L8Code.GDHoleObjects4= [];
gdjs.Game_32_45_32L2L8Code.GDCannonObjects1= [];
gdjs.Game_32_45_32L2L8Code.GDCannonObjects2= [];
gdjs.Game_32_45_32L2L8Code.GDCannonObjects3= [];
gdjs.Game_32_45_32L2L8Code.GDCannonObjects4= [];
gdjs.Game_32_45_32L2L8Code.GDCannonballObjects1= [];
gdjs.Game_32_45_32L2L8Code.GDCannonballObjects2= [];
gdjs.Game_32_45_32L2L8Code.GDCannonballObjects3= [];
gdjs.Game_32_45_32L2L8Code.GDCannonballObjects4= [];
gdjs.Game_32_45_32L2L8Code.GDPoofObjects1= [];
gdjs.Game_32_45_32L2L8Code.GDPoofObjects2= [];
gdjs.Game_32_45_32L2L8Code.GDPoofObjects3= [];
gdjs.Game_32_45_32L2L8Code.GDPoofObjects4= [];
gdjs.Game_32_45_32L2L8Code.GDFloorObjects1= [];
gdjs.Game_32_45_32L2L8Code.GDFloorObjects2= [];
gdjs.Game_32_45_32L2L8Code.GDFloorObjects3= [];
gdjs.Game_32_45_32L2L8Code.GDFloorObjects4= [];
gdjs.Game_32_45_32L2L8Code.GDWallObjects1= [];
gdjs.Game_32_45_32L2L8Code.GDWallObjects2= [];
gdjs.Game_32_45_32L2L8Code.GDWallObjects3= [];
gdjs.Game_32_45_32L2L8Code.GDWallObjects4= [];
gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects1= [];
gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects2= [];
gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects3= [];
gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects4= [];
gdjs.Game_32_45_32L2L8Code.GDTransparentDarkJoystickObjects1= [];
gdjs.Game_32_45_32L2L8Code.GDTransparentDarkJoystickObjects2= [];
gdjs.Game_32_45_32L2L8Code.GDTransparentDarkJoystickObjects3= [];
gdjs.Game_32_45_32L2L8Code.GDTransparentDarkJoystickObjects4= [];
gdjs.Game_32_45_32L2L8Code.GDBGObjects1= [];
gdjs.Game_32_45_32L2L8Code.GDBGObjects2= [];
gdjs.Game_32_45_32L2L8Code.GDBGObjects3= [];
gdjs.Game_32_45_32L2L8Code.GDBGObjects4= [];


gdjs.Game_32_45_32L2L8Code.mapOfGDgdjs_9546Game_959532_959545_959532L2L8Code_9546GDMetalBallObjects1Objects = Hashtable.newFrom({"MetalBall": gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects1});
gdjs.Game_32_45_32L2L8Code.mapOfGDgdjs_9546Game_959532_959545_959532L2L8Code_9546GDWallObjects1Objects = Hashtable.newFrom({"Wall": gdjs.Game_32_45_32L2L8Code.GDWallObjects1});
gdjs.Game_32_45_32L2L8Code.mapOfGDgdjs_9546Game_959532_959545_959532L2L8Code_9546GDWallObjects1Objects = Hashtable.newFrom({"Wall": gdjs.Game_32_45_32L2L8Code.GDWallObjects1});
gdjs.Game_32_45_32L2L8Code.mapOfGDgdjs_9546Game_959532_959545_959532L2L8Code_9546GDMetalBallObjects1Objects = Hashtable.newFrom({"MetalBall": gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects1});
gdjs.Game_32_45_32L2L8Code.mapOfGDgdjs_9546Game_959532_959545_959532L2L8Code_9546GDCannonObjects1Objects = Hashtable.newFrom({"Cannon": gdjs.Game_32_45_32L2L8Code.GDCannonObjects1});
gdjs.Game_32_45_32L2L8Code.mapOfGDgdjs_9546Game_959532_959545_959532L2L8Code_9546GDCannonObjects1Objects = Hashtable.newFrom({"Cannon": gdjs.Game_32_45_32L2L8Code.GDCannonObjects1});
gdjs.Game_32_45_32L2L8Code.eventsList0 = function(runtimeScene) {

{

/* Reuse gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects1.length;i<l;++i) {
    if ( gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects1[i].getAverageForce().getLength() < 0 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects1[k] = gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects1[i];
        ++k;
    }
}
gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects1 */
{for(var i = 0, len = gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects1[i].clearForces();
}
}
}

}


};gdjs.Game_32_45_32L2L8Code.mapOfGDgdjs_9546Game_959532_959545_959532L2L8Code_9546GDMetalBallObjects1Objects = Hashtable.newFrom({"MetalBall": gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects1});
gdjs.Game_32_45_32L2L8Code.mapOfGDgdjs_9546Game_959532_959545_959532L2L8Code_9546GDFinishHoleObjects1Objects = Hashtable.newFrom({"FinishHole": gdjs.Game_32_45_32L2L8Code.GDFinishHoleObjects1});
gdjs.Game_32_45_32L2L8Code.mapOfGDgdjs_9546Game_959532_959545_959532L2L8Code_9546GDMetalBallObjects1Objects = Hashtable.newFrom({"MetalBall": gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects1});
gdjs.Game_32_45_32L2L8Code.mapOfGDgdjs_9546Game_959532_959545_959532L2L8Code_9546GDHoleObjects1Objects = Hashtable.newFrom({"Hole": gdjs.Game_32_45_32L2L8Code.GDHoleObjects1});
gdjs.Game_32_45_32L2L8Code.mapOfGDgdjs_9546Game_959532_959545_959532L2L8Code_9546GDMetalBallObjects3Objects = Hashtable.newFrom({"MetalBall": gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects3});
gdjs.Game_32_45_32L2L8Code.asyncCallback22285980 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32_45_32L2L8Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("MetalBall"), gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects3);

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_32_45_32L2L8Code.mapOfGDgdjs_9546Game_959532_959545_959532L2L8Code_9546GDMetalBallObjects3Objects, 159, 35, "");
}
{for(var i = 0, len = gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects3.length ;i < len;++i) {
    gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects3[i].getBehavior("Resizable").setSize(18.302083333333332, 20);
}
}
gdjs.Game_32_45_32L2L8Code.localVariables.length = 0;
}
gdjs.Game_32_45_32L2L8Code.idToCallbackMap.set(22285980, gdjs.Game_32_45_32L2L8Code.asyncCallback22285980);
gdjs.Game_32_45_32L2L8Code.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32_45_32L2L8Code.localVariables);
for (const obj of gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects2) asyncObjectsList.addObject("MetalBall", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Game_32_45_32L2L8Code.asyncCallback22285980(runtimeScene, asyncObjectsList)), 22285980, asyncObjectsList);
}
}

}


};gdjs.Game_32_45_32L2L8Code.asyncCallback22285908 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32_45_32L2L8Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("MetalBall"), gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects2);

{for(var i = 0, len = gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects2.length ;i < len;++i) {
    gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects2[i].clearForces();
}
}

{ //Subevents
gdjs.Game_32_45_32L2L8Code.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Game_32_45_32L2L8Code.localVariables.length = 0;
}
gdjs.Game_32_45_32L2L8Code.idToCallbackMap.set(22285908, gdjs.Game_32_45_32L2L8Code.asyncCallback22285908);
gdjs.Game_32_45_32L2L8Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32_45_32L2L8Code.localVariables);
for (const obj of gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects1) asyncObjectsList.addObject("MetalBall", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.09), (runtimeScene) => (gdjs.Game_32_45_32L2L8Code.asyncCallback22285908(runtimeScene, asyncObjectsList)), 22285908, asyncObjectsList);
}
}

}


};gdjs.Game_32_45_32L2L8Code.mapOfGDgdjs_9546Game_959532_959545_959532L2L8Code_9546GDMetalBallObjects1Objects = Hashtable.newFrom({"MetalBall": gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects1});
gdjs.Game_32_45_32L2L8Code.mapOfGDgdjs_9546Game_959532_959545_959532L2L8Code_9546GDCannonballObjects1Objects = Hashtable.newFrom({"Cannonball": gdjs.Game_32_45_32L2L8Code.GDCannonballObjects1});
gdjs.Game_32_45_32L2L8Code.mapOfGDgdjs_9546Game_959532_959545_959532L2L8Code_9546GDPoofObjects1Objects = Hashtable.newFrom({"Poof": gdjs.Game_32_45_32L2L8Code.GDPoofObjects1});
gdjs.Game_32_45_32L2L8Code.mapOfGDgdjs_9546Game_959532_959545_959532L2L8Code_9546GDMetalBallObjects2Objects = Hashtable.newFrom({"MetalBall": gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects2});
gdjs.Game_32_45_32L2L8Code.asyncCallback22288708 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32_45_32L2L8Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Poof"), gdjs.Game_32_45_32L2L8Code.GDPoofObjects2);

gdjs.copyArray(asyncObjectsList.getObjects("MetalBall"), gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects2);

{for(var i = 0, len = gdjs.Game_32_45_32L2L8Code.GDPoofObjects2.length ;i < len;++i) {
    gdjs.Game_32_45_32L2L8Code.GDPoofObjects2[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_32_45_32L2L8Code.mapOfGDgdjs_9546Game_959532_959545_959532L2L8Code_9546GDMetalBallObjects2Objects, 159, 35, "");
}
{for(var i = 0, len = gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects2.length ;i < len;++i) {
    gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects2[i].getBehavior("Resizable").setSize(18.302083333333332, 20);
}
}
gdjs.Game_32_45_32L2L8Code.localVariables.length = 0;
}
gdjs.Game_32_45_32L2L8Code.idToCallbackMap.set(22288708, gdjs.Game_32_45_32L2L8Code.asyncCallback22288708);
gdjs.Game_32_45_32L2L8Code.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32_45_32L2L8Code.localVariables);
for (const obj of gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects1) asyncObjectsList.addObject("MetalBall", obj);
for (const obj of gdjs.Game_32_45_32L2L8Code.GDPoofObjects1) asyncObjectsList.addObject("Poof", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Game_32_45_32L2L8Code.asyncCallback22288708(runtimeScene, asyncObjectsList)), 22288708, asyncObjectsList);
}
}

}


};gdjs.Game_32_45_32L2L8Code.mapOfGDgdjs_9546Game_959532_959545_959532L2L8Code_9546GDCannonballObjects2Objects = Hashtable.newFrom({"Cannonball": gdjs.Game_32_45_32L2L8Code.GDCannonballObjects2});
gdjs.Game_32_45_32L2L8Code.asyncCallback22291772 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32_45_32L2L8Code.localVariables);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "CannonShoot");
}
gdjs.Game_32_45_32L2L8Code.localVariables.length = 0;
}
gdjs.Game_32_45_32L2L8Code.idToCallbackMap.set(22291772, gdjs.Game_32_45_32L2L8Code.asyncCallback22291772);
gdjs.Game_32_45_32L2L8Code.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32_45_32L2L8Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.Game_32_45_32L2L8Code.asyncCallback22291772(runtimeScene, asyncObjectsList)), 22291772, asyncObjectsList);
}
}

}


};gdjs.Game_32_45_32L2L8Code.mapOfGDgdjs_9546Game_959532_959545_959532L2L8Code_9546GDCannonballObjects1Objects = Hashtable.newFrom({"Cannonball": gdjs.Game_32_45_32L2L8Code.GDCannonballObjects1});
gdjs.Game_32_45_32L2L8Code.mapOfGDgdjs_9546Game_959532_959545_959532L2L8Code_9546GDWallObjects1Objects = Hashtable.newFrom({"Wall": gdjs.Game_32_45_32L2L8Code.GDWallObjects1});
gdjs.Game_32_45_32L2L8Code.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("TransparentDarkJoystick"), gdjs.Game_32_45_32L2L8Code.GDTransparentDarkJoystickObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32_45_32L2L8Code.GDTransparentDarkJoystickObjects1.length;i<l;++i) {
    if ( gdjs.Game_32_45_32L2L8Code.GDTransparentDarkJoystickObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32_45_32L2L8Code.GDTransparentDarkJoystickObjects1[k] = gdjs.Game_32_45_32L2L8Code.GDTransparentDarkJoystickObjects1[i];
        ++k;
    }
}
gdjs.Game_32_45_32L2L8Code.GDTransparentDarkJoystickObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MetalBall"), gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects1);
/* Reuse gdjs.Game_32_45_32L2L8Code.GDTransparentDarkJoystickObjects1 */
{gdjs.scene3d.camera.setCameraRotationX(runtimeScene, (( gdjs.Game_32_45_32L2L8Code.GDTransparentDarkJoystickObjects1.length === 0 ) ? 0 :gdjs.Game_32_45_32L2L8Code.GDTransparentDarkJoystickObjects1[0].StickForceX(null)) / 3, "", 0);
}
{gdjs.scene3d.camera.setCameraRotationY(runtimeScene, (( gdjs.Game_32_45_32L2L8Code.GDTransparentDarkJoystickObjects1.length === 0 ) ? 0 :gdjs.Game_32_45_32L2L8Code.GDTransparentDarkJoystickObjects1[0].StickForceY(null)) / 3, "", 0);
}
{gdjs.scene3d.camera.setCameraRotationX(runtimeScene, (( gdjs.Game_32_45_32L2L8Code.GDTransparentDarkJoystickObjects1.length === 0 ) ? 0 :gdjs.Game_32_45_32L2L8Code.GDTransparentDarkJoystickObjects1[0].StickForceX(null)) / 3, "Hole Layer", 0);
}
{gdjs.scene3d.camera.setCameraRotationY(runtimeScene, (( gdjs.Game_32_45_32L2L8Code.GDTransparentDarkJoystickObjects1.length === 0 ) ? 0 :gdjs.Game_32_45_32L2L8Code.GDTransparentDarkJoystickObjects1[0].StickForceY(null)) / 3, "Hole Layer", 0);
}
{gdjs.scene3d.camera.setCameraRotationX(runtimeScene, (( gdjs.Game_32_45_32L2L8Code.GDTransparentDarkJoystickObjects1.length === 0 ) ? 0 :gdjs.Game_32_45_32L2L8Code.GDTransparentDarkJoystickObjects1[0].StickForceX(null)) / 3, "Floor Layer", 0);
}
{gdjs.scene3d.camera.setCameraRotationY(runtimeScene, (( gdjs.Game_32_45_32L2L8Code.GDTransparentDarkJoystickObjects1.length === 0 ) ? 0 :gdjs.Game_32_45_32L2L8Code.GDTransparentDarkJoystickObjects1[0].StickForceY(null)) / 3, "Floor Layer", 0);
}
{for(var i = 0, len = gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects1[i].addForce((( gdjs.Game_32_45_32L2L8Code.GDTransparentDarkJoystickObjects1.length === 0 ) ? 0 :gdjs.Game_32_45_32L2L8Code.GDTransparentDarkJoystickObjects1[0].StickForceX(null)) * 4, (( gdjs.Game_32_45_32L2L8Code.GDTransparentDarkJoystickObjects1.length === 0 ) ? 0 :gdjs.Game_32_45_32L2L8Code.GDTransparentDarkJoystickObjects1[0].StickForceY(null)) * 4, 1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MetalBall"), gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Wall"), gdjs.Game_32_45_32L2L8Code.GDWallObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32_45_32L2L8Code.mapOfGDgdjs_9546Game_959532_959545_959532L2L8Code_9546GDMetalBallObjects1Objects, gdjs.Game_32_45_32L2L8Code.mapOfGDgdjs_9546Game_959532_959545_959532L2L8Code_9546GDWallObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects1 */
/* Reuse gdjs.Game_32_45_32L2L8Code.GDWallObjects1 */
{for(var i = 0, len = gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects1[i].separateFromObjectsList(gdjs.Game_32_45_32L2L8Code.mapOfGDgdjs_9546Game_959532_959545_959532L2L8Code_9546GDWallObjects1Objects, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cannon"), gdjs.Game_32_45_32L2L8Code.GDCannonObjects1);
gdjs.copyArray(runtimeScene.getObjects("MetalBall"), gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32_45_32L2L8Code.mapOfGDgdjs_9546Game_959532_959545_959532L2L8Code_9546GDMetalBallObjects1Objects, gdjs.Game_32_45_32L2L8Code.mapOfGDgdjs_9546Game_959532_959545_959532L2L8Code_9546GDCannonObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32_45_32L2L8Code.GDCannonObjects1 */
/* Reuse gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects1 */
{for(var i = 0, len = gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects1[i].separateFromObjectsList(gdjs.Game_32_45_32L2L8Code.mapOfGDgdjs_9546Game_959532_959545_959532L2L8Code_9546GDCannonObjects1Objects, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MetalBall"), gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects1.length;i<l;++i) {
    if ( gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects1[i].getAverageForce().getLength() > 0 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects1[k] = gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects1[i];
        ++k;
    }
}
gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects1 */
{for(var i = 0, len = gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects1[i].addForce((gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects1[i].getAverageForce().getX()) * -0.025, (gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects1[i].getAverageForce().getY()) * -0.025, 1);
}
}

{ //Subevents
gdjs.Game_32_45_32L2L8Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("FinishHole"), gdjs.Game_32_45_32L2L8Code.GDFinishHoleObjects1);
gdjs.copyArray(runtimeScene.getObjects("MetalBall"), gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.Game_32_45_32L2L8Code.mapOfGDgdjs_9546Game_959532_959545_959532L2L8Code_9546GDMetalBallObjects1Objects, gdjs.Game_32_45_32L2L8Code.mapOfGDgdjs_9546Game_959532_959545_959532L2L8Code_9546GDFinishHoleObjects1Objects, 20, false);
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
gdjs.copyArray(runtimeScene.getObjects("MetalBall"), gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects1);
{gdjs.evtTools.sound.setSoundOnChannelVolume(runtimeScene, 1, (( gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects1.length === 0 ) ? 0 :gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects1[0].getAverageForce().getLength()) * 2);
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

gdjs.copyArray(runtimeScene.getObjects("Hole"), gdjs.Game_32_45_32L2L8Code.GDHoleObjects1);
gdjs.copyArray(runtimeScene.getObjects("MetalBall"), gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.Game_32_45_32L2L8Code.mapOfGDgdjs_9546Game_959532_959545_959532L2L8Code_9546GDMetalBallObjects1Objects, gdjs.Game_32_45_32L2L8Code.mapOfGDgdjs_9546Game_959532_959545_959532L2L8Code_9546GDHoleObjects1Objects, 20, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22285004);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects1 */
{for(var i = 0, len = gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects1[i].getBehavior("Tween").addObjectWidthTween2("BallHole", 0, "linear", 0.15, true);
}
}
{for(var i = 0, len = gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects1[i].getBehavior("Tween").addObjectHeightTween2("BallHole2", 0, "linear", 0.15, true);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "ballhole.mp3", false, 100, 1);
}

{ //Subevents
gdjs.Game_32_45_32L2L8Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cannonball"), gdjs.Game_32_45_32L2L8Code.GDCannonballObjects1);
gdjs.copyArray(runtimeScene.getObjects("MetalBall"), gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32_45_32L2L8Code.mapOfGDgdjs_9546Game_959532_959545_959532L2L8Code_9546GDMetalBallObjects1Objects, gdjs.Game_32_45_32L2L8Code.mapOfGDgdjs_9546Game_959532_959545_959532L2L8Code_9546GDCannonballObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22287492);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects1 */
gdjs.Game_32_45_32L2L8Code.GDPoofObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_32_45_32L2L8Code.mapOfGDgdjs_9546Game_959532_959545_959532L2L8Code_9546GDPoofObjects1Objects, (( gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects1.length === 0 ) ? 0 :gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects1[0].getPointX("")), (( gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects1.length === 0 ) ? 0 :gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects1[0].getPointY("")), "");
}
{for(var i = 0, len = gdjs.Game_32_45_32L2L8Code.GDPoofObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32L2L8Code.GDPoofObjects1[i].getBehavior("Scale").setScale(0.2);
}
}
{for(var i = 0, len = gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "poof.mp3", false, 100, 1);
}
{for(var i = 0, len = gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects1[i].clearForces();
}
}

{ //Subevents
gdjs.Game_32_45_32L2L8Code.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "CannonShoot");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cannon"), gdjs.Game_32_45_32L2L8Code.GDCannonObjects1);

for (gdjs.Game_32_45_32L2L8Code.forEachIndex2 = 0;gdjs.Game_32_45_32L2L8Code.forEachIndex2 < gdjs.Game_32_45_32L2L8Code.GDCannonObjects1.length;++gdjs.Game_32_45_32L2L8Code.forEachIndex2) {
gdjs.Game_32_45_32L2L8Code.GDCannonballObjects2.length = 0;

gdjs.Game_32_45_32L2L8Code.GDCannonObjects2.length = 0;


gdjs.Game_32_45_32L2L8Code.forEachTemporary2 = gdjs.Game_32_45_32L2L8Code.GDCannonObjects1[gdjs.Game_32_45_32L2L8Code.forEachIndex2];
gdjs.Game_32_45_32L2L8Code.GDCannonObjects2.push(gdjs.Game_32_45_32L2L8Code.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "CannonShoot") > 1.75;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22290492);
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.Game_32_45_32L2L8Code.GDCannonObjects2.length ;i < len;++i) {
    gdjs.Game_32_45_32L2L8Code.GDCannonObjects2[i].setAnimationFrame(0);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_32_45_32L2L8Code.mapOfGDgdjs_9546Game_959532_959545_959532L2L8Code_9546GDCannonballObjects2Objects, (( gdjs.Game_32_45_32L2L8Code.GDCannonObjects2.length === 0 ) ? 0 :gdjs.Game_32_45_32L2L8Code.GDCannonObjects2[0].getPointX("")), (( gdjs.Game_32_45_32L2L8Code.GDCannonObjects2.length === 0 ) ? 0 :gdjs.Game_32_45_32L2L8Code.GDCannonObjects2[0].getPointY("")), "");
}
{for(var i = 0, len = gdjs.Game_32_45_32L2L8Code.GDCannonballObjects2.length ;i < len;++i) {
    gdjs.Game_32_45_32L2L8Code.GDCannonballObjects2[i].getBehavior("Scale").setScale(0.007);
}
}
{for(var i = 0, len = gdjs.Game_32_45_32L2L8Code.GDCannonballObjects2.length ;i < len;++i) {
    gdjs.Game_32_45_32L2L8Code.GDCannonballObjects2[i].addPolarForce((( gdjs.Game_32_45_32L2L8Code.GDCannonObjects2.length === 0 ) ? 0 :gdjs.Game_32_45_32L2L8Code.GDCannonObjects2[0].getAngle()), 180, 1);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "cannon.mp3", false, 100, 1);
}

{ //Subevents: 
gdjs.Game_32_45_32L2L8Code.eventsList4(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cannonball"), gdjs.Game_32_45_32L2L8Code.GDCannonballObjects1);
gdjs.copyArray(runtimeScene.getObjects("Wall"), gdjs.Game_32_45_32L2L8Code.GDWallObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32_45_32L2L8Code.mapOfGDgdjs_9546Game_959532_959545_959532L2L8Code_9546GDCannonballObjects1Objects, gdjs.Game_32_45_32L2L8Code.mapOfGDgdjs_9546Game_959532_959545_959532L2L8Code_9546GDWallObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32_45_32L2L8Code.GDCannonballObjects1 */
{for(var i = 0, len = gdjs.Game_32_45_32L2L8Code.GDCannonballObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32L2L8Code.GDCannonballObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


};

gdjs.Game_32_45_32L2L8Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32_45_32L2L8Code.GDFinishHoleObjects1.length = 0;
gdjs.Game_32_45_32L2L8Code.GDFinishHoleObjects2.length = 0;
gdjs.Game_32_45_32L2L8Code.GDFinishHoleObjects3.length = 0;
gdjs.Game_32_45_32L2L8Code.GDFinishHoleObjects4.length = 0;
gdjs.Game_32_45_32L2L8Code.GDHoleObjects1.length = 0;
gdjs.Game_32_45_32L2L8Code.GDHoleObjects2.length = 0;
gdjs.Game_32_45_32L2L8Code.GDHoleObjects3.length = 0;
gdjs.Game_32_45_32L2L8Code.GDHoleObjects4.length = 0;
gdjs.Game_32_45_32L2L8Code.GDCannonObjects1.length = 0;
gdjs.Game_32_45_32L2L8Code.GDCannonObjects2.length = 0;
gdjs.Game_32_45_32L2L8Code.GDCannonObjects3.length = 0;
gdjs.Game_32_45_32L2L8Code.GDCannonObjects4.length = 0;
gdjs.Game_32_45_32L2L8Code.GDCannonballObjects1.length = 0;
gdjs.Game_32_45_32L2L8Code.GDCannonballObjects2.length = 0;
gdjs.Game_32_45_32L2L8Code.GDCannonballObjects3.length = 0;
gdjs.Game_32_45_32L2L8Code.GDCannonballObjects4.length = 0;
gdjs.Game_32_45_32L2L8Code.GDPoofObjects1.length = 0;
gdjs.Game_32_45_32L2L8Code.GDPoofObjects2.length = 0;
gdjs.Game_32_45_32L2L8Code.GDPoofObjects3.length = 0;
gdjs.Game_32_45_32L2L8Code.GDPoofObjects4.length = 0;
gdjs.Game_32_45_32L2L8Code.GDFloorObjects1.length = 0;
gdjs.Game_32_45_32L2L8Code.GDFloorObjects2.length = 0;
gdjs.Game_32_45_32L2L8Code.GDFloorObjects3.length = 0;
gdjs.Game_32_45_32L2L8Code.GDFloorObjects4.length = 0;
gdjs.Game_32_45_32L2L8Code.GDWallObjects1.length = 0;
gdjs.Game_32_45_32L2L8Code.GDWallObjects2.length = 0;
gdjs.Game_32_45_32L2L8Code.GDWallObjects3.length = 0;
gdjs.Game_32_45_32L2L8Code.GDWallObjects4.length = 0;
gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects1.length = 0;
gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects2.length = 0;
gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects3.length = 0;
gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects4.length = 0;
gdjs.Game_32_45_32L2L8Code.GDTransparentDarkJoystickObjects1.length = 0;
gdjs.Game_32_45_32L2L8Code.GDTransparentDarkJoystickObjects2.length = 0;
gdjs.Game_32_45_32L2L8Code.GDTransparentDarkJoystickObjects3.length = 0;
gdjs.Game_32_45_32L2L8Code.GDTransparentDarkJoystickObjects4.length = 0;
gdjs.Game_32_45_32L2L8Code.GDBGObjects1.length = 0;
gdjs.Game_32_45_32L2L8Code.GDBGObjects2.length = 0;
gdjs.Game_32_45_32L2L8Code.GDBGObjects3.length = 0;
gdjs.Game_32_45_32L2L8Code.GDBGObjects4.length = 0;

gdjs.Game_32_45_32L2L8Code.eventsList5(runtimeScene);
gdjs.Game_32_45_32L2L8Code.GDFinishHoleObjects1.length = 0;
gdjs.Game_32_45_32L2L8Code.GDFinishHoleObjects2.length = 0;
gdjs.Game_32_45_32L2L8Code.GDFinishHoleObjects3.length = 0;
gdjs.Game_32_45_32L2L8Code.GDFinishHoleObjects4.length = 0;
gdjs.Game_32_45_32L2L8Code.GDHoleObjects1.length = 0;
gdjs.Game_32_45_32L2L8Code.GDHoleObjects2.length = 0;
gdjs.Game_32_45_32L2L8Code.GDHoleObjects3.length = 0;
gdjs.Game_32_45_32L2L8Code.GDHoleObjects4.length = 0;
gdjs.Game_32_45_32L2L8Code.GDCannonObjects1.length = 0;
gdjs.Game_32_45_32L2L8Code.GDCannonObjects2.length = 0;
gdjs.Game_32_45_32L2L8Code.GDCannonObjects3.length = 0;
gdjs.Game_32_45_32L2L8Code.GDCannonObjects4.length = 0;
gdjs.Game_32_45_32L2L8Code.GDCannonballObjects1.length = 0;
gdjs.Game_32_45_32L2L8Code.GDCannonballObjects2.length = 0;
gdjs.Game_32_45_32L2L8Code.GDCannonballObjects3.length = 0;
gdjs.Game_32_45_32L2L8Code.GDCannonballObjects4.length = 0;
gdjs.Game_32_45_32L2L8Code.GDPoofObjects1.length = 0;
gdjs.Game_32_45_32L2L8Code.GDPoofObjects2.length = 0;
gdjs.Game_32_45_32L2L8Code.GDPoofObjects3.length = 0;
gdjs.Game_32_45_32L2L8Code.GDPoofObjects4.length = 0;
gdjs.Game_32_45_32L2L8Code.GDFloorObjects1.length = 0;
gdjs.Game_32_45_32L2L8Code.GDFloorObjects2.length = 0;
gdjs.Game_32_45_32L2L8Code.GDFloorObjects3.length = 0;
gdjs.Game_32_45_32L2L8Code.GDFloorObjects4.length = 0;
gdjs.Game_32_45_32L2L8Code.GDWallObjects1.length = 0;
gdjs.Game_32_45_32L2L8Code.GDWallObjects2.length = 0;
gdjs.Game_32_45_32L2L8Code.GDWallObjects3.length = 0;
gdjs.Game_32_45_32L2L8Code.GDWallObjects4.length = 0;
gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects1.length = 0;
gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects2.length = 0;
gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects3.length = 0;
gdjs.Game_32_45_32L2L8Code.GDMetalBallObjects4.length = 0;
gdjs.Game_32_45_32L2L8Code.GDTransparentDarkJoystickObjects1.length = 0;
gdjs.Game_32_45_32L2L8Code.GDTransparentDarkJoystickObjects2.length = 0;
gdjs.Game_32_45_32L2L8Code.GDTransparentDarkJoystickObjects3.length = 0;
gdjs.Game_32_45_32L2L8Code.GDTransparentDarkJoystickObjects4.length = 0;
gdjs.Game_32_45_32L2L8Code.GDBGObjects1.length = 0;
gdjs.Game_32_45_32L2L8Code.GDBGObjects2.length = 0;
gdjs.Game_32_45_32L2L8Code.GDBGObjects3.length = 0;
gdjs.Game_32_45_32L2L8Code.GDBGObjects4.length = 0;


return;

}

gdjs['Game_32_45_32L2L8Code'] = gdjs.Game_32_45_32L2L8Code;
