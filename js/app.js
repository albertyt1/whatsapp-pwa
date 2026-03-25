const input = document.getElementById("phoneInput");
const btn = document.getElementById("nextBtn");

input.addEventListener("input", () => {
  if(input.value.length >= 8){
    btn.classList.remove("disabled");
    btn.style.background = "#25D366";
    btn.style.color = "black";
  } else {
    btn.classList.add("disabled");
    btn.style.background = "#222";
    btn.style.color = "#666";
  }
});