//2 задание
//Вам дана заготовка и результат, который вы должны получить.
//Ваша задача — написать код, который будет преобразовывать JSON в JS-объект и выводить его в консоль.

const json = `{
    "list": [
        {
            "name": "Petr",
            "age": "20",
            "prof": "mechanic"
        },
        {
            "name": "Vova",
            "age": "60",
            "prof": "pilot"
        }
    ]
}`

const data = JSON.parse(json);

data.list.forEach(elem => { //2й способ (короткий)
    elem.age = +(elem.age)
})
console.log(data)