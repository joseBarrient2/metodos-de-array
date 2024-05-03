const frutas5 = [ 
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
        vitaminas:'B12, zinc, B1, B2'
    },
    {
        id:4,
        nombre:'Fresa',
        vitaminas:'B12, zinc, B6, A, B1, B6'
    },
    {
        id:5,
        nombre:'Platano',
        vitaminas:'Potacio, boro, B12, zinc'
    }
]

const algunasFrutas = frutas5.filter((fruta)=>fruta.vitaminas.includes('B6'));
console.log(algunasFrutas);