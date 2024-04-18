function dados() {
    // Posições do vetor
    const ds = [
        {tag: "laranja", flk: 33},
        {tag: "banana", flk: 24},
        {tag: "melão", flk: 20},
        {tag: "morango", flk: 18},
        {tag: "manga", flk: 13}
    ];
    // Valor de busca/entrada
    let tg = document.getElementById("entrada").value.toLowerCase();
    let score = 0;
    // Encontrar a palavra-chave correspondente exata
    let foundIndex = -1;
    for(let i = 0; i < ds.length; i++) {
        if (tg === ds[i].tag.toLowerCase()) {
            foundIndex = i;
            break;
        }
    }
    // Se a palavra-chave foi encontrada
    if (foundIndex !== -1) {
        // Cálculo do valor médio da folksonomia
        let totalFolksonomy = ds.reduce((acc, curr) => acc + curr.flk, 0);
        let idealFolksonomy = totalFolksonomy / ds.length;
        // Calcular o score baseado na folksonomia encontrada e no valor ideal
        score = ds[foundIndex].flk / idealFolksonomy;
        // Interpretar o score - métrica peso/medida
        let label;
        if (score >= 0.8) {
            label = "Excelente";
        } else if (score >= 0.6) {
            label = "Bom";
        } else if (score >= 0.4) {
            label = "Razoável";
        } else {
            label = "Fraco";
        }
        // Mostrar o resultado em um alert
        alert(ds[foundIndex].tag + " " + ds[foundIndex].flk + " Score: " + score.toFixed(2) + " - " + label);
    } else {
        // Se a palavra-chave não foi encontrada, mostrar um alerta
        alert("Palavra-chave não encontrada.");
    }
}