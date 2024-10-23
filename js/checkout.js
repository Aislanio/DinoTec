const form = document.querySelector("form");





//Verificador de Form | Subimit do Form

function verificarFormulario() {
    let campos = document.querySelectorAll('.check input[type="text"], .check input[type="email"]');
    let validacao = true;

    campos.forEach((campo) => {
        if (!campo.value.trim()) {
            validacao = false;
        }
    });

    if (!validacao) {
        alert('Por favor, preencha todos os campos!');
        return false;
    }
    
}