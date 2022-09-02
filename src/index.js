import "./index.scss";

function component() {
    const element = document.createElement("div");

    element.innerText = "Hello world";
    element.classList.add("color");

    return element;
}

document.body.appendChild(component());