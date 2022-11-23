//1 задание
//Вам дана заготовка и результат, который вы должны получить.
//Ваша задача — написать код, который будет преобразовывать XML в JS-объект и выводить его в консоль.

const xml =`
    <list>
        <student>
            <name lang="en">
                <first>Ivan</first>
                <second>Ivanov</second>
            </name>
            <age>35</age>
            <prof>teacher</prof>
        </student>
        <student>
            <name lang="ru">
                <first>Петр</first>
                <second>Петров</second>
            </name>
            <age>58</age>
            <prof>driver</prof>
        </student>
    </list>
`;

const parser = new DOMParser();

const xmlPars = parser.parseFromString(xml, "text/xml");
const studentsNode = xmlPars.querySelectorAll('student');

const result = {
    list: []
};

studentsNode.forEach( elem => {
    result.list.push({
        name: [elem.querySelector('first').textContent, elem.querySelector('second').textContent].join(' '),
        age: +(elem.querySelector('age').textContent),
        prof: elem.querySelector('prof').textContent,
        lang: elem.querySelector('name').getAttribute('lang')
    });
})

console.log(result)