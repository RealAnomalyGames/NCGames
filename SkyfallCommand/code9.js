gdjs.Help_32SceneCode = {};
gdjs.Help_32SceneCode.localVariables = [];
gdjs.Help_32SceneCode.idToCallbackMap = new Map();
gdjs.Help_32SceneCode.GDHelp_9595UIObjects1= [];
gdjs.Help_32SceneCode.GDHelp_9595UIObjects2= [];
gdjs.Help_32SceneCode.GDGroundObjects1= [];
gdjs.Help_32SceneCode.GDGroundObjects2= [];


gdjs.Help_32SceneCode.asyncCallback10930900 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Help_32SceneCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Home Scene", true);
}
gdjs.Help_32SceneCode.localVariables.length = 0;
}
gdjs.Help_32SceneCode.idToCallbackMap.set(10930900, gdjs.Help_32SceneCode.asyncCallback10930900);
gdjs.Help_32SceneCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Help_32SceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.4), (runtimeScene) => (gdjs.Help_32SceneCode.asyncCallback10930900(runtimeScene, asyncObjectsList)), 10930900, asyncObjectsList);
}
}

}


};gdjs.Help_32SceneCode.eventsList1 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{

gdjs.copyArray(runtimeScene.getObjects("Help_UI"), gdjs.Help_32SceneCode.GDHelp_9595UIObjects1);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Help_32SceneCode.GDHelp_9595UIObjects1.length;i<l;++i) {
    if ( gdjs.Help_32SceneCode.GDHelp_9595UIObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Help_32SceneCode.GDHelp_9595UIObjects1[k] = gdjs.Help_32SceneCode.GDHelp_9595UIObjects1[i];
        ++k;
    }
}
gdjs.Help_32SceneCode.GDHelp_9595UIObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Help_32SceneCode.GDHelp_9595UIObjects1.length;i<l;++i) {
    if ( gdjs.Help_32SceneCode.GDHelp_9595UIObjects1[i].getBehavior("Animation").getAnimationIndex() == 7 ) {
        isConditionTrue_0 = true;
        gdjs.Help_32SceneCode.GDHelp_9595UIObjects1[k] = gdjs.Help_32SceneCode.GDHelp_9595UIObjects1[i];
        ++k;
    }
}
gdjs.Help_32SceneCode.GDHelp_9595UIObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "select.ogg", false, 100, 1);
}

{ //Subevents
gdjs.Help_32SceneCode.eventsList0(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Help_UI"), gdjs.Help_32SceneCode.GDHelp_9595UIObjects1);

if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Help_32SceneCode.GDHelp_9595UIObjects1.length;i<l;++i) {
    if ( gdjs.Help_32SceneCode.GDHelp_9595UIObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Help_32SceneCode.GDHelp_9595UIObjects1[k] = gdjs.Help_32SceneCode.GDHelp_9595UIObjects1[i];
        ++k;
    }
}
gdjs.Help_32SceneCode.GDHelp_9595UIObjects1.length = k;
if (!elseEventsChainSatisfied && isConditionTrue_0) {
/* Reuse gdjs.Help_32SceneCode.GDHelp_9595UIObjects1 */
{for(var i = 0, len = gdjs.Help_32SceneCode.GDHelp_9595UIObjects1.length ;i < len;++i) {
    gdjs.Help_32SceneCode.GDHelp_9595UIObjects1[i].getBehavior("Animation").setAnimationIndex(gdjs.Help_32SceneCode.GDHelp_9595UIObjects1[i].getBehavior("Animation").getAnimationIndex() + (1));
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "select.ogg", false, 100, 1);
}
elseEventsChainSatisfied = true;
}
}

}

}

};

gdjs.Help_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Help_32SceneCode.GDHelp_9595UIObjects1.length = 0;
gdjs.Help_32SceneCode.GDHelp_9595UIObjects2.length = 0;
gdjs.Help_32SceneCode.GDGroundObjects1.length = 0;
gdjs.Help_32SceneCode.GDGroundObjects2.length = 0;

gdjs.Help_32SceneCode.eventsList1(runtimeScene);
gdjs.Help_32SceneCode.GDHelp_9595UIObjects1.length = 0;
gdjs.Help_32SceneCode.GDHelp_9595UIObjects2.length = 0;
gdjs.Help_32SceneCode.GDGroundObjects1.length = 0;
gdjs.Help_32SceneCode.GDGroundObjects2.length = 0;


return;

}

gdjs['Help_32SceneCode'] = gdjs.Help_32SceneCode;
