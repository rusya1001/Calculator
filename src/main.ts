import Calculator, {Operation} from './Calc';

document.addEventListener('DOMContentLoaded', function () {

    // находим элемент, в котором будем отображать результат
    const resultBlock: HTMLDivElement = document.getElementById('result') as HTMLDivElement;

    // создадим объект "калькулятор"
    const calc: Calculator = new Calculator();

    /**
     * Функция для вывода результата
     * @param value
     */
    function printResult(value: number) {
        resultBlock.innerText = `${value}`;
    }

    // найдём все кнопки с числами
    for (let i = 0; i < 10; i++) {
        let btn: HTMLButtonElement = document.getElementById('btn' + i) as HTMLButtonElement;

        btn.onclick = function () {
            // передаём в калькулятор нажатое число
            calc.apply(i);
            // сбрасываем операцию
            calc.operation = null;
            // выводим результат
            printResult(calc.currentResult);
        };

    }

    // кнопка "плюс"
    document.getElementById('plus').onclick = function () {
        // передаём в калькулятор выбранную операцию
        calc.operation = Operation.SUM;
    };

    // кнопка "минус"
    document.getElementById('minus').onclick = function () {
        // передаём в калькулятор выбранную операцию
        calc.operation = Operation.SUB;
    };

    // кнопка "делить"
    document.getElementById('divide').onclick = function () {
        // передаём в калькулятор выбранную операцию
        calc.operation = Operation.DIV;
    };

    // кнопка "умножить"
    document.getElementById('multiply').onclick = function () {
        // передаём в калькулятор выбранную операцию
        calc.operation = Operation.MUL;
    };

});
