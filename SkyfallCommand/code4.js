gdjs.Gameover_32Scene_32_45_32TimedCode = {};
gdjs.Gameover_32Scene_32_45_32TimedCode.localVariables = [];
gdjs.Gameover_32Scene_32_45_32TimedCode.idToCallbackMap = new Map();
gdjs.Gameover_32Scene_32_45_32TimedCode.GDYesButtonObjects1= [];
gdjs.Gameover_32Scene_32_45_32TimedCode.GDYesButtonObjects2= [];
gdjs.Gameover_32Scene_32_45_32TimedCode.GDNoButtonObjects1= [];
gdjs.Gameover_32Scene_32_45_32TimedCode.GDNoButtonObjects2= [];
gdjs.Gameover_32Scene_32_45_32TimedCode.GDTextUIObjects1= [];
gdjs.Gameover_32Scene_32_45_32TimedCode.GDTextUIObjects2= [];
gdjs.Gameover_32Scene_32_45_32TimedCode.GDGroundObjects1= [];
gdjs.Gameover_32Scene_32_45_32TimedCode.GDGroundObjects2= [];


gdjs.Gameover_32Scene_32_45_32TimedCode.asyncCallback14037988 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Gameover_32Scene_32_45_32TimedCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Home Scene", true);
}
gdjs.Gameover_32Scene_32_45_32TimedCode.localVariables.length = 0;
}
gdjs.Gameover_32Scene_32_45_32TimedCode.idToCallbackMap.set(14037988, gdjs.Gameover_32Scene_32_45_32TimedCode.asyncCallback14037988);
gdjs.Gameover_32Scene_32_45_32TimedCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Gameover_32Scene_32_45_32TimedCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.4), (runtimeScene) => (gdjs.Gameover_32Scene_32_45_32TimedCode.asyncCallback14037988(runtimeScene, asyncObjectsList)), 14037988, asyncObjectsList);
}
}

}


};gdjs.Gameover_32Scene_32_45_32TimedCode.asyncCallback14039396 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Gameover_32Scene_32_45_32TimedCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game - Timed", true);
}
gdjs.Gameover_32Scene_32_45_32TimedCode.localVariables.length = 0;
}
gdjs.Gameover_32Scene_32_45_32TimedCode.idToCallbackMap.set(14039396, gdjs.Gameover_32Scene_32_45_32TimedCode.asyncCallback14039396);
gdjs.Gameover_32Scene_32_45_32TimedCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Gameover_32Scene_32_45_32TimedCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.4), (runtimeScene) => (gdjs.Gameover_32Scene_32_45_32TimedCode.asyncCallback14039396(runtimeScene, asyncObjectsList)), 14039396, asyncObjectsList);
}
}

}


};gdjs.Gameover_32Scene_32_45_32TimedCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NoButton"), gdjs.Gameover_32Scene_32_45_32TimedCode.GDNoButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Gameover_32Scene_32_45_32TimedCode.GDNoButtonObjects1.length;i<l;++i) {
    if ( gdjs.Gameover_32Scene_32_45_32TimedCode.GDNoButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Gameover_32Scene_32_45_32TimedCode.GDNoButtonObjects1[k] = gdjs.Gameover_32Scene_32_45_32TimedCode.GDNoButtonObjects1[i];
        ++k;
    }
}
gdjs.Gameover_32Scene_32_45_32TimedCode.GDNoButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "select.ogg", false, 100, 1);
}

{ //Subevents
gdjs.Gameover_32Scene_32_45_32TimedCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("YesButton"), gdjs.Gameover_32Scene_32_45_32TimedCode.GDYesButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Gameover_32Scene_32_45_32TimedCode.GDYesButtonObjects1.length;i<l;++i) {
    if ( gdjs.Gameover_32Scene_32_45_32TimedCode.GDYesButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Gameover_32Scene_32_45_32TimedCode.GDYesButtonObjects1[k] = gdjs.Gameover_32Scene_32_45_32TimedCode.GDYesButtonObjects1[i];
        ++k;
    }
}
gdjs.Gameover_32Scene_32_45_32TimedCode.GDYesButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "select.ogg", false, 100, 1);
}

{ //Subevents
gdjs.Gameover_32Scene_32_45_32TimedCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.Gameover_32Scene_32_45_32TimedCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Gameover_32Scene_32_45_32TimedCode.GDYesButtonObjects1.length = 0;
gdjs.Gameover_32Scene_32_45_32TimedCode.GDYesButtonObjects2.length = 0;
gdjs.Gameover_32Scene_32_45_32TimedCode.GDNoButtonObjects1.length = 0;
gdjs.Gameover_32Scene_32_45_32TimedCode.GDNoButtonObjects2.length = 0;
gdjs.Gameover_32Scene_32_45_32TimedCode.GDTextUIObjects1.length = 0;
gdjs.Gameover_32Scene_32_45_32TimedCode.GDTextUIObjects2.length = 0;
gdjs.Gameover_32Scene_32_45_32TimedCode.GDGroundObjects1.length = 0;
gdjs.Gameover_32Scene_32_45_32TimedCode.GDGroundObjects2.length = 0;

gdjs.Gameover_32Scene_32_45_32TimedCode.eventsList2(runtimeScene);
gdjs.Gameover_32Scene_32_45_32TimedCode.GDYesButtonObjects1.length = 0;
gdjs.Gameover_32Scene_32_45_32TimedCode.GDYesButtonObjects2.length = 0;
gdjs.Gameover_32Scene_32_45_32TimedCode.GDNoButtonObjects1.length = 0;
gdjs.Gameover_32Scene_32_45_32TimedCode.GDNoButtonObjects2.length = 0;
gdjs.Gameover_32Scene_32_45_32TimedCode.GDTextUIObjects1.length = 0;
gdjs.Gameover_32Scene_32_45_32TimedCode.GDTextUIObjects2.length = 0;
gdjs.Gameover_32Scene_32_45_32TimedCode.GDGroundObjects1.length = 0;
gdjs.Gameover_32Scene_32_45_32TimedCode.GDGroundObjects2.length = 0;


return;

}

gdjs['Gameover_32Scene_32_45_32TimedCode'] = gdjs.Gameover_32Scene_32_45_32TimedCode;
