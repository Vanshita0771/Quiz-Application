
//Selecting all required elements
const info_box=document.querySelector(".info_box");

const exit_btn=document.querySelector(".buttons .quit");
const continue_btn=document.querySelector(".buttons .restart");
const quiz_box=document.querySelector(".quiz_box");
const start_btn=document.querySelector(".start_btn button");

const startingMinutes=2;
let time=startingMinutes*60;
const countdownEl=document.querySelector(".timer_sec");
function updateCountDown(){
    const minutes=Math.floor(time/60);
    let seconds=time%60;
    seconds=(seconds < 10) ? '0' + seconds : seconds;
    countdownEl.innerText=`${minutes}:${seconds}`;
    time--;
    if(time==0){
        const quiz_box=document.querySelector(".quiz_box");
        quiz_box.classList.remove("activeQuiz");
        const fname=document.getElementById("fname").value;
        const fathername=document.getElementById("fathername").value;
        const phone_no=document.getElementById("phone_no").value;
        const mail=document.getElementById("mail").value;
        const result_box=document.querySelector(".result_box");
        result_box.classList.add("activeResult"); 
        const detail=document.querySelector(".details");
        detail.innerHTML='<h2 style="text-align:center;">'+'Your personal details'+'</h2><br>'+'<div>'+'Name:&nbsp&nbsp'+fname+'</div>'+
        '<div>'+'Father name:&nbsp&nbsp'+fathername+'</div>'+ 
        '<div>'+'Email:&nbsp&nbsp'+mail+'</div>'+ 
        '<div>'+'Phone_no:&nbsp&nbsp'+phone_no+'</div>'+'<br>';
        const notatt=5-correct-incorrect;

        const score_text=document.querySelector(".score_text");
        score_text.innerHTML='<h2 style="text-align:center;">'+'Your result details'+'</h2><br>'+'<div>'+'Max Marks:&nbsp&nbsp'+5+'</div>'+
        '<div>'+'Marks scored:&nbsp&nbsp'+correct+'</div>'+ 
        '<div>'+'Correctly attempted:&nbsp&nbsp'+correct+'</div>'+ 
        '<div>'+'Incorrectly attempted:&nbsp&nbsp'+incorrect+'</div>'+
        '<div>'+'Not attempted:&nbsp&nbsp'+notatt+'</div>';
        return;
    }
}
    


start_btn.onclick= ()=>{
    const fname=document.getElementById("fname").value;
    const fathername=document.getElementById("fathername").value;
    const phone_no=document.getElementById("phone_no").value;
    const mail=document.getElementById("mail").value;
    if(fname==''||fathername==''||mail==''||phone_no.length!=10||(mail.search("@")==-1)||(mail.search(".")==-1)){
        alert("Enter the details");
    }
    else{
      const start_box=document.querySelector(".start_btn");
      const info_box=document.querySelector(".info_box");
      info_box.classList.add("activeInfo"); 
      start_box.classList.add("startActive");
    }
}

//if Continue button clicked
continue_btn.onclick= ()=>{
    const info_box=document.querySelector(".info_box");
    info_box.classList.remove("activeInfo"); 
    quiz_box.classList.add("activeQuiz");
    showQuestions(que_count); 
    setInterval(updateCountDown,1000);
}
//Questions
/*creating an array and passing the que Number,
questions,options and answers*/
let questions=[
    {
        numb:1,
        question:"Arrays in JavaScript are defined by which of the following statements?",
        answer:"It is an ordered list of values",
        options:[
            "It is an ordered list of values",
            "It is an ordered list of objects",
            "It is an ordered list of string",
            "It is an ordered list of functions"
        ]
    },
    {
        numb:2,
        question:"Which type of JavaScript language is ___?",
        answer:"Object-Based",
        options:[
            "Object-Oriented",
            "Object-Based",
            "Assembly-language",
            "High-level"
        ]
    },
    {
        numb:3,
        question:"Which one of the following also known as Conditional Expression:",
        answer:"immediate if",
        options:[
            "Alternative to if-else",
            "Switch statement",
            "If-then-else statement",
            "immediate if"
        ]
    },
    {
        numb:4,
        question:"In JavaScript, what is a block of statement?",
        answer:"block that combines a number of statements into a single compound statement",
        options:[
            "Conditional block",
            "block that combines a number of statements into a single compound statement",
            "both conditional block and a single statement",
            "block that contains a single statement"
        ]
    },
    {
        numb:5,
        question:"The 'function' and 'var' are known as:",
        answer:"Declaration statements",
        options:[
            "Keywords",
            "Data types",
            "Declaration statements",
            "Prototypes"
        ]
    }
]

var que_count=0;
let correct=0;//user scores
let incorrect=0;


//getting questions and options from array
function showQuestions(index){
  const que_text=document.querySelector(".que_text");
  const option_list=document.querySelector(".option_list");
  let que_tag="<span>"+questions[index].numb+". "+questions[index].question+"</span>"
  que_text.innerHTML=que_tag;
  let option_tag='<div class="option">'+questions[index].options[0]+'</div>' 
         + '<div class="option">'+questions[index].options[1]+'</div>'
         + '<div class="option">'+questions[index].options[2]+'</div>'
         + '<div class="option">'+questions[index].options[3]+'</div>';
   option_list.innerHTML=option_tag;
  
   const option=option_list.querySelectorAll(".option");
   queCounter(que_count+1);
   
   //setting onclick attribute to a available options
    for(i=0;i<4;i++){
          option[i].setAttribute("onclick","optionSelected(this)")   
        }

}

function optionSelected(answer){
    answer.classList.add("select");
    let userAns=answer.textContent;//getting user Selected option
    const option_list=document.querySelector(".option_list");
    let correctAns=questions[que_count].answer;//getting correct answer from array
    let alloptions=option_list.children.length;//getting all option items
    if(userAns==correctAns){
        correct++;
    }  
    else{
        incorrect++;
    }
    for(i=0;i<alloptions;i++){
        option_list.children[i].classList.add("disabled");
    }
   
}
const next_button=document.querySelector("footer .next_btn");
const no_of_ques=document.querySelector("footer .no_of_que");

function queCounter(index){
    let totalQueCountTag='<span><p class="no_of_que">'+index+'</p>of <p>5</p>Questions</span>';
    let total_ques=document.querySelector(".total_que");
    total_ques.innerHTML=totalQueCountTag;
}

next_button.onclick=()=>{
    if(que_count<4){
       que_count++;
       showQuestions(que_count);
    }
    else{
        const quiz_box=document.querySelector(".quiz_box");
        quiz_box.classList.remove("activeQuiz");
        const fname=document.getElementById("fname").value;
        const fathername=document.getElementById("fathername").value;
        const phone_no=document.getElementById("phone_no").value;
        const mail=document.getElementById("mail").value;
        const result_box=document.querySelector(".result_box");
        result_box.classList.add("activeResult"); 
        const detail=document.querySelector(".details");
        detail.innerHTML='<h2 style="text-align:center;">'+'Your personal details'+'</h2><br>'+'<div>'+'Name:&nbsp&nbsp'+fname+'</div>'+
        '<div>'+'Father name:&nbsp&nbsp'+fathername+'</div>'+ 
        '<div>'+'Email:&nbsp&nbsp'+mail+'</div>'+ 
        '<div>'+'Phone_no:&nbsp&nbsp'+phone_no+'</div>'+'<br>';
        const notatt=5-correct-incorrect;

        const score_text=document.querySelector(".score_text");
        score_text.innerHTML='<h2 style="text-align:center;">'+'Your result details'+'</h2><br>'+'<div>'+'Max Marks:&nbsp&nbsp'+5+'</div>'+
        '<div>'+'Marks scored:&nbsp&nbsp'+correct+'</div>'+ 
        '<div>'+'Correctly attempted:&nbsp&nbsp'+correct+'</div>'+ 
        '<div>'+'Incorrectly attempted:&nbsp&nbsp'+incorrect+'</div>'+
        '<div>'+'Not attempted:&nbsp&nbsp'+notatt+'</div>';
    }
}


