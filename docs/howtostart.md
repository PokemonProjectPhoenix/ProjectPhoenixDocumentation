---
id: howtostart
title: How do I start?
---

Project Phoenix works using just one scene. The scene (we will call it **MainScene** from this point onwards) must contain some key elements:
+ A **Main Camera** prefab;
+ A **SceneContainer** GameObject;
  + A **Player** prefab inside the _SceneContainer_;
  + A **FollowerUnimon** prefab inside the _SceneContainer_;
  + A **CameraPlane** prefab inside the _SceneContainer_;
+ A **GameController** GameObject with a **GameController** Component;
  + A **AudioController** GameObject with a **AudioController** Component and an **Audio Listener** Component;
  + A **TimeController** GameObject with a **TimeController** Component;
+ A **GUIManager** prefab;
  + A **TitleCanvas** prefab inside the _GUIManager_;
+ A **l18N** prefab;

These are all the GameObjects needed inside the scene to make it work.  All prefabs can be found inside the _Assets/Prefabs_ folder or the _Assets/Prefabs/GUI_ folder.

For more informations about the design choices and what specific GameObjects and Components are for, please refer to [the Design Information document.](designInfo)

:::tip
You can see examples of already working _MainScenes_ in the _Scenes_ folder. You can check the **Demo** scene for reference.
:::

## Scene setup
Although all the objects are in there, the scene still requires to be set up.  
First, in the **GameController** gameObject you need to add the references. The _Scene Container_ fields should reference the **`SceneContainer`** GameObject and _Map Container_ should reference the **`MapContainer`**. The _Start Map_ value should reference the map where you would like a **New Game** to start.
