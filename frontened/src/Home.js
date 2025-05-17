export function typingEffect() {
    const words = ["Python Programmer", "MERN Stack Developer", "Software Engineer"];
    let index = 0;
    let letterIndex = 0;
    let isDeleting = false;
    const typingElement = document.querySelector(".typing");

    if (!typingElement) return;

    function type() {
        const currentWord = words[index];
        const displayText = isDeleting
            ? currentWord.substring(0, letterIndex - 1)
            : currentWord.substring(0, letterIndex + 1);
        
        typingElement.textContent = displayText;

        if (!isDeleting && letterIndex === currentWord.length) {
            setTimeout(() => {
                isDeleting = true;
                setTimeout(type, 100);
            }, 1500);
        } else if (isDeleting && letterIndex === 0) {
            isDeleting = false;
            index = (index + 1) % words.length;
            setTimeout(type, 500);
        } else {
            letterIndex += isDeleting ? -1 : 1;
            setTimeout(type, isDeleting ? 50 : 100);
        }
    }

    type();
}
