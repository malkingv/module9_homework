//5 задание
//Написать код приложения, интерфейс которого состоит из двух input и кнопки. В input можно ввести любое число.
//Если числа попадают в диапазон от 1 до 10 — сделать запрос по URL https://picsum.photos/v2/list?page=1&limit=10,
// где GET-параметр page — это число из первого input, а GET-параметр limit — это введённое число второго input.

function checkInput(first, second){ //Проверка входных значений
    if ((first >= 1) && (first <= 10) && (second >= 1) && (second <= 10) && Number.isInteger(first) && Number.isInteger(second)){
            return true
    } else if( ((first < 1) || (first > 10)) && ((second < 1) || (second > 10)) ){
        area.innerHTML = 'Номер страницы и лимит вне диапазона от 1 до 10';
        return false
    }
    else if ((first < 1) || (first > 10)){
        area.innerHTML = 'Номер страницы вне диапазона от 1 до 10';
        return false
    } else if((second < 1) || (second > 10)) {
        area.innerHTML = 'Лимит вне диапазона от 1 до 10';
        return false
    } else {
        area.innerHTML = 'Необходимо ввести целое число'
        return false
    }
}
function showPics(resp){ //Вывод картинок и добавление их в localStorage
    let cards = ``;
    let count = 0;
    resp.forEach(elem => {
        let block = `
            <div>
                <img src="${elem.download_url}" alt="image" style="width: 200px; height: auto; padding: 5px">
            </div>
        `;
        cards = cards + block;
        localStorage.setItem(`${count}`, elem.download_url);
        count ++;
    })
    area.innerHTML = cards;
}
function getPic(){ // Выполнение зарпоса на получение картинок
    const f_num = +(document.querySelector('.first').value);
    const s_num = +(document.querySelector('.second').value);
    if(checkInput(f_num,s_num)) {
        fetch(`https://picsum.photos/v2/list?page=${f_num}&limit=${s_num}`)
            .then((response) => {
                return response.json()
            })
            .then((response) => {
                localStorage.clear();
                showPics(response);
            })
            .catch(() => {
                console.log('Ошибка загрузки')
            })
    }
}
const area = document.querySelector('div.result');

console.log(localStorage.length);
if (localStorage.length !== 0){ //Вывод картинок из localStorage
    let cards = ``;
    for (let i = 0; i < localStorage.length; i++) {
        let block = `
            <div>
                <img src="${localStorage.getItem(i)}" alt="image" style="width: 200px; height: auto; padding: 5px">
            </div>
        `;
        cards = cards + block;
    }
    area.innerHTML = cards;
}
const btn = document.querySelector('button');
btn.addEventListener('click',  getPic)