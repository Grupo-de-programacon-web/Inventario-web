// validacion.js

function validarEmail(email) {
  const regex = /^[\w\.\-]+@[\w\.\-]+[?:\.?\w+]+$/;
  return regex.test(email);
}

function validarPass(pass) {
  const auxValidar = (txt) => {
    const tieneLower = /[a-z]+/.test(txt);
    const tieneUpper = /[A-Z]+/.test(txt);
    const tieneNum = /\d+/.test(txt);
    const tieneSpecial = /\W+/.test(txt);
    const tieneLargo = length(txt) > 7;

    if (tieneLower && tieneUpper && tieneNum && tieneSpecial) return "OK";

    var msg = "";

    if (!tieneLower)
      msg += "A la contraseña le faltan carácteres en minúsculas.\n";
    if (!tieneUpper)
      msg += "A la contraseña le faltan carácteres en mayúsculas.\n";
    if (!tieneNum) msg += "A la contraseña le faltan carácteres numéricos.\n";
    if (!tieneSpecial)
      msg +=
        "A la contraseña le faltan carácteres especiales (@$%&... etc.).\n";
    if (!tieneLargo)
      msg += "La contraseña debe tener un largo mínimo de 8 carácteres.\n"

    return msg;
  };

  const msg = auxValidar(pass);

  if (msg == "OK") return true;

  // Recuerden adaptar la función para usarla en el sitio web.

  alert(msg);

  return false;
}