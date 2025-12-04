const btn = document.getElementById("toggleBtn");
const painel = document.getElementById("painel");

btn.addEventListener("click", () => {
  painel.style.display = painel.style.display === "block" ? "none" : "block";
});

// material de estudo.