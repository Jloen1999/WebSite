let person = {
    dni: "Y736928F",
    name: "Jose Luis Obiang",
    surname: "Ela Nanguan",
    age: 23,
    country: "Guinea Ecuatorial",
    saludo: function(){
        return "Hola Erick";
    }
}

Object.defineProperties(person, {
    "salary": {
        value: 200,
        writable: true
    },
    "dni": {
        value: "Y394339F",
        writable: true
    }
    }

)

let names = ["Jose", "Antonio", "Manuel", "Javier"];
function userId(name, number){
    if(typeof name === "undefined"){
        name = "Jose";
    }
    number = number || "23424E"
    console.log("Me llamo "+name,"y mi ID es "+number);
}
userId( "Luis",234);