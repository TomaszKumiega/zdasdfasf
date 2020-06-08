var quiz = {};
$(document).ready(function() {

    quiz.questionNumber = 1;
    quiz.answers = [0, 0, 0, 0, 0];

    nextQuestion();

    $("#next-question").on('click', function() {
        writeAnswer();
        quiz.questionNumber += 1;
        nextQuestion();

        $("#answer-button1").prop("checked", false);
        $("#answer-button2").prop("checked", false);
        $("#answer-button3").prop("checked", false);
    });

    $("#answer-button1").on('click', function() {
        if ($("#answer-button2").is(':checked')) $("#answer-button2").prop("checked", false);
        if ($("#answer-button3").is(':checked')) $("#answer-button3").prop("checked", false);
    })

    $("#answer-button2").on('click', function() {
        if ($("#answer-button1").is(':checked')) $("#answer-button1").prop("checked", false);
        if ($("#answer-button3").is(':checked')) $("#answer-button3").prop("checked", false);
    })
    $("#answer-button3").on('click', function() {
        if ($("#answer-button2").is(':checked')) $("#answer-button2").prop("checked", false);
        if ($("#answer-button1").is(':checked')) $("#answer-button1").prop("checked", false);
    })

    function nextQuestion() {

        switch (quiz.questionNumber) {
            case 1:
                {
                    question = "1. Bierzesz dwa tygodnie wolnego w pracy. Jak je wykorzystasz?";

                    answer1 = "Wyruszam w podróż do jakiegoś egzotycznego miejsca i poznaję nową kulturę.";
                    answer2 = "Jadę na kepmping nad morzem.";
                    answer3 = "Wynajmuję domek w górach.";


                    changeQuestion(question, answer1, answer2, answer3);
                }
                break;
            case 2:
                {
                    question = "2. Podczas prowadzenia samochodu wybierasz stację radiową, która puszcza najwięcej:";

                    answer1 = "Jazzu.";
                    answer2 = "Klasycznego rocka.";
                    answer3 = "Muzyki alternatywnej.";


                    changeQuestion(question, answer1, answer2, answer3);
                }
                break;
            case 3:
                {
                    question = "3. Dokończ zdanie. Świat jest:";

                    answer1 = "Moim wymysłem.";
                    answer2 = "Moją rodziną i przyjaciółmi.";
                    answer3 = "Moimi możliwościami.";


                    changeQuestion(question, answer1, answer2, answer3);
                }
                break;
            case 4:
                {
                    question = "4. Najbardziej identyfikujesz się z:";

                    answer1 = "Romantykiem.";
                    answer2 = "Człowiekiem pracowitym.";
                    answer3 = "Poszukiwaczem przygód.";


                    changeQuestion(question, answer1, answer2, answer3);
                }
                break;
            case 5:
                {
                    question = "5. Czy umiesz szybko podejmować decyzje?";

                    answer1 = "Zależy od tego, czy jest to ważna decyzja.";
                    answer2 = "Niestety nie... Sprawia mi to dość duże problemy.";
                    answer3 = "Tak, zawsze jestem pewny swoich wyborów, więc nie zastanawiam się długo.";

                    $("#next-question").text('Wynik');

                    changeQuestion(question, answer1, answer2, answer3);
                }
                break;
            case 6:
                {
                    saveAnswers();
                    location.replace("quiz-result.html");

                }
                break;
        }
    }

    function changeQuestion(question, answer1, answer2, answer3) {
        $("#question").text(question);
        $("#answer3").text(answer3);
        $("#answer1").text(answer1);
        $("#answer2").text(answer2);
    }

    function writeAnswer() {

        if ($("#answer-button1").is(':checked')) quiz.answers[quiz.questionNumber - 1] = 1;
        if ($("#answer-button2").is(':checked')) quiz.answers[quiz.questionNumber - 1] = 2;
        if ($("#answer-button3").is(':checked')) quiz.answers[quiz.questionNumber - 1] = 3;
    }

    function saveAnswers() {

        localStorage.setItem("answers", quiz.answers);
    }
});