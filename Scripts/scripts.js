/*Declaração de estoque */

var bombom = [0,
            /*casadinho = */50,
            /*pudim = */50,
            /*brigadeiroT = */50,
            /*redVelvet = */50,
            /*palhaItaliana = */50,
            /* tLimao = */50,
            /*Dark = */50,
            /*Morango = */50,
            /*Opereta = */50,
            /*Pimenta = */50,
            /*Caramelo = */50,
            /*Quindim = */50,
            /*Maracuja = */50];
var nameBombom = [" ","Casadinho","Pudim",
                  "Brigadeiro Tradicional",
                  "Red Velvet", "Palha Italiana",
                  "Torta de limão","Dark",
                  "Morango","Opereta","Pimenta",
                  "Caramelho","Quindim","Maracujá"];
var carro = [0,0,0,0,0,0,0,0,0,0,0,0,0];
var i;


function adicionaBombon(pedido){

    if(bombom[pedido]<=0){
        alert("Estoque insuficiente!");
    }
    else{
        bombom[pedido]--;
        carro[pedido] = carro[pedido] + 1;
        exibeCarrinho();
       // alert("Pedido adicionado ao carrinho!");
    }
    console.log(carro[pedido]);
}

function tiraBombon(pedido){
    if(carro[pedido] < 1){
         alert("Não existe o bombom " + nameBombom[pedido] + " no carrinho" );
    }
    else{
        bombom[pedido]++;
        carro[pedido] = carro[pedido] - 1;
      //  alert("Produto retirado do carrinho!");
        exibeCarrinho();
    }
}

function exibeCarrinho(){

var j = bombom.length;
let paragrafo = document.querySelector('#carro');
paragrafo.innerHTML = " ";
    for( i = 1; i < j - 1; i++){

           if(carro[i] != 0 && carro[i] > 0){
                paragrafo.innerHTML = paragrafo.innerHTML + nameBombom[i]+ ": " + carro[i] + '<br>';
            }
            else{

            }
 
        
    }
}

function exibeQuantidade(){

}

function enviaForm(){
    
    console.log("Cliente: " + name + "\n");
    console.log("Pedido: \n");
    console.log("Cliente:" + name + "\n");
    e.preventDefault();
}

function mostrarValor() {
    alert(document.getElementById("nome").value);
}

