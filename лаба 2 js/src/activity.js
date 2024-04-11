/**
 * Получает случайную активность из указанного API и обновляет ее на HTML-странице.
 */
export async function getRandomActivity() {
    try {
        const response = await fetch('https://www.boredapi.com/api/activity/');
        if (!response.ok) {
            throw new Error('Ошибка получения данных');
        }
        const data = await response.json();
        updateActivity(data.activity);
    } catch (error) {
        document.getElementById('activity').textContent = "К сожалению, произошла ошибка";
    }
}

/**
 * Обновляет текст активности на HTML-странице.
 * @param {string} activityText - Текст активности для отображения.
 */
function updateActivity(activityText) {
    document.getElementById('activity').textContent = activityText;
}

/**
 * Обновляет данные периодически каждую минуту.
 */
export function updateDataPeriodically() {
    getRandomActivity();
    setTimeout(updateDataPeriodically, 60000); // Обновление данных каждую минуту (60000 миллисекунд)
}
