const content = document.getElementById("content");
const questionNumber = document.getElementById("questionNumber");
const progressBar = document.getElementById("progressBar");

let currentQuestion = 0;

const totalQuestions = 7;

const answers = {
    freeTime: "",
    character: "",
    dream: "",
    talents: "",
    people: "",
    facts: "",
    mood: ""
};


// -------------------------
// ПРОГРЕСС
// -------------------------

function updateProgress() {

    const progress =
        (currentQuestion / totalQuestions) * 100;

    progressBar.style.width =
        progress + "%";

    if (currentQuestion === 0) {

        questionNumber.textContent = "";

    } else {

        questionNumber.textContent =
            `Вопрос ${currentQuestion} из ${totalQuestions}`;
    }
}


// -------------------------
// НАЧАЛО
// -------------------------

function startScreen() {

    currentQuestion = 0;

    updateProgress();

    content.innerHTML = `

        <h1>
            ✨ Узнай Асему поближе
        </h1>

        <p>
            Хочешь узнать Асему немного лучше?
            Тогда начинаем 😎
        </p>

        <div class="buttons">

            <button
                class="primary"
                id="start">
                Начать 🚀
            </button>

        </div>
    `;

    document.getElementById("start").onclick =
        questionOne;
}


// -------------------------
// ВОПРОС 1
// -------------------------

function questionOne() {

    currentQuestion = 1;

    updateProgress();

    content.innerHTML = `

        <h1>
            🕐 Что ты любишь делать
            в свободное время?
        </h1>

        <textarea
            id="answer"
            placeholder="Напиши свой ответ..."
        ></textarea>

        <div class="buttons">

            <button
                class="primary"
                id="ok">
                Окей ✓
            </button>

        </div>
    `;

    document.getElementById("ok").onclick =
        function () {

            answers.freeTime =
                document.getElementById("answer").value;

            questionTwo();
        };
}


// -------------------------
// ВОПРОС 2
// -------------------------

function questionTwo() {

    currentQuestion = 2;

    updateProgress();

    content.innerHTML = `

        <h1>
            🌷 Какой у тебя характер?
        </h1>

        <textarea
            id="answer"
            placeholder="Напиши, какой у тебя характер..."
        ></textarea>

        <div class="buttons">

            <button
                class="primary"
                id="ok">
                Окей ✓
            </button>

        </div>
    `;

    document.getElementById("ok").onclick =
        function () {

            answers.character =
                document.getElementById("answer").value;

            questionThree();
        };
}


// -------------------------
// ВОПРОС 3
// -------------------------

function questionThree() {

    currentQuestion = 3;

    updateProgress();

    content.innerHTML = `

        <h1>
            🌙 Хочешь ли ты ещё раз
            увидеть Артура во сне?
        </h1>

        <div class="buttons">

            <button
                class="primary"
                id="yes">
                Да ❤️
            </button>

            <button id="no">
                Нет
            </button>

        </div>
    `;

    const yesButton =
        document.getElementById("yes");

    const noButton =
        document.getElementById("no");

    let noSize = 17;

    noButton.onclick =
        function () {

            noSize -= 3;

            noButton.style.fontSize =
                noSize + "px";

            noButton.style.padding =
                Math.max(5, noSize) +
                "px " +
                Math.max(8, noSize) +
                "px";

            if (noSize <= 2) {

                noButton.style.display =
                    "none";
            }
        };

    yesButton.onclick =
        function () {

            answers.dream =
                "Да ❤️";

            questionFour();
        };
}


// -------------------------
// ВОПРОС 4
// -------------------------

function questionFour() {

    currentQuestion = 4;

    updateProgress();

    content.innerHTML = `

        <h1>
            ✨ Есть ли у тебя
            какие-нибудь таланты?
        </h1>

        <textarea
            id="answer"
            placeholder="Расскажи о своих талантах..."
        ></textarea>

        <div class="buttons">

            <button
                class="primary"
                id="ok">
                Окей ✓
            </button>

        </div>
    `;

    document.getElementById("ok").onclick =
        function () {

            answers.talents =
                document.getElementById("answer").value;

            questionFive();
        };
}


// -------------------------
// ВОПРОС 5
// -------------------------

function questionFive() {

    currentQuestion = 5;

    updateProgress();

    content.innerHTML = `

        <h1>
            💭 Какие люди тебе нравятся?
        </h1>

        <textarea
            id="answer"
            placeholder="Напиши свой ответ..."
        ></textarea>

        <div class="buttons">

            <button
                class="primary"
                id="ok">
                Окей ✓
            </button>

        </div>
    `;

    document.getElementById("ok").onclick =
        function () {

            answers.people =
                document.getElementById("answer").value;

            questionSix();
        };
}


// -------------------------
// ВОПРОС 6
// -------------------------

function questionSix() {

    currentQuestion = 6;

    updateProgress();

    content.innerHTML = `

        <h1>
            🤫 Какие факты о тебе
            обычно знают далеко не все?
        </h1>

        <textarea
            id="answer"
            placeholder="Расскажи какой-нибудь необычный факт..."
        ></textarea>

        <div class="buttons">

            <button
                class="primary"
                id="ok">
                Окей ✓
            </button>

        </div>
    `;

    document.getElementById("ok").onclick =
        function () {

            answers.facts =
                document.getElementById("answer").value;

            questionSeven();
        };
}


// -------------------------
// ВОПРОС 7
// -------------------------

function questionSeven() {

    currentQuestion = 7;

    updateProgress();

    content.innerHTML = `

        <h1>
            ☀️ Что обычно поднимает тебе
            настроение, когда оно плохое?
        </h1>

        <textarea
            id="answer"
            placeholder="Напиши свой ответ..."
        ></textarea>

        <div class="buttons">

            <button
                class="primary"
                id="ok">
                Окей ✓
            </button>

        </div>
    `;

    document.getElementById("ok").onclick =
        function () {

            answers.mood =
                document.getElementById("answer").value;

            finish();
        };
}


// -------------------------
// ФИНИШ
// -------------------------

function finish() {

    progressBar.style.width =
        "100%";

    questionNumber.textContent =
        "Тест завершён 🎉";

    content.innerHTML = `

        <h1 class="final">
            Спасибо, Асеме ❤️
        </h1>

        <p>
            Спасибо, что поделилась
            информацией о себе,
            хомячок 🐹
        </p>

        <p>
            Теперь я знаю тебя
            немного лучше ✨
        </p>
    `;
}


// -------------------------
// ЗАПУСК
// -------------------------

startScreen();