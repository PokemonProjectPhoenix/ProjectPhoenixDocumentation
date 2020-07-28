---
id: howtostart
title: How do I start?
---

Project Phoenix works using just one scene. The scene (we will call it **MainScene** from this point onwards) must contain 4 key elements:
+ A **SceneContainer** GameObject;
  + A **Player** prefab inside the _SceneContainer_;
  + A **CanvasUI** prefab inside the _SceneContainer_;
  + The **Starting Map** that **_MUST_** have a **MapController** Component, inside the _SceneContainer_;
  + A **Sun** prefab inside the _SceneContainer_;
  + A **CameraPlane** prefab inside the _SceneContainer_;
+ A **GameController** GameObject with a **GameController** Component and an **AudioSource** Component;
+ A **TitleCanvas** Prefab;

These are all the GameObjects needed inside the scene to make it work.  All prefabs can be found inside the _Assets/Prefabs_ folder or the _Assets/Prefabs/GUI_ folder.

For more informations about the design choices and what specific GameObjects and Components are for, please refer to [the Design Information document.](designInfo)

:::tip
You can see examples of already working _MainScenes_ in the _Scenes_ folder. You can check **MainScene - Xantar** or **OTM - Zekro**.
:::

## Scene setup
Although all the objects are in there, the scene still requires a little Setup phase.  
First, in the **GameController** gameObject you need to set up the references. Both the _Scene Container_ and _Map Container_ fields should reference the **`SceneContainer`** GameObject. The _Start Map_ value should reference the Starting Map inside the SceneContainer GameObject.  

Next is the **CanvasUI** prefab, in the **_Canvas UI Manager_** Component the _Scene Camera_ field should reference the *Main Camera* object inside the **Player** prefab, you can find it in Player->SpriteHolder->Main Camera.  

After this, in the **Sun** prefab in the ***Weather Controller*** Component, all the Weathers need to be referenced. You can find them in Player->Weathers.

This is it for the basic setup of the scene.
