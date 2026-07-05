gdjs.About_32SceneCode = {};
gdjs.About_32SceneCode.localVariables = [];
gdjs.About_32SceneCode.idToCallbackMap = new Map();
gdjs.About_32SceneCode.GDMetalUIObjects1= [];
gdjs.About_32SceneCode.GDMetalUIObjects2= [];
gdjs.About_32SceneCode.GDBackButtonObjects1= [];
gdjs.About_32SceneCode.GDBackButtonObjects2= [];
gdjs.About_32SceneCode.GDTitleObjects1= [];
gdjs.About_32SceneCode.GDTitleObjects2= [];
gdjs.About_32SceneCode.GDAboutTextObjects1= [];
gdjs.About_32SceneCode.GDAboutTextObjects2= [];
gdjs.About_32SceneCode.GDGroundObjects1= [];
gdjs.About_32SceneCode.GDGroundObjects2= [];


gdjs.About_32SceneCode.asyncCallback13991108 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.About_32SceneCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Home Scene", true);
}
gdjs.About_32SceneCode.localVariables.length = 0;
}
gdjs.About_32SceneCode.idToCallbackMap.set(13991108, gdjs.About_32SceneCode.asyncCallback13991108);
gdjs.About_32SceneCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.About_32SceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.4), (runtimeScene) => (gdjs.About_32SceneCode.asyncCallback13991108(runtimeScene, asyncObjectsList)), 13991108, asyncObjectsList);
}
}

}


};gdjs.About_32SceneCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.About_32SceneCode.GDBackButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.About_32SceneCode.GDBackButtonObjects1.length;i<l;++i) {
    if ( gdjs.About_32SceneCode.GDBackButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.About_32SceneCode.GDBackButtonObjects1[k] = gdjs.About_32SceneCode.GDBackButtonObjects1[i];
        ++k;
    }
}
gdjs.About_32SceneCode.GDBackButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "select.ogg", false, 100, 1);
}

{ //Subevents
gdjs.About_32SceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.About_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.About_32SceneCode.GDMetalUIObjects1.length = 0;
gdjs.About_32SceneCode.GDMetalUIObjects2.length = 0;
gdjs.About_32SceneCode.GDBackButtonObjects1.length = 0;
gdjs.About_32SceneCode.GDBackButtonObjects2.length = 0;
gdjs.About_32SceneCode.GDTitleObjects1.length = 0;
gdjs.About_32SceneCode.GDTitleObjects2.length = 0;
gdjs.About_32SceneCode.GDAboutTextObjects1.length = 0;
gdjs.About_32SceneCode.GDAboutTextObjects2.length = 0;
gdjs.About_32SceneCode.GDGroundObjects1.length = 0;
gdjs.About_32SceneCode.GDGroundObjects2.length = 0;

gdjs.About_32SceneCode.eventsList1(runtimeScene);
gdjs.About_32SceneCode.GDMetalUIObjects1.length = 0;
gdjs.About_32SceneCode.GDMetalUIObjects2.length = 0;
gdjs.About_32SceneCode.GDBackButtonObjects1.length = 0;
gdjs.About_32SceneCode.GDBackButtonObjects2.length = 0;
gdjs.About_32SceneCode.GDTitleObjects1.length = 0;
gdjs.About_32SceneCode.GDTitleObjects2.length = 0;
gdjs.About_32SceneCode.GDAboutTextObjects1.length = 0;
gdjs.About_32SceneCode.GDAboutTextObjects2.length = 0;
gdjs.About_32SceneCode.GDGroundObjects1.length = 0;
gdjs.About_32SceneCode.GDGroundObjects2.length = 0;


return;

}

gdjs['About_32SceneCode'] = gdjs.About_32SceneCode;
