function enviar(){ 
    var ano = window.document.querySelector('input#idade');
    var sexo = window.document.getElementsByName('radsex');
    var div = window.document.querySelector('div#Sdiv');
    var dataHoje = new Date();
    var anoAtual = dataHoje.getFullYear();
    

    var idade = anoAtual - ano.value;

    var genero = "";
    var img = document.createElement('img');
    img.setAttribute('id','foto');

    if(ano.value == 0 || ano.value > anoAtual){
        alert('[ERRO] Dados invalidos tente novamente!');
    } else{
        if(sexo[0].checked)
        {
            genero = "Homem";
            if(idade >= 0 && idade < 10 ){
                // Crianca
                img.setAttribute('src','img/crianca-masc.png')

            } else if (idade > 10 && idade < 21){
                // Jovem
                img.setAttribute('src','img/jovem-masc.png')

            } else if (idade >= 21 && idade < 50){
                // Adulto
                img.setAttribute('src','img/adulto-masc.png')

            } else if(idade > 50){
                // Idoso
                img.setAttribute('src','img/idoso-masc.png');
            }

        }
        else if (sexo[1].checked)
        {
            genero = "Mulher";
            if(idade >= 0 && idade < 10 ){
                // Crianca
                img.setAttribute('src','img/crianca-femi.png');

            } else if (idade > 10 && idade < 21){
                // Jovem
                img.setAttribute('src','img/jovem-femi1.png')

            } else if (idade >= 21 && idade < 50){
                // Adulto
                img.setAttribute('src','img/adulta-femi.png')

            } else if(idade > 50){
                // Idoso
                img.setAttribute('src','img/idosa-femi.png')
            }
        }
        div.style.textAlign = 'center'
        div.innerHTML = `Detectamos ${genero} com idade ${idade}`;
        div.appendChild(img);
    }

}