function selecionando(categoria,produto){
    let sectionCategoria = document.querySelectorAll(".categoria");
    let articleProdutos = sectionCategoria[categoria].querySelectorAll(".produto");

    for(let i=0; i<3; i++){
        let produtoUnico = articleProdutos[i];
        let check = produtoUnico.querySelector("ion-icon");
        if(i == produto){
            produtoUnico.classList.add("selecionado");
            check.classList.remove("escondido");
        }
        else{
            produtoUnico.classList.remove("selecionado");
            check.classList.add("escondido");
        }
    }

    habilitarConfirmar();
}

function habilitarConfirmar(){
    let botao = document.querySelector(".botao");
    if(botao.classList.contains("desabilitado")){
        let selecionados = document.querySelectorAll(".selecionado");
        if(selecionados.length == 3){

            botao.innerHTML = "Fechar pedido";
            botao.classList.remove("desabilitado");
            botao.classList.add("habilitado");
        }
    }
}