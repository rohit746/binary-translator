function translateBinaryToAscii(binary: string): string {
    return  String.fromCharCode(...binary.split(" ").map(function (char){
        return parseInt(char, 2)
    }))
}

function handleTranslate() {
    const binaryInput = (document.getElementById('binaryInput') as HTMLTextAreaElement).value;
    (document.getElementById('asciiOutput') as HTMLTextAreaElement).value = translateBinaryToAscii(binaryInput);
}

document.getElementById('translateButton')?.addEventListener('click', handleTranslate);