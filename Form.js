const Nombre = document.getElementById("myname");
const Apellido = document.getElementById("surname");
const correo = document.getElementById("email");
const Celular = document.getElementById("mobile");
const TerminosYcondiciones = document.getElementById("TermsAAndConditions");
const Form = document.getElementById("form");
const listInputs = document.querySelectorAll (".form-input")

 Form.addEventListener("submit", (e) => {
    e.preventDefault();
    let condicion = validacionForm();
    if (condicion) {
      enviarFormulario();
    }
  });
  
  function validacionForm() {
    Form.lastElementChild.innerHTML = "";
    let condicion = true;
    listInputs.forEach((element) => {
      element.lastElementChild.innerHTML = "";
    });
  
    if (Nombre.value.length < 1 || Nombre.value.trim() == "") {
      mostrarMensajeError("myname", "Nombre no valido*");
      condicion = false;
    }
    if (Apellido.value.length < 1 || Apellido.value.trim() == "") {
      mostrarMensajeError("surname", "Apellido no valido");
      condicion = false;
    }
    if (correo.value.length < 1 || correo.value.trim() == "") {
      mostrarMensajeError("email", "Correo no valido*");
      condicion = false;
    }
    if (
      Celular.value.length != 10 ||
      Celular.value.trim() == "" ||
      isNaN(Celular.value)
    ) {
      mostrarMensajeError("mobile", "Celular no valido*");
      condicion = false;
    }
    
    if (!TerminosYcondiciones.checked) {
      mostrarMensajeError("termsAndConditions", "Acepte*");
      condicion = false;
    } else {
      mostrarMensajeError("termsAndConditions", "");
    }
    return condicion;
  }
  
  function mostrarMensajeError(claseInput, mensaje) {
    let elemento = document.querySelector(`.${claseInput}`);
    elemento.lastElementChild.innerHTML = mensaje;
  }
  
  function enviarFormulario() {
    Form.reset();
    Form.lastElementChild.innerHTML = "Listo !!";
  }


