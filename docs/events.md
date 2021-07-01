---
id: events
title: About UES and Events
---

The **Unity Event System** (in short _UES_) is a system we developed that provides an Event System Similiar to _Enterbrain_'s *RPG Maker*, although still maintaining some key differences.
The **Event** word meaning is fundamentally different from **C# events** or **UnityEvents**.

**Event** stands for some kind of **object** that triggers an action or a series of actions. We call these actions **Blocks**.
Chaining multiple blocks in an **Event Handler** lets us make complex and non-standard sequences, much like how it happens in RPG Maker.
All the scripts (blocks, conditions etc) can be found in the *Assets/UES* folder.

It's also **easily expandable** as more blocks can be added into it without affecting the flow of other events or how the system itself works.

## Table of Contents

+ Events
    + [Event structure and design choices](Events/edesign)
    + [Trigger types and conditions](Events/etypesandcond)
    + Adding/Removing Blocks
    + Block types (**RENEWING**)
        + [Dialogue Block](blocktypes/dialogueevents)
        + [Choice Block](blocktypes/choiceevents)
        + [Fade Block](blocktypes/fadeevents)
        + [Wait Block](blocktypes/waitevents)
        + [Teleport To Block](blocktypes/teleportevents)
        + [Change Map Block](blocktypes/changemapevents)
        + [Change Sprite Block](blocktypes/changespriteevents)
        + [Condition Block](blocktypes/conditionevents)
        + [Give Item Block](blocktypes/giveitemevents)
        + [Give Unimon Block](blocktypes/giveunimonevents)
        + [Battle Block](blocktypes/battleevents)
        + [Branch Block](blocktypes/branchevents)
        + [Jump Block](blocktypes/jumpevents)
        + Turn Block
        + Movement Block
        + Relative Movement Block
        + Multi Movement Block
        + Set GameObject State Block
        + Set Bool GlobalVariable Block
        + Set Internal Event State Block
        + Camera Movement Block
    + Event State