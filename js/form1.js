function borrarform() {
    document.getElementById("name").value ='';
    document.getElementById("descrip").value = '';
    document.getElementById("precio").value = '';
  }

function Verificacion() {
  var propCheck = document.getElementById('prop');
  var enviarButton = document.getElementById('enviar');
  enviarButton.disabled = !propCheck.checked;
}

var propCheck = document.getElementById('prop');
var enviar = document.getElementById('enviar');
enviar.disabled = !propCheck.checked;

propCheck.addEventListener('change', function() {
  Verificacion();
});


function Mostrar() {
  var opCheck = document.getElementById('infoter');
  var Mostrar = document.getElementById('mostarform');
  if (opCheck.checked) {
    Mostrar.style.display = 'block';
  } else {
    Mostrar.style.display = 'none';
  }
}
function validar() {
  var correo = document.getElementById('correo').value;
  var expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
  if (!expresion.test(correo)) {
    alert("Ingrese un correo valido");
    return false;
  }
  var telefono = document.getElementById('telefono').value;
  if (telefono.length !== 10 || isNaN(telefono)) {
    alert("Ingrese un telefono válido de 10 dígitos");
    return false;
  }
  var boton = document.getElementById('enviar');
  boton.disabled = true;
  boton.value = 'Enviando datos........';
  this.form.submit();
  return true;
}
