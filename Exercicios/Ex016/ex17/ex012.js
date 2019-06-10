function tabuada(){
    var num = window.document.querySelector('input#valor');
    var tab = window.document.getElementById('seltab');
    if(num.value.length == 0){
        alert('Informe um Valor!');
    }else{
        var numero = Number.parseInt(num.value);
        tab.innerHTML = '';
        for(var ini = 0;ini <= 10; ini++){
            let item = window.document.createElement('option');
            item.text = `${numero} x ${ini} = ${numero*ini}`;
            item.value=`tab${ini}`
            tab.appendChild(item);
        }

    }
}