---
id: events
title: About UES and Events
---

The **Unity Event System** (in short _UES_) is a system we developed that provides an Event System Similiar to _Enterbrain_'s *RPG Maker*, although still maintaining some key differences.
The **Event** word meaning is fundamentally different from **C# events** or **UnityEvents**.

**Event** stands for some kind of **object** that triggers an action or a series of actions. We call these actions **Blocks**.
Chaining multiple blocks in an **Event Handler** lets us make complex and non-standard sequences, much like how it happens in RPG Maker.

It's also **easily expandable** as more blocks can be added into it without affecting the flow of other events or how the system itself works.

## Table of Contents

+ Events
    + Event structure and design choices
    + Trigger type and conditions
    + Adding/Removing Blocks
    + Block types
        + [Dialogue Block](blocktypes/dialogueevents)
        + [Choice Block](blocktypes/choiceevents)
        + [Fade Block](blocktypes/fadeevents)
        + [Wait Block](blocktypes/waitevents)
        + [Teleport To Block](blocktypes/teleportevents)
        + [Change Map Block](blocktypes/changemapevents)
        + [Change Sprite Block](blocktypes/changespriteevents)
        + Condition Block
        + Give Item Block
        + Give Unimon Block
        + Battle Block
        + Branch Block
        + Jump Block
        + Turn Block
        + Movement Block
        + Relative Movement Block
        + Multi Movement Block
        + Set GameObject State Block
        + Set Bool GlobalVariable Block
        + Set Internal Event State Block
        + Camera Movement Block
    + Event State