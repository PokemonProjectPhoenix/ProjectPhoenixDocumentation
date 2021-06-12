---
id: giveunimonevents
title: Give Unimon Block
sidebar_label: Give Unimon Block
---

The **Give Unimon Block** allows us to give the player a Unimon.

<center><img src="/img/blocks/giveunimondatablock.png" /></center>
<br />
<table>
    <tr>
        <td><b>Add Unimon Type</b></td><td>The type of Unimon we want to give the player.<ul><li><b>Unimon Data:</b> the unimon is generated automatically based on a <i>UnimonData</i> and a Level.</li>
        <li><b>Unimon:</b> the unimon is pre-generated and all values can be handpicked with a custom editor.</li></ul> 
        </td>
    </tr>
    <tr>
        <td><b>Item</b></td><td>The <i>ItemData</i> object for the item we want to give. 
        </td>
    </tr>
    <tr>
        <td><b>Amount</b></td><td>The amount of the items to give.</td>
    </tr>
    <tr>
        <td><b>Custom Message</b></td><td>A custom message to be displayed instead of the standard one.<br/><br/><i>Note: this field supports rich text and custom formatting options. For more informations about the messages and dialogue box, please refer to the <a href="dialogueevents">DialogueBox</a> documentation.</i> </td>
    </tr>
    <tr>
        <td><b>Continue If Failed</b></td><td>Whether to play a separate block in case of failure or continue with the Next.</td>
    </tr>
</table>