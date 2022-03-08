// CONSIGNA DEL TRABAJO

// 1 - Por medio de una lista de juegos 
// 2 - Ordenar los juegos de mayor precio a menor precio
// 3 - Ordenar los juegos de menor precio a mayor precio
// 4 - Ordenar los juegos alfabéticamente

const arrayJuegos = [
    { nombre:'JUST CAUSE 3 PS4', precio:'1290'},
    { nombre:'MARVELS SPIDER-MAN PS4', precio:'2490'},
    { nombre:'FIFA 22 PS4', precio:'2990'},
    { nombre:'DEMON SLAYER PS4', precio:'5990'},
    { nombre:'HORIZON FORBIDDEN WEST PS4', precio:'4990'},
    { nombre:'RESIDENT EVIL VILLAGE PS4', precio:'2650'},
    { nombre:'MORTAL KOMBAT 11 ULTIMATE PS4', precio:'1550'},
    { nombre:'GRAND THEFT AUTO PS4', precio:'3250'},
];

do { juego = prompt(`
    Segun la lista de juegos como desea ordenarlos:
    (INGRESE LA OPCION DESEADA)
    1- Ordenar los juegos de mayor precio a menor precio
    2- Ordenar los juegos de menor precio a mayor precio
    3- Ordenar los juegos alfabéticamente

    JUST CAUSE 3 PS4 ----------------------- $1290
    MARVEL'S SPIDER-MAN PS4 ------------ $2490
    FIFA 22 PS4 ------------------------------- $2990
    DEMON SLAYER PS4 --------------------- $5990
    HORIZON FORBIDDEN WEST PS4 ------- $4990
    RESIDENT EVIL VILLAGE PS4 ------------- $2650
    MORTAL KOMBAT 11 ULTIMATE PS4 ---- $1550
    GRAND THEFT AUTO PS4 ---------------- $3250`);
    }while ((juego <= 0) || (juego > 3))

//ORDENADO DE MENOR A MAYOR

if (juego == 1) {
    arrayJuegos.sort((a, b) => {         
        if(a.precio < b.precio) {
            return -1;
    }
    
        if(a.precio > b.precio) {
            return 1;
    }
    
            return 0;
        });
    
    
    alert("---- ORDENADO DE MENOR A MAYOR ----" + ("\n") +
    (arrayJuegos[0].nombre + " " + "$" + arrayJuegos[0].precio) + ("\n") +
    (arrayJuegos[1].nombre + " " + "$" + arrayJuegos[1].precio) + ("\n") +
    (arrayJuegos[2].nombre + " " + "$" + arrayJuegos[2].precio) + ("\n") +
    (arrayJuegos[3].nombre + " " + "$" + arrayJuegos[3].precio) + ("\n") +
    (arrayJuegos[4].nombre + " " + "$" + arrayJuegos[4].precio) + ("\n") +
    (arrayJuegos[5].nombre + " " + "$" + arrayJuegos[5].precio) + ("\n") +
    (arrayJuegos[6].nombre + " " + "$" + arrayJuegos[6].precio) + ("\n") +
    (arrayJuegos[7].nombre + " " + "$" + arrayJuegos[7].precio))

    console.log("---- ORDENADO DE MENOR A MAYOR ----")
    console.log(arrayJuegos[0].nombre + " " + "$" + arrayJuegos[0].precio)
    console.log(arrayJuegos[1].nombre + " " + "$" + arrayJuegos[1].precio)
    console.log(arrayJuegos[2].nombre + " " + "$" + arrayJuegos[2].precio)
    console.log(arrayJuegos[3].nombre + " " + "$" + arrayJuegos[3].precio)
    console.log(arrayJuegos[4].nombre + " " + "$" + arrayJuegos[4].precio)
    console.log(arrayJuegos[5].nombre + " " + "$" + arrayJuegos[5].precio)
    console.log(arrayJuegos[6].nombre + " " + "$" + arrayJuegos[6].precio)
    console.log(arrayJuegos[7].nombre + " " + "$" + arrayJuegos[7].precio)
    }

//ORDENADO DE MAYOR A MENOR

if ( juego == 2 ){
    arrayJuegos.sort((a, b) => {         
        if(a.precio > b.precio) {
            return -1;
    }

        if(a.precio < b.precio) {
            return 1;
    }

            return 0;
        });
    
    alert("---- ORDENADO DE MAYOR A MENOR ----" + ("\n") +
    (arrayJuegos[0].nombre + " " + "$" + arrayJuegos[0].precio) + ("\n") +
    (arrayJuegos[1].nombre + " " + "$" + arrayJuegos[1].precio) + ("\n") +
    (arrayJuegos[2].nombre + " " + "$" + arrayJuegos[2].precio) + ("\n") +
    (arrayJuegos[3].nombre + " " + "$" + arrayJuegos[3].precio) + ("\n") +
    (arrayJuegos[4].nombre + " " + "$" + arrayJuegos[4].precio) + ("\n") +
    (arrayJuegos[5].nombre + " " + "$" + arrayJuegos[5].precio) + ("\n") +
    (arrayJuegos[6].nombre + " " + "$" + arrayJuegos[6].precio) + ("\n") +
    (arrayJuegos[7].nombre + " " + "$" + arrayJuegos[7].precio))
    
    console.log("---- ORDENADO DE MAYOR A MENOR ----")
    console.log(arrayJuegos[0].nombre + " " + "$" + arrayJuegos[0].precio)
    console.log(arrayJuegos[1].nombre + " " + "$" + arrayJuegos[1].precio)
    console.log(arrayJuegos[2].nombre + " " + "$" + arrayJuegos[2].precio)
    console.log(arrayJuegos[3].nombre + " " + "$" + arrayJuegos[3].precio)
    console.log(arrayJuegos[4].nombre + " " + "$" + arrayJuegos[4].precio)
    console.log(arrayJuegos[5].nombre + " " + "$" + arrayJuegos[5].precio)
    console.log(arrayJuegos[6].nombre + " " + "$" + arrayJuegos[6].precio)
    console.log(arrayJuegos[7].nombre + " " + "$" + arrayJuegos[7].precio)
    }

//ORDENADO ALFABETICAMENTE (A-Z)

if( juego == 3 ){
    arrayJuegos.sort((a, b) => {         
        if(a.nombre < b.nombre) {
            return -1;
    }

        if(a.nombre > b.nombre) {
            return 1;
    }

            return 0;
        });

    alert("---- ORDENADO ALFABETICAMENTE ( A - Z ) ----" + ("\n") +
    (arrayJuegos[0].nombre + " " + "$" + arrayJuegos[0].precio) + ("\n") +
    (arrayJuegos[1].nombre + " " + "$" + arrayJuegos[1].precio) + ("\n") +
    (arrayJuegos[2].nombre + " " + "$" + arrayJuegos[2].precio) + ("\n") +
    (arrayJuegos[3].nombre + " " + "$" + arrayJuegos[3].precio) + ("\n") +
    (arrayJuegos[4].nombre + " " + "$" + arrayJuegos[4].precio) + ("\n") +
    (arrayJuegos[5].nombre + " " + "$" + arrayJuegos[5].precio) + ("\n") +
    (arrayJuegos[6].nombre + " " + "$" + arrayJuegos[6].precio) + ("\n") +
    (arrayJuegos[7].nombre + " " + "$" + arrayJuegos[7].precio))
    
    console.log("---- ORDENADO ALFABETICAMENTE ( A - Z ) ----")
    console.log(arrayJuegos[0].nombre + " " + "$" + arrayJuegos[0].precio)
    console.log(arrayJuegos[1].nombre + " " + "$" + arrayJuegos[1].precio)
    console.log(arrayJuegos[2].nombre + " " + "$" + arrayJuegos[2].precio)
    console.log(arrayJuegos[3].nombre + " " + "$" + arrayJuegos[3].precio)
    console.log(arrayJuegos[4].nombre + " " + "$" + arrayJuegos[4].precio)
    console.log(arrayJuegos[5].nombre + " " + "$" + arrayJuegos[5].precio)
    console.log(arrayJuegos[6].nombre + " " + "$" + arrayJuegos[6].precio)
    console.log(arrayJuegos[7].nombre + " " + "$" + arrayJuegos[7].precio)
    }


// German Ariel Becerra