//Элементы формы
const squareRange = document.querySelector('#square-range');
const squareInput = document.querySelector('#square-input');
const inputs = document.querySelectorAll('input');

const radioType = document.querySelectorAll('input[name="type"]');
const radioBuilding = document.querySelectorAll('input[name="building"]');
const radioRooms = document.querySelectorAll('input[name="rooms"]');

const walls = document.querySelector('input[name="walls"]');
const ceiling = document.querySelector('input[name="ceiling"]');
const floor = document.querySelector('input[name="floor"]');

const totlPriceElement = document.querySelector('#total-price');
const basePrace = 6000;
//Слушаем событие input
//Связка range стекстом поля
squareRange.addEventListener('input', function () {
    //console.log('input')
    squareInput.value = squareRange.value;
});
//Связка текстовогополя с range
squareInput.addEventListener('input', function () {
    //console.log('input')
    squareRange.value = squareInput.value;
});


function calculate() {
    let totalPrice = basePrace * parseInt(squareInput.value);



    radioType.forEach(radio => {
        if (radio.checked) {
            totalPrice *= parseFloat(radio.value);
        }
    });

    radioBuilding.forEach(radio => {
        if (radio.checked) {
            totalPrice *= parseFloat(radio.value);
        }
    });

    radioRooms.forEach(radio => {
        if (radio.checked) {
            totalPrice *= parseFloat(radio.value);
        }
    });



    if (ceiling.checked) {
        totalPrice *= parseFloat(ceiling.value);
    }
    if (walls.checked) {
        totalPrice *= parseFloat(walls.value);
    }
    if (floor.checked) {
        totalPrice *= parseFloat(floor.value);
    }

    const formatter = new Intl.NumberFormat('ru');
    totlPriceElement.innerText = formatter.format(totalPrice);
}


calculate();

for (const input of inputs) {
    input.addEventListener('input', function (event) {
        calculate();
    })
}