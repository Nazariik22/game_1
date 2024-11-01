const stateMatrix = [
    [
        [2, 2, 2, 2, 2,],
        [2, 2, 2, 2, 2,],
        [2, 2, 2, 2, 2,],
        [2, 2, 2, 2, 2,],
        [2, 2, 2, 2, 2,],
    ],
    [
        [2, 2, 2, 2, 2,],
        [1, 2, 2, 2, 2,],
        [1, 1, 2, 2, 2,],
        [1, 1, 1, 2, 2,],
        [1, 1, 1, 1, 2,],
    ],
    [
        [2, 1, 1, 1, 2,],
        [2, 1, 2, 1, 2,],
        [2, 1, 2, 1, 2,],
        [2, 1, 2, 1, 2,],
        [2, 1, 1, 1, 2,],
    ],
    [
        [2, 1, 1, 1, 2,],
        [2, 1, 2, 1, 2,],
        [2, 1, 1, 1, 2,],
        [2, 2, 2, 1, 2,],
        [2, 1, 1, 1, 2,],
    ],

    [
        [2, 1, 2, 1, 2,],
        [2, 1, 2, 1, 2,],
        [2, 1, 1, 1, 2,],
        [2, 2, 2, 1, 2,],
        [2, 2, 2, 1, 2,],
    ],
    [
        [1, 2, 1, 2, 1,],
        [2, 2, 2, 2, 2,],
        [1, 2, 1, 2, 1,],
        [2, 2, 2, 2, 2,],
        [1, 2, 1, 2, 1,],
    ],

    [
        [1, 1, 1, 1, 1,],
        [1, 2, 1, 2, 1,],
        [1, 1, 1, 1, 1,],
        [2, 1, 2, 1, 2,],
        [2, 1, 2, 1, 2,],
    ],
    [
        [1, 2, 2, 2, 1,],
        [1, 1, 2, 1, 1,],
        [2, 2, 2, 2, 2,],
        [1, 1, 2, 1, 1,],
        [1, 2, 2, 2, 1,],
    ],
]
const data = {
    matrix: [
        [0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0,],
    ],
    btnLeft: [
        { img: "./img/p.png", right: false },
        { img: "./img/p.png", right: false },
        { img: "./img/p.png", right: false },
        { img: "./img/p.png", right: false },
        { img: "./img/p.png", right: false },
    ],
    btnRight: [
        { img: "./img/p.png", right: true },
        { img: "./img/p.png", right: true },
        { img: "./img/p.png", right: true },
        { img: "./img/p.png", right: true },
        { img: "./img/p.png", right: true },
    ],
}
export { stateMatrix, data }