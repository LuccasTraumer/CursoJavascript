var agora = new Date();
var horas = agora.getHours();
if(horas >= 0 && horas <= 4){
    console.log('Boa Madrugada');
} else if(horas > 4 && horas <= 12){
    console.log('Bom Dia');
} else if(horas > 12 && horas <= 18){
    console.log('Boa Tarde');
} else if (horas > 18 && horas <= 24){
    console.log('Boa Noite');
} else if (horas > 25){
    console.log('Horario Invalido!')
}