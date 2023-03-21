function gay() {
    document.body.style.backgroundColor = `hsl(${Math.floor(Math.random() * 360)} 100% 85%)`;
}

addEventListener("pointerdown", gay);

