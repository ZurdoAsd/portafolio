export default function validate(input) {
    let error = {};
    const nameRegExp = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    const correoRegExp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const telefonoRegExp = /^\d{7,14}$/;

    if (input.name && !nameRegExp.test(input.name)) {
      error.name = 'only letters and spaces';
    }
    if (input.last && !nameRegExp.test(input.last)) {
      error.last = 'only letters and spaces';
    }
   
    if (input.email && !correoRegExp.test(input.email)) {
        error.email = 'incorrect email format';
      }
    
    if (input.phone && !telefonoRegExp.test(input.phone)) {
        error.phone = 'must enter more than 7 numbers';
      }
    if (input.message && input.message.length < 10)  {
      error.message =  'write a little bit more 😆';
    }
    return error;
  }
