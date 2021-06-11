---
id: conditionevents
title: Condition Block
sidebar_label: Condition Block
---

The **Condition Block** allows us to execute a sequence of blocks if the set *Condition* is evaluated to true.

<center><img src="/static/img/blocks/conditionblock.png" /></center>
<br />
<table>
    <tr>
        <td><b>Condition</b></td><td>The condition type to be evaluated. Currently the avaible conditions are:
            <ul>
                <li>HasItemCondition</li>
                <li>VariableCondition</li>
            </ul>
            For more informations about <i>Conditions implementation</i>, please check the <a href="http://localhost:3000/docs/conditions">Conditions</a> documentation. 
        </td>
    </tr>
    <tr>
        <td><b>Sequence</b></td><td>The sequence of blocks to be executed if the condition is evaluated to true. The first one can be added with the <b>Add EventBlock</b> button.</td>
    </tr>
</table>