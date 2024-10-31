import { stateMatrix, data } from './state.js';

const game = {
    btn: document.querySelector('.header>button'),
    example: document.getElementsByClassName('example')[0],
    newValue: 0,
    matrix: document.getElementsByClassName('matrix')[0],
    right: document.getElementsByClassName('button_right')[0],
    bottom: document.getElementsByClassName('button_bottom')[0],
    res: document.getElementById('res'),
    result: [],
    static(state, element) {
        this._info();
        element.innerHTML = '';
        for (let i = 0; i < state.length; i++) {
            let section = document.createElement('section');
            section.classList.add('static');
            element.insertAdjacentElement('beforeend', section);
            for (let j = 0; j < state[i].length; j++) {
                section.insertAdjacentHTML('beforeend', `
                <div class=${state[i][j] == 2 && 'blue'
                    || state[i][j] == 1 && 'orange'
                    || state[i][j] == 0 && ''
                    }></div>
                `)

            }

        }
    },
    _res() {
        this.res.textContent = this.result.reduce((sum, e) => sum + e);
    },
    _info() {
        for (let row = 0; row < stateMatrix[this.newValue].length; row++) {
            for (let col = 0; col < stateMatrix[this.newValue][row].length; col++) {
                if (stateMatrix[this.newValue][row][col] !== data.matrix[row][col]) {
                    return 0
                }
            }
        }
        this.result[this.newValue] = 1;
        this._res();
        this._buttonRender(stateMatrix.length);
    },
    _buttonRender(params) {
        this.newValue < params - 1
            ? this.newValue += 1
            : this.newValue = 0;
        this.static(
            stateMatrix[this.newValue],
            this.example);
    },
    _button(state, element) {
        state.forEach(item => {
            element.insertAdjacentHTML('beforeend', `
            <div class="img ${item.right
                    ? 'right'
                    : "left"}">
            <img src=${item.img}>
            </div>
            `)
        });
    },
    _row(state, index) {
        for (let i = 0; i < state[index].length; i++) state[index][i] = 2;
        this.static(
            data.matrix,
            this.matrix);

    },
    _column(state, index) {
        for (let i = 0; i < state.length; i++) state[i][index] = 1;
        this.static(
            data.matrix,
            this.matrix);
    },
    render() {
        for (let index = 0; index < stateMatrix.length; index++) {
            this.result.push(0)
        }
        this.static(
            stateMatrix[this.newValue],
            this.example)
        this.btn.addEventListener('click', () =>
            this._buttonRender(
                stateMatrix.length));
        this.static(
            data.matrix,
            this.matrix)
        this._button(data.btnLeft, this.bottom);
        this._button(data.btnRight, this.right);
        Array.from(document.getElementsByClassName('right'))
            .forEach((item, index) =>
                item.addEventListener('click', () =>
                    this._row(data.matrix, index)))
        Array.from(document.getElementsByClassName('left'))
            .forEach((item, index) =>
                item.addEventListener('click', () =>
                    this._column(data.matrix, index)))
    }
}
game.render()