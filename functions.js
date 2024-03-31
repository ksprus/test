let data_html = document.querySelector('.offer');
let today = new Date();
let currentDay = today.getDay(); // 0 (воскресенье) до 6 (суббота)
let difference = 1 - currentDay;

if (difference < 0) {
  difference += 7;
}

let nextMonday = new Date(today);
nextMonday.setDate(today.getDate() + difference);

// Проверка, если сегодня не суббота и не воскресенье, установить понедельник следующей недели
if (currentDay !== 0 && currentDay !== 6) {
  nextMonday.setDate(today.getDate() + difference + 1);
}

// Форматирование даты
data_html.textContent = `Распродажа до ${nextMonday.toLocaleDateString('ru-RU', {
  day: 'numeric',
  month: 'numeric',
  year: 'numeric',
})}`;

// Функция проверки високосного года
function isLeapYear(year) {
  return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
}
