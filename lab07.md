# OOP ***Object Oriented Programming***

1. It creates individual objects from a common object
2. It works with Inheritance

For me is like creating a blueprint of a house. Where an architect is planning to use the same model for track homes for a new neighborhood. And because each house is going to be painted a different color, different color of the roof, stucco, and decorative rock wall. The architect will have to reuse the same blueprint for all the houses and only changing the attributes.

**Here an example of how OOP is created to be able to use 'n' amount of times for different humans.

```javascript
function Human (firstName, lastName, age) {
  // Note: Don't worry about 'this' yet. You'll understand it later. Follow along for now.
  this.firstName = firstName
  this.lastName = lastName
  this.age = age

  this.sayName = function () {
    console.log(`I am ${firstName} ${lastName}`)
  }
}
```

```javascript
// Creating a new person with the `new` keyword
const zell = new Human('Zell', 'Liew', 29)
```

