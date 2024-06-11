const contarVogais = (str) =>{
    str = str.toLowerCase();
    const vogais = "aeiou";
    let contagem = 0;
    for (let i = 0; i < str.length; i++) {
        if (vogais.includes(str[i])) {
            contagem++;
        }
    }
return contagem;
};

const atualizarResultado = ()=>{
    const inputString = document.getElementById('inputString').value
    const resultado = contarVogais(inputString);
    document.getElementById('result').innerText = `O número de vogais em '${inputString}' é: ${resultado}`;
};
document.getElementById('countButton').addEventListener('click', atualizarResultado);
