gdjs.Game_32_45_32EndlessCode = {};
gdjs.Game_32_45_32EndlessCode.localVariables = [];
gdjs.Game_32_45_32EndlessCode.idToCallbackMap = new Map();
gdjs.Game_32_45_32EndlessCode.GDBomberObjects1_1final = [];

gdjs.Game_32_45_32EndlessCode.GDDroneObjects1_1final = [];

gdjs.Game_32_45_32EndlessCode.GDHelicopterObjects1_1final = [];

gdjs.Game_32_45_32EndlessCode.GDTankObjects1_1final = [];

gdjs.Game_32_45_32EndlessCode.GDWallObjects1= [];
gdjs.Game_32_45_32EndlessCode.GDWallObjects2= [];
gdjs.Game_32_45_32EndlessCode.GDWallObjects3= [];
gdjs.Game_32_45_32EndlessCode.GDTurretBaseObjects1= [];
gdjs.Game_32_45_32EndlessCode.GDTurretBaseObjects2= [];
gdjs.Game_32_45_32EndlessCode.GDTurretBaseObjects3= [];
gdjs.Game_32_45_32EndlessCode.GDTurretObjects1= [];
gdjs.Game_32_45_32EndlessCode.GDTurretObjects2= [];
gdjs.Game_32_45_32EndlessCode.GDTurretObjects3= [];
gdjs.Game_32_45_32EndlessCode.GDPlayerRocketObjects1= [];
gdjs.Game_32_45_32EndlessCode.GDPlayerRocketObjects2= [];
gdjs.Game_32_45_32EndlessCode.GDPlayerRocketObjects3= [];
gdjs.Game_32_45_32EndlessCode.GDDroneObjects1= [];
gdjs.Game_32_45_32EndlessCode.GDDroneObjects2= [];
gdjs.Game_32_45_32EndlessCode.GDDroneObjects3= [];
gdjs.Game_32_45_32EndlessCode.GDRoundTextObjects1= [];
gdjs.Game_32_45_32EndlessCode.GDRoundTextObjects2= [];
gdjs.Game_32_45_32EndlessCode.GDRoundTextObjects3= [];
gdjs.Game_32_45_32EndlessCode.GDExplosionObjects1= [];
gdjs.Game_32_45_32EndlessCode.GDExplosionObjects2= [];
gdjs.Game_32_45_32EndlessCode.GDExplosionObjects3= [];
gdjs.Game_32_45_32EndlessCode.GDHelicopterObjects1= [];
gdjs.Game_32_45_32EndlessCode.GDHelicopterObjects2= [];
gdjs.Game_32_45_32EndlessCode.GDHelicopterObjects3= [];
gdjs.Game_32_45_32EndlessCode.GDBomberObjects1= [];
gdjs.Game_32_45_32EndlessCode.GDBomberObjects2= [];
gdjs.Game_32_45_32EndlessCode.GDBomberObjects3= [];
gdjs.Game_32_45_32EndlessCode.GDTankObjects1= [];
gdjs.Game_32_45_32EndlessCode.GDTankObjects2= [];
gdjs.Game_32_45_32EndlessCode.GDTankObjects3= [];
gdjs.Game_32_45_32EndlessCode.GDLivesUIObjects1= [];
gdjs.Game_32_45_32EndlessCode.GDLivesUIObjects2= [];
gdjs.Game_32_45_32EndlessCode.GDLivesUIObjects3= [];
gdjs.Game_32_45_32EndlessCode.GDLoseTextObjects1= [];
gdjs.Game_32_45_32EndlessCode.GDLoseTextObjects2= [];
gdjs.Game_32_45_32EndlessCode.GDLoseTextObjects3= [];
gdjs.Game_32_45_32EndlessCode.GDGroundObjects1= [];
gdjs.Game_32_45_32EndlessCode.GDGroundObjects2= [];
gdjs.Game_32_45_32EndlessCode.GDGroundObjects3= [];


gdjs.Game_32_45_32EndlessCode.mapOfGDgdjs_9546Game_959532_959545_959532EndlessCode_9546GDPlayerRocketObjects1Objects = Hashtable.newFrom({"PlayerRocket": gdjs.Game_32_45_32EndlessCode.GDPlayerRocketObjects1});
gdjs.Game_32_45_32EndlessCode.asyncCallback9216788 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32_45_32EndlessCode.localVariables);
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
gdjs.Game_32_45_32EndlessCode.localVariables.length = 0;
}
gdjs.Game_32_45_32EndlessCode.idToCallbackMap.set(9216788, gdjs.Game_32_45_32EndlessCode.asyncCallback9216788);
gdjs.Game_32_45_32EndlessCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32_45_32EndlessCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Game_32_45_32EndlessCode.asyncCallback9216788(runtimeScene, asyncObjectsList)), 9216788, asyncObjectsList);
}
}

}


};gdjs.Game_32_45_32EndlessCode.mapOfGDgdjs_9546Game_959532_959545_959532EndlessCode_9546GDDroneObjects1Objects = Hashtable.newFrom({"Drone": gdjs.Game_32_45_32EndlessCode.GDDroneObjects1});
gdjs.Game_32_45_32EndlessCode.mapOfGDgdjs_9546Game_959532_959545_959532EndlessCode_9546GDHelicopterObjects1Objects = Hashtable.newFrom({"Helicopter": gdjs.Game_32_45_32EndlessCode.GDHelicopterObjects1});
gdjs.Game_32_45_32EndlessCode.mapOfGDgdjs_9546Game_959532_959545_959532EndlessCode_9546GDBomberObjects1Objects = Hashtable.newFrom({"Bomber": gdjs.Game_32_45_32EndlessCode.GDBomberObjects1});
gdjs.Game_32_45_32EndlessCode.mapOfGDgdjs_9546Game_959532_959545_959532EndlessCode_9546GDTankObjects1Objects = Hashtable.newFrom({"Tank": gdjs.Game_32_45_32EndlessCode.GDTankObjects1});
gdjs.Game_32_45_32EndlessCode.mapOfGDgdjs_9546Game_959532_959545_959532EndlessCode_9546GDRoundTextObjects1Objects = Hashtable.newFrom({"RoundText": gdjs.Game_32_45_32EndlessCode.GDRoundTextObjects1});
gdjs.Game_32_45_32EndlessCode.asyncCallback9206892 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32_45_32EndlessCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("RoundText"), gdjs.Game_32_45_32EndlessCode.GDRoundTextObjects2);

{for(var i = 0, len = gdjs.Game_32_45_32EndlessCode.GDRoundTextObjects2.length ;i < len;++i) {
    gdjs.Game_32_45_32EndlessCode.GDRoundTextObjects2[i].deleteFromScene(runtimeScene);
}
}
gdjs.Game_32_45_32EndlessCode.localVariables.length = 0;
}
gdjs.Game_32_45_32EndlessCode.idToCallbackMap.set(9206892, gdjs.Game_32_45_32EndlessCode.asyncCallback9206892);
gdjs.Game_32_45_32EndlessCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32_45_32EndlessCode.localVariables);
for (const obj of gdjs.Game_32_45_32EndlessCode.GDRoundTextObjects1) asyncObjectsList.addObject("RoundText", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3.5), (runtimeScene) => (gdjs.Game_32_45_32EndlessCode.asyncCallback9206892(runtimeScene, asyncObjectsList)), 9206892, asyncObjectsList);
}
}

}


};gdjs.Game_32_45_32EndlessCode.mapOfGDgdjs_9546Game_959532_959545_959532EndlessCode_9546GDPlayerRocketObjects1Objects = Hashtable.newFrom({"PlayerRocket": gdjs.Game_32_45_32EndlessCode.GDPlayerRocketObjects1});
gdjs.Game_32_45_32EndlessCode.mapOfGDgdjs_9546Game_959532_959545_959532EndlessCode_9546GDDroneObjects1Objects = Hashtable.newFrom({"Drone": gdjs.Game_32_45_32EndlessCode.GDDroneObjects1});
gdjs.Game_32_45_32EndlessCode.mapOfGDgdjs_9546Game_959532_959545_959532EndlessCode_9546GDExplosionObjects1Objects = Hashtable.newFrom({"Explosion": gdjs.Game_32_45_32EndlessCode.GDExplosionObjects1});
gdjs.Game_32_45_32EndlessCode.asyncCallback9190332 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32_45_32EndlessCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Explosion"), gdjs.Game_32_45_32EndlessCode.GDExplosionObjects2);

{for(var i = 0, len = gdjs.Game_32_45_32EndlessCode.GDExplosionObjects2.length ;i < len;++i) {
    gdjs.Game_32_45_32EndlessCode.GDExplosionObjects2[i].deleteFromScene(runtimeScene);
}
}
gdjs.Game_32_45_32EndlessCode.localVariables.length = 0;
}
gdjs.Game_32_45_32EndlessCode.idToCallbackMap.set(9190332, gdjs.Game_32_45_32EndlessCode.asyncCallback9190332);
gdjs.Game_32_45_32EndlessCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32_45_32EndlessCode.localVariables);
for (const obj of gdjs.Game_32_45_32EndlessCode.GDExplosionObjects1) asyncObjectsList.addObject("Explosion", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.7), (runtimeScene) => (gdjs.Game_32_45_32EndlessCode.asyncCallback9190332(runtimeScene, asyncObjectsList)), 9190332, asyncObjectsList);
}
}

}


};gdjs.Game_32_45_32EndlessCode.mapOfGDgdjs_9546Game_959532_959545_959532EndlessCode_9546GDPlayerRocketObjects1Objects = Hashtable.newFrom({"PlayerRocket": gdjs.Game_32_45_32EndlessCode.GDPlayerRocketObjects1});
gdjs.Game_32_45_32EndlessCode.mapOfGDgdjs_9546Game_959532_959545_959532EndlessCode_9546GDHelicopterObjects1Objects = Hashtable.newFrom({"Helicopter": gdjs.Game_32_45_32EndlessCode.GDHelicopterObjects1});
gdjs.Game_32_45_32EndlessCode.mapOfGDgdjs_9546Game_959532_959545_959532EndlessCode_9546GDExplosionObjects1Objects = Hashtable.newFrom({"Explosion": gdjs.Game_32_45_32EndlessCode.GDExplosionObjects1});
gdjs.Game_32_45_32EndlessCode.asyncCallback9194404 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32_45_32EndlessCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Explosion"), gdjs.Game_32_45_32EndlessCode.GDExplosionObjects2);

{for(var i = 0, len = gdjs.Game_32_45_32EndlessCode.GDExplosionObjects2.length ;i < len;++i) {
    gdjs.Game_32_45_32EndlessCode.GDExplosionObjects2[i].deleteFromScene(runtimeScene);
}
}
gdjs.Game_32_45_32EndlessCode.localVariables.length = 0;
}
gdjs.Game_32_45_32EndlessCode.idToCallbackMap.set(9194404, gdjs.Game_32_45_32EndlessCode.asyncCallback9194404);
gdjs.Game_32_45_32EndlessCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32_45_32EndlessCode.localVariables);
for (const obj of gdjs.Game_32_45_32EndlessCode.GDExplosionObjects1) asyncObjectsList.addObject("Explosion", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.7), (runtimeScene) => (gdjs.Game_32_45_32EndlessCode.asyncCallback9194404(runtimeScene, asyncObjectsList)), 9194404, asyncObjectsList);
}
}

}


};gdjs.Game_32_45_32EndlessCode.mapOfGDgdjs_9546Game_959532_959545_959532EndlessCode_9546GDPlayerRocketObjects1Objects = Hashtable.newFrom({"PlayerRocket": gdjs.Game_32_45_32EndlessCode.GDPlayerRocketObjects1});
gdjs.Game_32_45_32EndlessCode.mapOfGDgdjs_9546Game_959532_959545_959532EndlessCode_9546GDHelicopterObjects1Objects = Hashtable.newFrom({"Helicopter": gdjs.Game_32_45_32EndlessCode.GDHelicopterObjects1});
gdjs.Game_32_45_32EndlessCode.asyncCallback9194964 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32_45_32EndlessCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Helicopter"), gdjs.Game_32_45_32EndlessCode.GDHelicopterObjects2);

{for(var i = 0, len = gdjs.Game_32_45_32EndlessCode.GDHelicopterObjects2.length ;i < len;++i) {
    gdjs.Game_32_45_32EndlessCode.GDHelicopterObjects2[i].getBehavior("Effect").enableEffect("Effect", false);
}
}
gdjs.Game_32_45_32EndlessCode.localVariables.length = 0;
}
gdjs.Game_32_45_32EndlessCode.idToCallbackMap.set(9194964, gdjs.Game_32_45_32EndlessCode.asyncCallback9194964);
gdjs.Game_32_45_32EndlessCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32_45_32EndlessCode.localVariables);
for (const obj of gdjs.Game_32_45_32EndlessCode.GDHelicopterObjects1) asyncObjectsList.addObject("Helicopter", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.Game_32_45_32EndlessCode.asyncCallback9194964(runtimeScene, asyncObjectsList)), 9194964, asyncObjectsList);
}
}

}


};gdjs.Game_32_45_32EndlessCode.mapOfGDgdjs_9546Game_959532_959545_959532EndlessCode_9546GDPlayerRocketObjects1Objects = Hashtable.newFrom({"PlayerRocket": gdjs.Game_32_45_32EndlessCode.GDPlayerRocketObjects1});
gdjs.Game_32_45_32EndlessCode.mapOfGDgdjs_9546Game_959532_959545_959532EndlessCode_9546GDBomberObjects1Objects = Hashtable.newFrom({"Bomber": gdjs.Game_32_45_32EndlessCode.GDBomberObjects1});
gdjs.Game_32_45_32EndlessCode.mapOfGDgdjs_9546Game_959532_959545_959532EndlessCode_9546GDExplosionObjects1Objects = Hashtable.newFrom({"Explosion": gdjs.Game_32_45_32EndlessCode.GDExplosionObjects1});
gdjs.Game_32_45_32EndlessCode.asyncCallback17678460 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32_45_32EndlessCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Explosion"), gdjs.Game_32_45_32EndlessCode.GDExplosionObjects2);

{for(var i = 0, len = gdjs.Game_32_45_32EndlessCode.GDExplosionObjects2.length ;i < len;++i) {
    gdjs.Game_32_45_32EndlessCode.GDExplosionObjects2[i].deleteFromScene(runtimeScene);
}
}
gdjs.Game_32_45_32EndlessCode.localVariables.length = 0;
}
gdjs.Game_32_45_32EndlessCode.idToCallbackMap.set(17678460, gdjs.Game_32_45_32EndlessCode.asyncCallback17678460);
gdjs.Game_32_45_32EndlessCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32_45_32EndlessCode.localVariables);
for (const obj of gdjs.Game_32_45_32EndlessCode.GDExplosionObjects1) asyncObjectsList.addObject("Explosion", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.7), (runtimeScene) => (gdjs.Game_32_45_32EndlessCode.asyncCallback17678460(runtimeScene, asyncObjectsList)), 17678460, asyncObjectsList);
}
}

}


};gdjs.Game_32_45_32EndlessCode.mapOfGDgdjs_9546Game_959532_959545_959532EndlessCode_9546GDPlayerRocketObjects1Objects = Hashtable.newFrom({"PlayerRocket": gdjs.Game_32_45_32EndlessCode.GDPlayerRocketObjects1});
gdjs.Game_32_45_32EndlessCode.mapOfGDgdjs_9546Game_959532_959545_959532EndlessCode_9546GDBomberObjects1Objects = Hashtable.newFrom({"Bomber": gdjs.Game_32_45_32EndlessCode.GDBomberObjects1});
gdjs.Game_32_45_32EndlessCode.asyncCallback17680764 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32_45_32EndlessCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Bomber"), gdjs.Game_32_45_32EndlessCode.GDBomberObjects2);

{for(var i = 0, len = gdjs.Game_32_45_32EndlessCode.GDBomberObjects2.length ;i < len;++i) {
    gdjs.Game_32_45_32EndlessCode.GDBomberObjects2[i].getBehavior("Effect").enableEffect("Effect", false);
}
}
gdjs.Game_32_45_32EndlessCode.localVariables.length = 0;
}
gdjs.Game_32_45_32EndlessCode.idToCallbackMap.set(17680764, gdjs.Game_32_45_32EndlessCode.asyncCallback17680764);
gdjs.Game_32_45_32EndlessCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32_45_32EndlessCode.localVariables);
for (const obj of gdjs.Game_32_45_32EndlessCode.GDBomberObjects1) asyncObjectsList.addObject("Bomber", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.Game_32_45_32EndlessCode.asyncCallback17680764(runtimeScene, asyncObjectsList)), 17680764, asyncObjectsList);
}
}

}


};gdjs.Game_32_45_32EndlessCode.mapOfGDgdjs_9546Game_959532_959545_959532EndlessCode_9546GDPlayerRocketObjects1Objects = Hashtable.newFrom({"PlayerRocket": gdjs.Game_32_45_32EndlessCode.GDPlayerRocketObjects1});
gdjs.Game_32_45_32EndlessCode.mapOfGDgdjs_9546Game_959532_959545_959532EndlessCode_9546GDTankObjects1Objects = Hashtable.newFrom({"Tank": gdjs.Game_32_45_32EndlessCode.GDTankObjects1});
gdjs.Game_32_45_32EndlessCode.mapOfGDgdjs_9546Game_959532_959545_959532EndlessCode_9546GDExplosionObjects1Objects = Hashtable.newFrom({"Explosion": gdjs.Game_32_45_32EndlessCode.GDExplosionObjects1});
gdjs.Game_32_45_32EndlessCode.asyncCallback17683900 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32_45_32EndlessCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Explosion"), gdjs.Game_32_45_32EndlessCode.GDExplosionObjects2);

{for(var i = 0, len = gdjs.Game_32_45_32EndlessCode.GDExplosionObjects2.length ;i < len;++i) {
    gdjs.Game_32_45_32EndlessCode.GDExplosionObjects2[i].deleteFromScene(runtimeScene);
}
}
gdjs.Game_32_45_32EndlessCode.localVariables.length = 0;
}
gdjs.Game_32_45_32EndlessCode.idToCallbackMap.set(17683900, gdjs.Game_32_45_32EndlessCode.asyncCallback17683900);
gdjs.Game_32_45_32EndlessCode.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32_45_32EndlessCode.localVariables);
for (const obj of gdjs.Game_32_45_32EndlessCode.GDExplosionObjects1) asyncObjectsList.addObject("Explosion", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.7), (runtimeScene) => (gdjs.Game_32_45_32EndlessCode.asyncCallback17683900(runtimeScene, asyncObjectsList)), 17683900, asyncObjectsList);
}
}

}


};gdjs.Game_32_45_32EndlessCode.mapOfGDgdjs_9546Game_959532_959545_959532EndlessCode_9546GDPlayerRocketObjects1Objects = Hashtable.newFrom({"PlayerRocket": gdjs.Game_32_45_32EndlessCode.GDPlayerRocketObjects1});
gdjs.Game_32_45_32EndlessCode.mapOfGDgdjs_9546Game_959532_959545_959532EndlessCode_9546GDTankObjects1Objects = Hashtable.newFrom({"Tank": gdjs.Game_32_45_32EndlessCode.GDTankObjects1});
gdjs.Game_32_45_32EndlessCode.asyncCallback17685540 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32_45_32EndlessCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Tank"), gdjs.Game_32_45_32EndlessCode.GDTankObjects2);

{for(var i = 0, len = gdjs.Game_32_45_32EndlessCode.GDTankObjects2.length ;i < len;++i) {
    gdjs.Game_32_45_32EndlessCode.GDTankObjects2[i].getBehavior("Effect").enableEffect("Effect", false);
}
}
gdjs.Game_32_45_32EndlessCode.localVariables.length = 0;
}
gdjs.Game_32_45_32EndlessCode.idToCallbackMap.set(17685540, gdjs.Game_32_45_32EndlessCode.asyncCallback17685540);
gdjs.Game_32_45_32EndlessCode.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32_45_32EndlessCode.localVariables);
for (const obj of gdjs.Game_32_45_32EndlessCode.GDTankObjects1) asyncObjectsList.addObject("Tank", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.Game_32_45_32EndlessCode.asyncCallback17685540(runtimeScene, asyncObjectsList)), 17685540, asyncObjectsList);
}
}

}


};gdjs.Game_32_45_32EndlessCode.mapOfGDgdjs_9546Game_959532_959545_959532EndlessCode_9546GDLoseTextObjects2Objects = Hashtable.newFrom({"LoseText": gdjs.Game_32_45_32EndlessCode.GDLoseTextObjects2});
gdjs.Game_32_45_32EndlessCode.asyncCallback17690892 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32_45_32EndlessCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Gameover Scene - Endless", true);
}
gdjs.Game_32_45_32EndlessCode.localVariables.length = 0;
}
gdjs.Game_32_45_32EndlessCode.idToCallbackMap.set(17690892, gdjs.Game_32_45_32EndlessCode.asyncCallback17690892);
gdjs.Game_32_45_32EndlessCode.eventsList9 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32_45_32EndlessCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.Game_32_45_32EndlessCode.asyncCallback17690892(runtimeScene, asyncObjectsList)), 17690892, asyncObjectsList);
}
}

}


};gdjs.Game_32_45_32EndlessCode.asyncCallback17690332 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32_45_32EndlessCode.localVariables);
gdjs.Game_32_45_32EndlessCode.GDLoseTextObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_32_45_32EndlessCode.mapOfGDgdjs_9546Game_959532_959545_959532EndlessCode_9546GDLoseTextObjects2Objects, 75, 170, "UI Layer");
}
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 1);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "lose.mp3", false, 100, 1);
}

{ //Subevents
gdjs.Game_32_45_32EndlessCode.eventsList9(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Game_32_45_32EndlessCode.localVariables.length = 0;
}
gdjs.Game_32_45_32EndlessCode.idToCallbackMap.set(17690332, gdjs.Game_32_45_32EndlessCode.asyncCallback17690332);
gdjs.Game_32_45_32EndlessCode.eventsList10 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32_45_32EndlessCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Game_32_45_32EndlessCode.asyncCallback17690332(runtimeScene, asyncObjectsList)), 17690332, asyncObjectsList);
}
}

}


};gdjs.Game_32_45_32EndlessCode.eventsList11 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.doesSceneExist(runtimeScene, "Game - Endless");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Turret"), gdjs.Game_32_45_32EndlessCode.GDTurretObjects1);
{for(var i = 0, len = gdjs.Game_32_45_32EndlessCode.GDTurretObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32EndlessCode.GDTurretObjects1[i].rotateTowardPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), 0, runtimeScene);
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
gdjs.copyArray(runtimeScene.getObjects("Turret"), gdjs.Game_32_45_32EndlessCode.GDTurretObjects1);
gdjs.Game_32_45_32EndlessCode.GDPlayerRocketObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_32_45_32EndlessCode.mapOfGDgdjs_9546Game_959532_959545_959532EndlessCode_9546GDPlayerRocketObjects1Objects, (( gdjs.Game_32_45_32EndlessCode.GDTurretObjects1.length === 0 ) ? 0 :gdjs.Game_32_45_32EndlessCode.GDTurretObjects1[0].getPointX("")) - 25, (( gdjs.Game_32_45_32EndlessCode.GDTurretObjects1.length === 0 ) ? 0 :gdjs.Game_32_45_32EndlessCode.GDTurretObjects1[0].getPointY("")) - 20, "");
}
{for(var i = 0, len = gdjs.Game_32_45_32EndlessCode.GDPlayerRocketObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32EndlessCode.GDPlayerRocketObjects1[i].getBehavior("Scale").setScale(0.3);
}
}
{for(var i = 0, len = gdjs.Game_32_45_32EndlessCode.GDPlayerRocketObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32EndlessCode.GDPlayerRocketObjects1[i].setAngle((( gdjs.Game_32_45_32EndlessCode.GDTurretObjects1.length === 0 ) ? 0 :gdjs.Game_32_45_32EndlessCode.GDTurretObjects1[0].getAngle()));
}
}
{for(var i = 0, len = gdjs.Game_32_45_32EndlessCode.GDPlayerRocketObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32EndlessCode.GDPlayerRocketObjects1[i].getBehavior("Tween").addObjectPositionTween2("RocketFly", (gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) * 2) - 160, (gdjs.evtTools.input.getCursorY(runtimeScene, "", 0) * 2) - 400, "easeInCubic", 1.3, true);
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
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(3);
}
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "game.mp3", 1, true, 85, 1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "PlayerFirerate");
}

{ //Subevents
gdjs.Game_32_45_32EndlessCode.eventsList0(runtimeScene);} //End of subevents
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
gdjs.Game_32_45_32EndlessCode.GDDroneObjects1.length = 0;

{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "SpawnRate");
}
{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_32_45_32EndlessCode.mapOfGDgdjs_9546Game_959532_959545_959532EndlessCode_9546GDDroneObjects1Objects, gdjs.randomFloatInRange(0, 290), -70, "AirLayer");
}
{for(var i = 0, len = gdjs.Game_32_45_32EndlessCode.GDDroneObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32EndlessCode.GDDroneObjects1[i].getBehavior("Animation").setAnimationIndex(gdjs.randomFloatInRange(0, 9));
}
}
{for(var i = 0, len = gdjs.Game_32_45_32EndlessCode.GDDroneObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32EndlessCode.GDDroneObjects1[i].getBehavior("Scale").setScale(0.09);
}
}
{for(var i = 0, len = gdjs.Game_32_45_32EndlessCode.GDDroneObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32EndlessCode.GDDroneObjects1[i].getBehavior("Tween").addObjectPositionYTween2("DroneFly", 540, "linear", gdjs.randomFloatInRange(11, 19), true);
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
gdjs.Game_32_45_32EndlessCode.GDHelicopterObjects1.length = 0;

{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "HeliRate");
}
{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_32_45_32EndlessCode.mapOfGDgdjs_9546Game_959532_959545_959532EndlessCode_9546GDHelicopterObjects1Objects, gdjs.randomFloatInRange(0, 290), -70, "AirLayer");
}
{for(var i = 0, len = gdjs.Game_32_45_32EndlessCode.GDHelicopterObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32EndlessCode.GDHelicopterObjects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}
{for(var i = 0, len = gdjs.Game_32_45_32EndlessCode.GDHelicopterObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32EndlessCode.GDHelicopterObjects1[i].getBehavior("Scale").setScale(0.09);
}
}
{for(var i = 0, len = gdjs.Game_32_45_32EndlessCode.GDHelicopterObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32EndlessCode.GDHelicopterObjects1[i].getBehavior("Tween").addObjectPositionYTween2("DroneFly", 540, "linear", gdjs.randomFloatInRange(11, 19), true);
}
}
{for(var i = 0, len = gdjs.Game_32_45_32EndlessCode.GDHelicopterObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32EndlessCode.GDHelicopterObjects1[i].returnVariable(gdjs.Game_32_45_32EndlessCode.GDHelicopterObjects1[i].getVariables().getFromIndex(0)).setNumber(2);
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
gdjs.Game_32_45_32EndlessCode.GDBomberObjects1.length = 0;

{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "BomberRate");
}
{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_32_45_32EndlessCode.mapOfGDgdjs_9546Game_959532_959545_959532EndlessCode_9546GDBomberObjects1Objects, gdjs.randomFloatInRange(0, 290), -70, "AirLayer");
}
{for(var i = 0, len = gdjs.Game_32_45_32EndlessCode.GDBomberObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32EndlessCode.GDBomberObjects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}
{for(var i = 0, len = gdjs.Game_32_45_32EndlessCode.GDBomberObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32EndlessCode.GDBomberObjects1[i].getBehavior("Scale").setScale(0.13);
}
}
{for(var i = 0, len = gdjs.Game_32_45_32EndlessCode.GDBomberObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32EndlessCode.GDBomberObjects1[i].getBehavior("Tween").addObjectPositionYTween2("DroneFly", 540, "linear", gdjs.randomFloatInRange(16, 25), true);
}
}
{for(var i = 0, len = gdjs.Game_32_45_32EndlessCode.GDBomberObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32EndlessCode.GDBomberObjects1[i].returnVariable(gdjs.Game_32_45_32EndlessCode.GDBomberObjects1[i].getVariables().getFromIndex(0)).setNumber(4);
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
gdjs.Game_32_45_32EndlessCode.GDTankObjects1.length = 0;

{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TankRate");
}
{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_32_45_32EndlessCode.mapOfGDgdjs_9546Game_959532_959545_959532EndlessCode_9546GDTankObjects1Objects, gdjs.randomFloatInRange(0, 290), -70, "TankLayer");
}
{for(var i = 0, len = gdjs.Game_32_45_32EndlessCode.GDTankObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32EndlessCode.GDTankObjects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}
{for(var i = 0, len = gdjs.Game_32_45_32EndlessCode.GDTankObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32EndlessCode.GDTankObjects1[i].getBehavior("Scale").setScale(0.2);
}
}
{for(var i = 0, len = gdjs.Game_32_45_32EndlessCode.GDTankObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32EndlessCode.GDTankObjects1[i].getBehavior("Tween").addObjectPositionYTween2("DroneFly", 540, "linear", gdjs.randomFloatInRange(25, 38), true);
}
}
{for(var i = 0, len = gdjs.Game_32_45_32EndlessCode.GDTankObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32EndlessCode.GDTankObjects1[i].returnVariable(gdjs.Game_32_45_32EndlessCode.GDTankObjects1[i].getVariables().getFromIndex(0)).setNumber(8);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9208548);
}
}
if (isConditionTrue_0) {
gdjs.Game_32_45_32EndlessCode.GDRoundTextObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_32_45_32EndlessCode.mapOfGDgdjs_9546Game_959532_959545_959532EndlessCode_9546GDRoundTextObjects1Objects, 80, 210, "");
}
{for(var i = 0, len = gdjs.Game_32_45_32EndlessCode.GDRoundTextObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32EndlessCode.GDRoundTextObjects1[i].getBehavior("Text").setText("Survive!");
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "achievement_unlocked.mp3", false, 100, 1);
}

{ //Subevents
gdjs.Game_32_45_32EndlessCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Drone"), gdjs.Game_32_45_32EndlessCode.GDDroneObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerRocket"), gdjs.Game_32_45_32EndlessCode.GDPlayerRocketObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32_45_32EndlessCode.mapOfGDgdjs_9546Game_959532_959545_959532EndlessCode_9546GDPlayerRocketObjects1Objects, gdjs.Game_32_45_32EndlessCode.mapOfGDgdjs_9546Game_959532_959545_959532EndlessCode_9546GDDroneObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32_45_32EndlessCode.GDDroneObjects1 */
/* Reuse gdjs.Game_32_45_32EndlessCode.GDPlayerRocketObjects1 */
gdjs.Game_32_45_32EndlessCode.GDExplosionObjects1.length = 0;

{for(var i = 0, len = gdjs.Game_32_45_32EndlessCode.GDPlayerRocketObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32EndlessCode.GDPlayerRocketObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_32_45_32EndlessCode.mapOfGDgdjs_9546Game_959532_959545_959532EndlessCode_9546GDExplosionObjects1Objects, (( gdjs.Game_32_45_32EndlessCode.GDDroneObjects1.length === 0 ) ? 0 :gdjs.Game_32_45_32EndlessCode.GDDroneObjects1[0].getPointX("")) - 40, (( gdjs.Game_32_45_32EndlessCode.GDDroneObjects1.length === 0 ) ? 0 :gdjs.Game_32_45_32EndlessCode.GDDroneObjects1[0].getPointY("")), "");
}
{for(var i = 0, len = gdjs.Game_32_45_32EndlessCode.GDExplosionObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32EndlessCode.GDExplosionObjects1[i].getBehavior("Scale").setScale(0.15);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).sub(1);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "explosion.mp3", false, 100, 1);
}
{for(var i = 0, len = gdjs.Game_32_45_32EndlessCode.GDDroneObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32EndlessCode.GDDroneObjects1[i].deleteFromScene(runtimeScene);
}
}

{ //Subevents
gdjs.Game_32_45_32EndlessCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Helicopter"), gdjs.Game_32_45_32EndlessCode.GDHelicopterObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerRocket"), gdjs.Game_32_45_32EndlessCode.GDPlayerRocketObjects1);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32_45_32EndlessCode.mapOfGDgdjs_9546Game_959532_959545_959532EndlessCode_9546GDPlayerRocketObjects1Objects, gdjs.Game_32_45_32EndlessCode.mapOfGDgdjs_9546Game_959532_959545_959532EndlessCode_9546GDHelicopterObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32_45_32EndlessCode.GDHelicopterObjects1.length;i<l;++i) {
    if ( gdjs.Game_32_45_32EndlessCode.GDHelicopterObjects1[i].getVariableNumber(gdjs.Game_32_45_32EndlessCode.GDHelicopterObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32_45_32EndlessCode.GDHelicopterObjects1[k] = gdjs.Game_32_45_32EndlessCode.GDHelicopterObjects1[i];
        ++k;
    }
}
gdjs.Game_32_45_32EndlessCode.GDHelicopterObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32_45_32EndlessCode.GDHelicopterObjects1 */
/* Reuse gdjs.Game_32_45_32EndlessCode.GDPlayerRocketObjects1 */
gdjs.Game_32_45_32EndlessCode.GDExplosionObjects1.length = 0;

{for(var i = 0, len = gdjs.Game_32_45_32EndlessCode.GDPlayerRocketObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32EndlessCode.GDPlayerRocketObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_32_45_32EndlessCode.mapOfGDgdjs_9546Game_959532_959545_959532EndlessCode_9546GDExplosionObjects1Objects, (( gdjs.Game_32_45_32EndlessCode.GDHelicopterObjects1.length === 0 ) ? 0 :gdjs.Game_32_45_32EndlessCode.GDHelicopterObjects1[0].getPointX("")) - 40, (( gdjs.Game_32_45_32EndlessCode.GDHelicopterObjects1.length === 0 ) ? 0 :gdjs.Game_32_45_32EndlessCode.GDHelicopterObjects1[0].getPointY("")), "");
}
{for(var i = 0, len = gdjs.Game_32_45_32EndlessCode.GDExplosionObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32EndlessCode.GDExplosionObjects1[i].getBehavior("Scale").setScale(0.15);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).sub(1);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "explosion.mp3", false, 100, 1);
}
{for(var i = 0, len = gdjs.Game_32_45_32EndlessCode.GDHelicopterObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32EndlessCode.GDHelicopterObjects1[i].deleteFromScene(runtimeScene);
}
}

{ //Subevents
gdjs.Game_32_45_32EndlessCode.eventsList3(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Helicopter"), gdjs.Game_32_45_32EndlessCode.GDHelicopterObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerRocket"), gdjs.Game_32_45_32EndlessCode.GDPlayerRocketObjects1);

if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32_45_32EndlessCode.mapOfGDgdjs_9546Game_959532_959545_959532EndlessCode_9546GDPlayerRocketObjects1Objects, gdjs.Game_32_45_32EndlessCode.mapOfGDgdjs_9546Game_959532_959545_959532EndlessCode_9546GDHelicopterObjects1Objects, false, runtimeScene, false);
if (!elseEventsChainSatisfied && isConditionTrue_0) {
/* Reuse gdjs.Game_32_45_32EndlessCode.GDHelicopterObjects1 */
/* Reuse gdjs.Game_32_45_32EndlessCode.GDPlayerRocketObjects1 */
{for(var i = 0, len = gdjs.Game_32_45_32EndlessCode.GDPlayerRocketObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32EndlessCode.GDPlayerRocketObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Game_32_45_32EndlessCode.GDHelicopterObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32EndlessCode.GDHelicopterObjects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}
{for(var i = 0, len = gdjs.Game_32_45_32EndlessCode.GDHelicopterObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32EndlessCode.GDHelicopterObjects1[i].returnVariable(gdjs.Game_32_45_32EndlessCode.GDHelicopterObjects1[i].getVariables().getFromIndex(0)).sub(1);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "emhit.mp3", false, 100, 1);
}

{ //Subevents
gdjs.Game_32_45_32EndlessCode.eventsList4(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bomber"), gdjs.Game_32_45_32EndlessCode.GDBomberObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerRocket"), gdjs.Game_32_45_32EndlessCode.GDPlayerRocketObjects1);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32_45_32EndlessCode.mapOfGDgdjs_9546Game_959532_959545_959532EndlessCode_9546GDPlayerRocketObjects1Objects, gdjs.Game_32_45_32EndlessCode.mapOfGDgdjs_9546Game_959532_959545_959532EndlessCode_9546GDBomberObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32_45_32EndlessCode.GDBomberObjects1.length;i<l;++i) {
    if ( gdjs.Game_32_45_32EndlessCode.GDBomberObjects1[i].getVariableNumber(gdjs.Game_32_45_32EndlessCode.GDBomberObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32_45_32EndlessCode.GDBomberObjects1[k] = gdjs.Game_32_45_32EndlessCode.GDBomberObjects1[i];
        ++k;
    }
}
gdjs.Game_32_45_32EndlessCode.GDBomberObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32_45_32EndlessCode.GDBomberObjects1 */
/* Reuse gdjs.Game_32_45_32EndlessCode.GDPlayerRocketObjects1 */
gdjs.Game_32_45_32EndlessCode.GDExplosionObjects1.length = 0;

{for(var i = 0, len = gdjs.Game_32_45_32EndlessCode.GDPlayerRocketObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32EndlessCode.GDPlayerRocketObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_32_45_32EndlessCode.mapOfGDgdjs_9546Game_959532_959545_959532EndlessCode_9546GDExplosionObjects1Objects, (( gdjs.Game_32_45_32EndlessCode.GDBomberObjects1.length === 0 ) ? 0 :gdjs.Game_32_45_32EndlessCode.GDBomberObjects1[0].getPointX("")) - 40, (( gdjs.Game_32_45_32EndlessCode.GDBomberObjects1.length === 0 ) ? 0 :gdjs.Game_32_45_32EndlessCode.GDBomberObjects1[0].getPointY("")), "");
}
{for(var i = 0, len = gdjs.Game_32_45_32EndlessCode.GDExplosionObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32EndlessCode.GDExplosionObjects1[i].getBehavior("Scale").setScale(0.15);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).sub(1);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "explosion.mp3", false, 100, 1);
}
{for(var i = 0, len = gdjs.Game_32_45_32EndlessCode.GDBomberObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32EndlessCode.GDBomberObjects1[i].deleteFromScene(runtimeScene);
}
}

{ //Subevents
gdjs.Game_32_45_32EndlessCode.eventsList5(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bomber"), gdjs.Game_32_45_32EndlessCode.GDBomberObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerRocket"), gdjs.Game_32_45_32EndlessCode.GDPlayerRocketObjects1);

if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32_45_32EndlessCode.mapOfGDgdjs_9546Game_959532_959545_959532EndlessCode_9546GDPlayerRocketObjects1Objects, gdjs.Game_32_45_32EndlessCode.mapOfGDgdjs_9546Game_959532_959545_959532EndlessCode_9546GDBomberObjects1Objects, false, runtimeScene, false);
if (!elseEventsChainSatisfied && isConditionTrue_0) {
/* Reuse gdjs.Game_32_45_32EndlessCode.GDBomberObjects1 */
/* Reuse gdjs.Game_32_45_32EndlessCode.GDPlayerRocketObjects1 */
{for(var i = 0, len = gdjs.Game_32_45_32EndlessCode.GDPlayerRocketObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32EndlessCode.GDPlayerRocketObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Game_32_45_32EndlessCode.GDBomberObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32EndlessCode.GDBomberObjects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}
{for(var i = 0, len = gdjs.Game_32_45_32EndlessCode.GDBomberObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32EndlessCode.GDBomberObjects1[i].returnVariable(gdjs.Game_32_45_32EndlessCode.GDBomberObjects1[i].getVariables().getFromIndex(0)).sub(1);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "emhit.mp3", false, 100, 1);
}

{ //Subevents
gdjs.Game_32_45_32EndlessCode.eventsList6(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerRocket"), gdjs.Game_32_45_32EndlessCode.GDPlayerRocketObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tank"), gdjs.Game_32_45_32EndlessCode.GDTankObjects1);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32_45_32EndlessCode.mapOfGDgdjs_9546Game_959532_959545_959532EndlessCode_9546GDPlayerRocketObjects1Objects, gdjs.Game_32_45_32EndlessCode.mapOfGDgdjs_9546Game_959532_959545_959532EndlessCode_9546GDTankObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32_45_32EndlessCode.GDTankObjects1.length;i<l;++i) {
    if ( gdjs.Game_32_45_32EndlessCode.GDTankObjects1[i].getVariableNumber(gdjs.Game_32_45_32EndlessCode.GDTankObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32_45_32EndlessCode.GDTankObjects1[k] = gdjs.Game_32_45_32EndlessCode.GDTankObjects1[i];
        ++k;
    }
}
gdjs.Game_32_45_32EndlessCode.GDTankObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32_45_32EndlessCode.GDPlayerRocketObjects1 */
/* Reuse gdjs.Game_32_45_32EndlessCode.GDTankObjects1 */
gdjs.Game_32_45_32EndlessCode.GDExplosionObjects1.length = 0;

{for(var i = 0, len = gdjs.Game_32_45_32EndlessCode.GDPlayerRocketObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32EndlessCode.GDPlayerRocketObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_32_45_32EndlessCode.mapOfGDgdjs_9546Game_959532_959545_959532EndlessCode_9546GDExplosionObjects1Objects, (( gdjs.Game_32_45_32EndlessCode.GDTankObjects1.length === 0 ) ? 0 :gdjs.Game_32_45_32EndlessCode.GDTankObjects1[0].getPointX("")) - 40, (( gdjs.Game_32_45_32EndlessCode.GDTankObjects1.length === 0 ) ? 0 :gdjs.Game_32_45_32EndlessCode.GDTankObjects1[0].getPointY("")), "");
}
{for(var i = 0, len = gdjs.Game_32_45_32EndlessCode.GDExplosionObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32EndlessCode.GDExplosionObjects1[i].getBehavior("Scale").setScale(0.15);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).sub(1);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "explosion.mp3", false, 100, 1);
}
{for(var i = 0, len = gdjs.Game_32_45_32EndlessCode.GDTankObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32EndlessCode.GDTankObjects1[i].deleteFromScene(runtimeScene);
}
}

{ //Subevents
gdjs.Game_32_45_32EndlessCode.eventsList7(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerRocket"), gdjs.Game_32_45_32EndlessCode.GDPlayerRocketObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tank"), gdjs.Game_32_45_32EndlessCode.GDTankObjects1);

if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32_45_32EndlessCode.mapOfGDgdjs_9546Game_959532_959545_959532EndlessCode_9546GDPlayerRocketObjects1Objects, gdjs.Game_32_45_32EndlessCode.mapOfGDgdjs_9546Game_959532_959545_959532EndlessCode_9546GDTankObjects1Objects, false, runtimeScene, false);
if (!elseEventsChainSatisfied && isConditionTrue_0) {
/* Reuse gdjs.Game_32_45_32EndlessCode.GDPlayerRocketObjects1 */
/* Reuse gdjs.Game_32_45_32EndlessCode.GDTankObjects1 */
{for(var i = 0, len = gdjs.Game_32_45_32EndlessCode.GDPlayerRocketObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32EndlessCode.GDPlayerRocketObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Game_32_45_32EndlessCode.GDTankObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32EndlessCode.GDTankObjects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}
{for(var i = 0, len = gdjs.Game_32_45_32EndlessCode.GDTankObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32EndlessCode.GDTankObjects1[i].returnVariable(gdjs.Game_32_45_32EndlessCode.GDTankObjects1[i].getVariables().getFromIndex(0)).sub(1);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "emhit.mp3", false, 100, 1);
}

{ //Subevents
gdjs.Game_32_45_32EndlessCode.eventsList8(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}
}

}


{

gdjs.Game_32_45_32EndlessCode.GDBomberObjects1.length = 0;

gdjs.Game_32_45_32EndlessCode.GDDroneObjects1.length = 0;

gdjs.Game_32_45_32EndlessCode.GDHelicopterObjects1.length = 0;

gdjs.Game_32_45_32EndlessCode.GDTankObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Game_32_45_32EndlessCode.GDBomberObjects1_1final.length = 0;
gdjs.Game_32_45_32EndlessCode.GDDroneObjects1_1final.length = 0;
gdjs.Game_32_45_32EndlessCode.GDHelicopterObjects1_1final.length = 0;
gdjs.Game_32_45_32EndlessCode.GDTankObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Drone"), gdjs.Game_32_45_32EndlessCode.GDDroneObjects2);
for (var i = 0, k = 0, l = gdjs.Game_32_45_32EndlessCode.GDDroneObjects2.length;i<l;++i) {
    if ( gdjs.Game_32_45_32EndlessCode.GDDroneObjects2[i].getY() > 535 ) {
        isConditionTrue_1 = true;
        gdjs.Game_32_45_32EndlessCode.GDDroneObjects2[k] = gdjs.Game_32_45_32EndlessCode.GDDroneObjects2[i];
        ++k;
    }
}
gdjs.Game_32_45_32EndlessCode.GDDroneObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Game_32_45_32EndlessCode.GDDroneObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Game_32_45_32EndlessCode.GDDroneObjects1_1final.indexOf(gdjs.Game_32_45_32EndlessCode.GDDroneObjects2[j]) === -1 )
            gdjs.Game_32_45_32EndlessCode.GDDroneObjects1_1final.push(gdjs.Game_32_45_32EndlessCode.GDDroneObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Tank"), gdjs.Game_32_45_32EndlessCode.GDTankObjects2);
for (var i = 0, k = 0, l = gdjs.Game_32_45_32EndlessCode.GDTankObjects2.length;i<l;++i) {
    if ( gdjs.Game_32_45_32EndlessCode.GDTankObjects2[i].getY() > 535 ) {
        isConditionTrue_1 = true;
        gdjs.Game_32_45_32EndlessCode.GDTankObjects2[k] = gdjs.Game_32_45_32EndlessCode.GDTankObjects2[i];
        ++k;
    }
}
gdjs.Game_32_45_32EndlessCode.GDTankObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Game_32_45_32EndlessCode.GDTankObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Game_32_45_32EndlessCode.GDTankObjects1_1final.indexOf(gdjs.Game_32_45_32EndlessCode.GDTankObjects2[j]) === -1 )
            gdjs.Game_32_45_32EndlessCode.GDTankObjects1_1final.push(gdjs.Game_32_45_32EndlessCode.GDTankObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Helicopter"), gdjs.Game_32_45_32EndlessCode.GDHelicopterObjects2);
for (var i = 0, k = 0, l = gdjs.Game_32_45_32EndlessCode.GDHelicopterObjects2.length;i<l;++i) {
    if ( gdjs.Game_32_45_32EndlessCode.GDHelicopterObjects2[i].getY() > 535 ) {
        isConditionTrue_1 = true;
        gdjs.Game_32_45_32EndlessCode.GDHelicopterObjects2[k] = gdjs.Game_32_45_32EndlessCode.GDHelicopterObjects2[i];
        ++k;
    }
}
gdjs.Game_32_45_32EndlessCode.GDHelicopterObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Game_32_45_32EndlessCode.GDHelicopterObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Game_32_45_32EndlessCode.GDHelicopterObjects1_1final.indexOf(gdjs.Game_32_45_32EndlessCode.GDHelicopterObjects2[j]) === -1 )
            gdjs.Game_32_45_32EndlessCode.GDHelicopterObjects1_1final.push(gdjs.Game_32_45_32EndlessCode.GDHelicopterObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Bomber"), gdjs.Game_32_45_32EndlessCode.GDBomberObjects2);
for (var i = 0, k = 0, l = gdjs.Game_32_45_32EndlessCode.GDBomberObjects2.length;i<l;++i) {
    if ( gdjs.Game_32_45_32EndlessCode.GDBomberObjects2[i].getY() > 535 ) {
        isConditionTrue_1 = true;
        gdjs.Game_32_45_32EndlessCode.GDBomberObjects2[k] = gdjs.Game_32_45_32EndlessCode.GDBomberObjects2[i];
        ++k;
    }
}
gdjs.Game_32_45_32EndlessCode.GDBomberObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Game_32_45_32EndlessCode.GDBomberObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Game_32_45_32EndlessCode.GDBomberObjects1_1final.indexOf(gdjs.Game_32_45_32EndlessCode.GDBomberObjects2[j]) === -1 )
            gdjs.Game_32_45_32EndlessCode.GDBomberObjects1_1final.push(gdjs.Game_32_45_32EndlessCode.GDBomberObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Game_32_45_32EndlessCode.GDBomberObjects1_1final, gdjs.Game_32_45_32EndlessCode.GDBomberObjects1);
gdjs.copyArray(gdjs.Game_32_45_32EndlessCode.GDDroneObjects1_1final, gdjs.Game_32_45_32EndlessCode.GDDroneObjects1);
gdjs.copyArray(gdjs.Game_32_45_32EndlessCode.GDHelicopterObjects1_1final, gdjs.Game_32_45_32EndlessCode.GDHelicopterObjects1);
gdjs.copyArray(gdjs.Game_32_45_32EndlessCode.GDTankObjects1_1final, gdjs.Game_32_45_32EndlessCode.GDTankObjects1);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17687516);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).sub(1);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "miss.mp3", false, 100, 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).sub(1);
}
{gdjs.deviceVibration.startVibration(500);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.doesSceneExist(runtimeScene, "Game - Survival");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LivesUI"), gdjs.Game_32_45_32EndlessCode.GDLivesUIObjects1);
{for(var i = 0, len = gdjs.Game_32_45_32EndlessCode.GDLivesUIObjects1.length ;i < len;++i) {
    gdjs.Game_32_45_32EndlessCode.GDLivesUIObjects1[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber());
}
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17690124);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32_45_32EndlessCode.eventsList10(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Clock") > 1;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Clock");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).add(0.06);
}
}

}

}

};

gdjs.Game_32_45_32EndlessCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32_45_32EndlessCode.GDWallObjects1.length = 0;
gdjs.Game_32_45_32EndlessCode.GDWallObjects2.length = 0;
gdjs.Game_32_45_32EndlessCode.GDWallObjects3.length = 0;
gdjs.Game_32_45_32EndlessCode.GDTurretBaseObjects1.length = 0;
gdjs.Game_32_45_32EndlessCode.GDTurretBaseObjects2.length = 0;
gdjs.Game_32_45_32EndlessCode.GDTurretBaseObjects3.length = 0;
gdjs.Game_32_45_32EndlessCode.GDTurretObjects1.length = 0;
gdjs.Game_32_45_32EndlessCode.GDTurretObjects2.length = 0;
gdjs.Game_32_45_32EndlessCode.GDTurretObjects3.length = 0;
gdjs.Game_32_45_32EndlessCode.GDPlayerRocketObjects1.length = 0;
gdjs.Game_32_45_32EndlessCode.GDPlayerRocketObjects2.length = 0;
gdjs.Game_32_45_32EndlessCode.GDPlayerRocketObjects3.length = 0;
gdjs.Game_32_45_32EndlessCode.GDDroneObjects1.length = 0;
gdjs.Game_32_45_32EndlessCode.GDDroneObjects2.length = 0;
gdjs.Game_32_45_32EndlessCode.GDDroneObjects3.length = 0;
gdjs.Game_32_45_32EndlessCode.GDRoundTextObjects1.length = 0;
gdjs.Game_32_45_32EndlessCode.GDRoundTextObjects2.length = 0;
gdjs.Game_32_45_32EndlessCode.GDRoundTextObjects3.length = 0;
gdjs.Game_32_45_32EndlessCode.GDExplosionObjects1.length = 0;
gdjs.Game_32_45_32EndlessCode.GDExplosionObjects2.length = 0;
gdjs.Game_32_45_32EndlessCode.GDExplosionObjects3.length = 0;
gdjs.Game_32_45_32EndlessCode.GDHelicopterObjects1.length = 0;
gdjs.Game_32_45_32EndlessCode.GDHelicopterObjects2.length = 0;
gdjs.Game_32_45_32EndlessCode.GDHelicopterObjects3.length = 0;
gdjs.Game_32_45_32EndlessCode.GDBomberObjects1.length = 0;
gdjs.Game_32_45_32EndlessCode.GDBomberObjects2.length = 0;
gdjs.Game_32_45_32EndlessCode.GDBomberObjects3.length = 0;
gdjs.Game_32_45_32EndlessCode.GDTankObjects1.length = 0;
gdjs.Game_32_45_32EndlessCode.GDTankObjects2.length = 0;
gdjs.Game_32_45_32EndlessCode.GDTankObjects3.length = 0;
gdjs.Game_32_45_32EndlessCode.GDLivesUIObjects1.length = 0;
gdjs.Game_32_45_32EndlessCode.GDLivesUIObjects2.length = 0;
gdjs.Game_32_45_32EndlessCode.GDLivesUIObjects3.length = 0;
gdjs.Game_32_45_32EndlessCode.GDLoseTextObjects1.length = 0;
gdjs.Game_32_45_32EndlessCode.GDLoseTextObjects2.length = 0;
gdjs.Game_32_45_32EndlessCode.GDLoseTextObjects3.length = 0;
gdjs.Game_32_45_32EndlessCode.GDGroundObjects1.length = 0;
gdjs.Game_32_45_32EndlessCode.GDGroundObjects2.length = 0;
gdjs.Game_32_45_32EndlessCode.GDGroundObjects3.length = 0;

gdjs.Game_32_45_32EndlessCode.eventsList11(runtimeScene);
gdjs.Game_32_45_32EndlessCode.GDWallObjects1.length = 0;
gdjs.Game_32_45_32EndlessCode.GDWallObjects2.length = 0;
gdjs.Game_32_45_32EndlessCode.GDWallObjects3.length = 0;
gdjs.Game_32_45_32EndlessCode.GDTurretBaseObjects1.length = 0;
gdjs.Game_32_45_32EndlessCode.GDTurretBaseObjects2.length = 0;
gdjs.Game_32_45_32EndlessCode.GDTurretBaseObjects3.length = 0;
gdjs.Game_32_45_32EndlessCode.GDTurretObjects1.length = 0;
gdjs.Game_32_45_32EndlessCode.GDTurretObjects2.length = 0;
gdjs.Game_32_45_32EndlessCode.GDTurretObjects3.length = 0;
gdjs.Game_32_45_32EndlessCode.GDPlayerRocketObjects1.length = 0;
gdjs.Game_32_45_32EndlessCode.GDPlayerRocketObjects2.length = 0;
gdjs.Game_32_45_32EndlessCode.GDPlayerRocketObjects3.length = 0;
gdjs.Game_32_45_32EndlessCode.GDDroneObjects1.length = 0;
gdjs.Game_32_45_32EndlessCode.GDDroneObjects2.length = 0;
gdjs.Game_32_45_32EndlessCode.GDDroneObjects3.length = 0;
gdjs.Game_32_45_32EndlessCode.GDRoundTextObjects1.length = 0;
gdjs.Game_32_45_32EndlessCode.GDRoundTextObjects2.length = 0;
gdjs.Game_32_45_32EndlessCode.GDRoundTextObjects3.length = 0;
gdjs.Game_32_45_32EndlessCode.GDExplosionObjects1.length = 0;
gdjs.Game_32_45_32EndlessCode.GDExplosionObjects2.length = 0;
gdjs.Game_32_45_32EndlessCode.GDExplosionObjects3.length = 0;
gdjs.Game_32_45_32EndlessCode.GDHelicopterObjects1.length = 0;
gdjs.Game_32_45_32EndlessCode.GDHelicopterObjects2.length = 0;
gdjs.Game_32_45_32EndlessCode.GDHelicopterObjects3.length = 0;
gdjs.Game_32_45_32EndlessCode.GDBomberObjects1.length = 0;
gdjs.Game_32_45_32EndlessCode.GDBomberObjects2.length = 0;
gdjs.Game_32_45_32EndlessCode.GDBomberObjects3.length = 0;
gdjs.Game_32_45_32EndlessCode.GDTankObjects1.length = 0;
gdjs.Game_32_45_32EndlessCode.GDTankObjects2.length = 0;
gdjs.Game_32_45_32EndlessCode.GDTankObjects3.length = 0;
gdjs.Game_32_45_32EndlessCode.GDLivesUIObjects1.length = 0;
gdjs.Game_32_45_32EndlessCode.GDLivesUIObjects2.length = 0;
gdjs.Game_32_45_32EndlessCode.GDLivesUIObjects3.length = 0;
gdjs.Game_32_45_32EndlessCode.GDLoseTextObjects1.length = 0;
gdjs.Game_32_45_32EndlessCode.GDLoseTextObjects2.length = 0;
gdjs.Game_32_45_32EndlessCode.GDLoseTextObjects3.length = 0;
gdjs.Game_32_45_32EndlessCode.GDGroundObjects1.length = 0;
gdjs.Game_32_45_32EndlessCode.GDGroundObjects2.length = 0;
gdjs.Game_32_45_32EndlessCode.GDGroundObjects3.length = 0;


return;

}

gdjs['Game_32_45_32EndlessCode'] = gdjs.Game_32_45_32EndlessCode;
