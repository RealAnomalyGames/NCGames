gdjs.Home_32SceneCode = {};
gdjs.Home_32SceneCode.localVariables = [];
gdjs.Home_32SceneCode.idToCallbackMap = new Map();
gdjs.Home_32SceneCode.GDTextObjects1= [];
gdjs.Home_32SceneCode.GDTextObjects2= [];
gdjs.Home_32SceneCode.GDTitleObjects1= [];
gdjs.Home_32SceneCode.GDTitleObjects2= [];
gdjs.Home_32SceneCode.GDPackUI1Objects1= [];
gdjs.Home_32SceneCode.GDPackUI1Objects2= [];
gdjs.Home_32SceneCode.GDPackCount1Objects1= [];
gdjs.Home_32SceneCode.GDPackCount1Objects2= [];
gdjs.Home_32SceneCode.GDPackUI2Objects1= [];
gdjs.Home_32SceneCode.GDPackUI2Objects2= [];
gdjs.Home_32SceneCode.GDPackCount2Objects1= [];
gdjs.Home_32SceneCode.GDPackCount2Objects2= [];
gdjs.Home_32SceneCode.GDPackUI3Objects1= [];
gdjs.Home_32SceneCode.GDPackUI3Objects2= [];
gdjs.Home_32SceneCode.GDFloorObjects1= [];
gdjs.Home_32SceneCode.GDFloorObjects2= [];
gdjs.Home_32SceneCode.GDWallObjects1= [];
gdjs.Home_32SceneCode.GDWallObjects2= [];
gdjs.Home_32SceneCode.GDMetalBallObjects1= [];
gdjs.Home_32SceneCode.GDMetalBallObjects2= [];
gdjs.Home_32SceneCode.GDTransparentDarkJoystickObjects1= [];
gdjs.Home_32SceneCode.GDTransparentDarkJoystickObjects2= [];
gdjs.Home_32SceneCode.GDBGObjects1= [];
gdjs.Home_32SceneCode.GDBGObjects2= [];


gdjs.Home_32SceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PackUI1"), gdjs.Home_32SceneCode.GDPackUI1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Home_32SceneCode.GDPackUI1Objects1.length;i<l;++i) {
    if ( gdjs.Home_32SceneCode.GDPackUI1Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Home_32SceneCode.GDPackUI1Objects1[k] = gdjs.Home_32SceneCode.GDPackUI1Objects1[i];
        ++k;
    }
}
gdjs.Home_32SceneCode.GDPackUI1Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level Select - Pack1", true);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PackUI2"), gdjs.Home_32SceneCode.GDPackUI2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Home_32SceneCode.GDPackUI2Objects1.length;i<l;++i) {
    if ( gdjs.Home_32SceneCode.GDPackUI2Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Home_32SceneCode.GDPackUI2Objects1[k] = gdjs.Home_32SceneCode.GDPackUI2Objects1[i];
        ++k;
    }
}
gdjs.Home_32SceneCode.GDPackUI2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level Select - Pack2", true);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PackUI3"), gdjs.Home_32SceneCode.GDPackUI3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Home_32SceneCode.GDPackUI3Objects1.length;i<l;++i) {
    if ( gdjs.Home_32SceneCode.GDPackUI3Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Home_32SceneCode.GDPackUI3Objects1[k] = gdjs.Home_32SceneCode.GDPackUI3Objects1[i];
        ++k;
    }
}
gdjs.Home_32SceneCode.GDPackUI3Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level Select - Pack3", true);
}
}

}


};

gdjs.Home_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Home_32SceneCode.GDTextObjects1.length = 0;
gdjs.Home_32SceneCode.GDTextObjects2.length = 0;
gdjs.Home_32SceneCode.GDTitleObjects1.length = 0;
gdjs.Home_32SceneCode.GDTitleObjects2.length = 0;
gdjs.Home_32SceneCode.GDPackUI1Objects1.length = 0;
gdjs.Home_32SceneCode.GDPackUI1Objects2.length = 0;
gdjs.Home_32SceneCode.GDPackCount1Objects1.length = 0;
gdjs.Home_32SceneCode.GDPackCount1Objects2.length = 0;
gdjs.Home_32SceneCode.GDPackUI2Objects1.length = 0;
gdjs.Home_32SceneCode.GDPackUI2Objects2.length = 0;
gdjs.Home_32SceneCode.GDPackCount2Objects1.length = 0;
gdjs.Home_32SceneCode.GDPackCount2Objects2.length = 0;
gdjs.Home_32SceneCode.GDPackUI3Objects1.length = 0;
gdjs.Home_32SceneCode.GDPackUI3Objects2.length = 0;
gdjs.Home_32SceneCode.GDFloorObjects1.length = 0;
gdjs.Home_32SceneCode.GDFloorObjects2.length = 0;
gdjs.Home_32SceneCode.GDWallObjects1.length = 0;
gdjs.Home_32SceneCode.GDWallObjects2.length = 0;
gdjs.Home_32SceneCode.GDMetalBallObjects1.length = 0;
gdjs.Home_32SceneCode.GDMetalBallObjects2.length = 0;
gdjs.Home_32SceneCode.GDTransparentDarkJoystickObjects1.length = 0;
gdjs.Home_32SceneCode.GDTransparentDarkJoystickObjects2.length = 0;
gdjs.Home_32SceneCode.GDBGObjects1.length = 0;
gdjs.Home_32SceneCode.GDBGObjects2.length = 0;

gdjs.Home_32SceneCode.eventsList0(runtimeScene);
gdjs.Home_32SceneCode.GDTextObjects1.length = 0;
gdjs.Home_32SceneCode.GDTextObjects2.length = 0;
gdjs.Home_32SceneCode.GDTitleObjects1.length = 0;
gdjs.Home_32SceneCode.GDTitleObjects2.length = 0;
gdjs.Home_32SceneCode.GDPackUI1Objects1.length = 0;
gdjs.Home_32SceneCode.GDPackUI1Objects2.length = 0;
gdjs.Home_32SceneCode.GDPackCount1Objects1.length = 0;
gdjs.Home_32SceneCode.GDPackCount1Objects2.length = 0;
gdjs.Home_32SceneCode.GDPackUI2Objects1.length = 0;
gdjs.Home_32SceneCode.GDPackUI2Objects2.length = 0;
gdjs.Home_32SceneCode.GDPackCount2Objects1.length = 0;
gdjs.Home_32SceneCode.GDPackCount2Objects2.length = 0;
gdjs.Home_32SceneCode.GDPackUI3Objects1.length = 0;
gdjs.Home_32SceneCode.GDPackUI3Objects2.length = 0;
gdjs.Home_32SceneCode.GDFloorObjects1.length = 0;
gdjs.Home_32SceneCode.GDFloorObjects2.length = 0;
gdjs.Home_32SceneCode.GDWallObjects1.length = 0;
gdjs.Home_32SceneCode.GDWallObjects2.length = 0;
gdjs.Home_32SceneCode.GDMetalBallObjects1.length = 0;
gdjs.Home_32SceneCode.GDMetalBallObjects2.length = 0;
gdjs.Home_32SceneCode.GDTransparentDarkJoystickObjects1.length = 0;
gdjs.Home_32SceneCode.GDTransparentDarkJoystickObjects2.length = 0;
gdjs.Home_32SceneCode.GDBGObjects1.length = 0;
gdjs.Home_32SceneCode.GDBGObjects2.length = 0;


return;

}

gdjs['Home_32SceneCode'] = gdjs.Home_32SceneCode;
