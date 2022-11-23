//3 задание
//Напишите код приложения, интерфейс которого представляет собой input и кнопку.
//В input можно ввести любое число. При клике на кнопку происходит следующее:
//Если число не попадает в диапазон от 1 до 10 — выводить ниже текст «число вне диапазона от 1 до 10».
//Если число попадает в диапазон от 1 до 10 — сделать запрос c помощью XHR по URL
//https://picsum.photos/v2/list?limit=10, где get-параметр limit — это введённое число.

function userUrl() {
    let userNumber = document.querySelector('input').value;
    if (userNumber >= 1 && userNumber <= 10){
        userNumber = 'https://picsum.photos/v2/list?limit=' + userNumber;
        return userNumber
    } else {
        area.innerHTML = `Введенное число вне диапазона!`
    }
}
function userRequest(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('get', url());
    xhr.onload = function (){
        if (xhr.status === 200){
            console.log('userRequest');
            callback(JSON.parse(xhr.response))

        }
    }
    xhr.onerror = function() {
        console.log('Ошибка запроса', xhr.status);
    };
    xhr.send();
}
function displayResult(response){
    console.log('displayResult');
    let cards = ``;
    response.forEach(elem => {
        const cardBlock = `
            <div>
                <img src="${elem.download_url}" alt="image" style="padding: 5px 5px 5px 0; width: 200px; height: auto"> 
            </div>        
        `;
        cards += cardBlock;
    })
    area.innerHTML = cards;
}

const  btn = document.querySelector('button');
const area = document.querySelector('div');
btn.addEventListener('click', () => {
    userRequest(userUrl, displayResult);
});