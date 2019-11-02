window.addEventListener("keydown", event => {
    if (event.key == "p") {
        document.body.style.background = "purple";
    }
    else if (event.key !== "p") {
        alert('Hey, that is not letter "p"!!!')
    }
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

// Adding for loop after getting answer of prompt
// prompt('Enter a string'); // returns string that was entered

// var numIcecream = confirm("Choose a number from 1 to 10 to tell me how many icecreams  you want. And I will tell you wich flavors you will get:");
// numIcecream = parseInt(numIcecream);
// var flavors = ['vanilla', 'chocolate', 'strawberry', 'mango', 'pinapple', 'watermelon', 'cherry', 'bubblegum', 'chocolate mint', 'cookie dough'];
// var answr = '';

// for (var i = 1; i < 11; i++) {
//     if (numIcecream !== i) {
//         alert("Opps, Please try again any a number from 1 to 10");
//     }
//     else {
//         for ( var j = 0; j < flavors.length; j++) {
//             answr += flavors[j] + 'ice cream flavor';<br />
//         }
//         document.getElementById('output').innerHTML = answr;
//     }
// }
