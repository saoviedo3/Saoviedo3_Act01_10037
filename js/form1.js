function borrarform() {
  var inputs = document.querySelectorAll('input');
  
  inputs.forEach(function(input) {
    input.value = '';
  });
}

function Verificacion() {
  var propCheck = document.getElementById('prop');
  var enviarButton = document.getElementById('enviar');
  
  if (propCheck.checked) {
    enviarButton.removeAttribute('disabled');
  } else {
    enviarButton.setAttribute('disabled', 'disabled');
  }
}

window.addEventListener('DOMContentLoaded', function() {
  var propCheck = document.getElementById('prop');
  var enviar = document.getElementById('enviar');
  
  if (propCheck.checked) {
    enviar.removeAttribute('disabled');
  } else {
    enviar.setAttribute('disabled', 'disabled');
  }
  
  propCheck.addEventListener('change', function() {
    Verificacion();
  });
});


function validar() {
  var correo = document.getElementById('correo').value;
  var telefono = document.getElementById('telefono').value;
  
  var correoValido = validarCorreo(correo);
  var telefonoValido = validarTelefono(telefono);
  
  if (!correoValido) {
    alert("Ingrese un correo válido");
    return false;
  }
  
  if (!telefonoValido) {
    alert("Ingrese un teléfono válido de 10 dígitos");
    return false;
  }
  
  var boton = document.getElementById('enviar');
  boton.disabled = true;
  boton.value = 'Enviando datos........';
  this.form.submit();
  return true;
}

function validarCorreo(correo) {
  var expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
  return expresion.test(correo);
}

function validarTelefono(telefono) {
  return telefono.length === 10 && !isNaN(telefono);
}
