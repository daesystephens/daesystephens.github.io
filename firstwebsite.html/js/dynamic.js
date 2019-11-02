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


var numIcecream = prompt("Choose a number from 1 to 10 to tell me how many icecreams  you want. And I will tell you wich flavors you will get:");
num = Number(numIcecream);
var flavors = ['vanilla', 'chocolate', 'strawberry', 'mango', 'pinapple', 'watermelon', 'cherry', 'bubblegum', 'chocolate mint', 'cookie dough'];
var answr = 'You will get :';

if (numIcecream != null){
    for (var i = 1; i < 11; i++) {
        if (num !== i) {
            numIcecream = prompt("Opps, Please try again another number from 1 to 10");
        }
        else {
            for (var k = 0; k < num - 1; k++){
                    answr += flavors[k] + ' ice cream flavor ,';
        }
            alert(answr);
        }
    }
}
// Adding for loop after getting answer of prompt
// prompt('Enter a string'); // returns string that was entered


