# JavaScript

When building a website it is recommended to have HTML, CSS, and JavaScript in separate files.

- **.html** files is the Content Layer (**structure**)
- **.css** files is the Presentation Layer (**paint and decoration**)
- **.js** files is the Behavior Layer (**actions to perform**)

**HTML** is like a car frame, **CSS** is like the color and decorations added into your car, and **JavaScript** is like your dashboard where you assign which action the car will take.

## Objects and Methods

```javascript
document.write('Good afternoon!');
```

- ```document``` **Object** represents the entire web page.
- ```.``` the dot is a **Member Operator** that gives you access to a member of an object
- ```write()``` is the **Method** of the *document* object allows new content to be written into the page.
- ```'Good afternoon!'``` is a **Parameter** which is the information passed to the **method**

"**The HTML ```<script>``` element is used in HTML pages to tell the browser to load the JavaScript file**"

# Basic JavaScript

+ **Script** is a series of instructions that a computer can follow one-by-one.
+ **Statement** is an individual instruction or step that ends with a semicolon.

### Comments

**Multi-line comments**

```javascript
/*Here goes the multiline comment
is used for more than one line of comment*/
```
**Single-line comment**

```javascript
// here goes the single-line comment
```

## Variable

A variable means anything that can vary. A **variable** stores data that it can change at any time.

**Declaring a Variable**

```javascript
var quantity;
```

**Assigning a Variable**

```javascript
quantity = 3;
```
## Data Types

- **Numeric:** integers, decimals and negative.

```javascript
amount = 10.75;
```

- **String:** a group of letters and/or characters.

```javascript
title = 'Harry Potter';
```

- **Boolean:** values are either true or false.

```javascript
inStock = true;
```

## Shorthand for Creating Variables

1.  Variables are declared and values assigned in the same statement.

    ```javascript
    var total = 25;
    ```

2. Three variables are declared on the same line, then values assigned to each.

    ```javascript
    var price, quantity, total ;
    price = 5;
    quantity = 14 ;
    total = price * quantity;
    ```

3. Two variables are declared and assigned values on the same line. Then one is declared and assigned a value on the next line.
    ```javascript
    var price = 5, quantity = 14;
    var total = price * quantity;
    ```

## Rules for Naming Variables

- [X]  The name must begin with a letter, dollar sign, or an underscore. It must **not** start with a number.
- [X] The name can contain letters, numbers, dollar sign, or an underscore. **MUST NOT** dash or period in a variable name
- [X] You cannot use keywords or reserved words.
- [X] All variables are case sensitive, so scores and Score are not the same.
- [X] Use a name that describes the kind of information that the variable stores.
- [X] If your variable name is made up of more than one word, use camel case (ex.camelCase).


[Back to Main Page](https://daesystephens.github.io/learning-journal)