let 
    responseObject,
    chosenRadio,
    correctAnswerCount,
    currentQuestion,
    testName,
    testResultDetail;

const 
    testScreenWrapper = document.getElementById('testScreenWrapper'),
    nextQuestion = document.getElementById("nextQuestion"),
    testQuestion = document.getElementsByClassName("testQuestion"),
    answerRadio = document.getElementsByClassName("answerRadio"),
    

    testScreen = (chosenTest) =>{
        nextQuestion.disabled = false;
        testName = chosenTest.name;
        correctAnswerCount = 0;
        currentQuestion = 0;
        testResultDetail = [];

        loading.classList.remove('invisible');
        fetch(chosenTest.url)
            .then((resp)=>resp.text())
            .then((resp)=>JSON.parse(resp))
            .then((response)=>{
                responseObject = response.sort(()=>Math.random() - 0.5);
                mapQuestions();
                loading.classList.add('invisible');
                testScreenWrapper.classList.remove('invisible');
            })   
    },

    mapQuestions = () =>
        Object.keys(responseObject[currentQuestion]).forEach((question, i)=>{
            if(i > 3){
                return;
            }
            testQuestion[i].textContent = responseObject[currentQuestion][question];
        });

[].forEach.call(answerRadio, (radio)=>{
    radio.onclick = (e) => chosenRadio = parseInt(e.target.attributes.key.nodeValue);
});
nextQuestion.onclick = () => {

    responseObject[currentQuestion][Object.keys(responseObject[currentQuestion])[chosenRadio]] 
    === 
    responseObject[currentQuestion].answer && correctAnswerCount++;

    testResultDetail.push({
        "question": responseObject[currentQuestion].q,
        "answer": responseObject[currentQuestion][Object.keys(responseObject[currentQuestion])[chosenRadio]],
        "correct": responseObject[currentQuestion].answer
    })

    if(currentQuestion == responseObject.length-1){
        testScreenWrapper.classList.add("invisible");
        loading.classList.remove('invisible');
        nextQuestion.disabled = true;
        return resultsTable(testResultDetail, correctAnswerCount, responseObject.length, testName)
    }
        
    currentQuestion++
    mapQuestions();
};
