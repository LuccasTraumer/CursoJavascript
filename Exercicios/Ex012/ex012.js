
function carregar()
{
    var msg = window.document.querySelector('div#text');
    var foto = window.document.querySelector('img#imagem');
    var data = new Date();
    var horas = data.getHours();
   
    msg.innerHTML = `Agora são ${horas} horas.`;
    if(horas >= 0 && horas < 12){
        // Foto do Dia 
        foto.src = 'img/manha.png';
        msg.innerHTML += `<p><strong> Bom Dia!.</strong> </p>`;
        document.body.style.background = '#f4a46f'
    } else if(horas > 12 && horas < 18){
        //  Foto da Tarde
        msg.innerHTML += `<p><strong> Boa Tarde!.</p></strong>`;
        foto.src= 'img/tarde.png'
        document.body.style.background = '#794e61';
    } else {
        // foto da Noite 
        foto.src = 'img/noite.png'
        msg.innerHTML += `<p><strong> Boa Noite!.</p></strong>`;
        document.body.style.background = '#0e386d'
    }
}