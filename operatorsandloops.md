# Comparison Operators

| __Operator__       | __Description__          |
|--------------------|--------------------------|
|``` ==``` |IS EQUAL TO               |
|```!=```  |IS NOT EQUAL TO           |
|``` ===```|STRICT EQUAL TO           |
|``` !==```|STRICT NOT EQUAL TO       |
|``` >```  |GREATER THAN              |
|``` <```  |LESS THAN                 |
|``` >=``` |GREATER THAN OR EQUAL TO |
|``` <=``` |LESS THAN OR EQUAL TO     |

# Logical Operators

[ ] **&&** logical **AND** True if both conditions are true.<br />
[ ] **||** logical **OR** True if any of the conditions are true.<br />
[ ] **!** logical **NOT** will return True if the condition is false and vice versa.<br />

# FOR LOOP
If you need to run code a specific number of times, use a **for** loop.
```javascript
for (var i = 0; i < 10; i++) {
    document.write(i);
}
```

**Result**<br />
```0123456789```<br />

# WHILE LOOP
If you do not know how many times the code should run, you can use a **while** loop.

```javascript
var answr = "";
var i = 0;
while (i < 5) {
    answr += "<br>The number is " + i;
    i++;
}
document.write(answr);
```

**Result**<br />
```the number is 0```<br />
```the number is 1```<br />
```the number is 2```<br />
```the number is 3```<br />
```the number is 4```<br />


[Back to Main Page](https://daesystephens.github.io/learning-journal)
