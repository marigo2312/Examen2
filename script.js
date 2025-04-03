// Función que muestra el formulario al hacer clic en "Continuar"
function capturaDatos() {
    // Muestra el formulario
    document.getElementById('formulario').classList.remove('hidden');

    // Obtiene el contenedor donde se agregará el checkbox
    const descuentoContainer = document.getElementById('descuento-container');

    // Verifica si el checkbox ya existe, para no agregarlo dos veces
    if (!document.getElementById('descuento')) {
        // Crea el checkbox para el descuento
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = 'descuento';

        // Crea la etiqueta para el checkbox
        const label = document.createElement('label');
        label.htmlFor = 'descuento';
        label.textContent = ' ¿Viaja al menos un niñ@?';

        // Agrega el checkbox y la etiqueta al contenedor
        descuentoContainer.appendChild(checkbox);
        descuentoContainer.appendChild(label);
    }
}

// Función para calcular el total a pagar
function calculaTotal() {
    // Obtiene los valores ingresados por el usuario
    const nombre = document.getElementById('nombre').value;
    const boletos = parseInt(document.getElementById('boletos').value) || 0;
    const horario = document.getElementById('horario').value;

    // Lista de precios según el horario de vuelo
    const precios = { 
        'mañana': 100, 
        'tarde': 150, 
        'noche': 200 
    };

    // Calcula el costo total de los boletos
    let total = boletos * precios[horario];

    // Aplica el 5% de descuento si el checkbox está marcado
    if (document.getElementById('descuento')?.checked) {
        total *= 0.95;
    }

    // Muestra el resumen en pantalla
    const resumen = document.getElementById('resumen');
    resumen.textContent = `Nombre: ${nombre}\nBoletos: ${boletos}\nTotal a pagar: $${total.toFixed(2)}\nGracias por su compra, ${nombre}`;

    // Muestra el contenedor del resultado
    document.getElementById('resultado').classList.remove('hidden');
}

// Función para limpiar los datos ingresados y ocultar los formularios
function limpiarDatos() {
    // Oculta el resumen y el formulario
    document.getElementById('resultado').classList.add('hidden');
    document.getElementById('formulario').classList.add('hidden');

    // Restablece los valores de los inputs
    document.getElementById('nombre').value = '';
    document.getElementById('boletos').value = '';

    // Limpia el contenedor del checkbox
    const descuentoContainer = document.getElementById('descuento-container');
    while (descuentoContainer.firstChild) {
        descuentoContainer.removeChild(descuentoContainer.firstChild);
    }
}
