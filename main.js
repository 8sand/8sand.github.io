// Cursor stuff

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  document.body.appendChild(canvas);

  canvas.style.position = "fixed";
  canvas.style.top = "0";
  canvas.style.left = "0";
  canvas.style.pointerEvents = "none";
  canvas.style.zIndex = "9999";

  let width = window.innerWidth;
  let height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;

  const trail = [];
  const maxTrailLength = 100;

  window.addEventListener("resize", () => {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
  });

  document.addEventListener("mousemove", (e) => {
    trail.push({ x: e.clientX, y: e.clientY });
    if (trail.length > maxTrailLength) trail.shift();
  });

  function drawTrail() {
    ctx.clearRect(0, 0, width, height);

    if (trail.length > 1) {
      ctx.beginPath();
      ctx.moveTo(trail[0].x, trail[0].y);
      for (let i = 1; i < trail.length; i++) {
        ctx.lineTo(trail[i].x, trail[i].y);
      }

      const gradient = ctx.createLinearGradient(
        trail[0].x,
        trail[0].y,
        trail[trail.length - 1].x,
        trail[trail.length - 1].y
      );
      gradient.addColorStop(0, "#00ffff");
      gradient.addColorStop(1, "#0077ff");

      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2.5;
      ctx.shadowColor = "#00eaff";
      ctx.shadowBlur = 12;
      ctx.lineJoin = "round";
      ctx.lineCap = "round";
      ctx.stroke();
    }

    requestAnimationFrame(drawTrail);
  }

  drawTrail();
});
