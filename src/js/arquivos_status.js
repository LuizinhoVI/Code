const ligar = true;
const desligar = false;
var button_reset = 0; // contador do button 
const total_button = 3; // contador do button
const total_card = 9;
const total_form = 6;
const total_input = 0;
const total_loader = 5;
const total_login = 0;
const total_switches = 6;
const total_de_arquivos = 46; //arquivos totais


//acessando o css do html
var root = document.documentElement;
root.style.setProperty('--total-projetos', '5');


// variaveis dos nomes dos aquivos
var arquivos = ["../arquivos/HTML_JS_CSS/BUTTON 0",
                "../arquivos/HTML_JS_CSS/CARD 0",
                "../arquivos/HTML_JS_CSS/FORMS 0",
                "../arquivos/HTML_JS_CSS/INPUT 0", 
                "../arquivos/HTML_JS_CSS/LOADER 0",
                "../arquivos/HTML_JS_CSS/LOGIN  0",
                "../arquivos/HTML_JS_CSS/Toggle switches 0",];

var nome_arquivo_= ["BUTTON ",
                    "CARD ",
                    "FORM ",
                    "INPUT ",
                    "LOADER ",
                    "LOGUIN ",
                    "SWITCHES "];


//***************************************************** */

function card() {
    let button = document.getElementsByClassName('pag-projeto-numero-button');
    let nome_arquivo = document.querySelector('.js_nome_arquivo')
    let pag_projeto = document.querySelector('.pag-projeto');
    let setas_numericas = document.querySelector(".pag-projeto-numero-setas");
 
  
   
    pag_projeto.src = "../arquivos/HTML_JS_CSS/CARD 00/"
    nome_arquivo.textContent = "CARD 0 ";

    numeros_buttons(ligar, desligar,0);

   
   proximo_voltar(nome_arquivo,pag_projeto,1,button_reset,total_card)

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
      nome_arquivo.textContent = nome_arquivo_[1] + index + " ";
      pag_projeto.src = arquivos[1] + index + "/"
      // tem que seguir a mesma ordem de sequencia das pastas
    



    proximo_voltar(nome_arquivo,pag_projeto,1,index,total_card)
    numeros_buttons(ligar, desligar,index);
  
  }

 });
    
    }
}


function button() {

    let button = document.getElementsByClassName('pag-projeto-numero-button');
    let nome_arquivo = document.querySelector('.js_nome_arquivo')
    let pag_projeto = document.querySelector('.pag-projeto');
    let setas_numericas = document.querySelector(".pag-projeto-numero-setas");
    
   //nomes padrões 
    pag_projeto.src = "../arquivos/HTML_JS_CSS/BUTTON 00/index.html"
    nome_arquivo.textContent = "BUTTON 0"


    numeros_buttons(ligar, ligar,0);
    
    proximo_voltar(nome_arquivo, pag_projeto, 0,button_reset,total_button);
    

    for (let index = 0; index < 4; index++) {
        button[index].style.display = "block";

              if (index <=7) {
      setas_numericas.style.opacity ="1%"
      }
        
        

        button[index].addEventListener("click", function (event) {
            
            if (event.target === button[index]) {
                nome_arquivo.textContent = nome_arquivo_[0] + index + " ";
                pag_projeto.src = arquivos[0] + index + "/";
                // tem que seguir a mesma ordem de sequencia das pastas


    
        proximo_voltar(nome_arquivo, pag_projeto, 0,index,total_button);
                numeros_buttons(ligar, desligar,index);
                
            } 
        });
    }

}
    
function switches() {
    let button = document.getElementsByClassName('pag-projeto-numero-button');
    let nome_arquivo = document.querySelector('.js_nome_arquivo')
    
    let pag_projeto = document.querySelector('.pag-projeto');
 let setas_numericas = document.querySelector(".pag-projeto-numero-setas");
   
   //nomes padrões 
    pag_projeto.src = "../arquivos/HTML_JS_CSS/Toggle switches 00"
    nome_arquivo.textContent = "SWITCHES 0"
  

    proximo_voltar(nome_arquivo,pag_projeto,6,button_reset,total_switches)
    numeros_buttons(ligar, ligar,0);
    

    for (let index = 0; index < 6; index++) {
        button[index].style.display = "block";

          if (index <=7) {
    setas_numericas.style.opacity ="1%"
      }
        
    
        button[index].addEventListener("click", function (event) {
            
            if (event.target === button[index]) {
                nome_arquivo.textContent = nome_arquivo_[6] + index + "";
                pag_projeto.src = arquivos[6] + index + "/"
                // tem que seguir a mesma ordem de sequencia das pastas

                proximo_voltar(nome_arquivo, pag_projeto, 6, index, total_switches);
                 numeros_buttons(ligar, desligar,index);
    
            }

        });
    }
}
    
function form() {
    let button = document.getElementsByClassName('pag-projeto-numero-button');
    let nome_arquivo = document.querySelector('.js_nome_arquivo')
   
    let pag_projeto = document.querySelector('.pag-projeto');
 let setas_numericas = document.querySelector(".pag-projeto-numero-setas");
   
   //nomes padrões 
    pag_projeto.src = "../arquivos/HTML_JS_CSS/FORMS 00"
    nome_arquivo.textContent = "FORMS 0"
    

    proximo_voltar(nome_arquivo, pag_projeto, 2, button_reset, total_form);
    
    numeros_buttons(ligar, ligar,0);
    
    for (let index = 0; index < 6; index++) {
        button[index].style.display = "block";

  if (index <=7) {
       setas_numericas.style.opacity ="1%"
      }
        



    
        button[index].addEventListener("click", function (event) {
            
           if (event.target === button[index]) {
                nome_arquivo.textContent = nome_arquivo_[2] + index + " ";
                pag_projeto.src = arquivos[2] + index + "/"
                // tem que seguir a mesma ordem de sequencia das pastas
            
               proximo_voltar(nome_arquivo, pag_projeto, 2, index, total_form)
               
            numeros_buttons(ligar, desligar,index);
    }

        });
    }
}


function loader() {
    let button = document.getElementsByClassName('pag-projeto-numero-button');
    let nome_arquivo = document.querySelector('.js_nome_arquivo');
    let pag_projeto = document.querySelector('.pag-projeto');
    let setas_numericas = document.querySelector(".pag-projeto-numero-setas");
   
   
   //nomes padrões 
    pag_projeto.src = "../arquivos/HTML_JS_CSS/LOADER 00"
    nome_arquivo.textContent = "LOADER  0"
 

    proximo_voltar(nome_arquivo,pag_projeto,4,button_reset,total_loader)

    // deixa todos os botões invisivel e mostrar só um 
    numeros_buttons(ligar, ligar,0);
    //************************************ */

    // mostra todos os botões numericos
    for (let index = 0; index < 6; index++) {
        button[index].style.display = "block";

      if (index <=7) {
        setas_numericas.style.opacity ="1%"
      }
        

    
        button[index].addEventListener("click", function (event) {
            
           if (event.target === button[index]) {
                nome_arquivo.textContent = nome_arquivo_[4] + index + "";
                pag_projeto.src = arquivos[4] + index + "/"
               // tem que seguir a mesma ordem de sequencia das pastas 
               
           proximo_voltar(nome_arquivo,pag_projeto,4,index,total_loader)
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


// a função vai fazer usar as laterais da esquerda e direita funcionar contando os arquivos 
function proximo_voltar(nome_arquivo,pag_projeto,numero_arquivo,contador,total_arquivo) {

    let button_direita = document.querySelector('.pag-projeto-direita');
    let button_esquerda = document.querySelector('.pag-projeto-esquerda');
    
    button_direita.addEventListener("click", function (event) {

        contador++;
        
        if (event.target === button_direita) {
                

                if (contador <= total_arquivo) {
                    
                    
                    nome_arquivo.textContent = nome_arquivo_[numero_arquivo] + contador + " ";
                    


                    pag_projeto.src = arquivos[numero_arquivo] + contador + "/";
                    


                // tem que seguir a mesma ordem de sequencia das pastas
    
                    
                    
                    numeros_buttons(ligar, desligar, contador);
                    
                console.log("contador final "+contador);
                  
                } else {

                    contador = 0;

                    // vai criar um nome e adicionar um src no arquivo 

                    nome_arquivo.textContent = nome_arquivo_[numero_arquivo] + contador + " ";
                    pag_projeto.src = arquivos[numero_arquivo] + contador + "/";


                    //****************************************** */

                    numeros_buttons(ligar, desligar, contador);
                    

                      console.log(contador);
                }
                
            }

    });
    
    button_esquerda.addEventListener("click", function (event) {

        contador--;
        
        if (event.target === button_esquerda) {
                

                if (contador <= total_arquivo && contador >= 0) {
                    
                    //adiciona os arquivos dentro do da div 
                    nome_arquivo.textContent = nome_arquivo_[numero_arquivo] + contador + " ";
                    pag_projeto.src = arquivos[numero_arquivo] + contador + "/";
                    // tem que seguir a mesma ordem de sequencia das pastas

                    //trouxe a função para poder mostra-la
                    numeros_buttons(ligar, desligar, contador);
                    
                console.log("contador final "+contador);
                  
                } else {
                    // coloca um limite dentro do contador final quando termina 
                    contador = total_arquivo;

                    // vai criar um nome e adicionar um src no arquivo 

                    nome_arquivo.textContent = nome_arquivo_[numero_arquivo] + contador + " ";
                    pag_projeto.src = arquivos[numero_arquivo] + contador + "/";


                    //****************************************** */

                    numeros_buttons(ligar, desligar, contador);
                    

                      console.log(contador);
                }
                
            }

        });
    
    
    
 }
