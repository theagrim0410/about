export function typingEffect() {
    const words = ["Programmer", "Web Developer", "Software Engineer","ML Engineer"];
    let index = 0;
    let letterIndex = 0;
    let currentWord = words[index];
    const typingElement = document.querySelector(".typing");

    function type() {
        if (!typingElement) return;
        if (letterIndex < currentWord.length) {
            typingElement.innerHTML += currentWord[letterIndex];
            letterIndex++;
            setTimeout(type, 100);
        } else {
            setTimeout(erase, 1500);
        }
    }

    function erase() {
        if (!typingElement) return;
        if (letterIndex > 0) {
            typingElement.innerHTML = currentWord.substring(0, letterIndex - 1);
            letterIndex--;
            setTimeout(erase, 100);
        } else {
            index = (index + 1) % words.length;
            currentWord = words[index];
            setTimeout(type, 500);
        }
    }

    type();
}
