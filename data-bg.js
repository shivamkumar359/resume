let canvas = document.getElementById("data-bg");
if (!canvas) {
    canvas = document.createElement("canvas");
    canvas.id = "data-bg";
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.zIndex = "-5"; 
    canvas.style.pointerEvents = "none";
    document.body.appendChild(canvas);
}

const ctx = canvas.getContext("2d");
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;
const cols = Math.floor(width / 20);
const ypos = Array(cols).fill(0);

window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
});

function matrix() {
    ctx.fillStyle = "rgba(18, 18, 18, 0.05)";
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = "#00ffcc"; 
    ctx.font = "15px monospace";

    ypos.forEach((y, index) => {
        const text = String.fromCharCode(Math.random() * 128);
        const x = index * 20;
        
        ctx.globalAlpha = 0.1; 
        ctx.fillText(text, x, y);
        ctx.globalAlpha = 1.0;

        if (y > height && Math.random() > 0.975) {
            ypos[index] = 0;
        } else {
            ypos[index] = y + 20;
        }
    });
}
setInterval(matrix, 50);