let miObjeto = {
    "propiedad": "Propiedad original",
    "cadena": "Esto es una cadena",
    "numero": 2,
    "booleano": true,
    "saludar": function(){
        console.log("Bienvenido");
    }

};
Object.defineProperties(miObjeto, {
    "propiedad": {
        value: "Propiedadñ original modificada",
        "writable": true
    },
    saludar: {
        value: function(){
            console.log("Me gustan los dulces")
        },
        writable: true
    },
    'cadena':{
        value: "jose Luis",
        writable: true,
        enumerable: false
    },
    "propiedad1": {
        value: true,
        writable: true
    },
    "propiedad2": {
        value: "Cadena de texto",
        writable: true
    }
})

console.log(miObjeto);
miObjeto.propiedad1 = "Propiedad original Modificada";
console.log(miObjeto.propiedad1);
console.log(miObjeto.propiedad);
miObjeto.propiedad2 = "cadena de texto... ¿modificada?";
console.log(miObjeto.propiedad2);
console.log(miObjeto.saludar())
console.log(Object.getOwnPropertyNames(miObjeto));
console.log("¿Se puede extender?", Object.isExtensible(miObjeto));
Object.seal(miObjeto);
console.log("¿Se puede extender?", Object.isExtensible(miObjeto));
Object.preventExtensions(miObjeto);
console.log("¿Se puede extender?", Object.isExtensible(miObjeto));
console.log("¿Existe la propiedad \'saludar\'?", miObjeto.hasOwnProperty('cadena'))
console.log("¿es enumerable?", miObjeto.propertyIsEnumerable('cadena'))
console.log("Vamos a mostrar todas las propiedades del objeto lineal miObjeto", miObjeto.toString());
console.log(miObjeto.propiedad);
for(let ob in miObjeto){
    console.log("Objeto1: \nPropiedad ",ob,': ',miObjeto[ob],'\n');
}