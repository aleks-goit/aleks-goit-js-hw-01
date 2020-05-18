const credits = 23580;

const pricePerDroid = 3000;
const userInput = prompt('Сколько дроидов Вы хотите купить?');
const quantityDroid = userInput;

const totalPrice = quantityDroid * pricePerDroid;

if (userInput === null) {
    console.log('Отменено пользователем!');
} else if (totalPrice > credits) {
    console.log('Недостаточно стредств на счету!');
} else if (totalPrice < credits) {
    console.log(
        `Вы купили ${quantityDroid} дроидов, на счету осталось ${
            credits - totalPrice
        } кредитов`,
    );
}
