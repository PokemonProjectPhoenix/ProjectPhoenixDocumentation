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

### HasItemCondition
```csharp
public class HasItemCondition : ConditionField
{
    [SerializeField]
    public BaseItemData Item;

    [SerializeField]
    public int Amount;
#if UNITY_EDITOR
    public override void DrawFields()
    {
        EditorGUILayout.BeginHorizontal();
        {
            GUILayout.Label("If player has");
            Amount = EditorGUILayout.IntField(Amount);
            Item = (BaseItemData)EditorGUILayout.ObjectField(Item, typeof(BaseItemData), false);
        }
        EditorGUILayout.EndHorizontal();
    }

    public override string GetLabel()
    {
        if (Item != null)
        {
            return $"If the player has {Amount} {Item.name}{(Amount > 1 ? "s" : "")}";
        }
        else
        {
            return "If player has item condition";
        }
    }

#endif
    public override bool GetResult()
    {
        return GameController.Player.Bag.HasItem(Item, out Item item, Amount);
    }
}
```

### VariableCondition
```csharp
public class VariableCondition : ConditionField, ISerializationCallbackReceiver
{
    public GlobalVariable Variable;
    public object WantedValue;
    [SerializeField, HideInInspector]
    private byte[] _serializedValue;

    public override bool GetResult()
    {
        if (Variable != null)
            return Variable.ValueEquals(WantedValue);
        return true;
    }

#if UNITY_EDITOR
    public override void DrawFields()
    {
        GUILayout.BeginHorizontal();
        {
            GUILayout.Label("Variable");
            var tmpVariable = (GlobalVariable)EditorGUILayout.ObjectField(Variable, typeof(GlobalVariable), false);
            if (tmpVariable != Variable)
            {
                WantedValue = null;
                Variable = tmpVariable;
            }
            if (Variable == null)
                WantedValue = null;
            else
            {
                GUILayout.Label("==");
                WantedValue = Variable.GetFieldForVariableType(WantedValue);
            }
        }
        GUILayout.EndHorizontal();
    }

    public void DrawFieldsRect(Rect rect, SerializedProperty property)
    {
        EditorGUI.PropertyField(rect, property);
    }

    public override string GetLabel()
    {
        if (Variable != null)
        {
            return $"If {Variable.name} == {WantedValue}";
        }
        return "Bool variable test";
    }
#endif

    public void OnBeforeSerialize()
    {
        if (WantedValue != null)
        _serializedValue = WantedValue.Serialize();
    }

    public void OnAfterDeserialize()
    {
        if (_serializedValue != null && _serializedValue.Length > 0)
            WantedValue = _serializedValue.Deserialize();
    }
}
```