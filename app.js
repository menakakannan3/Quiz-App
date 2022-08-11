const quizData =[
    {
        question:"who developed the python language?",
        a:"Guido van Rossum",
        b:"c",
        c:"Just van Rossum",
        d:"Yukihiro Matsumoto",
        correct:"a",
    },
    {
        question:"c++ was developed by ?",
        a:"Bjarne Stroustrup",
        b:"James Gosling",
        c:"Guido van Rossum",
        d:"Yukihiro Matsumoto",
        correct:"a",

    },
    {
        question:"What does CSS stand for?",
         a:"Central Style Sheets", 
         b:"Cascading Style Sheets",
         c:"Cascading Simple Sheets",
         d:"Cars SUVs Sailboats",
         correct:"b",
    },
    {
        question:"when is python developed?",
        a:"1988",
        b:"1980",
        c:"1991",
        d:"1995",
        correct:"c"
    },
    {
        question:"what does matlab stand for ?",
        a:"math laboratory",
        b:"matrix laboratory",
        c:"mathworks",
        d:"none of the above",
        correct:"a",
    },
];

const quiz = document.getElementById("quiz");
const answerElements= document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text =document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text= document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const  submitButton = document.getElementById("submit");


let currentQuiz = 0;
let score = 0;


const deselectedAnswer =()=>{
    answerElements.forEach((answer)=>(answer.checked=false));//*used to uncheck the checkbox*//
}

const getSelected =()=>{
    let answer;
    answerElements.forEach((answerElement)=>{
        if(answerElement.checked) answer=answerElement.id;//*if the answers is checked then check with the id *//
    });
    return answer;
};

const loadQuiz =()=>{
    deselectedAnswer();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText=currentQuizData.question;
    a_text.innerText=currentQuizData.a;
    b_text.innerText=currentQuizData.b;
    c_text.innerText=currentQuizData.c;
    d_text.innerText=currentQuizData.d;

};//*used to display the quesstions*//


loadQuiz();

submitButton.addEventListener("click",()=>{
    const answer =getSelected();
    if(answer){
        if(answer === quizData[currentQuiz].correct) score++;
        currentQuiz++;
        if(currentQuiz < quizData.length) loadQuiz();
        else{
            quiz.innerHTML=`<h2>you answered ${score}/${quizData.length} questions correctly</h2>
            <div class="btnc">
            <button onclick="history.go(0)"  id="submit" class="btn" >Play Again</button>
            </div>`
        }//* history.go(0) used to go back to the pervious page*//
    }
})