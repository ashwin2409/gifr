document.addEventListener("DOMContentLoaded", function () {
    const memoryImages = document.querySelectorAll(".memory img");

    memoryImages.forEach(img => {
        img.addEventListener("click", () => {
            alert("This is a memory moment!");
        });
    });
});
