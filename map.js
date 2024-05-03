const frutas4 = [ 
    {
        id: 1,
        nombre:"manzana",
        vitaminas:'A, B1, B2, B5, B6, zinc'
    },
    {
        id:2,
        nombre:'Naranja',
        vitaminas:'B12, zinc, C, B6'
    },
    {
        id:3,
        nombre:'Piña',
        vitaminas:'B12, zinc, B1, B2, B6'
    },
    {
        id:4,
        nombre:'Fresa',
        vitaminas:'B12, zinc, A, B1, B6'
    },
    {
        id:5,
        nombre:'Platano',
        vitaminas:'Potacio, boro, B12, zinc'
    }
]

const productos = frutas4.map((fruta)=> fruta.nombre);
console.log(productos);