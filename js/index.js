var n;
var x;

function mensaje(){
n = document.getElementById('tiempo').value;
x=setInterval(showMensaje, 1000);

setTimeout(showMensaje1, 3000);

}


function showMensaje(){

  if(n>0){

    var texto = document.getElementById('tiempo');
    n--;
    texto.innerHTML=n;
  }else {
    clearInterval(x);
  }
  //alert('mensaje de una sola vez');



}

function showMensaje1(){
alert('Hola mundo JS');
}
