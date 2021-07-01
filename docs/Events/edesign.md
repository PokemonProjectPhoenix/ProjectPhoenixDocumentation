---
id: edesign
title: Event Structure and Design
---

The **Events** are structured in with a *tree* data structure. This means that in *each* event a **Root Block** exists, and the execution continues infinitely until it reaches a block without next connections. This means there can be multiple *endpoints* in an event, but there will always be only *one* root.

:::caution
Since events are customly serialized, creating Prefabs out of events might not work the same way it works for other prefabs. For example, editing an instance of the prefab in the scene will not keep the changes as overrides, but will discard them for the prefab original version.
:::

One event can hold multiple pages within, all with different [Trigger Type and Conditions](etypesandcond). These pages coexist and all are evaluated at the same time. An example for that can be found in the *Ronny* event in the **TeppalTownEvents** prefab (*Assets/Maps/MapEvents*).

<center><img src="/img/events/eventHandler.png" /></center>
<br />

The events are serialized per-object and are accessible through an **EventHandler** Component. The EventHandler provides some of the major functions the UES offers. 

:::important
Note that the Coroutine that exectutes the current event is played **in this object**, so destroying it will halt the event execution and possibly break the game (dev note: **possibly make this behaviour customizable?**).
:::

The Label field is just a nice-to-have for developers to keep track of which event is which better, but the EventHandler component inspector is mainly divided in three sections:
+ **Local States**: The local states are states relative to the *event itself*, and are **not** shared between events. They are saved with the game and can be used in simple events where no special behaviour is required (i.e. picking up items), and their function is similar to the Self Switches used in RPG Maker. There is no maximum amount of them that can be added.
+ **Activation Condition(s)**: The activation conditions determines a list of conditions that need to be met to have the event be active. As many conditions as needed can be added and there is no limit to it. There are two types of activation conditions:
    + **Local**: is based off Local States and checks on them to evaluate set conditions.
    + **Global**: is based off [Global Variables](globalvariables) and utilizes the [VariableCondition](conditions) script to evaluate a result.
+ **Event Pages**: The Event Pages hold all the informations on the blocks to be executed in the given page. It contains informations on the [Trigger Type and Conditions](etypesandcond) for that page, and contains a **Open Graph** button to open a visual representation of the event. This visual is also the way events are edited and handled.