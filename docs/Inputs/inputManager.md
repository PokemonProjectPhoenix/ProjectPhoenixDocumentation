---
id: inputManager
title: Input Manager
---

# Input Manager

Project Pheonix is using Unity's [new input system](https://docs.unity3d.com/Packages/com.unity.inputsystem@1.0/manual/QuickStartGuide.html). It is strongly recommended to watch the below video of Brackey's covering what the new input system is, and how it might be used. He does a great job covering all the basics, and his method of referencing inputs is similar in this framework.

<iframe width="1126" height="633" src="https://www.youtube.com/embed/p-3S73MaDP8" title="CONTROLLER INPUT in Unity!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

When using the input system in Project Pheonix, developers should check out the **InputManager** class. The class contains a static reference named **InputActions** that references the automatically generated class produced from an **InputActionAsset**. Developers can subscribe to and read input from the **InputActions** instance.

TODO include example of how to 
- Subscribe/Unsubscribe from input
- check inputs phase
- check input is pressed or triggered

Other ways developers can make use of the new input system is through Unity's convenient [PlayerInput](https://docs.unity3d.com/Packages/com.unity.inputsystem@0.2/api/UnityEngine.InputSystem.Plugins.PlayerInput.PlayerInput.html) component, which also comes with a handy helper [PlayerInputManager](https://docs.unity3d.com/Packages/com.unity.inputsystem@0.2/api/UnityEngine.InputSystem.Plugins.PlayerInput.PlayerInputManager.html) to assist in managing local multiplayer!
