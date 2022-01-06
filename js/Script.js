seccionUno = document.getElementById("seccion_Uno");
seccionDos = document.getElementById("seccion_Dos");
boton = document.getElementById("boton");
resultado = document.getElementById("Resultado");
edad = document.getElementById("edad")
peso = document.getElementById("peso")
altura = document.getElementById("altura")
botonVolver = document.getElementById("volver")
tipoPeso = document.getElementById("tipoPeso")
hombre = document.getElementById("hombre");
mujer = document.getElementById("mujer");
gen = 0
flechita = document.getElementById("flecha"); 

function ocultar(seccion) {
    seccion.style = "display:none;"
}
function mostrar(seccion) {
    seccion.style = "display:block"
}
function calcular(peso, altura) {
    if (peso.value > 0 && altura.value > 0 && edad.value > 0 && gen == 1) {
        ocultar(seccionUno)
        mostrar(seccionDos)
        resultar = `${eval(peso.value / (altura.value ** 2))}`
        if (resultar > 0 && resultar < 10) {
            if (resultar % 1 == 0) {
                resultado.innerHTML = resultar
            }
            else {
                resultado.innerHTML = resultar.substr(0, 1) + "," + resultar.substr(3, 2)
            }
        }
        else if (resultar >= 10 && resultar < 100) {
            if (resultar % 1 == 0) {
                resultado.innerHTML = resultar
            }
            else {
                resultado.innerHTML = resultar.substr(0, 2) + "," + resultar.substr(3, 2)
            }
        }
        else if (resultar >= 100 && resultar < 1000) {
            if (resultar % 1 == 0) {
                resultado.innerHTML = resultar
            }
            else {
                resultado.innerHTML = resultar.substr(0, 3) + "," + resultar.substr(4, 2)
            }
        }
    }
    else {
        alert("Debes de rellenar todos los campos correctamente")
    }
}

function tipoDePeso(Tipodepeso) {
    if (resultar < 18.5 && resultar > 0) {
        Tipodepeso.innerHTML = "Bajo Peso (por debajo de 18.5)"
        Tipodepeso.style = "color: #1C80D8;"
        flecha(20)
    }
    else if (resultar >= 18.5 && resultar <= 24.9) {
        Tipodepeso.innerHTML = "Saludable (Entre 18.5 a 24.9)"
        Tipodepeso.style = "color: #40BC66;"
        flecha(36)
    }
    else if (resultar >= 25.0 && resultar <= 29.9) {
        Tipodepeso.innerHTML = "Exceso de peso (Entre 25.0 a 29.9)"
        Tipodepeso.style = "color: #F8B200;"
        flecha(50)
    }
    else if (resultar >= 30.0 && resultar <= 39.9) {
        Tipodepeso.innerHTML = "Sobrepeso (Entre 30.0 a 39.9)"
        Tipodepeso.style = "color: #F54231;"
        flecha(65)
    }
    else if (resultar >= 40.0) {
        Tipodepeso.innerHTML = "Obesidad extrema (Por encima de 40.0)"
        Tipodepeso.style = "color: #000000;"
        flecha(79)
    }
    else {
        Tipodepeso.innerHTML = "Error, comienza de nuevo"
    }

}

function genero() {
    hombre.addEventListener('click', function () {
        hombre.style = "filter: invert(0.4) sepia(1) hue-rotate(35deg) saturate(800%);"
        gen = 1
        if (gen = 1) {
            mujer.style = "filter: invert(0.4) sepia(1) hue-rotate(35deg) saturate(0%);"
        }
    })
    mujer.addEventListener('click', function () {
        mujer.style = "filter: invert(0.4) sepia(1) hue-rotate(35deg) saturate(800%);"
        if (gen = 1) {
            hombre.style = "filter: invert(0.4) sepia(1) hue-rotate(35deg) saturate(0%);"
        }
    })
}
function flecha(margin){
    flechita.style = `margin-left:${margin}%`
}

genero(hombre, mujer)
ocultar(seccionDos)
boton.onclick = function () {
    calcular(peso, altura)
    tipoDePeso(tipoPeso)
}

botonVolver.onclick = function () {
    mostrar(seccionUno)
    ocultar(seccionDos)
    peso.value = ""
    altura.value = ""
    edad.value = ""
    hombre.style = "filter: invert(0.4) sepia(1) hue-rotate(35deg) saturate(0%);"
    mujer.style = "filter: invert(0.4) sepia(1) hue-rotate(35deg) saturate(0%);"
    gen = 0
}