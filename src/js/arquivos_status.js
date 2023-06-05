// variaveis globais dos arquivo/*style*/`
const ligar = true;
const desligar = false;

const total_de_arquivos = 46; //arquivos totais



// variaveis dos nomes dos aquivos


function card() {
    let button = document.getElementsByClassName('pag-projeto-numero-button');
    let nome_arquivo = document.querySelector('.js_nome_arquivo')
    let pag_projeto = document.querySelector('.pag-projeto');
    let setas_numericas = document.querySelector(".pag-projeto-numero-setas");
 
  
   
    pag_projeto.src = "../arquivos/HTML_JS_CSS/CARD 00/"
    nome_arquivo.textContent = "CARD 0 ";

   
    numeros_buttons(ligar, desligar,0);

   

    // vai mostrar os botões das escolhas dos arquivos
    for (let index = 0; index < 10; index++) {
        button[index].style.display = "block";


        
      if (index <=7) {
      setas_numericas.style.opacity ="1%"
      } else {
          setas_numericas.style.opacity ="100%"
      }

        
        button[index].addEventListener("click", function (event) {
                  
  if (event.target === button[index]) {
      nome_arquivo.textContent="CARD "+index+" "
      pag_projeto.src = "../arquivos/HTML_JS_CSS/CARD 0" + index + "/"
      // tem que seguir a mesma ordem de sequencia das pastas
    
    
    numeros_buttons(ligar, desligar,index);
  
  } 

 });
    
    }
}


function button() {
    let button = document.getElementsByClassName('pag-projeto-numero-button');
    let nome_arquivo = document.querySelector('.js_nome_arquivo')
    let numeros = document.getElementsByClassName('pag-projeto-numero-button');
    let pag_projeto = document.querySelector('.pag-projeto');
    let setas_numericas = document.querySelector(".pag-projeto-numero-setas");
   
   //nomes padrões 
    pag_projeto.src = "../arquivos/HTML_JS_CSS/BUTTON 00/index.html"
    nome_arquivo.textContent = "BUTTON 0"

    

    numeros_buttons(ligar, ligar,0);
    
    
    
    for (let index = 0; index < 4; index++) {
        button[index].style.display = "block";

              if (index <=7) {
      setas_numericas.style.opacity ="1%"
      }
        
        

        numeros[index].addEventListener("click", function (event) {
            
            if (event.target === numeros[index]) {
                nome_arquivo.textContent = "BUTTON " + index + " ";
                pag_projeto.src = "../arquivos/HTML_JS_CSS/BUTTON 0" + index + "/";
                // tem que seguir a mesma ordem de sequencia das pastas


    
                numeros_buttons(ligar, desligar,index);
                

  
            }

        });
    }
}
    
function switches() {
    let button = document.getElementsByClassName('pag-projeto-numero-button');
    let nome_arquivo = document.querySelector('.js_nome_arquivo')
    let numeros = document.getElementsByClassName('pag-projeto-numero-button');
    let pag_projeto = document.querySelector('.pag-projeto');
 let setas_numericas = document.querySelector(".pag-projeto-numero-setas");
   
   //nomes padrões 
    pag_projeto.src = "../arquivos/HTML_JS_CSS/Toggle switches 00"
    nome_arquivo.textContent = "SWITCHES 0"
  

    
    numeros_buttons(ligar, ligar,0);
    

    for (let index = 0; index < 6; index++) {
        button[index].style.display = "block";

          if (index <=7) {
    setas_numericas.style.opacity ="1%"
      }
        
    
        numeros[index].addEventListener("click", function (event) {
            
            if (event.target === numeros[index]) {
                nome_arquivo.textContent = "SWITCHES " + index + "";
                pag_projeto.src = "../arquivos/HTML_JS_CSS/Toggle switches 0" + index + "/"
                // tem que seguir a mesma ordem de sequencia das pastas

                
    numeros_buttons(ligar, desligar,index);
    
            }

        });
    }
}
    
function form() {
    let button = document.getElementsByClassName('pag-projeto-numero-button');
    let nome_arquivo = document.querySelector('.js_nome_arquivo')
    let numeros = document.getElementsByClassName('pag-projeto-numero-button');
    let pag_projeto = document.querySelector('.pag-projeto');
 let setas_numericas = document.querySelector(".pag-projeto-numero-setas");
   
   //nomes padrões 
    pag_projeto.src = "../arquivos/HTML_JS_CSS/FORMS 00"
    nome_arquivo.textContent = "FORMS 0"
    

    numeros_buttons(ligar, ligar,0);
    
    for (let index = 0; index < 6; index++) {
        button[index].style.display = "block";

  if (index <=7) {
       setas_numericas.style.opacity ="1%"
      }
        



    
        numeros[index].addEventListener("click", function (event) {
            
            if (event.target === numeros[index]) {
                nome_arquivo.textContent = "FORMS  " + index + "";
                pag_projeto.src = "../arquivos/HTML_JS_CSS/FORMS 0" + index + "/"
                // tem que seguir a mesma ordem de sequencia das pastas 
            
            numeros_buttons(ligar, desligar,index);
    }

        });
    }
}
    

function loader() {
    let button = document.getElementsByClassName('pag-projeto-numero-button');
    let nome_arquivo = document.querySelector('.js_nome_arquivo');
    let numeros = document.getElementsByClassName('pag-projeto-numero-button');
    let pag_projeto = document.querySelector('.pag-projeto');
    let setas_numericas = document.querySelector(".pag-projeto-numero-setas");
   
   
   //nomes padrões 
    pag_projeto.src = "../arquivos/HTML_JS_CSS/LOADER 00"
    nome_arquivo.textContent = "LOADER  0"
 

    // deixa todos os botões invisivel e mostrar só um 
    numeros_buttons(ligar, ligar,0);
    //************************************ */

    // mostra todos os botões numericos
    for (let index = 0; index < 6; index++) {
        button[index].style.display = "block";

      if (index <=7) {
        setas_numericas.style.opacity ="1%"
      }
        

    
        numeros[index].addEventListener("click", function (event) {
            
            if (event.target === numeros[index]) {
                nome_arquivo.textContent = "LOADER   " + index + "";
                pag_projeto.src = "../arquivos/HTML_JS_CSS/LOADER 0" + index + "/";
                // tem que seguir a mesma ordem de sequencia das pastas 
           
    numeros_buttons(ligar, desligar,index);
     }

        });
    }
    }


// removedor de numeros e arquivos e buttons 
function numeros_buttons(numero,buttons,escolha) {
    let button = document.getElementsByClassName('pag-projeto-numero-button');
    

    if (buttons) {
             //remover todos os botões numericos 
    for (let remover = 0; remover < button.length; remover++) {
    button[remover].style.display = "none";
        }
        
    }

 if (numero) {
      //remover todos os botões numericos pre-selecionados azuis 
    for (let remover_class = 0; remover_class < button.length; remover_class++) {
    button[remover_class].classList.remove('pag-projeto-numero-button-on')
      }
     
    }
    
    button[escolha].classList.add('pag-projeto-numero-button-on');
  
}