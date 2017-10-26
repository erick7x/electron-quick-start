
function sumar(){

if (validar()) {

alert('llene los campos');

}else {
  var cajas=document.getElementsByClassName('caja');
  var suma=0;
  for (var i = 0; i < cajas.length; i++) {
    var num= parseInt(cajas[i].value);
    suma += num;
  }

  alert('la suma es:'+suma);
}


}



function validar(){

var error=false;
  var cajas=document.getElementsByClassName('caja');
  var suma=0;
  for (var i = 0; i < cajas.length; i++) {
    if (cajas[i].value<=0) {

      cajas[i].classList.add('caja-error');
      error=true;

    }else {
      cajas[i].classList.remove('caja-error');
    }
  }

  return error;




}
