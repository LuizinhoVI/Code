// variaveis globais dos arquivo/*style*/`

const total_de_arquivos = 46; //arquivos totais



// variaveis dos arquivos 
var card_ = document.querySelector('.pag-back-card');



// variaveis dos nomes dos aquivos


function card() {
    let button = document.getElementsByClassName('pag-projeto-numero-button');
    let nome_arquivo = document.querySelector('.js_nome_arquivo')
    let numeros = document.getElementsByClassName('pag-projeto-numero-button');
    let pag_projeto = document.querySelector('.pag-projeto');

    // vai mostrar os botões das escolhas dos arquivos
    for (let index = 0; index < 10; index++) {
        button[index].style.display = "block";


        numeros[index].addEventListener("click", function (event) {
                  
  if (event.target === numeros[index]) {
      nome_arquivo.textContent="Card "+index+" "
      pag_projeto.src = "../arquivos/HTML_JS_CSS/CARD 0" + index + "/"
      // tem que seguir a mesma ordem de sequencia das pastas 
            }

 });
    
    }
}

