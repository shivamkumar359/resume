const color = "#00ffcc"; 

document.addEventListener("mousemove", function(e) {
    createSparkle(e.clientX, e.clientY);
});

function createSparkle(x, y) {
    const sparkle = document.createElement("div");
    sparkle.style.position = "fixed";
    sparkle.style.left = x + "px";
    sparkle.style.top = y + "px";
    sparkle.style.width = Math.random() * 4 + 2 + "px"; 
    sparkle.style.height = sparkle.style.width;
    sparkle.style.background = Math.random() > 0.5 ? "#fff" : color; 
    sparkle.style.borderRadius = "50%";
    sparkle.style.pointerEvents = "none";
    sparkle.style.boxShadow = `0 0 10px ${color}`;
    sparkle.style.zIndex = "9999";
    
    const xMove = (Math.random() - 0.5) * 30;
    const yMove = (Math.random() - 0.5) * 30;

    sparkle.animate([
        { transform: `translate(0, 0)`, opacity: 1 },
        { transform: `translate(${xMove}px, ${yMove}px)`, opacity: 0 }
    ], {
        duration: 800,
        easing: "ease-out"
    });

    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 800);
}