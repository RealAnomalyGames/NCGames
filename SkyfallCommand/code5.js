gdjs.Gameover_32Scene_32_45_32EndlessCode = {};
gdjs.Gameover_32Scene_32_45_32EndlessCode.localVariables = [];
gdjs.Gameover_32Scene_32_45_32EndlessCode.idToCallbackMap = new Map();
gdjs.Gameover_32Scene_32_45_32EndlessCode.GDYesButtonObjects1= [];
gdjs.Gameover_32Scene_32_45_32EndlessCode.GDYesButtonObjects2= [];
gdjs.Gameover_32Scene_32_45_32EndlessCode.GDNoButtonObjects1= [];
gdjs.Gameover_32Scene_32_45_32EndlessCode.GDNoButtonObjects2= [];
gdjs.Gameover_32Scene_32_45_32EndlessCode.GDTextUIObjects1= [];
gdjs.Gameover_32Scene_32_45_32EndlessCode.GDTextUIObjects2= [];
gdjs.Gameover_32Scene_32_45_32EndlessCode.GDGroundObjects1= [];
gdjs.Gameover_32Scene_32_45_32EndlessCode.GDGroundObjects2= [];


gdjs.Gameover_32Scene_32_45_32EndlessCode.asyncCallback14375036 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Gameover_32Scene_32_45_32EndlessCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Home Scene", true);
}
gdjs.Gameover_32Scene_32_45_32EndlessCode.localVariables.length = 0;
}
gdjs.Gameover_32Scene_32_45_32EndlessCode.idToCallbackMap.set(14375036, gdjs.Gameover_32Scene_32_45_32EndlessCode.asyncCallback14375036);
gdjs.Gameover_32Scene_32_45_32EndlessCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Gameover_32Scene_32_45_32EndlessCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.4), (runtimeScene) => (gdjs.Gameover_32Scene_32_45_32EndlessCode.asyncCallback14375036(runtimeScene, asyncObjectsList)), 14375036, asyncObjectsList);
}
}

}


};gdjs.Gameover_32Scene_32_45_32EndlessCode.asyncCallback14376444 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Gameover_32Scene_32_45_32EndlessCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game - Endless", true);
}
gdjs.Gameover_32Scene_32_45_32EndlessCode.localVariables.length = 0;
}
gdjs.Gameover_32Scene_32_45_32EndlessCode.idToCallbackMap.set(14376444, gdjs.Gameover_32Scene_32_45_32EndlessCode.asyncCallback14376444);
gdjs.Gameover_32Scene_32_45_32EndlessCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Gameover_32Scene_32_45_32EndlessCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.4), (runtimeScene) => (gdjs.Gameover_32Scene_32_45_32EndlessCode.asyncCallback14376444(runtimeScene, asyncObjectsList)), 14376444, asyncObjectsList);
}
}

}


};gdjs.Gameover_32Scene_32_45_32EndlessCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NoButton"), gdjs.Gameover_32Scene_32_45_32EndlessCode.GDNoButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Gameover_32Scene_32_45_32EndlessCode.GDNoButtonObjects1.length;i<l;++i) {
    if ( gdjs.Gameover_32Scene_32_45_32EndlessCode.GDNoButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Gameover_32Scene_32_45_32EndlessCode.GDNoButtonObjects1[k] = gdjs.Gameover_32Scene_32_45_32EndlessCode.GDNoButtonObjects1[i];
        ++k;
    }
}
gdjs.Gameover_32Scene_32_45_32EndlessCode.GDNoButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "select.ogg", false, 100, 1);
}

{ //Subevents
gdjs.Gameover_32Scene_32_45_32EndlessCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("YesButton"), gdjs.Gameover_32Scene_32_45_32EndlessCode.GDYesButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Gameover_32Scene_32_45_32EndlessCode.GDYesButtonObjects1.length;i<l;++i) {
    if ( gdjs.Gameover_32Scene_32_45_32EndlessCode.GDYesButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Gameover_32Scene_32_45_32EndlessCode.GDYesButtonObjects1[k] = gdjs.Gameover_32Scene_32_45_32EndlessCode.GDYesButtonObjects1[i];
        ++k;
    }
}
gdjs.Gameover_32Scene_32_45_32EndlessCode.GDYesButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "select.ogg", false, 100, 1);
}

{ //Subevents
gdjs.Gameover_32Scene_32_45_32EndlessCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.Gameover_32Scene_32_45_32EndlessCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Gameover_32Scene_32_45_32EndlessCode.GDYesButtonObjects1.length = 0;
gdjs.Gameover_32Scene_32_45_32EndlessCode.GDYesButtonObjects2.length = 0;
gdjs.Gameover_32Scene_32_45_32EndlessCode.GDNoButtonObjects1.length = 0;
gdjs.Gameover_32Scene_32_45_32EndlessCode.GDNoButtonObjects2.length = 0;
gdjs.Gameover_32Scene_32_45_32EndlessCode.GDTextUIObjects1.length = 0;
gdjs.Gameover_32Scene_32_45_32EndlessCode.GDTextUIObjects2.length = 0;
gdjs.Gameover_32Scene_32_45_32EndlessCode.GDGroundObjects1.length = 0;
gdjs.Gameover_32Scene_32_45_32EndlessCode.GDGroundObjects2.length = 0;

gdjs.Gameover_32Scene_32_45_32EndlessCode.eventsList2(runtimeScene);
gdjs.Gameover_32Scene_32_45_32EndlessCode.GDYesButtonObjects1.length = 0;
gdjs.Gameover_32Scene_32_45_32EndlessCode.GDYesButtonObjects2.length = 0;
gdjs.Gameover_32Scene_32_45_32EndlessCode.GDNoButtonObjects1.length = 0;
gdjs.Gameover_32Scene_32_45_32EndlessCode.GDNoButtonObjects2.length = 0;
gdjs.Gameover_32Scene_32_45_32EndlessCode.GDTextUIObjects1.length = 0;
gdjs.Gameover_32Scene_32_45_32EndlessCode.GDTextUIObjects2.length = 0;
gdjs.Gameover_32Scene_32_45_32EndlessCode.GDGroundObjects1.length = 0;
gdjs.Gameover_32Scene_32_45_32EndlessCode.GDGroundObjects2.length = 0;


return;

}

gdjs['Gameover_32Scene_32_45_32EndlessCode'] = gdjs.Gameover_32Scene_32_45_32EndlessCode;
