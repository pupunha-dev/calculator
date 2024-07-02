// https://bible-api.com/john 3:16

let idade = 40;

const erro = idade < 30 && throw new Error('Deu ruim');
console.log(erro)