gdjs.Level_32CompleteCode = {};
gdjs.Level_32CompleteCode.localVariables = [];
gdjs.Level_32CompleteCode.idToCallbackMap = new Map();
gdjs.Level_32CompleteCode.GDCompleteTextObjects1= [];
gdjs.Level_32CompleteCode.GDCompleteTextObjects2= [];
gdjs.Level_32CompleteCode.GDBackButtonObjects1= [];
gdjs.Level_32CompleteCode.GDBackButtonObjects2= [];
gdjs.Level_32CompleteCode.GDFloorObjects1= [];
gdjs.Level_32CompleteCode.GDFloorObjects2= [];
gdjs.Level_32CompleteCode.GDWallObjects1= [];
gdjs.Level_32CompleteCode.GDWallObjects2= [];
gdjs.Level_32CompleteCode.GDMetalBallObjects1= [];
gdjs.Level_32CompleteCode.GDMetalBallObjects2= [];
gdjs.Level_32CompleteCode.GDTransparentDarkJoystickObjects1= [];
gdjs.Level_32CompleteCode.GDTransparentDarkJoystickObjects2= [];
gdjs.Level_32CompleteCode.GDBGObjects1= [];
gdjs.Level_32CompleteCode.GDBGObjects2= [];


gdjs.Level_32CompleteCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "level complete.mp3", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.Level_32CompleteCode.GDBackButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_32CompleteCode.GDBackButtonObjects1.length;i<l;++i) {
    if ( gdjs.Level_32CompleteCode.GDBackButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Level_32CompleteCode.GDBackButtonObjects1[k] = gdjs.Level_32CompleteCode.GDBackButtonObjects1[i];
        ++k;
    }
}
gdjs.Level_32CompleteCode.GDBackButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Home Scene", true);
}
}

}


};

gdjs.Level_32CompleteCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_32CompleteCode.GDCompleteTextObjects1.length = 0;
gdjs.Level_32CompleteCode.GDCompleteTextObjects2.length = 0;
gdjs.Level_32CompleteCode.GDBackButtonObjects1.length = 0;
gdjs.Level_32CompleteCode.GDBackButtonObjects2.length = 0;
gdjs.Level_32CompleteCode.GDFloorObjects1.length = 0;
gdjs.Level_32CompleteCode.GDFloorObjects2.length = 0;
gdjs.Level_32CompleteCode.GDWallObjects1.length = 0;
gdjs.Level_32CompleteCode.GDWallObjects2.length = 0;
gdjs.Level_32CompleteCode.GDMetalBallObjects1.length = 0;
gdjs.Level_32CompleteCode.GDMetalBallObjects2.length = 0;
gdjs.Level_32CompleteCode.GDTransparentDarkJoystickObjects1.length = 0;
gdjs.Level_32CompleteCode.GDTransparentDarkJoystickObjects2.length = 0;
gdjs.Level_32CompleteCode.GDBGObjects1.length = 0;
gdjs.Level_32CompleteCode.GDBGObjects2.length = 0;

gdjs.Level_32CompleteCode.eventsList0(runtimeScene);
gdjs.Level_32CompleteCode.GDCompleteTextObjects1.length = 0;
gdjs.Level_32CompleteCode.GDCompleteTextObjects2.length = 0;
gdjs.Level_32CompleteCode.GDBackButtonObjects1.length = 0;
gdjs.Level_32CompleteCode.GDBackButtonObjects2.length = 0;
gdjs.Level_32CompleteCode.GDFloorObjects1.length = 0;
gdjs.Level_32CompleteCode.GDFloorObjects2.length = 0;
gdjs.Level_32CompleteCode.GDWallObjects1.length = 0;
gdjs.Level_32CompleteCode.GDWallObjects2.length = 0;
gdjs.Level_32CompleteCode.GDMetalBallObjects1.length = 0;
gdjs.Level_32CompleteCode.GDMetalBallObjects2.length = 0;
gdjs.Level_32CompleteCode.GDTransparentDarkJoystickObjects1.length = 0;
gdjs.Level_32CompleteCode.GDTransparentDarkJoystickObjects2.length = 0;
gdjs.Level_32CompleteCode.GDBGObjects1.length = 0;
gdjs.Level_32CompleteCode.GDBGObjects2.length = 0;


return;

}

gdjs['Level_32CompleteCode'] = gdjs.Level_32CompleteCode;
