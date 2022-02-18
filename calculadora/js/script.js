let resultado = document.getElementById('resultado')
let listaValores = '0'
let listaDigitos = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
resultado.value = listaValores


function calcular(valor) {

    //checagem se o valor começa com 0 para não adicionar números grudados no 0 inicial
    //checagem se o valor esta dentro da lista de números para evitar que o valor comece com um símbolo
    if (listaValores === '0' && valor in listaDigitos ) {
        listaValores = valor
        
    } else if (valor === 'C') {
        listaValores = '0'
    } else if (valor === 'B') {
        listaValores = listaValores.slice(0, -1)
    } else if (valor === '=') {
        listaValores = eval(listaValores)
    } else {
        listaValores += valor
    }
    
    resultado.value = listaValores
}

