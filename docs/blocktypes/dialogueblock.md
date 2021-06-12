---
id: dialogueevents
title: Dialogue Block
sidebar_label: Dialogue Block
---

The **Dialogue Block** allows us to display a text message and control its behaviour (how much should we wait after the text finished and if we should await input after that).

<center><img src="/img/blocks/dialogueblock.png" /></center>

<br />
<table>
    <tr>
        <td><b>Message</b></td><td> It determines the message to be displayed. This field supports rich text. There are also some <b>codes</b> that get automatically formatted into values, for example:
        <ul>
            <li><b>@p</b> becomes the <i>Player</i> name.</li>
            <li><b>@$</b> becomes the <i>Cash</i>.</li>
        </ul>
        <i>(For more informations about the messages and dialogue box, please refer to the <a href="dialogueevents">DialogueBox</a> documentation.)</i>
        </td>
    </tr>
    <tr>
    <td><b>Pause</b></td><td>It determines for how many seconds the game will wait <i>after</i> the text has finished displaying.</td>
    </tr>
    <tr>
    <td><b>Wait for input</b></td><td>It determines if the game should wait for input <i>after</i> the pause seconds elapsed.</td>
    </tr>
</table>