function validarFormulario() {
    var campoA = document.getElementById('campoA').value;
    var campoB = document.getElementById('campoB').value;
    var mensagem = document.getElementById('mensagem');

    if (campoB > campoA) {
        mensagem.innerHTML = '<b>Formulário válido!</b>';
        mensagem.className = 'mensagem-valida';
    } else {
        mensagem.innerHTML = '<b>Formulário inválido. O número B deve ser maior que o número A.</b>';
        mensagem.className = 'mensagem-invalida';
    }
}