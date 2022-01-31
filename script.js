let prato = null;
let bebida = null;
let sobremesa = null;
let nome = null;
let endereco = null;

function selecionando(categoria,produto){
    let sectionCategoria = document.querySelectorAll(".categoria");
    let jaSelecionado = sectionCategoria[categoria].querySelector(".selecionado");
    let selecionado = sectionCategoria[categoria].querySelectorAll(".produto");

    if(jaSelecionado !== null)
        jaSelecionado.classList.remove("selecionado");

    selecionado[produto].classList.add("selecionado");

    let nome = selecionado[produto].querySelector("h3").innerHTML;
    let valor = selecionado[produto].querySelector(".valor").innerHTML;

    let biblio = {nome:nome,valor:parseFloat(valor.substring(3,valor.length).replace(",","."))}; 

    if(categoria == 0)
        prato = biblio;
    else if(categoria == 1)
        bebida = biblio;
    else
        sobremesa = biblio;
    
    habilitarConfirmar();
}

function habilitarConfirmar(){
    let botao = document.querySelector(".botao");
    if(botao.classList.contains("desabilitado")){
        if(prato!==null && bebida!==null && sobremesa!==null){
            botao.innerHTML = "Fechar pedido";
            botao.classList.remove("desabilitado");
            botao.classList.add("habilitado");
        }
    }
}

function fecharpedido(){
    let telaConfirmacao = document.querySelector(".bg-confirmacao");

    telaConfirmacao.querySelector(".prato-nome").innerHTML = prato.nome;
    telaConfirmacao.querySelector(".prato-valor").innerHTML = prato.valor.toFixed(2).replace('.',',');
    telaConfirmacao.querySelector(".bebida-nome").innerHTML = bebida.nome;
    telaConfirmacao.querySelector(".bebida-valor").innerHTML = bebida.valor.toFixed(2).replace('.',',');
    telaConfirmacao.querySelector(".sobremesa-nome").innerHTML = sobremesa.nome;
    telaConfirmacao.querySelector(".sobremesa-valor").innerHTML = sobremesa.valor.toFixed(2).replace('.',',');
    
    let total = prato.valor + bebida.valor +sobremesa.valor;
    telaConfirmacao.querySelector(".total-valor").innerHTML = `R$ ${total.toFixed(2).replace('.',',')}`;

    telaConfirmacao.classList.remove("escondido");

    obterDados();
}

function obterDados(){
    nome = prompt("Insira seu nome:");
    endereco = prompt("Insira seu endereco:");
}

function pedir(){

}

function cancelar(){
    let telaConfirmacao = document.querySelector(".bg-confirmacao");
    telaConfirmacao.classList.add("escondido");
}