function comprobarFecha() {
    // Obtener los valores de los campos
    const dia = document.getElementById('dia').value;
    const mes = document.getElementById('mes').value;
    const anio = document.getElementById('anio').value;

    // Crear una fecha con los valores
    const fecha = new Date(`${mes}/${dia}/${anio}`);

    // Obtener el día de la semana
    const diaSemana = fecha.getDay();

    // Comprobar si el día es laborable
    let esLaborable = false;
    if (diaSemana >= 1 && diaSemana <= 5) {
      esLaborable = true;
    }

    // Construir el mensaje con los resultados
    let mensaje = `${obtenerNombreDia(diaSemana)}, `;
    if (esLaborable) {
      mensaje += 'día laborable 👷🏽‍♂️';
    } else {
      mensaje += 'fin de semana 🥳';
    };

    // Mostrar el resultado en el elemento correspondiente
    document.getElementById('resultado').value = mensaje;
  }

  // Función para obtener el nombre del día de la semana
  function obtenerNombreDia(diaSemana) {
    switch (diaSemana) {
      case 0:
        return 'Domingo';
      case 1:
        return 'Lunes';
      case 2:
        return 'Martes';
      case 3:
        return 'Miércoles';
      case 4:
        return 'Jueves';
      case 5:
        return 'Viernes';
      case 6:
        return 'Sábado';
    }
  }