---
id: inputManager
title: Input Manager
---

# Input Manager

*All the classes mentioned on this page [can be found here](https://github.com/Xerner/ProjectPhoenix/tree/develop/Project/Assets/Scripts/InputSystem)*

The `InputManager` exists on the `GameController` prefab

---

Project Pheonix is using Unity's [new input system](https://docs.unity3d.com/Packages/com.unity.inputsystem@1.0/manual/QuickStartGuide.html). It is strongly recommended to watch the below video of Brackey's covering what the new input system is, and how it might be used. He does a great job covering all the basics, and his method of referencing inputs is similar in this framework.

<iframe width="854" height="480" src="https://www.youtube.com/embed/p-3S73MaDP8" title="CONTROLLER INPUT in Unity!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

When using the input system in Project Pheonix, developers should check out the `InputManager` class. The class contains a static reference named `InputActions` that references the automatically generated class produced from an `InputActionAsset`. Developers can subscribe to and read input from the `InputActions` instance.

TODO include example of how to 
- Subscribe/Unsubscribe from input
- check inputs phase
- check input is pressed or triggered

Other ways developers can make use of the new input system is through Unity's convenient [PlayerInput](https://docs.unity3d.com/Packages/com.unity.inputsystem@0.2/api/UnityEngine.InputSystem.Plugins.PlayerInput.PlayerInput.html) component, which also comes with a handy helper [PlayerInputManager](https://docs.unity3d.com/Packages/com.unity.inputsystem@0.2/api/UnityEngine.InputSystem.Plugins.PlayerInput.PlayerInputManager.html) to assist in managing local multiplayer!

## InputActions Summary

The class is composed of `InputActionMaps` and `InputActions` which reflect the names of each action map and action that is found in the editor when editing the `InputActionsAsset` file.

<center><img src="/img/inputs/inputactionasset.png" /></center>

Accessing desired action maps and actions will always be structured similarly to

`InputManager.InputActions.<action map>.<action>`

```csharp title="Example of accessing the Move actions Vector2 value"
var movement = InputManager.InputActions.Player.Move.ReadValue<Vector2>();
```

Reminder that the class is automatically generated from the `InputActionsAsset`. If the asset file is edited, then the class will be regenerated potentionally causing breaking changes. No worries! Just make sure to know what you changed and get ready to debug or find/replace all to resolve naming issues

:::note

Easy changes that may cause breaking changes include
- Changing an action maps name
- Change an actions name
- Change an actions output type

:::

## Input Subscriptions

Subscribing to an input requires a function that takes a `CallbackContext` as its only argument. Each `InputAction` has 3 events it produces when input is provided by the user

- started
- performed
- canceled

The operators `+=` and `-=` can be used to subscribe and unsubscribe from these events

```csharp title="Subscribe to input on start and unsubscribe on destroy"
void Start() {
	InputManager.InputActions.Player.Move.performed += GetMoveInput
}

void OnDestroy() {
	InputManager.InputActions.Player.Move.performed -= GetMoveInput
}

// Assuming the Move action in the Player action map is set to return a Vector2
Vector2 GetMoveInput(CallbackContext context) {
	return context.ReadValue<Vector2>();
}
```

## Button Inputs

The default type of `InputAction` is a button. Meaning it can return true/false values when reading its input, and it makes nice use of the `IsPressed()` function and the `triggered` property

```csharp title="Reading if the user invokes the 'Back' InputAction"
void IEnumerator InputLoop() {
	running = true;
	while (running) {
		if (InputManager.InputActions.UI.Back.triggered)
			running = false;
	}
}
```

:::note

`IsPressed()` lingers true for more than 1 frame. `triggered` only stays true for the frame the button is pressed. Therefore, it might be desirable to use `triggered` over `IsPressed()` to avoid unwanted behaviour. 

:::

## Action Maps

An action map dictates what set of `InputActions` are currently available to the user. For example, there may be a **Player** and **UI** action maps

Player might contain
- Move
- Fire
- Interact
- Jump

UI might contain
- Move
- Back
- Select

To switch between action maps, developers can make use of the `InputManager`'s `SwitchActionMap` function like so

```csharp title="Switching to the Player action map"
InputManager.SwitchActionMap(InputManager.InputActions.Player);
```

## Useful Unity Links

- [Introduction](https://docs.unity3d.com/Packages/com.unity.inputsystem@1.5/manual/index.html)
- [Input Debugging](https://docs.unity3d.com/Packages/com.unity.inputsystem@1.5/manual/Debugging.html)
  - This is very nice to know if a controller is actually providing input or not
- [InputActions](https://docs.unity3d.com/Packages/com.unity.inputsystem@1.5/manual/Actions.html)
  - [InputActionAsset](https://docs.unity3d.com/Packages/com.unity.inputsystem@1.5/manual/ActionAssets.html)
  - [Input Binding](https://docs.unity3d.com/Packages/com.unity.inputsystem@1.5/manual/ActionBindings.html)
  - [Interactions](https://docs.unity3d.com/Packages/com.unity.inputsystem@1.5/manual/Interactions.html)
- [Devices](https://docs.unity3d.com/Packages/com.unity.inputsystem@1.5/manual/Devices.html)
- [Controls](https://docs.unity3d.com/Packages/com.unity.inputsystem@1.5/manual/Controls.html)
- [Processors](https://docs.unity3d.com/Packages/com.unity.inputsystem@1.5/manual/Processors.html)
- [PlayerInput Component](https://docs.unity3d.com/Packages/com.unity.inputsystem@1.5/manual/PlayerInput.html)

## Common Issues

### No input is being read

1. Make sure an `InputManager` is present in your Scene. It is normally found on the `GameController`
2. Make sure you are on the appropriate action map. This can be seen by viewing the `InputManager` in the inspector

<center><img src="/img/inputs/current_action_map.png" /></center>

3. Use the [Input Debugger](https://docs.unity3d.com/Packages/com.unity.inputsystem@1.5/manual/Debugging.html) to make sure the input source is working properly
4. Restart Unity. There have been cases where Unity fails to read input devices, and simply restarting it fixes the issue