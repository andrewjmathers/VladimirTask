const 
    resultWrapper = document.getElementById("resultWrapper"),
    reviewResultButton = document.getElementById("reviewResultButton"),
    resultsList = document.getElementById("resultsList"),

    resultsTable = (testResult, correct, total, name) =>{
        
        localStorage[name] = `${correct} / ${total}`;
        let 
            resultOutput = `<h2>Your score is: ${correct} / ${total}</h2>`,
            answers;

<<<<<<< HEAD
        testResult.forEach((element)=>{
                answers = `<h3>${element.question}</h3><h4>Your answer: ${element.answer}, correct: ${element.correct}</h4>`;
=======
        testResult.map((element)=>{
                answers = `<h3>${element.question}</h3><h4>Your answer: ${element.answer || "none"}, correct: ${element.correct}</h4>`;
>>>>>>> 0f46a293eb6c6b0c52df0c2fcb857d12701a2b54
                resultOutput += answers;
        });
        resultsList.innerHTML = resultOutput;
        loading.classList.add('invisible');
        resultWrapper.classList.remove("invisible");
    }

reviewResultButton.onclick = () =>{
    resultWrapper.classList.add("invisible");
    loadTests();
}
