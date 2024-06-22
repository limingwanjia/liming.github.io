export const levels = [
    {
        playerPosition: { x: 2, y: 2 },
        boxPositions: [{ x: 1, y: 2 }, { x: 2, y: 1 }, { x: 3, y: 2 }],
        victoryPositions: [{ x: 0, y: 2 }, { x: 2, y: 0 }, { x: 4, y: 2 }],
        crossPattern: [
            [false, false, true, false, false],
            [false, false, true, false, false],
            [true, true, true, true, true],
            [false, false, true, false, false],
            [false, false, true, false, false]
        ]
    },
    {
        playerPosition: { x: 0, y: 0 },
        boxPositions: [{ x: 1, y: 1 }],
        victoryPositions: [{ x: 4, y: 4 }],
        crossPattern: [
            [true, true, true, true, true],
            [true, true, true, true, true],
            [true, false, true, false, true],
            [true, false, false, false, true],
            [true, true, true, true, true]
        ]
    },
    {
        playerPosition: { x: 5, y: 6 },
        boxPositions: [{ x: 5, y: 2 }, { x: 5, y: 3 }, { x: 5, y: 4 }],
        victoryPositions: [{ x: 6, y: 2 }, { x: 6, y: 3 }, { x: 6, y: 4 }],
        crossPattern: [
            [false, false, false, false, false, false, false, false],
            [false, true, true, true, false, true, true, false],
            [false, true, false, true, false, true, true, false],
            [false, true, true, true, true, true, true, false],
            [false, true, false, true, false, true, true, false],
            [false, true, true, true, false, true, true, false],
            [false, false, false, false, false, true, true, false],
            [false, false, false, false, false, false, false, false]
        ]
    },
    {
        playerPosition: { x: 1, y: 3 },
        boxPositions: [{ x: 4, y: 3 }, { x: 4, y: 4 }, { x: 4, y: 5 }],
        victoryPositions: [{ x: 4, y: 2 }, { x: 4, y: 4 }, { x: 4, y: 6 }],
        crossPattern: [
            [false, false, false, false, false, false, false, false, false, false],
            [false, false, false, true, true, false, false, false, false, false],
            [false, false, false, true, true, false, true, true, true, false],
            [false, true, true, true, true, true, true, true, true, false],
            [false, true, false, false, true, false, false, false, false, false],
            [false, true, true, true, true, true, true, false, false, false],
            [false, false, false, true, true, true, true, false, false, false],
            [false, false, false, true, true, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false]
        ]
    }

];

// ,
//     {
//         playerPosition: { x: 5, y: 6 },
//         boxPositions: [{ x: 5, y: 2 }, { x: 5, y: 3 }, { x: 5, y: 4 }],
//         victoryPositions: [{ x: 6, y: 2 }, { x: 6, y: 3 }, { x: 6, y: 4 }],
//         crossPattern: [
//             [false, false, false, false, false, false, false, false],
//             [false, false, false, false, false, false, false, false],
//             [false, false, false, false, false, false, false, false],
//             [false, false, false, false, false, false, false, false],
//             [false, false, false, false, false, false, false, false],
//             [false, false, false, false, false, false, false, false],
//             [false, false, false, false, false, false, false, false],
//             [false, false, false, false, false, false, false, false]
//         ]
//     }



// ,
//     {
//         playerPosition: { x: 1, y: 3 },
//         boxPositions: [{ x: 4, y: 3 }, { x: 4, y: 4 }, { x: 4, y: 5 }],
//         victoryPositions: [{ x: 4, y: 2 }, { x: 4, y: 4 }, { x: 4, y: 6 }],
//         crossPattern: [
//             [false, false, false, false, false, false, false, false, false, false],
//             [false, false, false, true, true, false, false, false, false, false],
//             [false, false, false, true, true, false, true, true, true, false],
//             [false, true, true, true, true, true, true, true, true, false],
//             [false, true, false, false, true, false, false, false, false, false],
//             [false, true, true, true, true, true, false, false, false, false],
//             [false, false, true, true, true, true, false, false, false, false],
//             [false, false, true, true, false, false, false, false, false, false],
//             [false, false, false, false, false, false, false, false, false, false]
//         ]
//     }
