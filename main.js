// Cursor stuff

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  document.body.appendChild(canvas);

  canvas.style.position = "fixed";
  canvas.style.top = "0";
  canvas.style.left = "0";
  canvas.style.pointerEvents = "none";
  canvas.style.zIndex = "500";



  let width = window.innerWidth;
  let height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;

  const trail = [];
  const maxTrailLength = 15;     // longer = smoother fade
  const fadeSpeed = 0.15;        // higher = faster fade

  window.addEventListener("resize", () => {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
  });

  document.addEventListener("mousemove", (e) => {
    trail.push({
      x: e.clientX,
      y: e.clientY,
      life: 1 // opacity life
    });

    if (trail.length > maxTrailLength) trail.shift();
  });

  function drawTrail() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < trail.length - 1; i++) {
      const p1 = trail[i];
      const p2 = trail[i + 1];

      p1.life -= fadeSpeed;
      if (p1.life <= 0) continue;

      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);

      ctx.strokeStyle = `rgba(0, 217, 255, ${p1.life})`;
      ctx.lineWidth = 2;          // 🔥 thinner
      ctx.shadowColor = "rgba(0, 217, 255, 0.6)";
      ctx.shadowBlur = 6;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.stroke();
    }

    // Remove dead points
    while (trail.length && trail[0].life <= 0) {
      trail.shift();
    }

    requestAnimationFrame(drawTrail);
  }

  drawTrail();
});


//Typing effect 

document.addEventListener("DOMContentLoaded", () => {
  const words = ["programming", "cybersecurity", "design", "team-work", "problem-solving"];
  const typingElement = document.getElementById("typing");
  let wordIndex = 0;
  let charIndex = 0;
  let typing = true;
  const speed = 50;

  function type() {
    const currentWord = words[wordIndex];

    if (typing) {
      typingElement.textContent = currentWord.slice(0, charIndex + 1);
      charIndex++;
      if (charIndex === currentWord.length) {
        typing = false;
        setTimeout(type, 1000);
        return;
      }
    } else {
      typingElement.textContent = currentWord.slice(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        typing = true;
        wordIndex = (wordIndex + 1) % words.length;
      }
    }

    setTimeout(type, speed);
  }

  type();
});


// Music player - unmutes on first click anywhere
const audio = document.getElementById("bg-audio");
const toggleBtn = document.getElementById("audio-toggle");
const volumeSlider = document.getElementById("audio-volume");
const icon = toggleBtn.querySelector("i");

// Start audio on first user interaction
document.addEventListener("click", () => {
  audio.volume = volumeSlider.value;
  audio.play();
  icon.classList.replace("fa-play", "fa-pause");
}, { once: true });

// Play / Pause toggle
toggleBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    icon.classList.replace("fa-play", "fa-pause");
  } else {
    audio.pause();
    icon.classList.replace("fa-pause", "fa-play");
  }
});

// Volume control
volumeSlider.addEventListener("input", () => {
  audio.volume = volumeSlider.value;
});

