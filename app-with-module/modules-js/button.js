export function clickButton() {
    const buttonElement = document.getElementById("start-button");
    if (buttonElement.textContent === "START") {
        buttonElement.textContent = "STOP";
    } else {
        buttonElement.textContent = "START";
    }
}
