---
id: conditions
title: Conditions
sidebar_label: Conditions
---

A Condition is a class that's used to evaluate whatever value we want at runtime at any moment. It's mostly used within the UES.
Any condition can be quickly added by implementing the **ConditionField** abstract class in a new class.

```csharp
public abstract class ConditionField
{
    public abstract bool GetResult();
#if UNITY_EDITOR
    public abstract void DrawFields();
    public abstract string GetLabel();
#endif
}
```
*The current implementation of the ConditionField class.*


Some examples of implementation of this class can be seen in the **HasItemCondition** class or **VariableCondition** class.

<table>
    <tr>
        <td><b>GetResult()</b></td><td>This function returns the actual result of the condition evaluation with a bool.
        </td>
    </tr>
    <tr>
        <td><b>DrawFields()</b></td><td>This function draws the field in the inspector for the condition. It can be used to assign values to the condition member.
        <br /><br /><i>Note: using the EditorGUILayout class can simplify the process.</i></td>
    </tr>
    <tr>
        <td><b>GetLabel()</b></td><td>This function returns the label to be displayed on top of a branch block.</td>
    </tr>
</table>