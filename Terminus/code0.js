gdjs.Title_32SceneCode = {};
gdjs.Title_32SceneCode.localVariables = [];
gdjs.Title_32SceneCode.idToCallbackMap = new Map();
gdjs.Title_32SceneCode.GDTitleTextObjects1= [];
gdjs.Title_32SceneCode.GDTitleTextObjects2= [];
gdjs.Title_32SceneCode.GDPlayButtonObjects1= [];
gdjs.Title_32SceneCode.GDPlayButtonObjects2= [];


gdjs.Title_32SceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "untitled.mp3", true, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.Title_32SceneCode.GDPlayButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Title_32SceneCode.GDPlayButtonObjects1.length;i<l;++i) {
    if ( gdjs.Title_32SceneCode.GDPlayButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Title_32SceneCode.GDPlayButtonObjects1[k] = gdjs.Title_32SceneCode.GDPlayButtonObjects1[i];
        ++k;
    }
}
gdjs.Title_32SceneCode.GDPlayButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Scene - Map1", false);
}
}

}


};

gdjs.Title_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Title_32SceneCode.GDTitleTextObjects1.length = 0;
gdjs.Title_32SceneCode.GDTitleTextObjects2.length = 0;
gdjs.Title_32SceneCode.GDPlayButtonObjects1.length = 0;
gdjs.Title_32SceneCode.GDPlayButtonObjects2.length = 0;

gdjs.Title_32SceneCode.eventsList0(runtimeScene);
gdjs.Title_32SceneCode.GDTitleTextObjects1.length = 0;
gdjs.Title_32SceneCode.GDTitleTextObjects2.length = 0;
gdjs.Title_32SceneCode.GDPlayButtonObjects1.length = 0;
gdjs.Title_32SceneCode.GDPlayButtonObjects2.length = 0;


return;

}

gdjs['Title_32SceneCode'] = gdjs.Title_32SceneCode;
