console.log("Hello Modere Team! I hope you enjoy my product!")
console.log("Thanks for taking the time to interview me!")

// Invite form Event Listener
let submitForm = document.getElementById('sbt')

submitForm.addEventListener('click', myFunction)

function myFunction() {
    alert("Invite Sent!")
}

// Copy link function
function copyEvent(id)
{
    var str = document.getElementById(id);
    window.getSelection().selectAllChildren(str);
    document.execCommand("Copy")

    alert("Link Copied!")
}

