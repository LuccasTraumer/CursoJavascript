let vetor = []

function adicionar(){
    var numero = window.document.querySelector('input#valor');
    var selec = window.document.getElementById('Msel');

    var num = Number(numero.value);

    if(num <= 0 || num > 100){
        alert('Numero Invalido')
    }else{
        if(vetor.indexOf(num) != -1){
            alert('Numero esta contido!')
        }
        else if(vetor.indexOf(num) == -1){
            vetor.push(num);
            let item = window.document.createElement('option');
            item.text = `Valor ${num} Adicionado!`;
            //item.text = `${vetor}`
            item.value = `selec${num}`;
            selec.appendChild(item);
        }
    }

}

function finalizar(){
    var divRes = window.document.querySelector('div#res');
    var maior = Number.MIN_VALUEp;
    var menor = Number.MAX_VALUE;
    var soma = 0;
    for(var indi = 0;indi < vetor.length;indi++)
    {
        soma += vetor[indi]
        if(vetor[indi] > maior)
        {
            maior = vetor[indi]
        }
        if (vetor[indi] < menor )
        {
            menor = vetor[indi];
        }
    }
    divRes.innerHTML = ''
    divRes.innerHTML += `</br>Ao todo, temos: ${vetor.length} numeros cadastrados</br>`;
    divRes.innerHTML += `</br> O Maior valor informado é: ${maior}</br>`;
    divRes.innerHTML += `</br> O Menor valor informado é: ${menor}</br>`;
    divRes.innerHTML += `</br> A Soma dos Valores é: ${soma}</br>`;
    divRes.innerHTML += `</br> A Média dos Valores é: ${soma/vetor.length}`;


}


/*
let item = window.document.createElement('option');
            item.text = `${numero} x ${ini} = ${numero*ini}`;
            item.value=`tab${ini}`
            tab.appendChild(item);

*/