let chat_suporte = document.querySelector(".chat");
let icon_suport = document.querySelector(".suporte-icon");
let section = document.querySelector('section');
let header = document.querySelector('header');
let enter_chat = document.querySelector("#box-enter");
let html = document.querySelector("html")

let Usuario = "Aislânio"
let Usuario_img = 'DinoBlue'

icon_suport.addEventListener("click", (event) => {
    console.log(chat_suporte.classList.contains("on"));
    if(chat_suporte.classList.contains("on")){
        chat_suporte.classList.replace('on', 'off');

    }else{
        chat_suporte.classList.replace('off', 'on');
    }
});
section.addEventListener("click",suporte_off);
header.addEventListener("click",suporte_off);
function suporte_off(){
    if(chat_suporte.classList.contains("on")){
        chat_suporte.classList.replace('on', 'off');

    }
};

//Chat mgs

let chat_text = document.querySelector("#chat_tex");
let conversa = document.querySelector(".conversa");

enter_chat.addEventListener("click",() =>{
    if(chat_text.value != ""){
        let caixa_text = document.querySelector(".Usuario");
        let Text = chat_text.value;

        const clone_caixa_text = caixa_text.cloneNode(true);

        //Editar o clone
        clone_caixa_text.querySelector('img').src = `img/dino_avatar/${Usuario_img}.jpeg`;
        clone_caixa_text.querySelector('h3').textContent = `${Usuario}`;
        clone_caixa_text.querySelector('p').textContent = `${Text}`;
        clone_caixa_text.style.display = 'flex';

        chat_text.valeu = '';
        conversa.appendChild(clone_caixa_text);

        console.log(chat_text.valeu)
    }
    
});


/*Carrinho */







/*Scroll mini categorias Seta */
const scrollStep = 200; // Define o valor de rolagem em pixels
const scrollDelay = 100; // Define o atraso da rolagem em milissegundos

function seta_direita_categoria(event){
    console.log(event);
    let scroll = event.target;
    let irmao_scroll = scroll.nextElementSibling;
    var container_dire = "s";
    
    console.log(scroll)
    while (irmao_scroll){
        
        if (irmao_scroll && irmao_scroll.classList.contains('categorias')) {
            container_dire = irmao_scroll;
            break;
        };
        irmao_scroll = irmao_scroll.nextElementSibling;
       
    };
    
    
    container_dire.scrollBy(100,0);
};
 // seta esquerda
function seta_esquerda_categoria(event){
    let scroll = event.target;
    let irmao_scroll = scroll.nextElementSibling;
    let container_Esq = "null";
    
   
    while (irmao_scroll){
        
        if (irmao_scroll && irmao_scroll.classList.contains('categorias')) {
            container_Esq = irmao_scroll;
            break;
        };
        irmao_scroll = irmao_scroll.nextElementSibling;
       
    };
   
    container_Esq.scrollBy(-100,0);
};

/*Scroll Cards */

function seta_direita_cards(event){



    let scroll = event.target;
    
    
    let irmao_scroll = scroll.nextElementSibling;
    let container_dire = "s";
        
    while (irmao_scroll){
        if (irmao_scroll && irmao_scroll.classList.contains('container')) {
            container_dire = irmao_scroll;
            
            break;
        };
        irmao_scroll = irmao_scroll.nextElementSibling;
       
    };
    
    container_dire.scrollBy(150,0);
};

function seta_esquerda_cards(event){
    let scroll = event.target;
    let irmao_scroll = scroll.nextElementSibling;
    let container_Esq = "null";
    
    
    while (irmao_scroll){
        if (irmao_scroll && irmao_scroll.classList.contains('container')) {
            container_Esq = irmao_scroll;
            
            break;
        };
        irmao_scroll = irmao_scroll.nextElementSibling;
       
    };
   
    container_Esq.scrollBy(-150,0);
};


/*Scroll infinito  */

var contadorLoading = 1;
window.onscroll = function(ev) {
    //639
    //3985
    if ((window.scrollY) >= document.documentElement.scrollHeight - window.innerHeight - 45 && contadorLoading ===1 ) {
        
        contadorLoading++;
        loader();
        
    }
};

function loader() {
    //animação de carregamento
    let styleLoader = document.querySelector(".loader svg");
    styleLoader.style.display = "block";
    console.log("loader....")
    setTimeout(() => {
        styleLoader.style.display = "none";
    }, 3000);

    //





}