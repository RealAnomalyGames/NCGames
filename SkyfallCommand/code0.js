gdjs.Home_32SceneCode = {};
gdjs.Home_32SceneCode.localVariables = [];
gdjs.Home_32SceneCode.idToCallbackMap = new Map();
gdjs.Home_32SceneCode.GDMetalUIObjects1= [];
gdjs.Home_32SceneCode.GDMetalUIObjects2= [];
gdjs.Home_32SceneCode.GDTitleObjects1= [];
gdjs.Home_32SceneCode.GDTitleObjects2= [];
gdjs.Home_32SceneCode.GDPlayButtonObjects1= [];
gdjs.Home_32SceneCode.GDPlayButtonObjects2= [];
gdjs.Home_32SceneCode.GDHelpButtonObjects1= [];
gdjs.Home_32SceneCode.GDHelpButtonObjects2= [];
gdjs.Home_32SceneCode.GDAboutButtonObjects1= [];
gdjs.Home_32SceneCode.GDAboutButtonObjects2= [];
gdjs.Home_32SceneCode.GDGroundObjects1= [];
gdjs.Home_32SceneCode.GDGroundObjects2= [];


gdjs.Home_32SceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "skylinecommand theme.mp3", true, 70, 1);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "metalclang.mp3", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.Home_32SceneCode.GDPlayButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Home_32SceneCode.GDPlayButtonObjects1.length;i<l;++i) {
    if ( gdjs.Home_32SceneCode.GDPlayButtonObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Home_32SceneCode.GDPlayButtonObjects1[k] = gdjs.Home_32SceneCode.GDPlayButtonObjects1[i];
        ++k;
    }
}
gdjs.Home_32SceneCode.GDPlayButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "select2.ogg", false, 100, 1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Setup Scene", true);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("HelpButton"), gdjs.Home_32SceneCode.GDHelpButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Home_32SceneCode.GDHelpButtonObjects1.length;i<l;++i) {
    if ( gdjs.Home_32SceneCode.GDHelpButtonObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Home_32SceneCode.GDHelpButtonObjects1[k] = gdjs.Home_32SceneCode.GDHelpButtonObjects1[i];
        ++k;
    }
}
gdjs.Home_32SceneCode.GDHelpButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "select2.ogg", false, 100, 1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Help Scene", true);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("AboutButton"), gdjs.Home_32SceneCode.GDAboutButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Home_32SceneCode.GDAboutButtonObjects1.length;i<l;++i) {
    if ( gdjs.Home_32SceneCode.GDAboutButtonObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Home_32SceneCode.GDAboutButtonObjects1[k] = gdjs.Home_32SceneCode.GDAboutButtonObjects1[i];
        ++k;
    }
}
gdjs.Home_32SceneCode.GDAboutButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "select2.ogg", false, 100, 1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "About Scene", true);
}
}

}


};

gdjs.Home_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Home_32SceneCode.GDMetalUIObjects1.length = 0;
gdjs.Home_32SceneCode.GDMetalUIObjects2.length = 0;
gdjs.Home_32SceneCode.GDTitleObjects1.length = 0;
gdjs.Home_32SceneCode.GDTitleObjects2.length = 0;
gdjs.Home_32SceneCode.GDPlayButtonObjects1.length = 0;
gdjs.Home_32SceneCode.GDPlayButtonObjects2.length = 0;
gdjs.Home_32SceneCode.GDHelpButtonObjects1.length = 0;
gdjs.Home_32SceneCode.GDHelpButtonObjects2.length = 0;
gdjs.Home_32SceneCode.GDAboutButtonObjects1.length = 0;
gdjs.Home_32SceneCode.GDAboutButtonObjects2.length = 0;
gdjs.Home_32SceneCode.GDGroundObjects1.length = 0;
gdjs.Home_32SceneCode.GDGroundObjects2.length = 0;

gdjs.Home_32SceneCode.eventsList0(runtimeScene);
gdjs.Home_32SceneCode.GDMetalUIObjects1.length = 0;
gdjs.Home_32SceneCode.GDMetalUIObjects2.length = 0;
gdjs.Home_32SceneCode.GDTitleObjects1.length = 0;
gdjs.Home_32SceneCode.GDTitleObjects2.length = 0;
gdjs.Home_32SceneCode.GDPlayButtonObjects1.length = 0;
gdjs.Home_32SceneCode.GDPlayButtonObjects2.length = 0;
gdjs.Home_32SceneCode.GDHelpButtonObjects1.length = 0;
gdjs.Home_32SceneCode.GDHelpButtonObjects2.length = 0;
gdjs.Home_32SceneCode.GDAboutButtonObjects1.length = 0;
gdjs.Home_32SceneCode.GDAboutButtonObjects2.length = 0;
gdjs.Home_32SceneCode.GDGroundObjects1.length = 0;
gdjs.Home_32SceneCode.GDGroundObjects2.length = 0;


return;

}

gdjs['Home_32SceneCode'] = gdjs.Home_32SceneCode;
