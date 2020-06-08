$(document).ready(function() {

    answers = localStorage.getItem("answers");
    countA = 0;
    countB = 0;
    countC = 0;

    countAnswers();
    displayResult();

    function countAnswers() {

        for (i = 0; i < 5; i++) {
            if (answers[i] == 1) countA += 1;
            else if (answers[i] == 2) countB += 1;
            else if (answers[i] == 3) countC += 1;
        }
    }

    function displayResult() {

        if (countA > countB && countA > countC) $("#result").text('Nie jesteś złotokapem. Jesteś zwykłym ekscentrykiem.');
        else if (countB > countA && countB > countC) $("#result").text('Jesteś złotokapem zwyczajnym. Wykazujesz przeciętne reakcje na większość' +
            ' wydarzeń w Twoim życiu. Prawdopodobnie charakteryzujesz się słabą decyzyjnością, dlatego' +
            ' mógłbyś rosnąć wszędzie. Bycie złotokapem zwyczajnym nie jest takie złe. W końcu wszyscy lubią' +
            ' klasyki.');
        else if (countC > countA && countC > countB) $("#result").text('Jesteś złotokapem alpejskim. Lubisz wyzwania, jesteś stanowczy i pewny siebie.' +
            ' Poradziłbyś sobie jako złotokap rosnący wysoko w górach. Warunkowałyby Ci niebywały rozkwit.' +
            ' Jesteś indywidualnością i wierzysz w siebie oraz swoje możliwości.');
        else if (countA == countB || countB == countC || countA == countC) $("#result").text('Jesteś odmianą Waterera, hybrydą' +
            ' dwóch gatunków, bardzo popularną i lubianą przez ludzi. Z takim poparciem większości mógłbyś' +
            ' startować na prezydenta.');
    }
});