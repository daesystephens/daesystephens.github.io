window.addEventListener("keydown", event => {
    if (event.key == "p") {
        document.body.style.background = "purple";
    }
    // Comment this command for now to be able to use func from assigment Read08
    // else if (event.key !== "p") {
    //     alert('Hey, that is not letter "p"!!!')
    // }
});

window.addEventListener("keyup", event => {
    if (event.key == "p") {
        document.body.style.background = "";
    }
});

var userAnswer = confirm('Hey, user, do you want to continue?'); // returns true or false

if (userAnswer == true) {
    alert("Yeahhh...⭐")
}
else {
    alert("Bummer... 🍔")
}

prompt('Enter a string'); // returns string that was entered

// 1[x]Add validation on one of the user inputs.
// 2[x]Keep asking until an acceptable value is entered.
// 3[ ]Prompt the user for how many things they’d like your shop to make.
// 4[ ]Use a loop in your JavaScript to add items to the page that many times.
// 5[ ]Can functions make your code more readable ?

// var numIcecream = prompt("Choose a number from 1 to 10 to tell me how many icecreams  you want. And I will tell you wich flavors you will get:");
// num = Number(numIcecream);
// var flavors = ['vanilla', 'chocolate', 'strawberry', 'mango', 'pinapple', 'watermelon', 'cherry', 'bubblegum', 'chocolate mint', 'cookie dough'];
// var answr = 'You will get : ';

// if (numIcecream != null){
//     // for (var i = 1; i < 11; i++) {
//         // if (num !== i) {
//         //     numIcecream = prompt("Opps, Please try again another number from 1 to 10");
//         // }
//         // else {
//             for (var k = 0; k < num; k++){
//                     answr += flavors[k] + ' ice cream flavor, ';
//         }
//             alert(answr);
//         // }
//     // }
// }
// var flavors = ['vanilla', 'chocolate', 'strawberry', 'mango', 'pinapple', 'watermelon', 'cherry', 'bubblegum', 'chocolate mint', 'cookie dough'];

// var preText = 'You will get : ';

function listOfFlavors() {
    var flavors = ['vanilla', 'chocolate', 'strawberry', 'mango', 'pinapple', 'watermelon', 'cherry', 'bubblegum', 'chocolate mint', 'cookie dough'];

    var preText = 'You will get : ';
    var x;
    var text = '';

    // Get the value of the input field with id="numb"
    x = document.getElementById("num").value;

    // If x is Not a Number or less than one or greater than 10
    if (isNaN(x) || x < 1 || x > 10) {
        text = "Input not valid";
    }
    else {
        for (var k = 0; k < num; k++) {
        text += flavors[k] + ' ice cream flavor, ';
        }
    }
    document.getElementById("answr").innerHTML = text;
}




