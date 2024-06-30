let btn = document.querySelector("#btn")

btn.addEventListener("click",changeBg);
function changeBg(){
btn.classList.add("dark_btn");
btn.classList.remove("btn");
}