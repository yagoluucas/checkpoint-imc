window.addEventListener('DOMContentLoaded', () => {
    const botaoCalcular = document.querySelector('.js-botao-calcular')
    const peso = document.querySelector('.peso')
    const altura = document.querySelector('.altura')
    const paragrafoResultado = document.querySelector('.js-resultado')

    botaoCalcular.addEventListener('click', () => {
        if (peso.value == '' || altura.value == '') {
            paragrafoResultado.textContent = 'Insira um valor valido !'
            paragrafoResultado.classList.add('erro')
            paragrafoResultado.classList.remove('resultadoImc')
        } else {
            const valorPeso = parseFloat(peso.value)
            const valorAltura = parseFloat(altura.value)
            let calculaImc = valorPeso / (valorAltura * valorAltura)
            paragrafoResultado.classList.add('resultadoImc')
            paragrafoResultado.textContent = `seu indice de IMC é : ${calculaImc.toFixed(2)}`
            console.log('oi')
        }
    })

})