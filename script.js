const conteiner = document.querySelector(".conteiner")
const btnSingIn = document.getElementById("btn-sing-in");
const btnSingUp = document.getElementById("btn-sing-up");




btnSingIn.addEventListener("click", ()=>{
    conteiner.classList.remove("toggle");
})
btnSingUp.addEventListener("click", ()=>{
    conteiner.classList.add("toggle");
})