const button = document.querySelector("button");

function greet() {
    const name = prompt("What's your name?");
    const greeting = document.querySelector("#greeting");
    greeting.textContent = `Fuck you ${name}.`;
}

button.addEventListener("click", greet);