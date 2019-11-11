# Objects
Object is like a blueprint of set of data form of **key** and **value** pairs. These keys can be variables or functions and are called **properties** and **methods**, respectively, in the context of an object.

### Creating an Object Literal Notation

```javascript
    var hotel = {
        // This are the PROPERTIES
        name: 'Joe',
        rooms: 40,
        booked: 25,
        // This is the METHOD
        checkAvailability: function() {
            return this.rooms - this.booked;
        }
    }
```

### Accesing an Object and Dot Notation

```javascript
var hotelName = hotel.name;
var roomsFree = hotel.checkAvailability();
```

**You can also access the properties or methods with a bracket.**

```javascript
var hotelName = hotel['name'];
var roomsFree = ['hotelcheckAvailability']();
```

### Creating an Object: Constructor Notation

This method creates a blank object. You can then add properties and methods to the object.

```javascript
    var hotel = new Object();
    // This are the PROPERTIES
    hotel.name: 'Joe',
    hotel.rooms: 40,
    hotel.booked: 25,
    // This is the METHOD
    hotel.checkAvailability: function() {
        return this.rooms - this.booked;
    }
```

### Updating an Object

```javascript
hotel.name = 'Park';
```

```javascript
hotel['name'] = 'Park';
```

**Delete a Property**

```javascript
delete hotel.name;
```

**Clear Value or Property**

```javascript
hotel.name = '';
```

# DOM
***Document Object Model***<br />
It is a data structure that you can read or modify. It acts as a live data structure: when it’s modified, the page on the screen is updated to reflect the changes.<br />

The DOM is orginized like a tree. The Objects have properties such as parentNode and childNodes which it can be use to navigate to the tree.

### Catching DOM Queries

```javascript
getElementById('one');
var itemOne = getElementById('two');
```

**This code will tell HTML to assign <p> with the id demo to "Hello World!"**

```html
<!DOCTYPE html>
<html>
<body>
<h2>My First Page</h2>
<p id="demo"></p>
</body>
</html>
```

```javascript
document.getElementById("demo").innerHTML = "Hello World!";
```

