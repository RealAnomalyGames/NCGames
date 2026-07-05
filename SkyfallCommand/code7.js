gdjs.Game_32_45_32TimedCode = {};
gdjs.Game_32_45_32TimedCode.localVariables = [];
gdjs.Game_32_45_32TimedCode.idToCallbackMap = new Map();
gdjs.Game_32_45_32TimedCode.GDWallObjects1= [];
gdjs.Game_32_45_32TimedCode.GDWallObjects2= [];
gdjs.Game_32_45_32TimedCode.GDWallObjects3= [];
gdjs.Game_32_45_32TimedCode.GDTurretBaseObjects1= [];
gdjs.Game_32_45_32TimedCode.GDTurretBaseObjects2= [];
gdjs.Game_32_45_32TimedCode.GDTurretBaseObjects3= [];
gdjs.Game_32_45_32TimedCode.GDTurretObjects1= [];
gdjs.Game_32_45_32TimedCode.GDTurretObjects2= [];
gdjs.Game_32_45_32TimedCode.GDTurretObjects3= [];
gdjs.Game_32_45_32TimedCode.GDPlayerRocketObjects1= [];
gdjs.Game_32_45_32TimedCode.GDPlayerRocketObjects2= [];
gdjs.Game_32_45_32TimedCode.GDPlayerRocketObjects3= [];
gdjs.Game_32_45_32TimedCode.GDRoundTextObjects1= [];
gdjs.Game_32_45_32TimedCode.GDRoundTextObjects2= [];
gdjs.Game_32_45_32TimedCode.GDRoundTextObjects3= [];
gdjs.Game_32_45_32TimedCode.GDExplosionObjects1= [];
gdjs.Game_32_45_32TimedCode.GDExplosionObjects2= [];
gdjs.Game_32_45_32TimedCode.GDExplosionObjects3= [];
gdjs.Game_32_45_32TimedCode.GDHelicopterObjects1= [];
gdjs.Game_32_45_32TimedCode.GDHelicopterObjects2= [];
gdjs.Game_32_45_32TimedCode.GDHelicopterObjects3= [];
gdjs.Game_32_45_32TimedCode.GDBomberObjects1= [];
gdjs.Game_32_45_32TimedCode.GDBomberObjects2= [];
gdjs.Game_32_45_32TimedCode.GDBomberObjects3= [];
gdjs.Game_32_45_32TimedCode.GDTankObjects1= [];
gdjs.Game_32_45_32TimedCode.GDTankObjects2= [];
gdjs.Game_32_45_32TimedCode.GDTankObjects3= [];
gdjs.Game_32_45_32TimedCode.GDLivesUIObjects1= [];
gdjs.Game_32_45_32TimedCode.GDLivesUIObjects2= [];
gdjs.Game_32_45_32TimedCode.GDLivesUIObjects3= [];
gdjs.Game_32_45_32TimedCode.GDLoseTextObjects1= [];
gdjs.Game_32_45_32TimedCode.GDLoseTextObjects2= [];
gdjs.Game_32_45_32TimedCode.GDLoseTextObjects3= [];
gdjs.Game_32_45_32TimedCode.GDTimerTextObjects1= [];
gdjs.Game_32_45_32TimedCode.GDTimerTextObjects2= [];
gdjs.Game_32_45_32TimedCode.GDTimerTextObjects3= [];
gdjs.Game_32_45_32TimedCode.GDDroneObjects1= [];
gdjs.Game_32_45_32TimedCode.GDDroneObjects2= [];
gdjs.Game_32_45_32TimedCode.GDDroneObjects3= [];
gdjs.Game_32_45_32TimedCode.GDGroundObjects1= [];
gdjs.Game_32_45_32TimedCode.GDGroundObjects2= [];
gdjs.Game_32_45_32TimedCode.GDGroundObjects3= [];


gdjs.Game_32_45_32TimedCode.mapOfGDgdjs_9546Game_959532_959545_959532TimedCode_9546GDPlayerRocketObjects1Objects = Hashtable.newFrom({"PlayerRocket": gdjs.Game_32_45_32TimedCode.GDPlayerRocketObjects1});
gdjs.Game_32_45_32TimedCode.asyncCallback16815460 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32_45_32TimedCode.localVariables);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "SpawnRate");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "HeliRate");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "BomberRate");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TankRate");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "RoundLength");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Clock");
}
gdjs.Game_32_45_32TimedCode.localVariables.length = 0;
}
gdjs.Game_32_45_32TimedCode.idToCallbackMap.set(16815460, gdjs.Game_32_45_32TimedCode.asyncCallback16815460);
gdjs.Game_32_45_32TimedCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32_45_32TimedCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Game_32_45_32TimedCode.asyncCallback16815460(runtimeScene, asyncObjectsList)), 16815460, asyncObjectsList);
}
}

}


};gdjs.Game_32_45_32TimedCode.mapOfGDgdjs_9546Game_959532_959545_959532TimedCode_9546GDDroneObjects1Objects = Hashtable.newFrom({"Drone": gdjs.Game_32_45_32TimedCode.GDDroneObjects1});
gdjs.Game_32_45_32TimedCode.mapOfGDgdjs_9546Game_959532_959545_959532TimedCode_9546GDHelicopterObjects1Objects = Hashtable.newFrom({"Helicopter": gdjs.Game_32_45_32TimedCode.GDHelicopterObjects1});
gdjs.Game_32_45_32TimedCode.mapOfGDgdjs_9546Game_959532_959545_959532TimedCode_9546GDBomberObjects1Objects = Hashtable.newFrom({"Bomber": gdjs.Game_32_45_32TimedCode.GDBomberObjects1});
gdjs.Game_32_45_32TimedCode.mapOfGDgdjs_9546Game_959532_959545_959532TimedCode_9546GDTankObjects1Objects = Hashtable.newFrom({"Tank": gdjs.Game_32_45_32TimedCode.GDTankObjects1});
gdjs.Game_32_45_32TimedCode.mapOfGDgdjs_9546Game_959532_959545_959532TimedCode_9546GDRoundTextObjects1Objects = Hashtable.newFrom({"RoundText": gdjs.Game_32_45_32TimedCode.GDRoundTextObjects1});
gdjs.Game_32_45_32TimedCode.asyncCallback16828500 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32_45_32TimedCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("RoundText"), gdjs.Game_32_45_32TimedCode.GDRoundTextObjects2);

{for(var i = 0, len = gdjs.Game_32_45_32TimedCode.GDRoundTextObjects2.length ;i < len;++i) {
    gdjs.Game_32_45_32TimedCode.GDRoundTextObjects2[i].deleteFromScene(runtimeScene);
}
}
gdjs.Game_32_45_32TimedCode.localVariables.length = 0;
}
gdjs.Game_32_45_32TimedCode.idToCallbackMap.set(16828500, gdjs.Game_32_45_32TimedCode.asyncCallback16828500);
gdjs.Game_32_45_32TimedCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32_45_32TimedCode.localVariables);
for (const obj of gdjs.Game_32_45_32TimedCode.GDRoundTextObjects1) asyncObjectsList.addObject("RoundText", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3.5), (runtimeScene) => (gdjs.Game_32_45_32TimedCode.asyncCallback16828500(runtimeScene, asyncObjectsList)), 16828500, asyncObjectsList);
}
}

}


};gdjs.Game_32_45_32TimedCode.mapOfGDgdjs_9546Game_959532_959545_959532TimedCode_9546GDPlayerRocketObjects1Objects = Hashtable.newFrom({"PlayerRocket": gdjs.Game_32_45_32TimedCode.GDPlayerRocketObjects1});
gdjs.Game_32_45_32TimedCode.mapOfGDgdjs_9546Game_959532_959545_959532TimedCode_9546GDDroneObjects1Objects = Hashtable.newFrom({"Drone": gdjs.Game_32_45_32TimedCode.GDDroneObjects1});
gdjs.Game_32_45_32TimedCode.mapOfGDgdjs_9546Game_959532_959545_959532TimedCode_9546GDExplosionObjects1Objects = Hashtable.newFrom({"Explosion": gdjs.Game_32_45_32TimedCode.GDExplosionObjects1});
gdjs.Game_32_45_32TimedCode.asyncCallback16844492 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32_45_32TimedCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Explosion"), gdjs.Game_32_45_32TimedCode.GDExplosionObjects2);

{for(var i = 0, len = gdjs.Game_32_45_32TimedCode.GDExplosionObjects2.length ;i < len;++i) {
    gdjs.Game_32_45_32TimedCode.GDExplosionObjects2[i].deleteFromScene(runtimeScene);
}
}
gdjs.Game_32_45_32TimedCode.localVariables.length = 0;
}
gdjs.Game_32_45_32TimedCode.idToCallbackMap.set(16844492, gdjs.Game_32_45_32TimedCode.asyncCallback16844492);
gdjs.Game_32_45_32TimedCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32_45_32TimedCode.localVariables);
for (const obj of gdjs.Game_32_45_32TimedCode.GDExplosionObjects1) asyncObjectsList.addObject("Explosion", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.7), (runtimeScene) => (gdjs.Game_32_45_32TimedCode.asyncCallback16844492(runtimeScene, asyncObjectsList)), 16844492, asyncObjectsList);
}
}

}


};gdjs.Game_32_45_32TimedCode.mapOfGDgdjs_9546Game_959532_959545_959532TimedCode_9546GDPlayerRocketObjects1Objects = Hashtable.newFrom({"PlayerRocket": gdjs.Game_32_45_32TimedCode.GDPlayerRocketObjects1});
gdjs.Game_32_45_32TimedCode.mapOfGDgdjs_9546Game_959532_959545_959532TimedCode_9546GDHelicopterObjects1Objects = Hashtable.newFrom({"Helicopter": gdjs.Game_32_45_32TimedCode.GDHelicopterObjects1});
gdjs.Game_32_45_32TimedCode.mapOfGDgdjs_9546Game_959532_959545_959532TimedCode_9546GDExplosionObjects1Objects = Hashtable.newFrom({"Explosion": gdjs.Game_32_45_32TimedCode.GDExplosionObjects1});
gdjs.Game_32_45_32TimedCode.asyncCallback14176516 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32_45_32TimedCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Explosion"), gdjs.Game_32_45_32TimedCode.GDExplosionObjects2);

{for(var i = 0, len = gdjs.Game_32_45_32TimedCode.GDExplosionObjects2.length ;i < len;++i) {
    gdjs.Game_32_45_32TimedCode.GDExplosionObjects2[i].deleteFromScene(runtimeScene);
}
}
gdjs.Game_32_45_32TimedCode.localVariables.length = 0;
}
gdjs.Game_32_45_32TimedCode.idToCallbackMap.set(14176516, gdjs.Game_32_45_32TimedCode.asyncCallback14176516);
gdjs.Game_32_45_32TimedCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32_45_32TimedCode.localVariables);
for (const obj of gdjs.Game_32_45_32TimedCode.GDExplosionObjects1) asyncObjectsList.addObject("Explosion", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.7), (runtimeScene) => (gdjs.Game_32_45_32TimedCode.asyncCallback14176516(runtimeScene, asyncObjectsList)), 14176516, asyncObjectsList);
}
}

}


};gdjs.Game_32_45_32TimedCode.mapOfGDgdjs_9546Game_959532_959545_959532TimedCode_9546GDPlayerRocketObjects1Objects = Hashtable.newFrom({"PlayerRocket": gdjs.Game_32_45_32TimedCode.GDPlayerRocketObjects1});
gdjs.Game_32_45_32TimedCode.mapOfGDgdjs_9546Game_959532_959545_959532TimedCode_9546GDHelicopterObjects1Objects = Hashtable.newFrom({"Helicopter": gdjs.Game_32_45_32TimedCode.GDHelicopterObjects1});
gdjs.Game_32_45_32TimedCode.asyncCallback14178068 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32_45_32TimedCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Helicopter"), gdjs.Game_32_45_32TimedCode.GDHelicopterObjects2);

{for(var i = 0, len = gdjs.Game_32_45_32TimedCode.GDHelicopterObjects2.length ;i < len;++i) {
    gdjs.Game_32_45_32TimedCode.GDHelicopterObjects2[i].getBehavior("Effect").enableEffect("Effect", false);
}
}
gdjs.Game_32_45_32TimedCode.localVariables.length = 0;
}
gdjs.Game_32_45_32TimedCode.idToCallbackMap.set(14178068, gdjs.Game_32_45_32TimedCode.asyncCallback14178068);
gdjs.Game_32_45_32TimedCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32_45_32TimedCode.localVariables);
for (const obj of gdjs.Game_32_45_32TimedCode.GDHelicopterObjects1) asyncObjectsList.addObject("Helicopter", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.Game_32_45_32TimedCode.asyncCallback14178068(runtimeScene, asyncObjectsList)), 14178068, asyncObjectsList);
}
}

}


};gdjs.Game_32_45_32TimedCode.mapOfGDgdjs_9546Game_959532_959545_959532TimedCode_9546GDPlayerRocketObjects1Objects = Hashtable.newFrom({"PlayerRocket": gdjs.Game_32_45_32TimedCode.GDPlayerRocketObjects1});
gdjs.Game_32_45_32TimedCode.mapOfGDgdjs_9546Game_959532_959545_959532TimedCode_9546GDBomberObjects1Objects = Hashtable.newFrom({"Bomber": gdjs.Game_32_45_32TimedCode.GDBomberObjects1});
gdjs.Game_32_45_32TimedCode.mapOfGDgdjs_9546Game_959532_959545_959532TimedCode_9546GDExplosionObjects1Objects = Hashtable.newFrom({"Explosion": gdjs.Game_32_45_32TimedCode.GDExplosionObjects1});
gdjs.Game_32_45_32TimedCode.asyncCallback14180980 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32_45_32TimedCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Explosion"), gdjs.Game_32_45_32TimedCode.GDExplosionObjects2);

{for(var i = 0, len = gdjs.Game_32_45_32TimedCode.GDExplosionObjects2.length ;i < len;++i) {
    gdjs.Game_32_45_32TimedCode.GDExplosionObjects2[i].deleteFromScene(runtimeScene);
}
}
gdjs.Game_32_45_32TimedCode.localVariables.length = 0;
}
gdjs.Game_32_45_32TimedCode.idToCallbackMap.set(14180980, gdjs.Game_32_45_32TimedCode.asyncCallback14180980);
gdjs.Game_32_45_32TimedCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32_45_32TimedCode.localVariables);
for (const obj of gdjs.Game_32_45_32TimedCode.GDExplosionObjects1) asyncObjectsList.addObject("Explosion", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.7), (runtimeScene) => (gdjs.Game_32_45_32TimedCode.asyncCallback14180980(runtimeScene, asyncObjectsList)), 14180980, asyncObjectsList);
}
}

}


};gdjs.Game_32_45_32TimedCode.mapOfGDgdjs_9546Game_959532_959545_959532TimedCode_9546GDPlayerRocketObjects1Objects = Hashtable.newFrom({"PlayerRocket": gdjs.Game_32_45_32TimedCode.GDPlayerRocketObjects1});
gdjs.Game_32_45_32TimedCode.mapOfGDgdjs_9546Game_959532_959545_959532TimedCode_9546GDBomberObjects1Objects = Hashtable.newFrom({"Bomber": gdjs.Game_32_45_32TimedCode.GDBomberObjects1});
gdjs.Game_32_45_32TimedCode.asyncCallback14182620 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32_45_32TimedCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Bomber"), gdjs.Game_32_45_32TimedCode.GDBomberObjects2);

{for(var i = 0, len = gdjs.Game_32_45_32TimedCode.GDBomberObjects2.length ;i < len;++i) {
    gdjs.Game_32_45_32TimedCode.GDBomberObjects2[i].getBehavior("Effect").enableEffect("Effect", false);
}
}
gdjs.Game_32_45_32TimedCode.localVariables.length = 0;
}
gdjs.Game_32_45_32TimedCode.idToCallbackMap.set(14182620, gdjs.Game_32_45_32TimedCode.asyncCallback14182620);
gdjs.Game_32_45_32TimedCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32_45_32TimedCode.localVariables);
for (const obj of gdjs.Game_32_45_32TimedCode.GDBomberObjects1) asyncObjectsList.addObject("Bomber", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.Game_32_45_32TimedCode.asyncCallback14182620(runtimeScene, asyncObjectsList)), 14182620, asyncObjectsList);
}
}

}


};gdjs.Game_32_45_32TimedCode.mapOfGDgdjs_9546Game_959532_959545_959532TimedCode_9546GDPlayerRocketObjects1Objects = Hashtable.newFrom({"PlayerRocket": gdjs.Game_32_45_32TimedCode.GDPlayerRocketObjects1});
gdjs.Game_32_45_32TimedCode.mapOfGDgdjs_9546Game_959532_959545_959532TimedCode_9546GDTankObjects1Objects = Hashtable.newFrom({"Tank": gdjs.Game_32_45_32TimedCode.GDTankObjects1});
gdjs.Game_32_45_32TimedCode.mapOfGDgdjs_9546Game_959532_959545_959532TimedCode_9546GDExplosionObjects1Objects = Hashtable.newFrom({"Explosion": gdjs.Game_32_45_32TimedCode.GDExplosionObjects1});
gdjs.Game_32_45_32TimedCode.asyncCallback14185532 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32_45_32TimedCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Explosion"), gdjs.Game_32_45_32TimedCode.GDExplosionObjects2);

{for(var i = 0, len = gdjs.Game_32_45_32TimedCode.GDExplosionObjects2.length ;i < len;++i) {
    gdjs.Game_32_45_32TimedCode.GDExplosionObjects2[i].deleteFromScene(runtimeScene);
}
}
gdjs.Game_32_45_32TimedCode.localVariables.length = 0;
}
gdjs.Game_32_45_32TimedCode.idToCallbackMap.set(14185532, gdjs.Game_32_45_32TimedCode.asyncCallback14185532);
gdjs.Game_32_45_32TimedCode.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32_45_32TimedCode.localVariables);
for (const obj of gdjs.Game_32_45_32TimedCode.GDExplosionObjects1) asyncObjectsList.addObject("Explosion", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.7), (runtimeScene) => (gdjs.Game_32_45_32TimedCode.asyncCallback14185532(runtimeScene, asyncObjectsList)), 14185532, asyncObjectsList);
}
}

}


};gdjs.Game_32_45_32TimedCode.mapOfGDgdjs_9546Game_959532_959545_959532TimedCode_9546GDPlayerRocketObjects1Objects = Hashtable.newFrom({"PlayerRocket": gdjs.Game_32_45_32TimedCode.GDPlayerRocketObjects1});
gdjs.Game_32_45_32TimedCode.mapOfGDgdjs_9546Game_959532_959545_959532TimedCode_9546GDTankObjects1Objects = Hashtable.newFrom({"Tank": gdjs.Game_32_45_32TimedCode.GDTankObjects1});
gdjs.Game_32_45_32TimedCode.asyncCallback14187172 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32_45_32TimedCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Tank"), gdjs.Game_32_45_32TimedCode.GDTankObjects2);

{for(var i = 0, len = gdjs.Game_32_45_32TimedCode.GDTankObjects2.length ;i < len;++i) {
    gdjs.Game_32_45_32TimedCode.GDTankObjects2[i].getBehavior("Effect").enableEffect("Effect", false);
}
}
gdjs.Game_32_45_32TimedCode.localVariables.length = 0;
}
gdjs.Game_32_45_32TimedCode.idToCallbackMap.set(14187172, gdjs.Game_32_45_32TimedCode.asyncCallback14187172);
gdjs.Game_32_45_32TimedCode.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32_45_32TimedCode.localVariables);
for (const obj of gdjs.Game_32_45_32TimedCode.GDTankObjects1) asyncObjectsList.addObject("Tank", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.Game_32_45_32TimedCode.asyncCallback14187172(runtimeScene, asyncObjectsList)), 14187172, asyncObjectsList);
}
}

}


};gdjs.Game_32_45_32TimedCode.mapOfGDgdjs_9546Game_959532_959545_959532TimedCode_9546GDLoseTextObjects2Objects = Hashtable.newFrom({"LoseText": gdjs.Game_32_45_32TimedCode.GDLoseTextObjects2});
gdjs.Game_32_45_32TimedCode.asyncCallback14188860 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32_45_32TimedCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Gameover Scene - Timed", true);
}
gdjs.Game_32_45_32TimedCode.localVariables.length = 0;
}
gdjs.Game_32_45_32TimedCode.idToCallbackMap.set(14188860, gdjs.Game_32_45_32TimedCode.asyncCallback14188860);
gdjs.Game_32_45_32TimedCode.eventsList9 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32_45_32TimedCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.Game_32_45_32TimedCode.asyncCallback14188860(runtimeScene, asyncObjectsList)), 14188860, asyncObjectsList);
}
}

}


};gdjs.Game_32_45_32TimedCode.asyncCallback14188180 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32_45_32TimedCode.localVariables);
gdjs.Game_32_45_32TimedCode.GDLoseTextObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_32_45_32TimedCode.mapOfGDgdjs_9546Game_959532_959545_959532TimedCode_9546GDLoseTextObjects2Objects, 75, 170, "UI Layer");
}
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 1);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "lose.mp3", false, 100, 1);
}

{ //Subevents
gdjs.Game_32_45_32TimedCode.eventsList9(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Game_32_45_32TimedCode.localVariables.length = 0;
}
gdjs.Game_32_45_32TimedCode.idToCallbackMap.set(14188180, gdjs.Game_32_45_32TimedCode.asyncCallback14188180);
gdjs.Game_32_45_32TimedCode.eventsList10 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32_45_32TimedCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Game_32_45_32TimedCode.asyncCallback14188180(runtimeScene, asyncObjectsList)), 14188180, asyncObjectsList);
}
}

}


};gdjs.Game_32_45_32TimedCode.eventsList11 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.doesSceneExist(runtimeScene, "Game - Timed");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Turret"), gdjs.Game_32_45_32TimedCode.GDTurretObjects1);
{for(var i = 0, len = gdjs.Game_32_45_32TimedCode.GDTurretObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32TimedCode.GDTurretObjects1[i].rotateTowardPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), 0, runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "PlayerFirerate") > 0.5;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "RoundLength") > 3.5;
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Turret"), gdjs.Game_32_45_32TimedCode.GDTurretObjects1);
gdjs.Game_32_45_32TimedCode.GDPlayerRocketObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_32_45_32TimedCode.mapOfGDgdjs_9546Game_959532_959545_959532TimedCode_9546GDPlayerRocketObjects1Objects, (( gdjs.Game_32_45_32TimedCode.GDTurretObjects1.length === 0 ) ? 0 :gdjs.Game_32_45_32TimedCode.GDTurretObjects1[0].getPointX("")) - 25, (( gdjs.Game_32_45_32TimedCode.GDTurretObjects1.length === 0 ) ? 0 :gdjs.Game_32_45_32TimedCode.GDTurretObjects1[0].getPointY("")) - 20, "");
}
{for(var i = 0, len = gdjs.Game_32_45_32TimedCode.GDPlayerRocketObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32TimedCode.GDPlayerRocketObjects1[i].getBehavior("Scale").setScale(0.3);
}
}
{for(var i = 0, len = gdjs.Game_32_45_32TimedCode.GDPlayerRocketObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32TimedCode.GDPlayerRocketObjects1[i].setAngle((( gdjs.Game_32_45_32TimedCode.GDTurretObjects1.length === 0 ) ? 0 :gdjs.Game_32_45_32TimedCode.GDTurretObjects1[0].getAngle()));
}
}
{for(var i = 0, len = gdjs.Game_32_45_32TimedCode.GDPlayerRocketObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32TimedCode.GDPlayerRocketObjects1[i].getBehavior("Tween").addObjectPositionTween2("RocketFly", (gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) * 2) - 160, (gdjs.evtTools.input.getCursorY(runtimeScene, "", 0) * 2) - 400, "easeInCubic", 1.3, true);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "turret fire.mp3", false, 100, 1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "PlayerFirerate");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(180);
}
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "game.mp3", 1, true, 85, 1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "PlayerFirerate");
}

{ //Subevents
gdjs.Game_32_45_32TimedCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "SpawnRate") > 1.6 / ((runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() / 25) + 1);
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.Game_32_45_32TimedCode.GDDroneObjects1.length = 0;

{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "SpawnRate");
}
{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_32_45_32TimedCode.mapOfGDgdjs_9546Game_959532_959545_959532TimedCode_9546GDDroneObjects1Objects, gdjs.randomFloatInRange(0, 290), -70, "AirLayer");
}
{for(var i = 0, len = gdjs.Game_32_45_32TimedCode.GDDroneObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32TimedCode.GDDroneObjects1[i].getBehavior("Animation").setAnimationIndex(gdjs.randomFloatInRange(0, 9));
}
}
{for(var i = 0, len = gdjs.Game_32_45_32TimedCode.GDDroneObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32TimedCode.GDDroneObjects1[i].getBehavior("Scale").setScale(0.09);
}
}
{for(var i = 0, len = gdjs.Game_32_45_32TimedCode.GDDroneObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32TimedCode.GDDroneObjects1[i].getBehavior("Tween").addObjectPositionYTween2("DroneFly", 540, "linear", gdjs.randomFloatInRange(11, 19), true);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "HeliRate") > 5.5 / ((runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() / 25) + 1);
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.Game_32_45_32TimedCode.GDHelicopterObjects1.length = 0;

{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "HeliRate");
}
{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_32_45_32TimedCode.mapOfGDgdjs_9546Game_959532_959545_959532TimedCode_9546GDHelicopterObjects1Objects, gdjs.randomFloatInRange(0, 290), -70, "AirLayer");
}
{for(var i = 0, len = gdjs.Game_32_45_32TimedCode.GDHelicopterObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32TimedCode.GDHelicopterObjects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}
{for(var i = 0, len = gdjs.Game_32_45_32TimedCode.GDHelicopterObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32TimedCode.GDHelicopterObjects1[i].getBehavior("Scale").setScale(0.09);
}
}
{for(var i = 0, len = gdjs.Game_32_45_32TimedCode.GDHelicopterObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32TimedCode.GDHelicopterObjects1[i].getBehavior("Tween").addObjectPositionYTween2("DroneFly", 540, "linear", gdjs.randomFloatInRange(11, 19), true);
}
}
{for(var i = 0, len = gdjs.Game_32_45_32TimedCode.GDHelicopterObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32TimedCode.GDHelicopterObjects1[i].returnVariable(gdjs.Game_32_45_32TimedCode.GDHelicopterObjects1[i].getVariables().getFromIndex(0)).setNumber(2);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "BomberRate") > 14.2 / ((runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() / 25) + 1);
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.Game_32_45_32TimedCode.GDBomberObjects1.length = 0;

{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "BomberRate");
}
{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_32_45_32TimedCode.mapOfGDgdjs_9546Game_959532_959545_959532TimedCode_9546GDBomberObjects1Objects, gdjs.randomFloatInRange(0, 290), -70, "AirLayer");
}
{for(var i = 0, len = gdjs.Game_32_45_32TimedCode.GDBomberObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32TimedCode.GDBomberObjects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}
{for(var i = 0, len = gdjs.Game_32_45_32TimedCode.GDBomberObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32TimedCode.GDBomberObjects1[i].getBehavior("Scale").setScale(0.13);
}
}
{for(var i = 0, len = gdjs.Game_32_45_32TimedCode.GDBomberObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32TimedCode.GDBomberObjects1[i].getBehavior("Tween").addObjectPositionYTween2("DroneFly", 540, "linear", gdjs.randomFloatInRange(16, 25), true);
}
}
{for(var i = 0, len = gdjs.Game_32_45_32TimedCode.GDBomberObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32TimedCode.GDBomberObjects1[i].returnVariable(gdjs.Game_32_45_32TimedCode.GDBomberObjects1[i].getVariables().getFromIndex(0)).setNumber(4);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "TankRate") > 45 / ((runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() / 25) + 1);
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.Game_32_45_32TimedCode.GDTankObjects1.length = 0;

{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TankRate");
}
{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_32_45_32TimedCode.mapOfGDgdjs_9546Game_959532_959545_959532TimedCode_9546GDTankObjects1Objects, gdjs.randomFloatInRange(0, 290), -70, "TankLayer");
}
{for(var i = 0, len = gdjs.Game_32_45_32TimedCode.GDTankObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32TimedCode.GDTankObjects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}
{for(var i = 0, len = gdjs.Game_32_45_32TimedCode.GDTankObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32TimedCode.GDTankObjects1[i].getBehavior("Scale").setScale(0.2);
}
}
{for(var i = 0, len = gdjs.Game_32_45_32TimedCode.GDTankObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32TimedCode.GDTankObjects1[i].getBehavior("Tween").addObjectPositionYTween2("DroneFly", 540, "linear", gdjs.randomFloatInRange(25, 38), true);
}
}
{for(var i = 0, len = gdjs.Game_32_45_32TimedCode.GDTankObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32TimedCode.GDTankObjects1[i].returnVariable(gdjs.Game_32_45_32TimedCode.GDTankObjects1[i].getVariables().getFromIndex(0)).setNumber(8);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "RoundLength") < 0.1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16827164);
}
}
if (isConditionTrue_0) {
gdjs.Game_32_45_32TimedCode.GDRoundTextObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_32_45_32TimedCode.mapOfGDgdjs_9546Game_959532_959545_959532TimedCode_9546GDRoundTextObjects1Objects, 100, 210, "");
}
{for(var i = 0, len = gdjs.Game_32_45_32TimedCode.GDRoundTextObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32TimedCode.GDRoundTextObjects1[i].getBehavior("Text").setText("Begin!");
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "achievement_unlocked.mp3", false, 100, 1);
}

{ //Subevents
gdjs.Game_32_45_32TimedCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Drone"), gdjs.Game_32_45_32TimedCode.GDDroneObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerRocket"), gdjs.Game_32_45_32TimedCode.GDPlayerRocketObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32_45_32TimedCode.mapOfGDgdjs_9546Game_959532_959545_959532TimedCode_9546GDPlayerRocketObjects1Objects, gdjs.Game_32_45_32TimedCode.mapOfGDgdjs_9546Game_959532_959545_959532TimedCode_9546GDDroneObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32_45_32TimedCode.GDDroneObjects1 */
/* Reuse gdjs.Game_32_45_32TimedCode.GDPlayerRocketObjects1 */
gdjs.Game_32_45_32TimedCode.GDExplosionObjects1.length = 0;

{for(var i = 0, len = gdjs.Game_32_45_32TimedCode.GDPlayerRocketObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32TimedCode.GDPlayerRocketObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_32_45_32TimedCode.mapOfGDgdjs_9546Game_959532_959545_959532TimedCode_9546GDExplosionObjects1Objects, (( gdjs.Game_32_45_32TimedCode.GDDroneObjects1.length === 0 ) ? 0 :gdjs.Game_32_45_32TimedCode.GDDroneObjects1[0].getPointX("")) - 40, (( gdjs.Game_32_45_32TimedCode.GDDroneObjects1.length === 0 ) ? 0 :gdjs.Game_32_45_32TimedCode.GDDroneObjects1[0].getPointY("")), "");
}
{for(var i = 0, len = gdjs.Game_32_45_32TimedCode.GDExplosionObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32TimedCode.GDExplosionObjects1[i].getBehavior("Scale").setScale(0.15);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).sub(1);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "explosion.mp3", false, 100, 1);
}
{for(var i = 0, len = gdjs.Game_32_45_32TimedCode.GDDroneObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32TimedCode.GDDroneObjects1[i].deleteFromScene(runtimeScene);
}
}

{ //Subevents
gdjs.Game_32_45_32TimedCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Helicopter"), gdjs.Game_32_45_32TimedCode.GDHelicopterObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerRocket"), gdjs.Game_32_45_32TimedCode.GDPlayerRocketObjects1);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32_45_32TimedCode.mapOfGDgdjs_9546Game_959532_959545_959532TimedCode_9546GDPlayerRocketObjects1Objects, gdjs.Game_32_45_32TimedCode.mapOfGDgdjs_9546Game_959532_959545_959532TimedCode_9546GDHelicopterObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32_45_32TimedCode.GDHelicopterObjects1.length;i<l;++i) {
    if ( gdjs.Game_32_45_32TimedCode.GDHelicopterObjects1[i].getVariableNumber(gdjs.Game_32_45_32TimedCode.GDHelicopterObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32_45_32TimedCode.GDHelicopterObjects1[k] = gdjs.Game_32_45_32TimedCode.GDHelicopterObjects1[i];
        ++k;
    }
}
gdjs.Game_32_45_32TimedCode.GDHelicopterObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32_45_32TimedCode.GDHelicopterObjects1 */
/* Reuse gdjs.Game_32_45_32TimedCode.GDPlayerRocketObjects1 */
gdjs.Game_32_45_32TimedCode.GDExplosionObjects1.length = 0;

{for(var i = 0, len = gdjs.Game_32_45_32TimedCode.GDPlayerRocketObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32TimedCode.GDPlayerRocketObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_32_45_32TimedCode.mapOfGDgdjs_9546Game_959532_959545_959532TimedCode_9546GDExplosionObjects1Objects, (( gdjs.Game_32_45_32TimedCode.GDHelicopterObjects1.length === 0 ) ? 0 :gdjs.Game_32_45_32TimedCode.GDHelicopterObjects1[0].getPointX("")) - 40, (( gdjs.Game_32_45_32TimedCode.GDHelicopterObjects1.length === 0 ) ? 0 :gdjs.Game_32_45_32TimedCode.GDHelicopterObjects1[0].getPointY("")), "");
}
{for(var i = 0, len = gdjs.Game_32_45_32TimedCode.GDExplosionObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32TimedCode.GDExplosionObjects1[i].getBehavior("Scale").setScale(0.15);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).sub(1);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "explosion.mp3", false, 100, 1);
}
{for(var i = 0, len = gdjs.Game_32_45_32TimedCode.GDHelicopterObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32TimedCode.GDHelicopterObjects1[i].deleteFromScene(runtimeScene);
}
}

{ //Subevents
gdjs.Game_32_45_32TimedCode.eventsList3(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Helicopter"), gdjs.Game_32_45_32TimedCode.GDHelicopterObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerRocket"), gdjs.Game_32_45_32TimedCode.GDPlayerRocketObjects1);

if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32_45_32TimedCode.mapOfGDgdjs_9546Game_959532_959545_959532TimedCode_9546GDPlayerRocketObjects1Objects, gdjs.Game_32_45_32TimedCode.mapOfGDgdjs_9546Game_959532_959545_959532TimedCode_9546GDHelicopterObjects1Objects, false, runtimeScene, false);
if (!elseEventsChainSatisfied && isConditionTrue_0) {
/* Reuse gdjs.Game_32_45_32TimedCode.GDHelicopterObjects1 */
/* Reuse gdjs.Game_32_45_32TimedCode.GDPlayerRocketObjects1 */
{for(var i = 0, len = gdjs.Game_32_45_32TimedCode.GDPlayerRocketObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32TimedCode.GDPlayerRocketObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Game_32_45_32TimedCode.GDHelicopterObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32TimedCode.GDHelicopterObjects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}
{for(var i = 0, len = gdjs.Game_32_45_32TimedCode.GDHelicopterObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32TimedCode.GDHelicopterObjects1[i].returnVariable(gdjs.Game_32_45_32TimedCode.GDHelicopterObjects1[i].getVariables().getFromIndex(0)).sub(1);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "emhit.mp3", false, 100, 1);
}

{ //Subevents
gdjs.Game_32_45_32TimedCode.eventsList4(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bomber"), gdjs.Game_32_45_32TimedCode.GDBomberObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerRocket"), gdjs.Game_32_45_32TimedCode.GDPlayerRocketObjects1);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32_45_32TimedCode.mapOfGDgdjs_9546Game_959532_959545_959532TimedCode_9546GDPlayerRocketObjects1Objects, gdjs.Game_32_45_32TimedCode.mapOfGDgdjs_9546Game_959532_959545_959532TimedCode_9546GDBomberObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32_45_32TimedCode.GDBomberObjects1.length;i<l;++i) {
    if ( gdjs.Game_32_45_32TimedCode.GDBomberObjects1[i].getVariableNumber(gdjs.Game_32_45_32TimedCode.GDBomberObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32_45_32TimedCode.GDBomberObjects1[k] = gdjs.Game_32_45_32TimedCode.GDBomberObjects1[i];
        ++k;
    }
}
gdjs.Game_32_45_32TimedCode.GDBomberObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32_45_32TimedCode.GDBomberObjects1 */
/* Reuse gdjs.Game_32_45_32TimedCode.GDPlayerRocketObjects1 */
gdjs.Game_32_45_32TimedCode.GDExplosionObjects1.length = 0;

{for(var i = 0, len = gdjs.Game_32_45_32TimedCode.GDPlayerRocketObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32TimedCode.GDPlayerRocketObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_32_45_32TimedCode.mapOfGDgdjs_9546Game_959532_959545_959532TimedCode_9546GDExplosionObjects1Objects, (( gdjs.Game_32_45_32TimedCode.GDBomberObjects1.length === 0 ) ? 0 :gdjs.Game_32_45_32TimedCode.GDBomberObjects1[0].getPointX("")) - 40, (( gdjs.Game_32_45_32TimedCode.GDBomberObjects1.length === 0 ) ? 0 :gdjs.Game_32_45_32TimedCode.GDBomberObjects1[0].getPointY("")), "");
}
{for(var i = 0, len = gdjs.Game_32_45_32TimedCode.GDExplosionObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32TimedCode.GDExplosionObjects1[i].getBehavior("Scale").setScale(0.15);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).sub(1);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "explosion.mp3", false, 100, 1);
}
{for(var i = 0, len = gdjs.Game_32_45_32TimedCode.GDBomberObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32TimedCode.GDBomberObjects1[i].deleteFromScene(runtimeScene);
}
}

{ //Subevents
gdjs.Game_32_45_32TimedCode.eventsList5(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bomber"), gdjs.Game_32_45_32TimedCode.GDBomberObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerRocket"), gdjs.Game_32_45_32TimedCode.GDPlayerRocketObjects1);

if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32_45_32TimedCode.mapOfGDgdjs_9546Game_959532_959545_959532TimedCode_9546GDPlayerRocketObjects1Objects, gdjs.Game_32_45_32TimedCode.mapOfGDgdjs_9546Game_959532_959545_959532TimedCode_9546GDBomberObjects1Objects, false, runtimeScene, false);
if (!elseEventsChainSatisfied && isConditionTrue_0) {
/* Reuse gdjs.Game_32_45_32TimedCode.GDBomberObjects1 */
/* Reuse gdjs.Game_32_45_32TimedCode.GDPlayerRocketObjects1 */
{for(var i = 0, len = gdjs.Game_32_45_32TimedCode.GDPlayerRocketObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32TimedCode.GDPlayerRocketObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Game_32_45_32TimedCode.GDBomberObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32TimedCode.GDBomberObjects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}
{for(var i = 0, len = gdjs.Game_32_45_32TimedCode.GDBomberObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32TimedCode.GDBomberObjects1[i].returnVariable(gdjs.Game_32_45_32TimedCode.GDBomberObjects1[i].getVariables().getFromIndex(0)).sub(1);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "emhit.mp3", false, 100, 1);
}

{ //Subevents
gdjs.Game_32_45_32TimedCode.eventsList6(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerRocket"), gdjs.Game_32_45_32TimedCode.GDPlayerRocketObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tank"), gdjs.Game_32_45_32TimedCode.GDTankObjects1);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32_45_32TimedCode.mapOfGDgdjs_9546Game_959532_959545_959532TimedCode_9546GDPlayerRocketObjects1Objects, gdjs.Game_32_45_32TimedCode.mapOfGDgdjs_9546Game_959532_959545_959532TimedCode_9546GDTankObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32_45_32TimedCode.GDTankObjects1.length;i<l;++i) {
    if ( gdjs.Game_32_45_32TimedCode.GDTankObjects1[i].getVariableNumber(gdjs.Game_32_45_32TimedCode.GDTankObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32_45_32TimedCode.GDTankObjects1[k] = gdjs.Game_32_45_32TimedCode.GDTankObjects1[i];
        ++k;
    }
}
gdjs.Game_32_45_32TimedCode.GDTankObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32_45_32TimedCode.GDPlayerRocketObjects1 */
/* Reuse gdjs.Game_32_45_32TimedCode.GDTankObjects1 */
gdjs.Game_32_45_32TimedCode.GDExplosionObjects1.length = 0;

{for(var i = 0, len = gdjs.Game_32_45_32TimedCode.GDPlayerRocketObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32TimedCode.GDPlayerRocketObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_32_45_32TimedCode.mapOfGDgdjs_9546Game_959532_959545_959532TimedCode_9546GDExplosionObjects1Objects, (( gdjs.Game_32_45_32TimedCode.GDTankObjects1.length === 0 ) ? 0 :gdjs.Game_32_45_32TimedCode.GDTankObjects1[0].getPointX("")) - 40, (( gdjs.Game_32_45_32TimedCode.GDTankObjects1.length === 0 ) ? 0 :gdjs.Game_32_45_32TimedCode.GDTankObjects1[0].getPointY("")), "");
}
{for(var i = 0, len = gdjs.Game_32_45_32TimedCode.GDExplosionObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32TimedCode.GDExplosionObjects1[i].getBehavior("Scale").setScale(0.15);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).sub(1);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "explosion.mp3", false, 100, 1);
}
{for(var i = 0, len = gdjs.Game_32_45_32TimedCode.GDTankObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32TimedCode.GDTankObjects1[i].deleteFromScene(runtimeScene);
}
}

{ //Subevents
gdjs.Game_32_45_32TimedCode.eventsList7(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerRocket"), gdjs.Game_32_45_32TimedCode.GDPlayerRocketObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tank"), gdjs.Game_32_45_32TimedCode.GDTankObjects1);

if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32_45_32TimedCode.mapOfGDgdjs_9546Game_959532_959545_959532TimedCode_9546GDPlayerRocketObjects1Objects, gdjs.Game_32_45_32TimedCode.mapOfGDgdjs_9546Game_959532_959545_959532TimedCode_9546GDTankObjects1Objects, false, runtimeScene, false);
if (!elseEventsChainSatisfied && isConditionTrue_0) {
/* Reuse gdjs.Game_32_45_32TimedCode.GDPlayerRocketObjects1 */
/* Reuse gdjs.Game_32_45_32TimedCode.GDTankObjects1 */
{for(var i = 0, len = gdjs.Game_32_45_32TimedCode.GDPlayerRocketObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32TimedCode.GDPlayerRocketObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Game_32_45_32TimedCode.GDTankObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32TimedCode.GDTankObjects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}
{for(var i = 0, len = gdjs.Game_32_45_32TimedCode.GDTankObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32TimedCode.GDTankObjects1[i].returnVariable(gdjs.Game_32_45_32TimedCode.GDTankObjects1[i].getVariables().getFromIndex(0)).sub(1);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "emhit.mp3", false, 100, 1);
}

{ //Subevents
gdjs.Game_32_45_32TimedCode.eventsList8(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() < 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14188020);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32_45_32TimedCode.eventsList10(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Clock") > 1;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).sub(1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Clock");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).add(0.06);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.doesSceneExist(runtimeScene, "Game - Timed");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TimerText"), gdjs.Game_32_45_32TimedCode.GDTimerTextObjects1);
{for(var i = 0, len = gdjs.Game_32_45_32TimedCode.GDTimerTextObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32TimedCode.GDTimerTextObjects1[i].getBehavior("Text").setText(gdjs.evtsExt__TimeFormatter__SecondsToHHMMSS.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber(), null));
}
}
}

}

}

};

gdjs.Game_32_45_32TimedCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32_45_32TimedCode.GDWallObjects1.length = 0;
gdjs.Game_32_45_32TimedCode.GDWallObjects2.length = 0;
gdjs.Game_32_45_32TimedCode.GDWallObjects3.length = 0;
gdjs.Game_32_45_32TimedCode.GDTurretBaseObjects1.length = 0;
gdjs.Game_32_45_32TimedCode.GDTurretBaseObjects2.length = 0;
gdjs.Game_32_45_32TimedCode.GDTurretBaseObjects3.length = 0;
gdjs.Game_32_45_32TimedCode.GDTurretObjects1.length = 0;
gdjs.Game_32_45_32TimedCode.GDTurretObjects2.length = 0;
gdjs.Game_32_45_32TimedCode.GDTurretObjects3.length = 0;
gdjs.Game_32_45_32TimedCode.GDPlayerRocketObjects1.length = 0;
gdjs.Game_32_45_32TimedCode.GDPlayerRocketObjects2.length = 0;
gdjs.Game_32_45_32TimedCode.GDPlayerRocketObjects3.length = 0;
gdjs.Game_32_45_32TimedCode.GDRoundTextObjects1.length = 0;
gdjs.Game_32_45_32TimedCode.GDRoundTextObjects2.length = 0;
gdjs.Game_32_45_32TimedCode.GDRoundTextObjects3.length = 0;
gdjs.Game_32_45_32TimedCode.GDExplosionObjects1.length = 0;
gdjs.Game_32_45_32TimedCode.GDExplosionObjects2.length = 0;
gdjs.Game_32_45_32TimedCode.GDExplosionObjects3.length = 0;
gdjs.Game_32_45_32TimedCode.GDHelicopterObjects1.length = 0;
gdjs.Game_32_45_32TimedCode.GDHelicopterObjects2.length = 0;
gdjs.Game_32_45_32TimedCode.GDHelicopterObjects3.length = 0;
gdjs.Game_32_45_32TimedCode.GDBomberObjects1.length = 0;
gdjs.Game_32_45_32TimedCode.GDBomberObjects2.length = 0;
gdjs.Game_32_45_32TimedCode.GDBomberObjects3.length = 0;
gdjs.Game_32_45_32TimedCode.GDTankObjects1.length = 0;
gdjs.Game_32_45_32TimedCode.GDTankObjects2.length = 0;
gdjs.Game_32_45_32TimedCode.GDTankObjects3.length = 0;
gdjs.Game_32_45_32TimedCode.GDLivesUIObjects1.length = 0;
gdjs.Game_32_45_32TimedCode.GDLivesUIObjects2.length = 0;
gdjs.Game_32_45_32TimedCode.GDLivesUIObjects3.length = 0;
gdjs.Game_32_45_32TimedCode.GDLoseTextObjects1.length = 0;
gdjs.Game_32_45_32TimedCode.GDLoseTextObjects2.length = 0;
gdjs.Game_32_45_32TimedCode.GDLoseTextObjects3.length = 0;
gdjs.Game_32_45_32TimedCode.GDTimerTextObjects1.length = 0;
gdjs.Game_32_45_32TimedCode.GDTimerTextObjects2.length = 0;
gdjs.Game_32_45_32TimedCode.GDTimerTextObjects3.length = 0;
gdjs.Game_32_45_32TimedCode.GDDroneObjects1.length = 0;
gdjs.Game_32_45_32TimedCode.GDDroneObjects2.length = 0;
gdjs.Game_32_45_32TimedCode.GDDroneObjects3.length = 0;
gdjs.Game_32_45_32TimedCode.GDGroundObjects1.length = 0;
gdjs.Game_32_45_32TimedCode.GDGroundObjects2.length = 0;
gdjs.Game_32_45_32TimedCode.GDGroundObjects3.length = 0;

gdjs.Game_32_45_32TimedCode.eventsList11(runtimeScene);
gdjs.Game_32_45_32TimedCode.GDWallObjects1.length = 0;
gdjs.Game_32_45_32TimedCode.GDWallObjects2.length = 0;
gdjs.Game_32_45_32TimedCode.GDWallObjects3.length = 0;
gdjs.Game_32_45_32TimedCode.GDTurretBaseObjects1.length = 0;
gdjs.Game_32_45_32TimedCode.GDTurretBaseObjects2.length = 0;
gdjs.Game_32_45_32TimedCode.GDTurretBaseObjects3.length = 0;
gdjs.Game_32_45_32TimedCode.GDTurretObjects1.length = 0;
gdjs.Game_32_45_32TimedCode.GDTurretObjects2.length = 0;
gdjs.Game_32_45_32TimedCode.GDTurretObjects3.length = 0;
gdjs.Game_32_45_32TimedCode.GDPlayerRocketObjects1.length = 0;
gdjs.Game_32_45_32TimedCode.GDPlayerRocketObjects2.length = 0;
gdjs.Game_32_45_32TimedCode.GDPlayerRocketObjects3.length = 0;
gdjs.Game_32_45_32TimedCode.GDRoundTextObjects1.length = 0;
gdjs.Game_32_45_32TimedCode.GDRoundTextObjects2.length = 0;
gdjs.Game_32_45_32TimedCode.GDRoundTextObjects3.length = 0;
gdjs.Game_32_45_32TimedCode.GDExplosionObjects1.length = 0;
gdjs.Game_32_45_32TimedCode.GDExplosionObjects2.length = 0;
gdjs.Game_32_45_32TimedCode.GDExplosionObjects3.length = 0;
gdjs.Game_32_45_32TimedCode.GDHelicopterObjects1.length = 0;
gdjs.Game_32_45_32TimedCode.GDHelicopterObjects2.length = 0;
gdjs.Game_32_45_32TimedCode.GDHelicopterObjects3.length = 0;
gdjs.Game_32_45_32TimedCode.GDBomberObjects1.length = 0;
gdjs.Game_32_45_32TimedCode.GDBomberObjects2.length = 0;
gdjs.Game_32_45_32TimedCode.GDBomberObjects3.length = 0;
gdjs.Game_32_45_32TimedCode.GDTankObjects1.length = 0;
gdjs.Game_32_45_32TimedCode.GDTankObjects2.length = 0;
gdjs.Game_32_45_32TimedCode.GDTankObjects3.length = 0;
gdjs.Game_32_45_32TimedCode.GDLivesUIObjects1.length = 0;
gdjs.Game_32_45_32TimedCode.GDLivesUIObjects2.length = 0;
gdjs.Game_32_45_32TimedCode.GDLivesUIObjects3.length = 0;
gdjs.Game_32_45_32TimedCode.GDLoseTextObjects1.length = 0;
gdjs.Game_32_45_32TimedCode.GDLoseTextObjects2.length = 0;
gdjs.Game_32_45_32TimedCode.GDLoseTextObjects3.length = 0;
gdjs.Game_32_45_32TimedCode.GDTimerTextObjects1.length = 0;
gdjs.Game_32_45_32TimedCode.GDTimerTextObjects2.length = 0;
gdjs.Game_32_45_32TimedCode.GDTimerTextObjects3.length = 0;
gdjs.Game_32_45_32TimedCode.GDDroneObjects1.length = 0;
gdjs.Game_32_45_32TimedCode.GDDroneObjects2.length = 0;
gdjs.Game_32_45_32TimedCode.GDDroneObjects3.length = 0;
gdjs.Game_32_45_32TimedCode.GDGroundObjects1.length = 0;
gdjs.Game_32_45_32TimedCode.GDGroundObjects2.length = 0;
gdjs.Game_32_45_32TimedCode.GDGroundObjects3.length = 0;


return;

}

gdjs['Game_32_45_32TimedCode'] = gdjs.Game_32_45_32TimedCode;
