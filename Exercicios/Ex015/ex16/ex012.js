function Processar(){
    var txtinicio = window.document.querySelector('input#inicio');
    var txtfinal = window.document.querySelector('input#fim');
    var txtpasso = window.document.querySelector('input#passo');
    var divRes = window.document.querySelector('div#res');
    
    var inicio = Number(txtinicio.value);
    var final = Number(txtfinal.value);
    var passo = Number(txtpasso.value);
    divRes.innerHTML = `Contando: </br>`
    if(txtinicio.value.length ==0 || txtfinal.value.length == 0  || txtpasso.value.length == 0){
        //window.alert('Preencha os Campos');
        divRes.innerHTML = 'Impossivel Calcular.';
    }else{
    if(passo == 0){
        window.alert('Passo Invalido! Considerando passo 1.');
        passo = 1;
    }
    if(inicio > final ){
        // Decrementa
        for(var val = inicio;val >= final; val-= passo){
            divRes.innerHTML += ` ${val} \u{1F448}`;
        }
    }else if(final > inicio){
        // Incrementa
        for(var contr = inicio;contr <= final; contr+=passo){
            divRes.innerHTML += ` ${contr} \u{1F449}`
        }
        
    }
    divRes.innerHTML += `\u{1F47D}`
    
}
}