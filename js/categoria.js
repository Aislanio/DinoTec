let inpuntnumepreco1 = document.querySelector(".preco .inpuntnumber1");
let inpuntnumepreco2 = document.querySelector(".preco .inpuntnumber2");

inpuntnumepreco1.addEventListener('input', function() {

    let valor = this.value.replace(/\D/g, '');

    valor = valor.slice(0, 7);
    
    if(valor == ""){
        this.value = "0";
        return;
    }else{
        let numero = parseInt(valor) / 100;   
        let novoValor = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(numero);
        novoValor = novoValor.replace("R$", "");
        this.value = novoValor;
    }
    
});

inpuntnumepreco2.addEventListener('input', function() {
    let valor = this.value.replace(/\D/g, '');

    valor = valor.slice(0, 7);
    
    if(valor == ""){
        this.value = "0";
        return;
    }else{
        let numero = parseInt(valor) / 100;   
        let novoValor = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(numero);
        novoValor = novoValor.replace("R$", "");
        this.value = novoValor;
    }
});




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

//Entrega Gratis

let entregagratis = document.querySelector(".entregagratis input");

let entregaRapida = document.querySelector(".entregarapida input");

let dinoindica = document.querySelector(".dinoIndica input");

let cards = document.querySelectorAll('.card')


entregagratis.addEventListener('input', () => {
    if(entregagratis.checked){
        
        if(entregaRapida.checked || dinoindica.checked){
            console.log("True");
            cards.forEach(element => {
        
                let entregratis_card = element.querySelector('.delivery-info');
                
                if(entregratis_card){
                    setTimeout(() => {
                        ShimmerRemove()
                        element.style.display = "block";
                    }, 3000);
                    
                }
            });
            
        }else{
            ShimmerAtivo();
            cards.forEach(element => {
                element.style.display = "none";
        
                let entregratis_card = element.querySelector('.delivery-info');
                
                if(entregratis_card){
                    setTimeout(() => {
                        ShimmerRemove()
                        element.style.display = "block";
                    }, 3000);
                    
                }
            });
        }
    }else{
        
        cards.forEach(element => {
            let estiloComputado = window.getComputedStyle(element);

            if (estiloComputado.display === 'none') {
                element.style.display = "block";
            }
    
    
        });
    }
    
});

//Entrega Rapida


entregaRapida.addEventListener('input', () => {
    if(entregaRapida.checked){   
        if(entregagratis.checked || dinoindica.checked){
            cards.forEach(element => {
                console.log(element);
                let entregratis_card = element.querySelector('.delivery-rapido');
                
                if(entregratis_card){
                    setTimeout(() => {
                        ShimmerRemove()
                        element.style.display = "block";
                    }, 3000);
                    
                }
        
        
            });
        }else{
            ShimmerAtivo();
            cards.forEach(element => {
                console.log(element);
                element.style.display= "none";
                let entregratis_card = element.querySelector('.delivery-rapido');
                
                if(entregratis_card){
                    setTimeout(() => {
                        ShimmerRemove()
                        element.style.display = "block";
                    }, 3000);
                    
                }
        
        
            });
        }
        
    }else{
        cards.forEach(element => {
            let estiloComputado = window.getComputedStyle(element);

            if (estiloComputado.display === 'none') {
                element.style.display = "block";
            }
    
    
        });
    }
    
});


//Dino Indica


dinoindica.addEventListener('input', () => {
    if(dinoindica.checked){   
        console.log(dinoindica.checked);
        if(entregagratis.checked || entregaRapida.checked){
            cards.forEach(element => {
                
                let entregratis_card = element.querySelector('.dino-indica');
                
                if(entregratis_card){
                    setTimeout(() => {
                        ShimmerRemove()
                        element.style.display = "block";
                    }, 3000);
                    
                }
        
        
            });
        }else{
            ShimmerAtivo();
            cards.forEach(element => {
                
                element.style.display= "none";
                let entregratis_card = element.querySelector('.dino-indica');
                
                if(entregratis_card){
                    setTimeout(() => {
                        ShimmerRemove()
                        element.style.display = "block";
                    }, 3000);
                    
                }
        
        
            });
        }
        
    }else{
        cards.forEach(element => {
            let estiloComputado = window.getComputedStyle(element);

            if (estiloComputado.display === 'none') {
                element.style.display = "block";
            }
    
    
        });
    }
    
});



function ShimmerAtivo(){       
    let shimmerEffect = document.querySelector('.shimmer-effect');
    shimmerEffect.classList.add('ativo');
}


function ShimmerRemove(){
    let shimmerEffect = document.querySelector('.shimmer-effect');
    shimmerEffect.classList.remove('ativo');
}





//#Min - Max






