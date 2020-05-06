

let opciones = ["piedra", "papel", "tijeras","lagarto","spock"]
let eleccionJugador = prompt("Elige tu jugada: piedra, papel, tijeras, lagarto, spock")
let numeroAleatorio = [Math.floor(Math.random()*opciones.length)];
let computadorElige = opciones[numeroAleatorio]


// ELECCION DE PIEDRA POR PARTE DEL JUGADOR

if (eleccionJugador == "piedra" && computadorElige == "papel"){
    console.log("Papel tapa a piedra, PIERDES")
}
else if(eleccionJugador == "piedra" && computadorElige == "tijeras"){
    console.log("Piedra aplasta tijeras, GANASTE")
}
else if(eleccionJugador == "piedra" && computadorElige == "lagarto"){
    console.log("Piedra aplasta lagarto, GANASTE")
}
else if (eleccionJugador == "piedra" && computadorElige == "spock"){
    console.log("Spock vaporiza a piedra, PERDISTE")
}
else if (eleccionJugador == "piedra" && computadorElige == "piedra"){
    console.log("EMPATE")
}

// ELECCION DE PAPEL POR PARTE DEL JUGADOR

if (eleccionJugador == "papel" && computadorElige == "piedra"){
    console.log("Papel tapa a piedra, GANAS")
}
else if(eleccionJugador == "papel" && computadorElige == "tijeras"){
    console.log("Tijeras cortan papel, PIERDES")
}
else if(eleccionJugador == "papel" && computadorElige == "lagarto"){
    console.log("Lagarto devora papel, PIERDES")
}
else if (eleccionJugador == "papel" && computadorElige == "spock"){
    console.log("Papel desautoriza a spock, GANAS")
}
else if (eleccionJugador == "papel" && computadorElige == "papel"){
    console.log("EMPATE")
}

// ELECCION DE TIJERAS POR PARTE DEL JUGADOR

if (eleccionJugador == "tijeras" && computadorElige == "piedra"){
    console.log("Piedra aplasta tijeras, PIERDES")
}
else if(eleccionJugador == "tijeras" && computadorElige == "papel"){
    console.log("Tijeras cortan papel, GANAS")
}
else if(eleccionJugador == "tijeras" && computadorElige == "lagarto"){
    console.log("Tijeras decapitan lagarto, GANAS")
}
else if (eleccionJugador == "tijeras" && computadorElige == "spock"){
    console.log("Spock rompe tijeras, PIERDES")
}
else if (eleccionJugador == "tijeras" && computadorElige == "tijeras"){
    console.log("EMPATE")
}

// ELECCION DE LAGARTO POR PARTE DEL JUGADOR

if (eleccionJugador == "lagarto" && computadorElige == "piedra"){
    console.log("Piedra aplasta lagarto, PIERDES")
}
else if(eleccionJugador == "lagarto" && computadorElige == "papel"){
    console.log("Lagarto devora papel, GANAS")
}
else if(eleccionJugador == "lagarto" && computadorElige == "tijeras"){
    console.log("Tijeras decapitan lagarto, PIERDES")
}
else if (eleccionJugador == "lagarto" && computadorElige == "spock"){
    console.log("Lagarto envenena a Spock, GANAS")
}
else if (eleccionJugador == "lagarto" && computadorElige == "lagarto"){
    console.log("EMPATE")
}

// ELECCION DE SPOCK POR PARTE DEL JUGADOR

if (eleccionJugador == "spock" && computadorElige == "piedra"){
    console.log("Spock vaporiza a piedra, GANAS")
}
else if(eleccionJugador == "spock" && computadorElige == "papel"){
    console.log("Papel desautoriza a spock, PIERDES")
}
else if(eleccionJugador == "spock" && computadorElige == "tijeras"){
    console.log("Spock rompe tijeras, GANAS")
}
else if (eleccionJugador == "spock" && computadorElige == "lagarto"){
    console.log("Lagarto envenena a Spock, PIERDES")
}
else if (eleccionJugador == "spock" && computadorElige == "spock"){
    console.log("EMPATE")
}