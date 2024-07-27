function lerp(a, b, t) {
  return a + (b - a) * t;
}

function generateCheck() {
  const check = document.createElement("img");
  check.src = "assets/icon/check.svg";
  check.alt = "";
  check.classList.add("check");

  if (Math.random() > 0.5) {
    check.style.left = `${Math.random() * 10}vw`;
  } else {
    check.style.right = `${Math.random() * 10}vw`;
  }

  check.style.animationDelay = `${Math.random() * 5}s`;

  check.style.transform = `rotate(${Math.random() * 60 - 30}deg) scale(${
    Math.random() * 0.25 + 0.25
  })`;
  check.style.opacity = Math.random() * 0.5;
  document.body.appendChild(check);
}

document.addEventListener("DOMContentLoaded", () => {
  for (let i = 0; i < 20; i++) {
    generateCheck();
  }
});
