function translateBinaryToAscii(binary: string): string {
    return String.fromCharCode(
        ...binary.split(" ").map(function (char) {
            return parseInt(char, 2);
        })
    );
}

function translateTextToBinary(text: string): string {
    return text
        .split("")
        .map(function (char) {
            return char.charCodeAt(0).toString(2).padStart(8, "0");
        })
        .join(" ");
}

function handleTranslate() {
    const inputTypeSelect = document.getElementById("inputTypeSelect") as HTMLSelectElement;
    const inputArea = document.getElementById("inputArea") as HTMLTextAreaElement;
    const outputArea = document.getElementById("outputArea") as HTMLTextAreaElement;

    const selectedOption = inputTypeSelect.value;
    const inputValue = inputArea.value.trim();

    if (selectedOption === "binary") {
        outputArea.value = translateBinaryToAscii(inputValue);
    } else if (selectedOption === "text") {
        outputArea.value = translateTextToBinary(inputValue);
    }
}

const translateButton = document.getElementById("translateButton");
if (translateButton) {
    translateButton.addEventListener("click", handleTranslate);
}
