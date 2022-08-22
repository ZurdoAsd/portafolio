export default function validate(input) {
    let error = {};
    const nameRegExp = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    const correoRegExp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const telefonoRegExp = /^\d{7,14}$/;

    if (input.name && !nameRegExp.test(input.name)) {
      error.name = 'el nombre puede contener solo letras y espacios';
    }
    if (input.last && !nameRegExp.test(input.last)) {
      error.last = 'el apellido puede contener solo letras y espacios';
    }
   
    if (input.email && !correoRegExp.test(input.email)) {
        error.email = 'formato incorrecto';
      }
    
    if (input.phone && !telefonoRegExp.test(input.phone)) {
        error.phone = 'Debes ingresar mas de 7 dígitos, y solo números.';
      }
    if (input.message && input.message.length < 10)  {
      error.message =  'escribe un poco mas';
    }
    return error;
  }
