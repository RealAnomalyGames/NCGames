gdjs.AbortCode = {};
gdjs.AbortCode.localVariables = [];
gdjs.AbortCode.idToCallbackMap = new Map();
gdjs.AbortCode.GDSkullObjects1= [];
gdjs.AbortCode.GDSkullObjects2= [];
gdjs.AbortCode.GDSkullObjects3= [];
gdjs.AbortCode.GDBGObjects1= [];
gdjs.AbortCode.GDBGObjects2= [];
gdjs.AbortCode.GDBGObjects3= [];
gdjs.AbortCode.GDTextObjects1= [];
gdjs.AbortCode.GDTextObjects2= [];
gdjs.AbortCode.GDTextObjects3= [];
gdjs.AbortCode.GDYesButtonObjects1= [];
gdjs.AbortCode.GDYesButtonObjects2= [];
gdjs.AbortCode.GDYesButtonObjects3= [];
gdjs.AbortCode.GDNoButtonObjects1= [];
gdjs.AbortCode.GDNoButtonObjects2= [];
gdjs.AbortCode.GDNoButtonObjects3= [];


gdjs.AbortCode.asyncCallback9875460 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.AbortCode.localVariables);
{gdjs.evtTools.camera.showLayer(runtimeScene, "UI Layer");
}
{gdjs.evtTools.camera.hideLayer(runtimeScene, "");
}
gdjs.AbortCode.localVariables.length = 0;
}
gdjs.AbortCode.idToCallbackMap.set(9875460, gdjs.AbortCode.asyncCallback9875460);
gdjs.AbortCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.AbortCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3.2), (runtimeScene) => (gdjs.AbortCode.asyncCallback9875460(runtimeScene, asyncObjectsList)), 9875460, asyncObjectsList);
}
}

}


};gdjs.AbortCode.asyncCallback9875060 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.AbortCode.localVariables);
{gdjs.evtTools.sound.playSound(runtimeScene, "gameover.mp3", false, 100, 1);
}
{gdjs.evtTools.camera.showLayer(runtimeScene, "");
}

{ //Subevents
gdjs.AbortCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.AbortCode.localVariables.length = 0;
}
gdjs.AbortCode.idToCallbackMap.set(9875060, gdjs.AbortCode.asyncCallback9875060);
gdjs.AbortCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.AbortCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.AbortCode.asyncCallback9875060(runtimeScene, asyncObjectsList)), 9875060, asyncObjectsList);
}
}

}


};gdjs.AbortCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.AbortCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("YesButton"), gdjs.AbortCode.GDYesButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.AbortCode.GDYesButtonObjects1.length;i<l;++i) {
    if ( gdjs.AbortCode.GDYesButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.AbortCode.GDYesButtonObjects1[k] = gdjs.AbortCode.GDYesButtonObjects1[i];
        ++k;
    }
}
gdjs.AbortCode.GDYesButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), true);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NoButton"), gdjs.AbortCode.GDNoButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.AbortCode.GDNoButtonObjects1.length;i<l;++i) {
    if ( gdjs.AbortCode.GDNoButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.AbortCode.GDNoButtonObjects1[k] = gdjs.AbortCode.GDNoButtonObjects1[i];
        ++k;
    }
}
gdjs.AbortCode.GDNoButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title Scene", true);
}
}

}


};

gdjs.AbortCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.AbortCode.GDSkullObjects1.length = 0;
gdjs.AbortCode.GDSkullObjects2.length = 0;
gdjs.AbortCode.GDSkullObjects3.length = 0;
gdjs.AbortCode.GDBGObjects1.length = 0;
gdjs.AbortCode.GDBGObjects2.length = 0;
gdjs.AbortCode.GDBGObjects3.length = 0;
gdjs.AbortCode.GDTextObjects1.length = 0;
gdjs.AbortCode.GDTextObjects2.length = 0;
gdjs.AbortCode.GDTextObjects3.length = 0;
gdjs.AbortCode.GDYesButtonObjects1.length = 0;
gdjs.AbortCode.GDYesButtonObjects2.length = 0;
gdjs.AbortCode.GDYesButtonObjects3.length = 0;
gdjs.AbortCode.GDNoButtonObjects1.length = 0;
gdjs.AbortCode.GDNoButtonObjects2.length = 0;
gdjs.AbortCode.GDNoButtonObjects3.length = 0;

gdjs.AbortCode.eventsList2(runtimeScene);
gdjs.AbortCode.GDSkullObjects1.length = 0;
gdjs.AbortCode.GDSkullObjects2.length = 0;
gdjs.AbortCode.GDSkullObjects3.length = 0;
gdjs.AbortCode.GDBGObjects1.length = 0;
gdjs.AbortCode.GDBGObjects2.length = 0;
gdjs.AbortCode.GDBGObjects3.length = 0;
gdjs.AbortCode.GDTextObjects1.length = 0;
gdjs.AbortCode.GDTextObjects2.length = 0;
gdjs.AbortCode.GDTextObjects3.length = 0;
gdjs.AbortCode.GDYesButtonObjects1.length = 0;
gdjs.AbortCode.GDYesButtonObjects2.length = 0;
gdjs.AbortCode.GDYesButtonObjects3.length = 0;
gdjs.AbortCode.GDNoButtonObjects1.length = 0;
gdjs.AbortCode.GDNoButtonObjects2.length = 0;
gdjs.AbortCode.GDNoButtonObjects3.length = 0;


return;

}

gdjs['AbortCode'] = gdjs.AbortCode;
