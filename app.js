function calcularIndiceRelevancia() {
    // Posições do vetor
    let vetorTags = [
        { tag: "iphone", flk: 50 },
        { tag: "apple", flk: 40 },
        { tag: "samsung", flk: 37 },
        { tag: "google", flk: 20 },
        { tag: "facebook", flk: 10 }
    ];

    // Valor de busca/entrada
    let palavraBusca = document.getElementById("palavraBusca").value.toLowerCase();

    // Verificar se a palavra-chave está presente no vetor
    let palavraEncontrada = vetorTags.find(objeto => objeto.tag === palavraBusca);
    if (!palavraEncontrada) {
        document.getElementById("resultado").innerHTML = "Palavra-chave não encontrada";
        return;
    }

    // Calculando - índice de relevância com base na posição
    let indice = vetorTags.findIndex(objeto => objeto.tag === palavraBusca);

    // Calculando - índice de relevância com equação da reta
    let m = 1 / (vetorTags.length - 1); // Coeficiente angular
    let c = 0; // Intercepto
    let indiceNormalizado = 1 - (m * indice + c); // Normalização usando a equação da reta

    // Margem de erro 5% abaixo
    let margemErro = 0.05;
    indiceNormalizado -= margemErro;

    // Validação - índice normalizado
    indiceNormalizado = Math.max(0, Math.min(indiceNormalizado, 1));

    document.getElementById("resultado").innerHTML = `
    <strong>Quantidade de compartilhamentos:</strong> ${palavraEncontrada.flk}<br>
    <strong>Índice/nível de relevância:</strong> ${interpretarNivelRelevancia(indiceNormalizado)} - ${indiceNormalizado.toFixed(2)}<br>
    `;
}

// Interpretação  do nível de relevância
function interpretarNivelRelevancia(indice) {
    if (indice >= 0.9) {
        return "Muito alto";
    } else if (indice >= 0.6) {
        return "Alto";
    } else if (indice >= 0.3) {
        return "Moderado";
    } else if (indice >= 0.1){
        return "Baixo";
    } else {
        return "Muito baixo"
    }
}