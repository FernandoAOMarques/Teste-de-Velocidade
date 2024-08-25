   // Chamar a funcao
document.getElementById("form").addEventListener("submit", 
function (verificar) {
    verificar.preventDefault()
      // Obter os valores dos campos de entrada
    const veloPermi = document.getElementById("veloPermi").value;
    const veloDoCarro = document.getElementById("veloDoCarro").value;
    const resultado = document.getElementById("resultado");

      // Calcular a porcentagem da velocidade e determinar a mensagem a ser exibida

    if (veloDoCarro > veloPermi && veloDoCarro <= veloPermi * 1.2) {
        resultado.textContent = ` ${veloDoCarro} Km/h. Você ultrapassou a velocidade permitida. Multa Leve!` 
    } else if (veloDoCarro > veloPermi * 1.20) {
        resultado.textContent = `${veloDoCarro} Km/h. Você ultrapassou a velocidade permitida. Multa Grave` 
    } else {
        resultado.textContent = ` ${veloDoCarro} Km/h. Dirija sempre usando cinto de segurança!` 
}
})
