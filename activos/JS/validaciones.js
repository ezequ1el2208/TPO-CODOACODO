//Obtengo todos los inputs
const inputs = document.querySelectorAll('.contacto__input');

inputs.forEach( input => {
    input.addEventListener('blur', (input) =>{
        validar(input.target);
    })
});

function validar(input){
    const tipoDeInput = input.dataset.tipo;
    if(input.validity.valid){
        input.parentElement.classList.remove("contacto__invalido");
        input.parentElement.querySelector(".contacto__error").innerHTML = '';

    }else{
        input.parentElement.classList.add("contacto__invalido");
        input.parentElement.querySelector(".contacto__error").innerHTML = mostrarMensajeError(tipoDeInput, input);
    }
};

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch"
];

const mensajeDeError = {
    nombre: {
        valueMissing: "El campo nombre no puede estar vacío"
    },
    apellido: {
        valueMissing: "El campo apellido no puede estar vacío"
    },
    email: {
        valueMissing: "El campo email no puede estar vacío",
        typeMismatch: "El correo no es valido"
    },
    numero:{
        valueMissing: "Este campo no puede estar vacío",
        patternMismatch: "El formato requerido es de 10 numeros"
    },
}

function mostrarMensajeError(tipoDeInput, input){
    let mensaje = '';
    tipoDeErrores.forEach(error =>{
        if(input.validity[error]){
            // console.log(tipoDeInput, error);
            // console.log(input.validity[error]);
            // console.log(mensajeDeError[tipoDeInput][error]);
            mensaje = mensajeDeError[tipoDeInput][error];
        }
    })
    return mensaje
}


