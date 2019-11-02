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

prompt('Enter a string'); // returns string that was entered