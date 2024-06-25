var meuFormulario = document.getElementById("formulario");
meuFormulario.addEventListener("submit", function(event) {
  event.preventDefault();

  //Chama a função percentual
  porcentagem();

});


//Função percentual
function porcentagem() {

  //Captura o que está dentro do primeiro input no formulário
  //Number - Transforma o texto capturado em Numero
  let numero_alunos = Number(document.getElementById("numero_alunos").value);

  //Captura o que está dentro do segundo input no formulário
  //Number - Transforma o texto capturado em Numero
  let numero_ascesso_internet = Number(document.getElementById("numero_ascesso_internet").value);

  //Realiza o calculo do percentual do número de alunos com ascesso a internet
  //E a variável "porcentagem_ascesso_internet" recebe o valor da porcentagem
  let porcentagem_ascesso_internet = numero_ascesso_internet / numero_alunos * 100;

  porcentagem_ascesso_internet = porcentagem_ascesso_internet + "%"

  //Aqui vai escrever no input "porcentagem_ascesso_internet" o valor que está armazenado na variável "porcentagem_ascesso_internet"
  document.getElementById("porcentagem_ascesso_internet").value = porcentagem_ascesso_internet;


}
