var idade = 67;

if (idade > 16 && idade < 18 ){
    console.log('Voto Opcional.');
}
else if (idade < 16 ){
    console.log('Não Vota');
} else if (idade > 18 && idade <67){
    console.log('Voto Obrigatorio');
} else if (idade >= 67){
    console.log('Opcional.');
}