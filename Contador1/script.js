let valor = 0; // RECEBE O VALOR INICIAL DE 0

function atualizar(){ // FUNÇÃO RESPONSAVEL POR ATUALIZAR O TEXTO
    document.getElementById("contador-valor").innerText = valor; // innerText REPRESENTA O TEXTO UMA TAG E DOS SEUS FILHOS
}

function decrementar() {
    valor--; // VAI RECEBER UMA SUBTRAIR DE 1 NÚMERO
    atualizar(); // VAI EXECUTAR A FUNÇÃO, ONDE VAI VER QUE O VALOR DA VARIAVEL MUDOU E VAI MUDAR NO TEXTO DA DIV
}

function incrementar() {
    valor++; // VAI RECEBER UMA ADIÇÃO DE 1 NÚMERO
    atualizar(); // VAI EXECUTAR A FUNÇÃO, ONDE VAI VER QUE O VALOR DA VARIAVEL MUDOU E VAI MUDAR NO TEXTO DA DIV
}