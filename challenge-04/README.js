# Desafio da semana #4

/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function(a){
  return a ? true : false;
}

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruthy(0);
isTruthy(-0);
isTruthy('');
isTruthy(NaN);
isTruthy(false);


/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy(1);
isTruthy(2);
isTruthy('string');
isTruthy(true);
isTruthy(6);
isTruthy(6598512);
isTruthy('flavia');
isTruthy('false');

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
carro = {
  marca : 'Ford',
  modelo : 'EcoSport',
  placa : 'DFR-2536',
  ano : 2018,
  cor : 'branco',
  quantasPortas : 4,
  assentos : 5,
  quantidadePessoas : 0
};

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
var mudarCor = function(cor){
  return carro.cor = cor;
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
var obterCor = function(){
  return carro.cor;
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
var obterModelo = function(){
  return carro.modelo;
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
var obterMarca = function(){
  return carro.marca;
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
var obterMarcaModelo = function(){
  return 'Esse carro é um '+ obterMarca()+' '+ obterModelo()+' ';
}
/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.

- O método deve retornar a frase: "Já temos [X] pessoas no carro!"

- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"

- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"

- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/

// var adicionaPessoas = function(x){
//   var pluralPessoa = 'pessoas';
//   if(carro.quantidadePessoas === 1){
//       pluralPessoa = 'pessoa';
//   }

//   if(carro.assentos < x ){
//     return 'Só cabem mais' + carro.assentos + 'pessoas!'
//   }
//   if (( carro.quantidadePessoas + x) < carro.assentos ){
//       carro.quantidadePessoas += x;
//       carro.assentos -= carro.quantidadePessoas;
//       return 'Já temos ' + carro.quantidadePessoas + ' '+ pluralPessoa +'  no carro!';
//   } else {
//       return 'O carro já está lotado!';
//     }
// }

// var removePessoas = function (){
//   carro.quantidadePessoas = 0;
//   return 'Parece que todo mundo saiu! Temos' + carro.quantidadePessoas + 'pessoas agora =D'
// }

carro.adicionarPessoas = function(numeroPessoas){
  var totalPessoas = carro.quantidadePessoas + numeroPessoas;

  if(carro.quantidadePessoas === carro.assentos){
    return 'O carro já está lotado!';
  }
  
  if(totalPessoas > carro.assentos) {
    var quantasPessoasCabem = carro.assentos - carro.quantidadePessoas;
    var pluralPessoa = quantasPessoasCabem === 1 ? ' pessoa' : ' pessoas';
    return 'Só cabem mais ' + quantasPessoasCabem + pluralPessoa ' no carro!';
  }

  carro.quantidadePessoas += numeroPessoas;
  return 'Já temos ' +totalPessoas+ ' pessoas no carro!';
}

 
/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
carro.obterCor(); //azul

// Mude a cor do carro para vermelho.
carro.cor = 'vermelho';

// E agora, qual a cor do carro?
carro.obterCor() //vermelho

// Mude a cor do carro para verde musgo.
carro.cor = 'verde musgo'

// E agora, qual a cor do carro?
carro.obterCor() // verde musgo

// Qual a marca e modelo do carro?
carro.obterMarcaModelo()

// Adicione 2 pessoas no carro.
carro.adicionaPessoas(2)

// Adicione mais 4 pessoas no carro.
carro.adicionaPessoas(4)

// Faça o carro encher.
carro.adicionaPessoas(5)

// Tire 4 pessoas do carro.
carro.removePessoas();
// Adicione 10 pessoas no carro.
?

// Quantas pessoas temos no carro?
?
