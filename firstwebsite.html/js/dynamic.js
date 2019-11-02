window.addEventListener("keydown", event => {
    if (event.key == "p") {
        document.body.style.background = "purple";
    }
    else if (event.key != "p") {
        alert('Hey, that is not letter "p"!!!')
    }
});

window.addEventListener("keyup", event => {
    if (event.key == "p") {
        document.body.style.background = "";
    }
});

confirm('Hey, user, do you want to continue?'); // returns true or false

prompt('Enter a string'); // returns string that was entered