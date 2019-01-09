const 
    resultWrapper = document.getElementById("resultWrapper"),
    reviewResultButton = document.getElementById("reviewResultButton"),
    resultsList = document.getElementById("resultsList"),

    resultsTable = (testResult, correct, total, name) =>{
        resultsList.innerHTML = "";

        localStorage[name] = `${correct} / ${total}`;
        let totalScore = document.createElement("h2");
        totalScore.innerHTML = `Your score is: ${correct} / ${total}`;
        resultsList.appendChild(totalScore);

        testResult.map((element)=>{
            let 
                question =  document.createElement("h3"),
                answers = document.createElement("h4");

            question.innerHTML = element.question;
            answers.innerHTML = `Your answer: ${element.answer}, correct: ${element.correct}`;

            resultsList.appendChild(question);
            resultsList.appendChild(answers);
        });
        loading.classList.add('invisible');
        resultWrapper.classList.remove("invisible");
    }

reviewResultButton.onclick = () =>{
    resultWrapper.classList.add("invisible");
    resultsList.innerHTML = "";
    loadTests();
}