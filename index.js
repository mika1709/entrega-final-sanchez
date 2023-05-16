alert('¡Bienvenido a Mimaditos!');


    const mascotas = [
        { nombre: 'Firulais', edad: 5, raza: 'Chihuahua' },
        { nombre: 'Luna', edad: 3, raza: 'Poodle' },
        { nombre: 'Max', edad: 2, raza: 'Bulldog' }
    ];

    const salon = {
        nombre: 'Mimaditos',
        direccion: 'Calle 123, Ciudad',
        telefono: '555-1234',
        mascotas: mascotas
    };

    console.log(salon.nombre); // Mimaditos
    console.log(salon.mascotas[0].nombre); // Firulais

  