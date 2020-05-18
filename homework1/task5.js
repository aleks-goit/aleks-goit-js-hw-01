const userInput = prompt('Выберите Вашу страну!');
const normalized = userInput.toUpperCase();

let price = 0;
const country = normalized;

switch (country) {
    case 'КИТАЙ':
        price = 100;
        alert(`Доставка в ${country} будет стоить ${price} кредитов`);
        break;
    case 'ЧИЛИ':
        price = 250;
        alert(`Доставка в ${country} будет стоить ${price} кредитов`);
        break;
    case 'АВСТРАЛИЯ':
        price = 170;
        alert(`Доставка в ${country} будет стоить ${price} кредитов`);
        break;
    case 'ИНДИЯ':
        price = 80;
        alert(`Доставка в ${country} будет стоить ${price} кредитов`);
        break;
    case 'ЯМАЙКА':
        price = 120;
        alert(`Доставка в ${country} будет стоить ${price} кредитов`);
        break;
    default:
        alert('В Вашей стране доставка недоступна!');
        break;
}

console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
