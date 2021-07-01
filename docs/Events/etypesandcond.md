---
id: etypesandcond
title: Trigger Types and Conditions
---

Events can be triggered differently. There are currently four types of trigger conditions:
+ **Interact**: It requires the Player to go near the event facing it and press the *Interact* button to run the event.
+ **Collide**: It requires the Player to go and collide with the event collider or enter it to run the event.
+ **Autorun**: It starts automatically when the event is instantiated. It makes the Player busy and prevents it to move.
+ **ParallelProcess**: Works the same as **Autorun**, but it doesn't stop the Player.

In addition, there are trigger conditions that need to be met in order to trigger the event. They're based on Local Event States, for more information, refer to [Event Structure and Design](edesign)