const arr = [1, 2, 3, 4, 5, 6];
for (const i of arr) {
    const div = document.querySelector(`#faq-${i} > div`);
    const para = document.querySelector(`#faq-${i} > p`);
    const svg = document.querySelector(`#faq-${i} > svg`);
    div.addEventListener("click", () => {
        if (para.classList.contains("hidden")) {
            para.classList.remove("hidden");
            para.classList.add("block");
            svg.classList.remove("rotate-0");
            svg.classList.add("rotate-45");
        }
        else {
            para.classList.remove("block");
            para.classList.add("hidden");
            svg.classList.remove("rotate-45");
            svg.classList.add("rotate-0");
        }
    });
}
