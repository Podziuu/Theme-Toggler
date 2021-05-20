const btn = document.querySelector("button");
const icon = document.querySelector(".icon");
const sun1 = document.querySelector(".sun1")

btn.addEventListener("click", function() {
    document.body.classList.toggle("dark");
    icon.classList.toggle("icon-dark");
});