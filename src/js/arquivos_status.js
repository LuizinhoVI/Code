// variaveis globais dos arquivo/*style*/`

const total_de_arquivos = 46; //arquivos totais



// variaveis dos nomes dos aquivos


function card() {
    let button = document.getElementsByClassName('pag-projeto-numero-button');
    let nome_arquivo = document.querySelector('.js_nome_arquivo')
    let numeros = document.getElementsByClassName('pag-projeto-numero-button');
    let pag_projeto = document.querySelector('.pag-projeto');

    pag_projeto.src = "../arquivos/HTML_JS_CSS/CARD 00/"
    nome_arquivo.textContent = "CARD 0 ";
    



    //remover todos os botões numericos 
    for (let remover = 0; remover < button.length; remover++) {
    button[remover].style.display = "none";
    }


    // vai mostrar os botões das escolhas dos arquivos
    for (let index = 0; index < 10; index++) {
        button[index].style.display = "block";


        numeros[index].addEventListener("click", function (event) {
                  
  if (event.target === numeros[index]) {
      nome_arquivo.textContent="CARD "+index+" "
      pag_projeto.src = "../arquivos/HTML_JS_CSS/CARD 0" + index + "/"
      // tem que seguir a mesma ordem de sequencia das pastas 
            }

 });
    
    }
}


function button() {
    let button = document.getElementsByClassName('pag-projeto-numero-button');
    let nome_arquivo = document.querySelector('.js_nome_arquivo')
    let numeros = document.getElementsByClassName('pag-projeto-numero-button');
    let pag_projeto = document.querySelector('.pag-projeto');

   
   //nomes padrões 
    pag_projeto.src = "../arquivos/HTML_JS_CSS/BUTTON 00/index.html"
    nome_arquivo.textContent = "BUTTON 0"
    
    // vai mostrar os botões das escolhas dos arquivos

    //remover todos os botões numericos 
    for (let remover = 0; remover < button.length; remover++) {
    button[remover].style.display = "none";
    }

    for (let index = 0; index < 4; index++) {
        button[index].style.display = "block";

            
        

        numeros[index].addEventListener("click", function (event) {
            
            if (event.target === numeros[index]) {
                nome_arquivo.textContent = "BUTTON " + index + " ";
                pag_projeto.src = "../arquivos/HTML_JS_CSS/BUTTON 0" + index + "/";
                // tem que seguir a mesma ordem de sequencia das pastas 
            }

        });
    }
}
    
function switches() {
    let button = document.getElementsByClassName('pag-projeto-numero-button');
    let nome_arquivo = document.querySelector('.js_nome_arquivo')
    let numeros = document.getElementsByClassName('pag-projeto-numero-button');
    let pag_projeto = document.querySelector('.pag-projeto');

   
   //nomes padrões 
    pag_projeto.src = "../arquivos/HTML_JS_CSS/Toggle switches 00"
    nome_arquivo.textContent = "SWITCHES 0"
    
    // vai mostrar os botões das escolhas dos arquivos

    //remover todos os botões numericos 
    for (let remover = 0; remover < button.length; remover++) {
    button[remover].style.display = "none";
    }

    for (let index = 0; index < 6; index++) {
        button[index].style.display = "block";

    
        numeros[index].addEventListener("click", function (event) {
            
            if (event.target === numeros[index]) {
                nome_arquivo.textContent = "SWITCHES " + index + "";
                pag_projeto.src = "../arquivos/HTML_JS_CSS/Toggle switches 0" + index + "/"
                // tem que seguir a mesma ordem de sequencia das pastas 
            }

        });
    }
}
    
function form() {
    let button = document.getElementsByClassName('pag-projeto-numero-button');
    let nome_arquivo = document.querySelector('.js_nome_arquivo')
    let numeros = document.getElementsByClassName('pag-projeto-numero-button');
    let pag_projeto = document.querySelector('.pag-projeto');

   
   //nomes padrões 
    pag_projeto.src = "../arquivos/HTML_JS_CSS/FORMS 00"
    nome_arquivo.textContent = "FORMS 0"
    
    // vai mostrar os botões das escolhas dos arquivos

    //remover todos os botões numericos 
    for (let remover = 0; remover < button.length; remover++) {
    button[remover].style.display = "none";
    }

    for (let index = 0; index < 6; index++) {
        button[index].style.display = "block";

    
        numeros[index].addEventListener("click", function (event) {
            
            if (event.target === numeros[index]) {
                nome_arquivo.textContent = "FORMS  " + index + "";
                pag_projeto.src = "../arquivos/HTML_JS_CSS/FORMS 0" + index + "/"
                // tem que seguir a mesma ordem de sequencia das pastas 
            }

        });
    }
}
    

function loader() {
    let button = document.getElementsByClassName('pag-projeto-numero-button');
    let nome_arquivo = document.querySelector('.js_nome_arquivo')
    let numeros = document.getElementsByClassName('pag-projeto-numero-button');
    let pag_projeto = document.querySelector('.pag-projeto');

   
   //nomes padrões 
    pag_projeto.src = "../arquivos/HTML_JS_CSS/LOADER 00"
    nome_arquivo.textContent = "LOADER  0"
    
    // vai mostrar os botões das escolhas dos arquivos

    //remover todos os botões numericos 
    for (let remover = 0; remover < button.length; remover++) {
    button[remover].style.display = "none";
    }

    for (let index = 0; index < 6; index++) {
        button[index].style.display = "block";

    
        numeros[index].addEventListener("click", function (event) {
            
            if (event.target === numeros[index]) {
                nome_arquivo.textContent = "LOADER   " + index + "";
                pag_projeto.src = "../arquivos/HTML_JS_CSS/LOADER 0" + index + "/"
                // tem que seguir a mesma ordem de sequencia das pastas 
            }

        });
    }
    }


