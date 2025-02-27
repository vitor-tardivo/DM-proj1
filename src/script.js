function chamada(event) {
    if (event.key === 'Enter') {
        calcularIdade()
    }
}

function calcularIdade() {
    let input = document.querySelector('#inputAno').value.trim()
    let spanIdade = document.querySelector('#spanIdade')
    let spanMensagem = document.querySelector('#spanMensagem')

    let [dia, mes, ano] = [input.slice(0, 2), input.slice(2, 4), input.slice(4, 8)].map(Number)
    let hoje = new Date()
    let dataNasc = new Date(ano, mes - 1, dia)
    let resultado = hoje.getFullYear() - dataNasc.getFullYear() - (hoje < new Date(hoje.getFullYear(), mes - 1, dia))

    let proximoAniversario = new Date(hoje.getFullYear(), mes - 1, dia);
    if (hoje > proximoAniversario) {
        proximoAniversario.setFullYear(hoje.getFullYear() + 1);
    }
    let diasFaltando = Math.ceil((proximoAniversario - hoje) / (1000 * 60 * 60 * 24))
    let mensagem = `Faltam (${diasFaltando}) dias para o próximo aniversário`
    if (resultado <= 5) {
        resultado = 0
        mensagem = 'menor que 5'
    } else {
        if (resultado >= 120) {
            resultado = 0
            mensagem = 'maior que 120'
        }
    }

    spanIdade.textContent = resultado
    spanMensagem.textContent = mensagem
    document.querySelector('#inputAno').value = ''
}