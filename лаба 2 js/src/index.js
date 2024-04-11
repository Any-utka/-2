import { getRandomActivity } from './activity';

getRandomActivity();

function updateDataPeriodically() {
    getRandomActivity();
    setTimeout(updateDataPeriodically, 60000); // Обновление данных каждую минуту (60000 миллисекунд)
}

updateDataPeriodically();
