let array = [1,
    ['a','b',
        ['x','y','z']
    ],
];



function algoritmo(array) {
    for (let a = 0; a < array.length; a++) {
        if (!Array.isArray(array[a])) {
            console.log(array[a]);
        } else {
            algoritmo(array[a]);
        }
    }
}

algoritmo(array);