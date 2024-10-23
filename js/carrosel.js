
const img_principal = document.querySelector(".img_carrose");

function img_carrosel(event){
    let src = event.target.getAttribute('src');
    console.log(img_principal);
    console.log();
    img_principal.src = src

}


//remover tela da img expandida

let imgExpandida = document.querySelector(".img_expander");
let img_expa = document.querySelector(".img_expander img")
function remove() {
    imgExpandida.style.display = "none";

}


document.querySelectorAll(".classificacao img").forEach((img) => {
    img.addEventListener("click", (e) => {
        let img_src = e.target.getAttribute('src');
        
        img_expa.src = img_src;

        imgExpandida.style.display = "flex";
    });
});
