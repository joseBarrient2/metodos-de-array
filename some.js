const frutas2 = [ 
    {
        id: 1,
        nombre:"manzana",
        vitaminas:'A, B1, B2, B5, B6'
    },
    {
        id:2,
        nombre:'Naranja',
        vitaminas:'B12, zinc, C'
    },
    {
        id:3,
        nombre:'Piña',
        vitaminas:'B12, zinc, B1, B2,'
    },
    {
        id:4,
        nombre:'Fresa',
        vitaminas:'B12, zinc, A, B1'
    },
    {
        id:5,
        nombre:'Platano',
        vitaminas:'Potacio, boro, B12, zinc'
    }
]

const queVitaminas = frutas2.some((frut) => frut.vitaminas.includes('B2'));
console.log(queVitaminas);