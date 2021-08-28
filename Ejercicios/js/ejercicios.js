// Ejercicio 1
let n = 90
let m = 50
let r = n + m

console.log (r)

// Ejercicio 2
let a = 1
let b = 5
let c = 90
let d = 10
let e = 8

let z = a * b * c * d * e

console.log(z)

// Ejercicio 3
let x = 8
let y = 10
let zeta= 90

let w = ((x+z) * y * y )

console.log(w)

// Ejercicio 4
let texto1 = "Hola"
let texto2 = "Indi"

console.log(texto1 + texto2)

//Ejercicio 5
let na = "5"
let nb = "3"
let nc = "7"
let nd = "5 + 3 + 7 ="

console.log (na + " + " + nb + " + " + nc + " = " + nd)

//Ejercicio 6
let usuario1 = { nombre: "juan", apellido: "perez" }
let usuario2 = { nombre: "sara", apellido: "aparicio" }
let usuario3 = { nombre: "sebastián", apellido: "gonzales" }
let usuario4 = { nombre: "catalina", apellido: "rodriguez" }
let usuario5 = { nombre: "laura", apellido: "quintanilla" }
let usuario6 = { nombre: "camila", apellido: "lopez" }
let usuario7 = { nombre: "carlos", apellido: "gutierrez" }
let usuario8 = { nombre: "sergio", apellido: "chacon" }

m = 5

if {m == 1) {
    console.log("Hola, " + usuario1.nombre + " " + usuario1.apellido)
}else if(m == 2){
    console.log("Hola, " + usuario2.nombre + " " + usuario2.apellido)
}else if(m == 3){
    console.log("Hola, " + usuario3.nombre + " " + usuario3.apellido)
}else if(m == 4){
    console.log("Hola, " + usuario4.nombre + " " + usuario4.apellido)
}else if(m == 5){
    console.log("Hola, " + usuario5.nombre + " " + usuario5.apellido)
}else if(m == 6){
    console.log("Hola, " + usuario6.nombre + " " + usuario6.apellido)
}else if(m == 7){
    console.log("Hola, " + usuario6.nombre + " " + usuario6.apellido)
}else if(m == 7){   
    console.log("Hola, " + usuario7.nombre +" "+ usuario7.apellido)
}else if(m == 8){
    console.log("Hola, " + usuario8.nombre + " " + usuario8.apellido)
}else{
    console.log("Faltan datos")
}

let usuarios = [usuario1, usuario2, usuario3, usuario4, 
    usuario5, usuario6, usuario7, usuario8]

    
if (n <= usuarios.length) {

    console.log("Hola con arreglo, " + usuarios[n-1].nombre + " " + usuarios[n-1].apellido)    

}else{

    console.log("Usuario no registrado")

}