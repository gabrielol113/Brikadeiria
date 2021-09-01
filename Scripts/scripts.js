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

// Declaraçãp dp carrinho
var carro = [0,0,0,0,0,0,0,0,0,0,0,0,0];

//Declaração de váriaveis que hão de ser úteis no processo
var i,o;
let quantidade;
let paragrafo;


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
paragrafo = document.querySelector('#carro');
paragrafo.innerHTML = " ";
    for( i = 1; i < j - 1; i++){

           if(carro[i] != 0 && carro[i] > 0){
                paragrafo.innerHTML = paragrafo.innerHTML + nameBombom[i]+ ": " + carro[i] + '<br>';
            }
            else{

            }
 
        
    }
}

function exibeQuantidade(o){

        quantidade = document.querySelectorAll('#middleButton')[o-1];
        quantidade.innerHTML= " ";
        quantidade.innerHTML = quantidade.innerHTML + carro[o];
        if(quantidade.innerHTML == 0){
            quantidade.innerHTML="Quantidade";
        }

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


function enviaMensagem(){
    let name, address, link;

    name=document.getElementById("nome").value;
    address=document.getElementById("address").value;
    console.log(name);
    console.log(address);
    console.log(paragrafo.innerHTML);

    paragrafo.innerHTML.replace(/<br>/g, "%0A");
    //console.log("https://wa.me/númerodetelefonenowhatsapp?text=" + "Cliente: " + name + "%A0" + "Endereço: " + address + "%A0%A0%A0" + quantidade.innerHTML);
    link="https://wa.me/+5527995900559?text="+"Cliente: "+name.toString()+ "%0A" + "Endereço: " +address.toString()+ "%0A" + paragrafo.innerHTML.replace(/<br>/g, "%0A");
    window.open(link);
}