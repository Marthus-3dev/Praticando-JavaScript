let nomeEntrada = document.getElementById("nome-entrada")

let btnTroca = document.querySelector("#btn-troca")

let visitante = document.getElementById("nome-saida")

btnTroca.addEventListener('keypress', function(){
    visitante.style.backgroundColor = "green"
})

btnTroca.addEventListener('mouseenter', () => visitante.style.fontSize = "1.6rem")

btnTroca.addEventListener('click', () => {
    visitante.textContent = nomeEntrada.value
    visitante.style.color = "red"
})

/*
btnTroca.addEventListener('click', trocarNome)

function trocarNome(){
    visitante.textContent = nomeEntrada.value
} */


/*=-=-=-=-Trocando a cor da caixa=-=-=-=*/ 

let caixaTroca = document.getElementById("caixa")

document.getElementById("btn_verde").addEventListener('click', () => { 
    caixaTroca.style.backgroundColor = "green"
    caixaTroca.style.boxShadow = "0 0 20px green"
    caixaTroca.style.color = "white"
})

document.getElementById("btn_amarelo").addEventListener('click', () => { 
    caixaTroca.style.backgroundColor = '#f9ffa6'
    caixaTroca.style.boxShadow = "0 0 20px #e9f35e"
    caixaTroca.style.color = "white"
})

document.getElementById("btn_azul").addEventListener('click', () => { 
    caixaTroca.style.backgroundColor = "blue"
    caixaTroca.style.boxShadow = "0 0 20px blue"
    caixaTroca.style.color = "white"
})

/*=-=-=-=-Simulando a adição e subtração de valor=-=-=-=*/ 

let valor = document.getElementById("valor_real
    ")