document.addEventListener('DOMContentLoaded', function () {
const texts = [
    "The best way to get an interview is to bring your best into view.",
    "intoview is not a resume optimizer; it's a resume contextualizer.",
    "intoview does not care for volume; it cares about quality.",
    "intoview does not leverage AI; it leverages humans.",
    "intoview is not LinkedIn. It is not Indeed. It brings a new perspective into view.",
    "intoview doesn't reimagine. It doesn't reinvent — intoview rethinks."
];

    let currentIndex = 0;
    let charIndex = 0;
    const typingSpeed = 50; // Typing speed in milliseconds
    const deletingSpeed = 20; // Deleting speed in milliseconds
    const delayBetweenTexts = 2200; // Delay between texts in milliseconds

    const spanElement = document.getElementById('typed');

    function type() {
        if (charIndex < texts[currentIndex].length) {
            spanElement.textContent += texts[currentIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(deleteText, delayBetweenTexts);
        }
    }

    function deleteText() {
        if (charIndex > 0) {
            spanElement.textContent = spanElement.textContent.slice(0, -1);
            charIndex--;
            setTimeout(deleteText, deletingSpeed);
        } else {
            currentIndex = (currentIndex + 1) % texts.length; // Cycle through the texts
            setTimeout(type, typingSpeed);
        }
    }

    type();
});