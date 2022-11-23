//4 задание
//Напишите код приложения, интерфейс которого представляет собой 2 input и кнопку submit. В input можно ввести любое число.
//При клике на кнопку происходит следующее:
//Если оба числа не попадают в диапазон от 100 до 300 или введено не число — выводить ниже текст «одно из чисел вне диапазона от 100 до 300»;
//Если числа попадают в диапазон от 100 до 300 — сделать запрос c помощью fetch по URL https://picsum.photos/200/300,
//где первое число — ширина картинки, второе — высота.


function checkInput(first, second){
    if ((first >= 100) && (first <= 300) && (second >= 100) && (second <= 300)) {
        console.log(first);
        console.log(second);
        return `https://picsum.photos/${first}/${second}`
    } else {
        area.innerHTML = `Введенное число (или же оба числа) вне диапазона от 100 до 300`
    }
}
function showPic(url){
    area.innerHTML = `
        <div>
            <img src="${url}" alt="image" style="padding: 5px 5px 5px 0">
        </div>
    `;

}

const btn = document.querySelector('button');
const area = document.querySelector('div');

btn.addEventListener('click',  async () => {
    await fetch(checkInput(document.querySelector('.first').value, document.querySelector('.second').value))

        .then((response) => {
            console.log(response); //вывод консоль для проверки названия свойства для доступа к ссылке картинки
            showPic(response.url)
        })
        .catch(() => {
            console.log('Что-то не так');
        })

})


