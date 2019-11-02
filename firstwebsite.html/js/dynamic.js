window.addEventListener("keydown", event => {
    if (event.key == "p") {
        document.body.style.background = "purple";
    }
});

window.addEventListener("keyup", event => {
    if (event.key == "p") {
        document.body.style.background = "";
    }
});

confirm('Hey, user, is this ok?'); // returns true or false

prompt('Enter a string'); // returns string that was entered