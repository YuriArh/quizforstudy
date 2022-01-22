'use strict';

const main = document.querySelector('.main');
const selection = document.querySelector('.selection');

const getData = () => {
    const dataBase = [
        {
            id: "01",
            theme: 'Tema01',
            result: [
                [30, 'Есть задатки'],
                [60, 'Неплохо']
                [100, 'Отлично']
            ],
            list: [
                {
                    type: 'checkbox',
                    question: 'Вопрос',
                    answer: ['правильный1', 'правилньый2', 'неправильный', 'неправильный'],
                    correct: 2
                },
                {
                    type: 'radio',
                    question: 'Вопрос',
                    answer: ['правильный1', 'неправилньый', 'неправильный', 'неправильный'],
                },
                {
                    type: 'checkbox',
                    question: 'Вопрос',
                    answer: ['правильный1', 'правилньый2', 'неправильный', 'неправильный'],
                    correct: 2
                },
                {
                    type: 'radio',
                    question: 'Вопрос',
                    answer: ['правильный1', 'неправилньый', 'неправильный', 'неправильный'],
                },
                {
                    type: 'checkbox',
                    question: 'Вопрос',
                    answer: ['правильный1', 'правилньый2', 'неправильный', 'неправильный'],
                    correct: 1
                },
                {
                    type: 'checkbox',
                    question: 'Вопрос',
                    answer: ['правильный1', 'правилньый2', 'правильный3', 'неправильный'],
                    correct: 3
                },
                {
                    type: 'radio',
                    question: 'Вопрос',
                    answer: ['правильный1', 'неправилньый', 'неправильный', 'неправильный'],
                }
            ]
        },
        {
            id: "02",
            theme: 'Tema02',
            result: [
                [40, 'Есть задатки'],
                [80, 'Неплохо']
                [100, 'Отлично']
            ],
            list: [
                {
                    type: 'radio',
                    question: 'Вопрос',
                    answer: ['правильный1', 'неправилньый', 'неправильный', 'неправильный'],
                },
                {
                    type: 'radio',
                    question: 'Вопрос',
                    answer: ['правильный1', 'правилньый2', 'неправильный', 'неправильный'],
                },
                {
                    type: 'checkbox',
                    question: 'Вопрос',
                    answer: ['правильный1', 'правилньый2', 'неправильный', 'неправильный'],
                    correct: 1
                },
                {
                    type: 'checkbox',
                    question: 'Вопрос',
                    answer: ['правильный1', 'правилньый2', 'правильный3', 'неправильный'],
                    correct: 3
                },
                {
                    type: 'radio',
                    question: 'Вопрос',
                    answer: ['правильный1', 'неправилньый', 'неправильный', 'неправильный'],
                }
            ]
        }
    ];
    return dataBase;
}

const renderTheme = themes => {
    const list = document.querySelector('.selection__list');
    list.textContent = '';

    const buttons = [];

    for(let i = 0; i < themes.length; i++) {
        const li = document.createElement('li');
        li.className = 'selection__item';

        const button = document.createElement('button');
        button.className = 'selection__theme';
        button.dataset.id = themes[i].id;
        button.textContent = themes[i].theme;

        li.append(button);

        list.append(li);

        buttons.push(button);
    }
    console.log(buttons);
    return buttons;
}


const initQuiz = () => {
    const data = getData();
    
    const buttons = renderTheme(data);
};

initQuiz()
