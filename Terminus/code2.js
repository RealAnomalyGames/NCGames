gdjs.Game_32OverCode = {};
gdjs.Game_32OverCode.localVariables = [];
gdjs.Game_32OverCode.idToCallbackMap = new Map();
gdjs.Game_32OverCode.GDSkullObjects1= [];
gdjs.Game_32OverCode.GDSkullObjects2= [];
gdjs.Game_32OverCode.GDSkullObjects3= [];
gdjs.Game_32OverCode.GDBGObjects1= [];
gdjs.Game_32OverCode.GDBGObjects2= [];
gdjs.Game_32OverCode.GDBGObjects3= [];
gdjs.Game_32OverCode.GDTextObjects1= [];
gdjs.Game_32OverCode.GDTextObjects2= [];
gdjs.Game_32OverCode.GDTextObjects3= [];
gdjs.Game_32OverCode.GDYesButtonObjects1= [];
gdjs.Game_32OverCode.GDYesButtonObjects2= [];
gdjs.Game_32OverCode.GDYesButtonObjects3= [];
gdjs.Game_32OverCode.GDNoButtonObjects1= [];
gdjs.Game_32OverCode.GDNoButtonObjects2= [];
gdjs.Game_32OverCode.GDNoButtonObjects3= [];


gdjs.Game_32OverCode.asyncCallback10838164 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32OverCode.localVariables);
{gdjs.evtTools.camera.showLayer(runtimeScene, "UI Layer");
}
{gdjs.evtTools.camera.hideLayer(runtimeScene, "");
}
gdjs.Game_32OverCode.localVariables.length = 0;
}
gdjs.Game_32OverCode.idToCallbackMap.set(10838164, gdjs.Game_32OverCode.asyncCallback10838164);
gdjs.Game_32OverCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32OverCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3.2), (runtimeScene) => (gdjs.Game_32OverCode.asyncCallback10838164(runtimeScene, asyncObjectsList)), 10838164, asyncObjectsList);
}
}

}


};gdjs.Game_32OverCode.asyncCallback10837660 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32OverCode.localVariables);
{gdjs.evtTools.sound.playSound(runtimeScene, "gameover.mp3", false, 100, 1);
}
{gdjs.evtTools.camera.showLayer(runtimeScene, "");
}

{ //Subevents
gdjs.Game_32OverCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Game_32OverCode.localVariables.length = 0;
}
gdjs.Game_32OverCode.idToCallbackMap.set(10837660, gdjs.Game_32OverCode.asyncCallback10837660);
gdjs.Game_32OverCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32OverCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Game_32OverCode.asyncCallback10837660(runtimeScene, asyncObjectsList)), 10837660, asyncObjectsList);
}
}

}


};gdjs.Game_32OverCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32OverCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("YesButton"), gdjs.Game_32OverCode.GDYesButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32OverCode.GDYesButtonObjects1.length;i<l;++i) {
    if ( gdjs.Game_32OverCode.GDYesButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32OverCode.GDYesButtonObjects1[k] = gdjs.Game_32OverCode.GDYesButtonObjects1[i];
        ++k;
    }
}
gdjs.Game_32OverCode.GDYesButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), true);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NoButton"), gdjs.Game_32OverCode.GDNoButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32OverCode.GDNoButtonObjects1.length;i<l;++i) {
    if ( gdjs.Game_32OverCode.GDNoButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32OverCode.GDNoButtonObjects1[k] = gdjs.Game_32OverCode.GDNoButtonObjects1[i];
        ++k;
    }
}
gdjs.Game_32OverCode.GDNoButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title Scene", true);
}
}

}


};

gdjs.Game_32OverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32OverCode.GDSkullObjects1.length = 0;
gdjs.Game_32OverCode.GDSkullObjects2.length = 0;
gdjs.Game_32OverCode.GDSkullObjects3.length = 0;
gdjs.Game_32OverCode.GDBGObjects1.length = 0;
gdjs.Game_32OverCode.GDBGObjects2.length = 0;
gdjs.Game_32OverCode.GDBGObjects3.length = 0;
gdjs.Game_32OverCode.GDTextObjects1.length = 0;
gdjs.Game_32OverCode.GDTextObjects2.length = 0;
gdjs.Game_32OverCode.GDTextObjects3.length = 0;
gdjs.Game_32OverCode.GDYesButtonObjects1.length = 0;
gdjs.Game_32OverCode.GDYesButtonObjects2.length = 0;
gdjs.Game_32OverCode.GDYesButtonObjects3.length = 0;
gdjs.Game_32OverCode.GDNoButtonObjects1.length = 0;
gdjs.Game_32OverCode.GDNoButtonObjects2.length = 0;
gdjs.Game_32OverCode.GDNoButtonObjects3.length = 0;

gdjs.Game_32OverCode.eventsList2(runtimeScene);
gdjs.Game_32OverCode.GDSkullObjects1.length = 0;
gdjs.Game_32OverCode.GDSkullObjects2.length = 0;
gdjs.Game_32OverCode.GDSkullObjects3.length = 0;
gdjs.Game_32OverCode.GDBGObjects1.length = 0;
gdjs.Game_32OverCode.GDBGObjects2.length = 0;
gdjs.Game_32OverCode.GDBGObjects3.length = 0;
gdjs.Game_32OverCode.GDTextObjects1.length = 0;
gdjs.Game_32OverCode.GDTextObjects2.length = 0;
gdjs.Game_32OverCode.GDTextObjects3.length = 0;
gdjs.Game_32OverCode.GDYesButtonObjects1.length = 0;
gdjs.Game_32OverCode.GDYesButtonObjects2.length = 0;
gdjs.Game_32OverCode.GDYesButtonObjects3.length = 0;
gdjs.Game_32OverCode.GDNoButtonObjects1.length = 0;
gdjs.Game_32OverCode.GDNoButtonObjects2.length = 0;
gdjs.Game_32OverCode.GDNoButtonObjects3.length = 0;


return;

}

gdjs['Game_32OverCode'] = gdjs.Game_32OverCode;
