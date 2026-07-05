gdjs.Setup_32SceneCode = {};
gdjs.Setup_32SceneCode.localVariables = [];
gdjs.Setup_32SceneCode.idToCallbackMap = new Map();
gdjs.Setup_32SceneCode.GDMetalUIObjects1= [];
gdjs.Setup_32SceneCode.GDMetalUIObjects2= [];
gdjs.Setup_32SceneCode.GDSurvivalButtonObjects1= [];
gdjs.Setup_32SceneCode.GDSurvivalButtonObjects2= [];
gdjs.Setup_32SceneCode.GDTimedButtonObjects1= [];
gdjs.Setup_32SceneCode.GDTimedButtonObjects2= [];
gdjs.Setup_32SceneCode.GDBackButtonObjects1= [];
gdjs.Setup_32SceneCode.GDBackButtonObjects2= [];
gdjs.Setup_32SceneCode.GDTextUIObjects1= [];
gdjs.Setup_32SceneCode.GDTextUIObjects2= [];
gdjs.Setup_32SceneCode.GDEndlessButtonObjects1= [];
gdjs.Setup_32SceneCode.GDEndlessButtonObjects2= [];
gdjs.Setup_32SceneCode.GDGroundObjects1= [];
gdjs.Setup_32SceneCode.GDGroundObjects2= [];


gdjs.Setup_32SceneCode.asyncCallback13380332 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Setup_32SceneCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Home Scene", true);
}
gdjs.Setup_32SceneCode.localVariables.length = 0;
}
gdjs.Setup_32SceneCode.idToCallbackMap.set(13380332, gdjs.Setup_32SceneCode.asyncCallback13380332);
gdjs.Setup_32SceneCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Setup_32SceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.4), (runtimeScene) => (gdjs.Setup_32SceneCode.asyncCallback13380332(runtimeScene, asyncObjectsList)), 13380332, asyncObjectsList);
}
}

}


};gdjs.Setup_32SceneCode.asyncCallback13381804 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Setup_32SceneCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game - Survival", true);
}
gdjs.Setup_32SceneCode.localVariables.length = 0;
}
gdjs.Setup_32SceneCode.idToCallbackMap.set(13381804, gdjs.Setup_32SceneCode.asyncCallback13381804);
gdjs.Setup_32SceneCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Setup_32SceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.4), (runtimeScene) => (gdjs.Setup_32SceneCode.asyncCallback13381804(runtimeScene, asyncObjectsList)), 13381804, asyncObjectsList);
}
}

}


};gdjs.Setup_32SceneCode.asyncCallback13383076 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Setup_32SceneCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game - Timed", true);
}
gdjs.Setup_32SceneCode.localVariables.length = 0;
}
gdjs.Setup_32SceneCode.idToCallbackMap.set(13383076, gdjs.Setup_32SceneCode.asyncCallback13383076);
gdjs.Setup_32SceneCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Setup_32SceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.4), (runtimeScene) => (gdjs.Setup_32SceneCode.asyncCallback13383076(runtimeScene, asyncObjectsList)), 13383076, asyncObjectsList);
}
}

}


};gdjs.Setup_32SceneCode.asyncCallback13384508 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Setup_32SceneCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game - Endless", true);
}
gdjs.Setup_32SceneCode.localVariables.length = 0;
}
gdjs.Setup_32SceneCode.idToCallbackMap.set(13384508, gdjs.Setup_32SceneCode.asyncCallback13384508);
gdjs.Setup_32SceneCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Setup_32SceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.4), (runtimeScene) => (gdjs.Setup_32SceneCode.asyncCallback13384508(runtimeScene, asyncObjectsList)), 13384508, asyncObjectsList);
}
}

}


};gdjs.Setup_32SceneCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.Setup_32SceneCode.GDBackButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Setup_32SceneCode.GDBackButtonObjects1.length;i<l;++i) {
    if ( gdjs.Setup_32SceneCode.GDBackButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Setup_32SceneCode.GDBackButtonObjects1[k] = gdjs.Setup_32SceneCode.GDBackButtonObjects1[i];
        ++k;
    }
}
gdjs.Setup_32SceneCode.GDBackButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "select.ogg", false, 100, 1);
}

{ //Subevents
gdjs.Setup_32SceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SurvivalButton"), gdjs.Setup_32SceneCode.GDSurvivalButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Setup_32SceneCode.GDSurvivalButtonObjects1.length;i<l;++i) {
    if ( gdjs.Setup_32SceneCode.GDSurvivalButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Setup_32SceneCode.GDSurvivalButtonObjects1[k] = gdjs.Setup_32SceneCode.GDSurvivalButtonObjects1[i];
        ++k;
    }
}
gdjs.Setup_32SceneCode.GDSurvivalButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "select.ogg", false, 100, 1);
}

{ //Subevents
gdjs.Setup_32SceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("TimedButton"), gdjs.Setup_32SceneCode.GDTimedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Setup_32SceneCode.GDTimedButtonObjects1.length;i<l;++i) {
    if ( gdjs.Setup_32SceneCode.GDTimedButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Setup_32SceneCode.GDTimedButtonObjects1[k] = gdjs.Setup_32SceneCode.GDTimedButtonObjects1[i];
        ++k;
    }
}
gdjs.Setup_32SceneCode.GDTimedButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "select.ogg", false, 100, 1);
}

{ //Subevents
gdjs.Setup_32SceneCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("EndlessButton"), gdjs.Setup_32SceneCode.GDEndlessButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Setup_32SceneCode.GDEndlessButtonObjects1.length;i<l;++i) {
    if ( gdjs.Setup_32SceneCode.GDEndlessButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Setup_32SceneCode.GDEndlessButtonObjects1[k] = gdjs.Setup_32SceneCode.GDEndlessButtonObjects1[i];
        ++k;
    }
}
gdjs.Setup_32SceneCode.GDEndlessButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "select.ogg", false, 100, 1);
}

{ //Subevents
gdjs.Setup_32SceneCode.eventsList3(runtimeScene);} //End of subevents
}

}


};

gdjs.Setup_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Setup_32SceneCode.GDMetalUIObjects1.length = 0;
gdjs.Setup_32SceneCode.GDMetalUIObjects2.length = 0;
gdjs.Setup_32SceneCode.GDSurvivalButtonObjects1.length = 0;
gdjs.Setup_32SceneCode.GDSurvivalButtonObjects2.length = 0;
gdjs.Setup_32SceneCode.GDTimedButtonObjects1.length = 0;
gdjs.Setup_32SceneCode.GDTimedButtonObjects2.length = 0;
gdjs.Setup_32SceneCode.GDBackButtonObjects1.length = 0;
gdjs.Setup_32SceneCode.GDBackButtonObjects2.length = 0;
gdjs.Setup_32SceneCode.GDTextUIObjects1.length = 0;
gdjs.Setup_32SceneCode.GDTextUIObjects2.length = 0;
gdjs.Setup_32SceneCode.GDEndlessButtonObjects1.length = 0;
gdjs.Setup_32SceneCode.GDEndlessButtonObjects2.length = 0;
gdjs.Setup_32SceneCode.GDGroundObjects1.length = 0;
gdjs.Setup_32SceneCode.GDGroundObjects2.length = 0;

gdjs.Setup_32SceneCode.eventsList4(runtimeScene);
gdjs.Setup_32SceneCode.GDMetalUIObjects1.length = 0;
gdjs.Setup_32SceneCode.GDMetalUIObjects2.length = 0;
gdjs.Setup_32SceneCode.GDSurvivalButtonObjects1.length = 0;
gdjs.Setup_32SceneCode.GDSurvivalButtonObjects2.length = 0;
gdjs.Setup_32SceneCode.GDTimedButtonObjects1.length = 0;
gdjs.Setup_32SceneCode.GDTimedButtonObjects2.length = 0;
gdjs.Setup_32SceneCode.GDBackButtonObjects1.length = 0;
gdjs.Setup_32SceneCode.GDBackButtonObjects2.length = 0;
gdjs.Setup_32SceneCode.GDTextUIObjects1.length = 0;
gdjs.Setup_32SceneCode.GDTextUIObjects2.length = 0;
gdjs.Setup_32SceneCode.GDEndlessButtonObjects1.length = 0;
gdjs.Setup_32SceneCode.GDEndlessButtonObjects2.length = 0;
gdjs.Setup_32SceneCode.GDGroundObjects1.length = 0;
gdjs.Setup_32SceneCode.GDGroundObjects2.length = 0;


return;

}

gdjs['Setup_32SceneCode'] = gdjs.Setup_32SceneCode;
