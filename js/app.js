(() => {
  const canvas = document.getElementById("celebration-canvas");
  const ctx = canvas.getContext("2d");
  const hearts = document.getElementById("heart-container");
  const lockScreen = document.getElementById("lock-screen");
  const lockForm = document.getElementById("lock-form");
  const passcodeInput = document.getElementById("passcode-input");
  const lockError = document.getElementById("lock-error");
  const intro = document.getElementById("intro");
  const app = document.getElementById("app");
  const letterBody = document.getElementById("letter-body");
  const letterCursor = document.getElementById("letter-cursor");
  const memoryGrid = document.getElementById("memory-grid");
  const reasonsList = document.getElementById("reasons-list");
  const cakeBtn = document.getElementById("cake-btn");
  const cakeCaption = document.getElementById("cake-caption");
  const musicBtn = document.getElementById("music-btn");
  const music = document.getElementById("bg-music");
  const unlockKey = "nimra-birthday-unlocked";

  document.getElementById("tagline").textContent = CONFIG.tagline;

  function unlockSite() {
    sessionStorage.setItem(unlockKey, "1");
    lockScreen.classList.add("hide");
    intro.hidden = false;
    setTimeout(() => lockScreen.remove(), 550);
  }

  function checkPasscode(value) {
    return String(value || "").trim().toLowerCase() === String(CONFIG.passcode || "").trim().toLowerCase();
  }

  if (sessionStorage.getItem(unlockKey) === "1") {
    lockScreen.remove();
    intro.hidden = false;
  } else {
    lockForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (checkPasscode(passcodeInput.value)) {
        lockError.hidden = true;
        unlockSite();
      } else {
        lockError.hidden = false;
        passcodeInput.value = "";
        passcodeInput.focus();
        lockForm.classList.remove("shake");
        void lockForm.offsetWidth;
        lockForm.classList.add("shake");
      }
    });
  }

  let particles = [];
  let typingTimer = null;
  let letterStarted = false;
  let cakeBlown = false;

  function resize() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
  }
  resize();
  addEventListener("resize", resize);

  function burst(x = innerWidth / 2, y = innerHeight / 3, count = 120) {
    const colors = ["#fcd34d", "#fbbf24", "#fb7185", "#f9a8d4", "#fff7ed", "#e4a051"];
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 2 + Math.random() * 6;
      particles.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2,
        g: 0.08 + Math.random() * 0.06,
        size: 2 + Math.random() * 4,
        color: colors[i % colors.length],
        life: 80 + Math.random() * 50
      });
    }
  }

  function tick() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles = particles.filter((p) => p.life > 0);
    for (const p of particles) {
      p.vy += p.g;
      p.x += p.vx;
      p.y += p.vy;
      p.life -= 1;
      ctx.globalAlpha = Math.max(p.life / 90, 0);
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x, p.y, p.size, p.size * 1.4);
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(tick);
  }
  tick();

  const heartChars = ["❤", "💕", "✨", "💖"];
  function spawnHeart() {
    const el = document.createElement("span");
    el.className = "heart";
    el.textContent = heartChars[Math.floor(Math.random() * heartChars.length)];
    el.style.left = Math.random() * 100 + "%";
    el.style.fontSize = 12 + Math.random() * 16 + "px";
    el.style.animationDuration = 6 + Math.random() * 5 + "s";
    hearts.appendChild(el);
    setTimeout(() => el.remove(), 11000);
  }
  setInterval(spawnHeart, 700);
  for (let i = 0; i < 8; i++) setTimeout(spawnHeart, i * 180);

  function showPage(id) {
    document.querySelectorAll(".page").forEach((p) => p.classList.toggle("active", p.dataset.page === id));
    document.querySelectorAll(".nav-btn").forEach((b) => b.classList.toggle("active", b.dataset.page === id));
    if (id === "letter") startLetter();
  }

  document.getElementById("main-nav").addEventListener("click", (e) => {
    const btn = e.target.closest(".nav-btn");
    if (btn) showPage(btn.dataset.page);
  });

  function startLetter() {
    if (letterStarted) return;
    letterStarted = true;
    const blocks = CONFIG.letter;
    let i = 0;
    let j = 0;
    letterBody.innerHTML = "<p></p>";
    let current = letterBody.querySelector("p");

    function type() {
      if (i >= blocks.length) {
        letterCursor.style.display = "none";
        return;
      }
      const text = blocks[i];
      if (j < text.length) {
        current.textContent += text[j];
        j += 1;
        typingTimer = setTimeout(type, 22 + Math.random() * 18);
      } else {
        i += 1;
        j = 0;
        if (i < blocks.length) {
          current = document.createElement("p");
          letterBody.appendChild(current);
          typingTimer = setTimeout(type, 280);
        } else {
          letterCursor.style.display = "none";
        }
      }
    }
    type();
  }

  CONFIG.memories.forEach((m) => {
    const card = document.createElement("article");
    card.className = "memory-card";
    card.innerHTML = `
      <div class="memory-photo">
        <span class="initial">${CONFIG.name[0]}</span>
        <img alt="${m.title}" />
      </div>
      <div class="memory-meta">
        <h3>${m.title}</h3>
        <p>${m.caption}</p>
      </div>
    `;
    const img = card.querySelector("img");
    img.hidden = true;
    img.addEventListener("load", () => {
      img.hidden = false;
      card.querySelector(".initial").hidden = true;
    });
    img.addEventListener("error", () => img.remove());
    img.src = m.src;
    memoryGrid.appendChild(card);
  });

  CONFIG.reasons.forEach((text, index) => {
    const item = document.createElement("li");
    item.className = "reason";
    item.style.animationDelay = `${index * 0.06}s`;
    item.innerHTML = `<span>${String(index + 1).padStart(2, "0")}</span><p>${text}</p>`;
    reasonsList.appendChild(item);
  });

  cakeBtn.addEventListener("click", () => {
    cakeBtn.classList.add("blown");
    burst(innerWidth / 2, innerHeight * 0.42, 160);
    cakeCaption.textContent = cakeBlown
      ? "Next wish: September 3, and forever after."
      : "Wish made. Happy birthday — see you at the aisle.";
    cakeBlown = true;
    setTimeout(() => cakeBtn.classList.remove("blown"), 2200);
  });

  fetch("audio/song.mp3", { method: "HEAD" })
    .then((r) => { if (!r.ok) musicBtn.style.display = "none"; })
    .catch(() => { musicBtn.style.display = "none"; });

  music.addEventListener("error", () => {
    musicBtn.style.display = "none";
  });

  musicBtn.addEventListener("click", async () => {
    try {
      if (music.paused) {
        await music.play();
        musicBtn.classList.add("on");
      } else {
        music.pause();
        musicBtn.classList.remove("on");
      }
    } catch {
      musicBtn.style.display = "none";
    }
  });

  function openSurprise() {
    intro.classList.add("hide");
    app.hidden = false;
    burst(innerWidth / 2, innerHeight * 0.28, 140);
    setTimeout(() => intro.remove(), 700);
  }

  intro.addEventListener("click", openSurprise);
  intro.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") openSurprise();
  });
})();
