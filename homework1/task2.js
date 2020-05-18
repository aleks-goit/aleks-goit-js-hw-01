const total = 100;
const ordered = 100;
if (ordered <= total) {
    console.log('Заказ оформлен, с вами свяжется менеджер');
} else if (ordered > total) {
    console.log('На складе недостаточно товаров!');
}
