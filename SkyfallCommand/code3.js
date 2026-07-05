gdjs.Gameover_32Scene_32_45_32SurvivalCode = {};
gdjs.Gameover_32Scene_32_45_32SurvivalCode.localVariables = [];
gdjs.Gameover_32Scene_32_45_32SurvivalCode.idToCallbackMap = new Map();
gdjs.Gameover_32Scene_32_45_32SurvivalCode.GDYesButtonObjects1= [];
gdjs.Gameover_32Scene_32_45_32SurvivalCode.GDYesButtonObjects2= [];
gdjs.Gameover_32Scene_32_45_32SurvivalCode.GDNoButtonObjects1= [];
gdjs.Gameover_32Scene_32_45_32SurvivalCode.GDNoButtonObjects2= [];
gdjs.Gameover_32Scene_32_45_32SurvivalCode.GDTextUIObjects1= [];
gdjs.Gameover_32Scene_32_45_32SurvivalCode.GDTextUIObjects2= [];
gdjs.Gameover_32Scene_32_45_32SurvivalCode.GDGroundObjects1= [];
gdjs.Gameover_32Scene_32_45_32SurvivalCode.GDGroundObjects2= [];


gdjs.Gameover_32Scene_32_45_32SurvivalCode.asyncCallback14016812 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Gameover_32Scene_32_45_32SurvivalCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Home Scene", true);
}
gdjs.Gameover_32Scene_32_45_32SurvivalCode.localVariables.length = 0;
}
gdjs.Gameover_32Scene_32_45_32SurvivalCode.idToCallbackMap.set(14016812, gdjs.Gameover_32Scene_32_45_32SurvivalCode.asyncCallback14016812);
gdjs.Gameover_32Scene_32_45_32SurvivalCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Gameover_32Scene_32_45_32SurvivalCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.4), (runtimeScene) => (gdjs.Gameover_32Scene_32_45_32SurvivalCode.asyncCallback14016812(runtimeScene, asyncObjectsList)), 14016812, asyncObjectsList);
}
}

}


};gdjs.Gameover_32Scene_32_45_32SurvivalCode.asyncCallback14018220 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Gameover_32Scene_32_45_32SurvivalCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game - Survival", true);
}
gdjs.Gameover_32Scene_32_45_32SurvivalCode.localVariables.length = 0;
}
gdjs.Gameover_32Scene_32_45_32SurvivalCode.idToCallbackMap.set(14018220, gdjs.Gameover_32Scene_32_45_32SurvivalCode.asyncCallback14018220);
gdjs.Gameover_32Scene_32_45_32SurvivalCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Gameover_32Scene_32_45_32SurvivalCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.4), (runtimeScene) => (gdjs.Gameover_32Scene_32_45_32SurvivalCode.asyncCallback14018220(runtimeScene, asyncObjectsList)), 14018220, asyncObjectsList);
}
}

}


};gdjs.Gameover_32Scene_32_45_32SurvivalCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NoButton"), gdjs.Gameover_32Scene_32_45_32SurvivalCode.GDNoButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Gameover_32Scene_32_45_32SurvivalCode.GDNoButtonObjects1.length;i<l;++i) {
    if ( gdjs.Gameover_32Scene_32_45_32SurvivalCode.GDNoButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Gameover_32Scene_32_45_32SurvivalCode.GDNoButtonObjects1[k] = gdjs.Gameover_32Scene_32_45_32SurvivalCode.GDNoButtonObjects1[i];
        ++k;
    }
}
gdjs.Gameover_32Scene_32_45_32SurvivalCode.GDNoButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "select.ogg", false, 100, 1);
}

{ //Subevents
gdjs.Gameover_32Scene_32_45_32SurvivalCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("YesButton"), gdjs.Gameover_32Scene_32_45_32SurvivalCode.GDYesButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Gameover_32Scene_32_45_32SurvivalCode.GDYesButtonObjects1.length;i<l;++i) {
    if ( gdjs.Gameover_32Scene_32_45_32SurvivalCode.GDYesButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Gameover_32Scene_32_45_32SurvivalCode.GDYesButtonObjects1[k] = gdjs.Gameover_32Scene_32_45_32SurvivalCode.GDYesButtonObjects1[i];
        ++k;
    }
}
gdjs.Gameover_32Scene_32_45_32SurvivalCode.GDYesButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "select.ogg", false, 100, 1);
}

{ //Subevents
gdjs.Gameover_32Scene_32_45_32SurvivalCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.Gameover_32Scene_32_45_32SurvivalCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Gameover_32Scene_32_45_32SurvivalCode.GDYesButtonObjects1.length = 0;
gdjs.Gameover_32Scene_32_45_32SurvivalCode.GDYesButtonObjects2.length = 0;
gdjs.Gameover_32Scene_32_45_32SurvivalCode.GDNoButtonObjects1.length = 0;
gdjs.Gameover_32Scene_32_45_32SurvivalCode.GDNoButtonObjects2.length = 0;
gdjs.Gameover_32Scene_32_45_32SurvivalCode.GDTextUIObjects1.length = 0;
gdjs.Gameover_32Scene_32_45_32SurvivalCode.GDTextUIObjects2.length = 0;
gdjs.Gameover_32Scene_32_45_32SurvivalCode.GDGroundObjects1.length = 0;
gdjs.Gameover_32Scene_32_45_32SurvivalCode.GDGroundObjects2.length = 0;

gdjs.Gameover_32Scene_32_45_32SurvivalCode.eventsList2(runtimeScene);
gdjs.Gameover_32Scene_32_45_32SurvivalCode.GDYesButtonObjects1.length = 0;
gdjs.Gameover_32Scene_32_45_32SurvivalCode.GDYesButtonObjects2.length = 0;
gdjs.Gameover_32Scene_32_45_32SurvivalCode.GDNoButtonObjects1.length = 0;
gdjs.Gameover_32Scene_32_45_32SurvivalCode.GDNoButtonObjects2.length = 0;
gdjs.Gameover_32Scene_32_45_32SurvivalCode.GDTextUIObjects1.length = 0;
gdjs.Gameover_32Scene_32_45_32SurvivalCode.GDTextUIObjects2.length = 0;
gdjs.Gameover_32Scene_32_45_32SurvivalCode.GDGroundObjects1.length = 0;
gdjs.Gameover_32Scene_32_45_32SurvivalCode.GDGroundObjects2.length = 0;


return;

}

gdjs['Gameover_32Scene_32_45_32SurvivalCode'] = gdjs.Gameover_32Scene_32_45_32SurvivalCode;
