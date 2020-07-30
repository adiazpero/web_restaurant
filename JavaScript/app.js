//parseInt() => para numeros enteros
//parseFloat() => para numeros decimales
//toString() => para pasar a string

var str = 'The quick brown fox jumped over the lazy dog';
str.length; //te dice los caracteres que tiene la frase, el string, que serian 44

str.charAt(2); //Para sacar la letra en la posicion 2: Seria la "e" (0-T, 1-h, 2-e)
str.charAt(3); //Devuelve un espaacio en blanco: " "

str.concat() //Agrega al final de la frase/string lo que añadimos dentro del parentesis
str.concat('again and again') //'The quick brown fox jumped over the lazy dog again and again'

var newString = str.concat('again and again');


str.includes('quick'); //Busca en el string la palabra, si esta, devuelve true, si no, retorna false
//str.starsWith('The') => primera palabra del string
//str.endsWith('g')  str.endsWith('lazy dog') =>ultima palabra del string

str.repeat(5); //para repetir el string. 
//Esto no modificaria la variable principal, si quisieramos guardarlo crearimos una variable nueva

str.match(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/); //expresion regular, para comparar si los datos son los que se corresponden, validar la informacion que se recoge
//La expresion regular corresponde con numero de telefono
//(\(\d{3}\)=> (555)    555-=>(\d{3}-)     5555=>d{4}
'(555)555-5555'.match(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/);

str.replace('fox', 'wolf'); //Para sustituir una palabra por otra del string
// 'The quick brown fox jumped over the lazy dog'
// "the quick brown wolf jumped over the lazy dog"

'(555)555-5555 is my phone number'.search(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/); //Lo que hace es buscar y cuando encuentra un patron que coincida, cuando coincide nos devolvera el indice. Cuando sale 0 es que lo encontro en el indice 0


'foo is my phone number'.search(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/);
//Si devuelve un negativo, ej.: -1, eso significa que no lo encontro
'foo (555)555-5555 is my phone number'.search(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/);
//devuelve 4, lo encontro en el indice 4 => (0-f) (1-o) (2-o) (3-' ') (4-5)


str.indexOf('jumped'); //20-Busca en toda la cadena, una vez que encuentra la primera instancia es la que te devuelve
str.lastIndexOf('jumped'); //20 -Busca en toda la cadena, pasara por cada uno, pero solo te devolvera el ultimo que encontro

var str2 = str.concat('again and again');

str2.indexOf('again'); // 44
str2.lastIndexOf('again'); // 54


//Con el metodo slice Pasar un valor exacto de indice
str.slice(4, 9); //Me devuelve "quick"
str.slice(-8); //Me devuelve "lazy dog"



var stringPrueba = "    foo    ";

stringPrueba.trim;
stringPrueba.trim(); //Devuelve "foo" 
//El metodo trim es para limpiar datos, cuando recibas string/informacion por parte del usuario/ bbdd/ o un archivo con todo tipo de espacios, lo que hace es limpiarlo, depurarlo



str.toLocaleUpperCase(); //Convierte/pasa todas la letras a mayusculas
"THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG"

str.toLowerCase(); //Convierte/pasa todas la letras a minusculas
"the quick brown fox jumped over the lazy dog"

//OPERACIONES MATEMATICAS
// Suma +
// Resta - 
// Multiplicacion *
// Exponente ** => 2 ** 10; // 1024
// Division /
// Modulo (El resto de algo) % =>Para saber si un numero es par (resto division 0) o impar(resto division 1), y colorear unas filas de un color y otras de otro color
5 % 2; // 1
6 % 2; // 0

//UNARIOS, LOGICOS
// Incrementador ++
// Decremento --

var num = 2;

num++;
num--;

var someNum = 10;
var someNumOther = -someNum; //-10



var strNum = '100';

var convertedNum = +strNum;
convertedNum; // 100



/* Order of Operations
   PEMDAS -> PEDMAS
   Please Excuse My Dear Aunt Sally
*/
//Primero es Parentesis, luego exponentes, seguido de multiplicación, y luego división, y luego suma, y ​​luego resta.
/*
Paranthesis
Exponents
Multiplication 5 / 5 * 4
Division
Addition
Subtraction
*/

var num = 5 + (5 * 10) / 6 ** 2 - 1; // 5.38

//CONDICIONALES
//Evalua la condicion, dice vale, esto coincide, esto hago 
//esto es verdadero o es falso, y segun la condicion asi actua 

var age = 10;
var ageTwo = '12';

if (age === ageTwo) {
    console.log('They are equal');
}

if (age !== ageTwo) {
    console.log('Not equal');
}

if (age >= 25) {
    console.log('Old enough to rent a car');
}

if (age <= 10) {
    console.log('You can eat from the kid menu');
}



var age = 30;

if (age <= 10) {
    console.log('You can eat from the kid menu');
} else {
    console.log('Adult menu time for you');
}

//SENTENCIA IF ANIDADA => AND (&&) OR (||) 

var age = 30;

if (age <= 10) {
    console.log("You can eat from the kid's menu");
    console.log("You are not old enough to drive");
    console.log("You are not old enough to rent a car");
} else if (age >= 16 && age < 25) {
    console.log("You can not eat from the kid's menu");
    console.log("You are old enough to drive");
    console.log("You are not old enough to rent a car");
} else if (age >= 25) {
    console.log("You can not eat from the kid's menu");
    console.log("You are old enough to drive");
    console.log("You are old enough to rent a car");
}

//SWITCH.Lo que hace es evaluar el valor de una variable, y ese valor lo evalua recorriendo, lo hace a traves de los diferentes casos posibles 

var dataPoint = 1;

function pruebaSwitch() {

    switch (typeof dataPoint) {
        case "string":
            console.log("It's a string");
            break;
        case "number":
            console.log("It's a number");
            break;
        case "boolean":
            console.log("It's a boolean");
            break;
        default:
            console.log('No matches');
    }
}




function pruebaSwitchDos() {

    switch (typeof dataPoint) {
        case "string":
            console.log("It's a string");
            return "string";
        case "number":
            console.log("It's a number");
            return "number";
        case "boolean":
            console.log("It's a boolean");
            return "boolean"
        default:
            console.log('No matches');
            return "false"
    }
}

var prueba = pruebaSwitchDos();


//CONDICIONAL TERNARIO

function ageVerification(age) {
    if (age > 25) {
        console.log('can rent a car');
    } else {
        console.log('is not old enough yet');
    }
}

ageVerification(15)


//parte 1 = Condicional => Si la edad es mayor a 25 => age > 25 ?
//parte 2 = Si es verdad => Si es verdad quiero que funcione esto => 'can rent a car'
//parte 3 = Si no, si es falso,quiero que funcione esto otro => : "can't rent a car"; 
function ageVerification(age) {
    let answer = age > 25 ? 'can rent a car' : "can't rent a car";
}

function ageVerification(age) {
    return age > 25 ? 'can rent a car' : "can't rent a car";
}




function adminControls(user) {
    if (user) {
        if (user.admin) {
            return 'showing admin controls...';
        } else {
            return 'You need to be an admin';
        }
    } else {
        return 'You need to be logged in';
    }

}

const userOne = {
    name: "Kristine",
    admin: true
};
adminControls(userOne); //?


const userTwo = null;
adminControls(userTwo); //?


const userThree = {
    name: "Tiffany",
    admin: false
};
adminControls(userThree); //?





function adminControls(user) {
    /*    if (user) {
           if (user.admin) {
               return 'showing admin controls...';
           } else {
               return 'You need to be an admin';
           }
       } else {
           return 'You need to be logged in';
       } */

    let response = user ? (user.admin ? "showing admin controls" : "You need to be an admin") : "you need to be logged in";


    return user ?
        user.admin ? "showing admin controls" : "You need to be an admin" :
        "you need to be logged in";
}




//FUNCION. Una funcion en javaScript es como una maquina que tiene la capacidad de recibir informacion y luego realiza todo tipo de procesos (procesos que le indicamos). Recibe un valor y devuelve un valor. 
//Se le puede pasar todo tipo de argumentos, como objetos, variables,.. cuando la llamas

//VARIABLE. Es como una caja que guarda la informacion

function hiThere() {
    console.log('Hi there');
}
hiThere(); // Hi there


function hiThereTwo() {
    return 'Hi there again';
}
hiThereTwo(); // "Hi there again"


var storedText = hiThere(); // Hi there
storedText; // undefined

var storedTextTwo = hiThereTwo();
storedTextTwo; // "Hi there again"


//VARIABLE LOCAL / GLOBAL.Se aconseja para una buena practica que siempre que se pueda la variable sea local, ya que global puede llevar a tener mucho errores en el codigo, a sobreescribir, y si tiene que haber, que se han la menos posible.

var user = {
    nombre: 'Ana',
    email: 'ana@gmail.com',
    edad: 36
}

function usuario() {
    console.log("Hola, ".concat(user.nombre));
}

usuario();

//CARACTERISTICAS DE LAS FUNCIONES
//Declaraciones con expresiones

var myFunction = function() {
    return true;
};



//PARAMETROS

function fullName(firstName, lastName) {
    return lastName.toUpperCase() + ',' + firstName.toUpperCase();
}
fullName('Ana', 'Diaz');


//Si queremos poner un parametro por defecto, ej.: language., lo escribimos asi 
//    var language = language || 'English';
//Y si le damos el  dato, ejemplo, español, lo sobreescribe y si no le pasamos ningun valor, pone ingles por defecto
function fullName(firstName, lastName, language) {
    var language = language || 'English';
    return lastName.toUpperCase() + ", " + firstName.toUpperCase() + " - " + language;
}

console.log(fullName('Jordan', 'Hudgens', 'Spanish'));



//TIPOS DE ITEM QUE SE PUEDEN PASAR A FUNCIONES
//Si pasamos un OBJETO, se puede comportar de maneta diferente. La razon 

//referencia vs value

//  OBJETO, cambia modifica el atributo => referencia
var someUser = {
    name: 'Jordan'
}

function nameFormatter(user) {
    return user.name = 'Oops';
}
nameFormatter(someUser); //"Oops"

someUser; //Object {name: "Oops"}



//VARIABLE, toma el valor =>value
var nombre = 'Ana';

function otherName(name) {
    return name = 'Oops';
}
otherName(nombre); // 'Oops

//pero si llamamos a la variable, si apareciendo ana. El valor en la variable no se ha modificado
nombre; // "Ana"


//PASAR O MODIFICAR UN OBJETO COMO PARAMETRO A LA FUNCION

function nameFormatter(userName) {
    return userName = 'Oops';
}
someUser.name; // "Oops"

someUser.name = 'Kristine';

nameFormatter(someUser.name); // "Oops"

someUser.name; // "Kristine"


//
function promedio() {
    var manzanas = 100;
    var personas = 5;

    return {
        getActualPromedio: function() {
            return (manzanas / personas);
        },
        promedioActualizado: function() {
            manzanas += manzanas;
            personas += personas;
        }
    }
}

var cesta = promedio();
console.log(cesta.getActualPromedio());


//DOM : MODELO OBJETO DOCUMENTO
//PARA ACCEDER AL CODIGO HTML
//Con la palabra DOCUMENT, esto da un objeto, y traera todo el codigo. Cuando llamo a document, le digo a javaScript que quiero tener todo el codigo html
//GETBYELEMENT => ID
//GETBYCLASSNAME => CLASE
document.getElementsByClassName('b1')[0];
//.innerHTML => Para cambiar el texto
document.getElementsByClassName('b1')[0].innerHTML = 'Hola';



//COMO USAR LA PALABRA RESERVADA THIS
$('.btn-guide').click(function(event) {
    event.preventDefault();
    console.log($(this));
});



class Person {
    constructor(name) {
        this.name = name;
    }
}

const yourPerson = new Person('Jordan');

//Donde mas es utilizada es dentro de los objetos
//Lo que esto parece que haria es llamar al metodo VISIBLETOUSER
//Al ejecutar, JavaScript saltara esto, ignorara lo que estamos haciendo aqui, porque debemos ser mas explicito, debemos escribir this.visibleToUser, porque debe saber la instancia exacta a la que nos referimos. Si solo escribimos la funcion generica, visibleToUser, buscara por toda la variable global y verifica si hay una funcion visibleToUser; si no hay, simplemente devolvera no definido y no tendremos nada aqui. Pero cuando escribimos THIS,sabe que hacemos referencia al objeto visibleToUser de este metodo


var guide = {
    title: 'Guide to Programming',
    content: 'Content goes here...',
    visibleToUser: function(viewingUserRole) {
        if (viewingUserRole === 'paid') {
            return true;
        }
    },
    renderContent: function(userRole) {
        if (this.visibleToUser(userRole)) {
            console.log(this.title + " - " + this.content);
        } else {
            this.content = '';
            console.log(this.title + " - " + this.content);
        }
    }
}

user = { role: 'paid' };
guide.renderContent(user.role);


//MATRIZ / ARRAY / ARREGLOS
//Crear array 
var generatedArray = new Array(3);
var generatedArray = new Array('Altuve', 'Correa', 'Spring');
var literalArray = [1, 2, 3];
var literalArray = ['Altuve', 'Correa', 'Spring'];
var mixedArray = ['Hi', 1, ['a', 'b', 'c'], { name: 'Kristine' }, function greeting() { console.log('hey there'); }]

//Como acceder a los datos
var mixedArray = ['Hi', 1, ['a', 'b', 'c'], { name: 'Kristine' }, function greeting() { console.log('hey there'); }]

// por posicion en el array
literalArray[0]; // "Altuve"

//Guardando en una variable
var playerName = literalArray[1];
playerName; // "Correa"

//Un array dentro de otro array
mixedArray[2][2]; // "c"

//En un objeto
mixedArray[3]; // Object {name: "Kristine"}
mixedArray[3].name; // "Kristine"

//En una funcion
mixedArray[4]; // function greeting( ) { console.log('hey there');}
mixedArray[4](); // hey there



//PROPIEDADES DE LOS ARRAY Y METODOS
var arr = ['Altuve', 'Bregman', 'Correa', 'Springer'];
//arr.length()
arr.length; // 4
//METODO POP => Devuelve el ultimo elemento de la matriz/array
arr.pop(); // "Springer"

//METODO PUSH => Añade al array
arr; // (3) ['Altuve', 'Bregman', 'Correa']
arr.push('Bagwell'); // 4

//METODO SPLICE
var arr = ['Altuve', 'Bregman', 'Correa', 'Springer'];

var foundElement = arr.indexOf('Correa');
foundElement; // 2

arr.splice(foundElement, 1); // ["Correa"]
arr; // ["Altuve", "Bregman", "Springer"]

arr.splice(1, 2); // ["Bregman", "Springer"]
arr; // ["Altuve"]

var array = ['Altuve', 'Bregman', 'Correa', 'Springer'];
array.splice(0, 3, 'ana');
console.log(array);





//BUCLES 
var players = [
    'Altuve',
    'Bregman',
    'Correa',
    'Springer'
];

//FOR
for (var i = 0; i < players.length; i++) {
    console.log(players[i]);
}

//FOR IN
for (var player in players) {
    console.log(player);
    console.log(players[player]);
}

//FOR EACH
players.forEach(function(element) {
    console.log(element);
});

//Repetir un objeto
var student = {
    name: 'Kristine',
    age: 12,
    city: 'Scottsdale'
};

for (var key in student) {
    console.log(key + " => " + student[key]);
}


//DOM
//
//Para tomar elementos y trabajar con ellos
const searchBar = document.querySelector('.gsfi')

$('.gsfi').value = 'JavaScript tips'