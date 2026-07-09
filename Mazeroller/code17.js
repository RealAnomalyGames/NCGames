gdjs.Level_32Select_32_45_32Pack2Code = {};
gdjs.Level_32Select_32_45_32Pack2Code.localVariables = [];
gdjs.Level_32Select_32_45_32Pack2Code.idToCallbackMap = new Map();
gdjs.Level_32Select_32_45_32Pack2Code.GDTitleObjects1= [];
gdjs.Level_32Select_32_45_32Pack2Code.GDTitleObjects2= [];
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI1Objects1= [];
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI1Objects2= [];
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI2Objects1= [];
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI2Objects2= [];
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI3Objects1= [];
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI3Objects2= [];
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI4Objects1= [];
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI4Objects2= [];
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI5Objects1= [];
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI5Objects2= [];
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI6Objects1= [];
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI6Objects2= [];
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI7Objects1= [];
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI7Objects2= [];
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI8Objects1= [];
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI8Objects2= [];
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI9Objects1= [];
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI9Objects2= [];
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI10Objects1= [];
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI10Objects2= [];
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI11Objects1= [];
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI11Objects2= [];
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI12Objects1= [];
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI12Objects2= [];
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI13Objects1= [];
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI13Objects2= [];
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI14Objects1= [];
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI14Objects2= [];
gdjs.Level_32Select_32_45_32Pack2Code.GDPackNameObjects1= [];
gdjs.Level_32Select_32_45_32Pack2Code.GDPackNameObjects2= [];
gdjs.Level_32Select_32_45_32Pack2Code.GDFloorObjects1= [];
gdjs.Level_32Select_32_45_32Pack2Code.GDFloorObjects2= [];
gdjs.Level_32Select_32_45_32Pack2Code.GDWallObjects1= [];
gdjs.Level_32Select_32_45_32Pack2Code.GDWallObjects2= [];
gdjs.Level_32Select_32_45_32Pack2Code.GDMetalBallObjects1= [];
gdjs.Level_32Select_32_45_32Pack2Code.GDMetalBallObjects2= [];
gdjs.Level_32Select_32_45_32Pack2Code.GDTransparentDarkJoystickObjects1= [];
gdjs.Level_32Select_32_45_32Pack2Code.GDTransparentDarkJoystickObjects2= [];
gdjs.Level_32Select_32_45_32Pack2Code.GDBGObjects1= [];
gdjs.Level_32Select_32_45_32Pack2Code.GDBGObjects2= [];


gdjs.Level_32Select_32_45_32Pack2Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("LevelUI1"), gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI1Objects1.length;i<l;++i) {
    if ( gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI1Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI1Objects1[k] = gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI1Objects1[i];
        ++k;
    }
}
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI1Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game - L2L1", true);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LevelUI2"), gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI2Objects1.length;i<l;++i) {
    if ( gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI2Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI2Objects1[k] = gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI2Objects1[i];
        ++k;
    }
}
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game - L2L2", true);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LevelUI3"), gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI3Objects1.length;i<l;++i) {
    if ( gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI3Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI3Objects1[k] = gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI3Objects1[i];
        ++k;
    }
}
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI3Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game - L2L3", true);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LevelUI4"), gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI4Objects1.length;i<l;++i) {
    if ( gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI4Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI4Objects1[k] = gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI4Objects1[i];
        ++k;
    }
}
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI4Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game - L2L4", true);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LevelUI5"), gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI5Objects1.length;i<l;++i) {
    if ( gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI5Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI5Objects1[k] = gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI5Objects1[i];
        ++k;
    }
}
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI5Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game - L2L5", true);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LevelUI6"), gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI6Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI6Objects1.length;i<l;++i) {
    if ( gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI6Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI6Objects1[k] = gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI6Objects1[i];
        ++k;
    }
}
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI6Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game - L2L6", true);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LevelUI7"), gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI7Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI7Objects1.length;i<l;++i) {
    if ( gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI7Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI7Objects1[k] = gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI7Objects1[i];
        ++k;
    }
}
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI7Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game - L2L7", true);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LevelUI8"), gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI8Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI8Objects1.length;i<l;++i) {
    if ( gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI8Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI8Objects1[k] = gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI8Objects1[i];
        ++k;
    }
}
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI8Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game - L2L8", true);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LevelUI9"), gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI9Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI9Objects1.length;i<l;++i) {
    if ( gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI9Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI9Objects1[k] = gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI9Objects1[i];
        ++k;
    }
}
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI9Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game - L2L9", true);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LevelUI10"), gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI10Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI10Objects1.length;i<l;++i) {
    if ( gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI10Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI10Objects1[k] = gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI10Objects1[i];
        ++k;
    }
}
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI10Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game - L2L10", true);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LevelUI11"), gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI11Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI11Objects1.length;i<l;++i) {
    if ( gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI11Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI11Objects1[k] = gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI11Objects1[i];
        ++k;
    }
}
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI11Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game - L2L11", true);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LevelUI12"), gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI12Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI12Objects1.length;i<l;++i) {
    if ( gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI12Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI12Objects1[k] = gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI12Objects1[i];
        ++k;
    }
}
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI12Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game - L2L12", true);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LevelUI13"), gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI13Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI13Objects1.length;i<l;++i) {
    if ( gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI13Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI13Objects1[k] = gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI13Objects1[i];
        ++k;
    }
}
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI13Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game - L2L13", true);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LevelUI14"), gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI14Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI14Objects1.length;i<l;++i) {
    if ( gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI14Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI14Objects1[k] = gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI14Objects1[i];
        ++k;
    }
}
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI14Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game - L2L14", true);
}
}

}


};

gdjs.Level_32Select_32_45_32Pack2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_32Select_32_45_32Pack2Code.GDTitleObjects1.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDTitleObjects2.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI1Objects1.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI1Objects2.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI2Objects1.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI2Objects2.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI3Objects1.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI3Objects2.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI4Objects1.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI4Objects2.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI5Objects1.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI5Objects2.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI6Objects1.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI6Objects2.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI7Objects1.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI7Objects2.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI8Objects1.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI8Objects2.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI9Objects1.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI9Objects2.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI10Objects1.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI10Objects2.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI11Objects1.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI11Objects2.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI12Objects1.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI12Objects2.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI13Objects1.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI13Objects2.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI14Objects1.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI14Objects2.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDPackNameObjects1.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDPackNameObjects2.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDFloorObjects1.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDFloorObjects2.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDWallObjects1.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDWallObjects2.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDMetalBallObjects1.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDMetalBallObjects2.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDTransparentDarkJoystickObjects1.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDTransparentDarkJoystickObjects2.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDBGObjects1.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDBGObjects2.length = 0;

gdjs.Level_32Select_32_45_32Pack2Code.eventsList0(runtimeScene);
gdjs.Level_32Select_32_45_32Pack2Code.GDTitleObjects1.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDTitleObjects2.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI1Objects1.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI1Objects2.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI2Objects1.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI2Objects2.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI3Objects1.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI3Objects2.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI4Objects1.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI4Objects2.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI5Objects1.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI5Objects2.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI6Objects1.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI6Objects2.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI7Objects1.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI7Objects2.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI8Objects1.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI8Objects2.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI9Objects1.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI9Objects2.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI10Objects1.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI10Objects2.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI11Objects1.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI11Objects2.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI12Objects1.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI12Objects2.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI13Objects1.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI13Objects2.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI14Objects1.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDLevelUI14Objects2.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDPackNameObjects1.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDPackNameObjects2.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDFloorObjects1.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDFloorObjects2.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDWallObjects1.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDWallObjects2.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDMetalBallObjects1.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDMetalBallObjects2.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDTransparentDarkJoystickObjects1.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDTransparentDarkJoystickObjects2.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDBGObjects1.length = 0;
gdjs.Level_32Select_32_45_32Pack2Code.GDBGObjects2.length = 0;


return;

}

gdjs['Level_32Select_32_45_32Pack2Code'] = gdjs.Level_32Select_32_45_32Pack2Code;
