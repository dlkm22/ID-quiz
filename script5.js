
let questions = [
    {
        id: 1,
        question: "What do you hear when the enemy Reyna uses her ultimate ability?" ,
        answer:"The hunt begins",
        options: [
            "Welcome to my world!",
            "The hunt begins",
            "They will cower!",
            "Let’s turn the tide!"
        ]   
    },
    {
        id: 2,
        question: "How many blinds does Breach have?",
        answer:"2",
        options: [
            "0",
            "1",
            "2",
            "3"
        ]   
    },
    {
        id: 3,
        question: "Which map has a teleporter?",
        answer:"Bind",
        options: [
            "Bind",
            "Ascent",
            "Breeze",
            "Fracture"
        ]   
    },
    {
        id: 4,
        question: "When was VALORANT released?",
        answer:"2020",
        options: [
            "2019",
            "2020",
            "2021",
            "2022"
        ]   
    },
    {
        id: 5,
        question: "How many ultimate points does Cypher need to use his ultimate?",
        answer:"6",
        options: [
            "6",
            "5",
            "7",
            "8"
        ]   
    },
    {
        id: 6,
        question: "How many healthpoints can sage heal herself for? (Latest release as of 9/2/2023",
        answer:"30",
        options: [
            "20",
            "30",
            "60",
            "80"
        ]   
    },
    {
        id: 7,
        question: "What was VALORANT's old name?",
        answer:"Project A",
        options: [
            "Project A",
            "Valorus",
            "Project Sekai",
            "League of Gunners"
        ]   
    },
    {
        id: 8,
        question: "What country is Fade from?",
        answer:"Turkey",
        options: [
            "Siberia",
            "Russia",
            "Turkey",
            "Kazakhstan"
        ]   
    },
    {
        id: 9,
        question: "How long is one round of Unrated in VALORANT?",
        answer:"1 minute 30 seconds",
        options: [
            "10 minutes",
            "5 minutes",
            "1 minute 30 seconds",
            "20 to 30 minutes"
        ]   
    },
    {
        id: 10,
        question: "What is Viper's real name?",
        answer:"Sabrina",
        options: [
            "Sabrina",
            "Lily",
            "Jessie",
            "Chloe"
        ]   
    },
    {
        id: 11,
        question: "What is the role of an agent whose goal is to gain space for their team?",
        answer:"Duelists",
        options: [
            "Duelist",
            "Controllers",
            "Initiator",
            "Sentinels"
        ]   
    },
    {
        id: 12,
        question: "What is Jett's signature ability? (Free)",
        answer:"Tailwind",
        options: [
            "Cloudburst",
            "Updraft",
            "Tailwind",
            "Blade Storm"
        ]   
    },
    {
        id: 13,
        question: "What is Chamber's real name",
        answer:"Vincent Fabron",
        options: [
            "Vincent Fabron",
            "Baguette Lover",
            "Croissant Lee",
            "Jean La Pierre"
        ]   
    },
    {
        id: 14,
        question: "What map is this from?",
        answer:"Pearl",
        options: [
            "Breeze",
            "Icebox",
            "Pearl",
            "Lotus"
        ]   
    },
    {
        id: 15,
        question: "What is the rarest knife in VALORANT?",
        answer:"Ruin Dagger",
        options: [
            "Sovereign Sword",
            "Ruin Dagger",
            "KTAC Blade",
            "Champion's Karambit"
        ]   
    },
    {
        id: 16,
        question: "How many rounds are needed to win a standard game of VALORANT?",
        answer:"13 rounds",
        options: [
            "13 rounds",
            "12 rounds",
            "9 rounds",
            "5 rounds"
        ]   
    },
    {
        id: 17,
        question: "Which agent can flash opponents even if they are looking away?",
        answer:"Omen",
        options: [
            "Breach",
            "Omen",
            "Reyna",
            "Yoru"
        ]   
    },
    {
        id: 18,
        question: "Does this spray exist in the game?",
        answer:"I wish it did",
        options: [
            "Yes",
            "No",
            "Maybe",
            "I wish it did"
        ]   
    },
    {
        id: 19,
        question: "Which skin collection is this?",
        answer:"Sentinels of light",
        options: [
            "Sentinels of light",
            "Glitchpop",
            "Cryostasis",
            "Prime"
        ]   
    },
    {
        id: 20,
        question: "Which company owns VALORANT?",
        answer:"Riot Games",
        options: [
            "Riot Games",
            "Ubisoft",
            "Garena",
            "Tencent"
        ]   
    },

];

let arrayofImages = [
         "ascent.jpg",
         "breachflash.jpg", 
         "ChamberTP.jpg",
         "Thinking.jpg",
    
] ;
const myImg = document.querySelector("img")



let question_count = 0;
let points = 0;


window.onload = function(){
    show(question_count)
};

function show(count){
    let question = document.getElementById("questions");
    let[first, second, third, fourth] = questions[count].options;

    question.innerHTML = `<h2>Q${count + 1}. ${questions[count].question}</h2>
    <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
    </ul>`;
    toggleActive();  
}

function toggleActive(){
    let option = document.querySelectorAll("li.option");
    for(let i=0; i < option.length; i++){
        option[i].onclick = function(){
            for(let i=0; i < option.length; i++){
                if(option[i].classList.contains("active")){
                    option[i].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
        myImg.src = arrayofImages[question_count];
        myImg.height = 300;
        myImg.width = 500;
    }
}

function next(){

    if(question_count == questions.length -1){
        location.href = "finish.html";
    }
    console.log(question_count);



let user_answer = document.querySelector("li.option.active").innerHTML;
if(user_answer == questions[question_count].answer){
    points += 50;
    sessionStorage.setItem("points",points);
}
console.log(points);

question_count++;
show(question_count);
}