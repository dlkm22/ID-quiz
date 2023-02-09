let questions = "questions";
let questions1 = "questions1";
let questions2 = "questions2";
let questions3 = "questions3";


function Agents(){
    sessionStorage.clear();
    document.getElementById('message')
    .innerHTML="Think you know your Agents? Play this gamemode.";
    sessionStorage.setItem("questionsKey",questions3);


}
function Maps(){
    sessionStorage.clear();
    document.getElementById('message')
    .innerHTML= "This can be easily done by veteran players! Find out if you are one";
    sessionStorage.setItem("questionsKey",questions2);


}
function Abilities(){
    sessionStorage.clear();
    document.getElementById('message')
    .innerHTML= "Most people do not know the actual names of the abilities. Are you one of them?";
    sessionStorage.setItem("questionsKey", questions1);
}


function Trivia(){
    sessionStorage.clear();
    document.getElementById('message')
    .innerHTML= "Mix of valorant trivia. Made for the all-rounders.";
    sessionStorage.setItem("questionsKey", questions);
    console.log(sessionStorage.getItem("questionsKey"));
}