 switch (option) {
        case 'primero': console.log('Primer contacto',listaDeNombres[0]); break;
        case 'ultimo': console.log('Ultimo contacto',listaDeNombres[listaDeNombres.length -1]); break;
        case 'todos': console.log('Todos los contactos',listaDeNombres)  break;
        case 'nuevo':
            let newContact = {
            nombre: prompt("Ingrese el nombre"),
            telefono: prompt("Ingrese el telefono"),
            correo: prompt("Ingrese el correo")
            }        
            listaDeNombres.push(newContact);
            break;
        case 'salir':  break;
        default:
            console.log(`Ha ingresado una opcion no valida`);
        }