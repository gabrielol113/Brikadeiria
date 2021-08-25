/*Declaração de estoque */

let casadinho = 50,pudim = 50,brigadeiroT = 50,redVelvet = 50,palhaItaliana = 50, tLimao = 50,Dark = 50,Morango = 50,Opereta = 50,Pimenta = 50,Caramelo = 50,Quindim = 50,Maracuja = 50;

function adicionaBombon(let x){
    pedido = 50;
    pedido = pedido + 1;
    console.log("Função funcionando");
    return pedido;

}

function tiraBombon(){
        pedido = 50;
        pedido = pedido - 1;
        console.log(pedido);
        return pedido;

}

function mostrarValor() {
    alert(document.getElementById("nome").value);
}

document.getElementById("send").onclick = function(e) {
    mostrarValor();
    e.preventDefault();
}