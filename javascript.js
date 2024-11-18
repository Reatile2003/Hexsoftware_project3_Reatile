// Apply delayed animation to content
document.addEventListener("DOMContentLoaded", () => {
    const content = document.querySelector(".content");
    setTimeout(() => {
        content.style.opacity = "1";
        content.style.transform = "translateY(0)";
    }, 500);
});
