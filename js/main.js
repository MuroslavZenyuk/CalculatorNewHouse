const squareInput = document.querySelector('#square-input');
const squareRange = document.querySelector('#square-range');
const inputs = document.querySelectorAll('input');

//радіо кнопки

const radioType = document.querySelectorAll('input[name="type"]');
const radioBuilding = document.querySelectorAll('input[name="building"]');
const radioRooms = document.querySelectorAll('input[name="rooms"]');

//чек-бокси

const ceilings = document.querySelector('input[name="ceiling"]');
const walls = document.querySelector('input[name="walls"]');
const floor = document.querySelector('input[name="floor"]');



const basePrice = 3000;
const totalPriceElement = document.querySelector('#total-price');

//зв'язуєм рендж з текстовим полем, а поле з ренджом
// добавляємо лістенер зі свойством інпут

squareRange.addEventListener('input', function () {
    squareInput.value = squareRange.value;
});

squareInput.addEventListener('input', function () {
    squareRange.value = squareInput.value;
});

////////////////////////////////////////////////////

//функція перерахунку вартості квартири

function calculate() {

    let totalPrice = basePrice * parseInt(squareInput.value);


    for (const radio of radioType) {
        if (radio.checked) {

            totalPrice = totalPrice * parseFloat(radio.value)
        }
    }

    for (const radio of radioBuilding) {
        if (radio.checked) {

            totalPrice = totalPrice * parseFloat(radio.value)
        }
    }

    for (const radio of radioRooms) {
        if (radio.checked) {

            totalPrice = totalPrice * parseFloat(radio.value)
        }
    }

    if (ceilings.checked) {
        totalPrice = totalPrice * parseFloat(ceilings.value);
    }

    if (walls.checked) {
        totalPrice = totalPrice * parseFloat(walls.value);
    }

    if (floor.checked) {
        totalPrice = totalPrice * parseFloat(floor.value);
    }


    const formatter = new Intl.NumberFormat('ua');

    //реревод вивода в гарне речення в форматі string з відступами
    totalPriceElement.innerText = formatter.format(totalPrice);
}
calculate();

///////////////////////////////////////

for (const item of inputs) {
    item.addEventListener('input', function () {
        calculate();
    });
}

