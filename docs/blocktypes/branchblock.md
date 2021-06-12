---
id: branchevents
title: Branch Block
sidebar_label: Branch Block
---

The **Branch Block** allows us to execute a sequence of blocks based on the first *Condition* evaluated to true.
This block uses more Conditions and each of them is evaluated in sequence. If no Condition is evaluated to true, then the sequence in *Next block* is executed.

<center><img src="/img/blocks/branchblock.png" /></center>
<br />
<table>
    <tr>
        <td><b>Condition</b></td><td>The condition type to be evaluated, creating a branch. Currently the avaible conditions are:
            <ul>
                <li>HasItemCondition</li>
                <li>VariableCondition</li>
            </ul>
            For more informations about <i>Conditions implementation</i>, please check the <a href="http://localhost:3000/docs/conditions">Conditions</a> documentation. 
        </td>
    </tr>
    <tr>
        <td><b>Next block</b></td><td>The sequence of blocks to be executed if no condition is evaluated to be true.</td>
    </tr>
</table>