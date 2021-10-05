//Ejercicio 1
var fondo = document.getElementById('cuadroAzul');
fondo.addEventListener('click', function () {
    document.body.style.backgroundColor = '#0066CC';
})
var fondo = document.getElementById('cuadroVerde');
fondo.addEventListener('click', function () {
    document.body.style.backgroundColor = '#009846';
})
var fondo = document.getElementById('cuadroRojo');
fondo.addEventListener('click', function () {
    document.body.style.backgroundColor = '#f75e25';
})

//Ejercicio 2
const mensaje = document.getElementById('mensaje');
const contador = document.getElementById('contador');

mensaje.addEventListener('input', function (e) {
    const target = e.target;
    const longitudMax = target.getAttribute('maxlength');
    const longitudAct = target.value.length;
    contador.innerHTML = `${longitudAct}/${longitudMax}`;
});

//Ejercicio 3

var alumnos = [
    {
        nombre: 'Juan Gomez',
        nota: 7
    }, {
        nombre: 'Pedro Rodriguez',
        nota: 4
    }, {
        nombre: 'Roxana García',
        nota: 8
    }, {
        nombre: 'Luciano Lopez',
        nota: 5
    }, {
        nombre: 'Fernanda Gimenez',
        nota: 6

    }, {
        nombre: 'Florencia Martinez',
        nota: 10
    }, {
        nombre: 'Raul Sanchez',
        nota: 7
    }, {
        nombre: 'Sandra Figueroa',
        nota: 8
    }
];

var aprobados = alumnos.filter(function (alumno) {
    return alumno.nota >= 7;
});
console.log(aprobados);
