---
id: dialogueevents
title: Dialogue Block
sidebar_label: Dialogue Block
---

The **Dialogue Block** allows us to display a text message and control its behaviour (how much should we wait after the text finished and if we should await input after that).

<center><img src="/static/img/blocks/dialogueblock.png" /></center>

The **Message** field supports Rich Text. There are also some codes that gets automatically parsed into other values, for example:
+ **@p** becomes the _Player_ name.
+ **@$** becomes the _cash_.

*(For more informations about the messages and dialogue box, please refer to the [DialogueBox](dialogueevents) documentation.)*

The **Pause** field determines how many seconds the game will wait *after* the text has finished displaying and the **Wait for input** field determines if the game should wait for input *after* the pause seconds elapsed.