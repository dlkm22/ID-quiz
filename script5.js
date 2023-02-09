let external = sessionStorage.getItem("questionsKey");



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

let questions1 = [
    {
        id: 1,
        question: "What ability is this?" ,
        answer:"Paranoia",
        options: [
            "Paranoia",
            "Dark Cover",
            "From the shadows",
            "Shrouded steps"
        ]
    },
    {
        id: 2,
        question: "Which agent does this ability belong to?" ,
        answer:"Fade",
        options: [
            "Jett",
            "Reyna",
            "Kay-O",
            "Fade"
        ]
    },
    {
        id: 3,
        question: "What ability is this?" ,
        answer:"Run it Back",
        options: [
            "Curveball",
            "Resurrection",
            "Run it Back",
            "Heal Orb"
        ]
    },
    {
        id: 4,
        question: "Which agent does this ability belong to?" ,
        answer:"Cypher",
        options: [
            "Brimstone",
            "Cypher",
            "Breach",
            "Sage"
        ]
    },
    {
        id: 5,
        question: "What ability is this?" ,
        answer:"Toxic screen",
        options: [
            "Toxic screen",
            "Hot hands",
            "Snakebite",
            "Snake’s pit"
        ]
    },
    {
        id: 6,
        question: "What is the name of this ability?" ,
        answer:"Fast Lane",
        options: [
            "WI love racism!",
            "Fault Line",
            "Trailblazer",
            "Blaze Wall"
        ]
    },
    {
        id: 7,
        question: "What is the name of this ability?" ,
        answer:"Nova Pulse",
        options: [
            "Nova Pulse",
            "Concussing them",
            "ShockWave",
            "Stun Like Vegetable!"
        ]
    },
    {
        id: 8,
        question: "What is this ability known as?" ,
        answer:"Trailblazer",
        options: [
            "CatRunner",
            "Wolf",
            "Dog",
            "Trailblazer"
        ]
    },
    {
        id: 9,
        question: "Which creature is fade’s prowler related to?" ,
        answer:"Cat",
        options: [
            "Dog",
            "Wolf",
            "Cat",
            "Sheep"
        ]
    },
    {
        id: 10,
        question: "What is the name of this ability?" ,
        answer:"Sky Smoke",
        options: [
            "Remote Smoke",
            "Smoke Down",
            "Sky Smoke",
            "Incinidary"
        ]
    }
];

let questions2= [
    {
        id: 1,
        question: "Where can this bell be found?" ,
        answer:"Haven",
        options: [
            "Haven",
            "Ascent",
            "Lotus",
            "Split"
        ]
    },
    {
        id: 2,
        question: "Where can this be found?" ,
        answer:"Haven",
        options: [
            "Split",
            "Icebox",
            "Haven",
            "Fracture"
        ]
    },
    {
        id: 3,
        question: "Where can this shop be found?" ,
        answer:"Split",
        options: [
            "Ascent",
            "Split",
            "Icebox",
            "Bind"
        ]
    },
    {
        id: 4,
        question: "Where can this be found?" ,
        answer:"Split A Rafters",
        options: [
            "Ascent A Heaven",
            "Split B Rafters",
            "Ascent B Heaven",
            "Split A Rafters"
        ]
    },
    {
        id: 5,
        question: "Where can this elephant be found?" ,
        answer:"Lotus C site",
        options: [
            "Lotus A Tree",
            "Lotus C site",
            "Lotus A site",
            "Lotus B site"
        ]
    },
    {
        id: 6,
        question: "Where can this view be seen?" ,
        answer:"Lotus",
        options: [
            "Breeze",
            "Lotus",
            "Pearl",
            "Icebox"
        ]
    },
    {
        id: 7,
        question: "Where can this quote be seen?" ,
        answer:"Fracture",
        options: [
            "Fracture",
            "Lotus",
            "Split",
            "Bind"
        ]
    },
    {
        id: 8,
        question: "Where can these monitors be found?",
        answer:"Fracture",
        options: [
            "Ascent",
            "Bind",
            "Haven",
            "Fracture"
        ]
    },
    {
        id: 9,
        question: "Where can this operating table be found?" ,
        answer:"Icebox",
        options: [
            "Icebox",
            "Haven",
            "Split",
            "Bind"
        ]
    },
    {
        id: 10,
        question: "What ability is this?" ,
        answer:"Paranoia",
        options: [
            "Haven",
            "Icebox",
            "Fracture",
            "Split"
        ]
    }

];

let questions3= [
    {
        id: 1,
        question: "How long can Cypher’s tripwire extend?" ,
        answer:"1500",
        options: [
            "500",
            "1000",
            "1500",
            "2000"
        ]
    },
    {
        id: 2,
        question: "How long does Killjoy’s ultimate last for?" ,
        answer:"13 seconds",
        options: [
            "10 seconds",
            "11 seconds",
            "12 seconds",
            "13 seconds"
        ]
    },
    {
        id: 3,
        question: "How long did Phoenix’s flash last for pre-buff?" ,
        answer:"1.1s",
        options: [
            "1.1s",
            "1.2s",
            "1.3s",
            "1.5s"
        ]
    },
    {
        id: 4,
        question: "How long does Astra’s wall last for?" ,
        answer:"21 seconds",
        options: [
            "18 seconds",
            "19 seconds",
            "20 seconds",
            "21 seconds"
        ]
    },
    {
        id: 5,
        question: "Where is Harbor from?" ,
        answer:"India",
        options: [
            "India",
            "Australia",
            "Turkey",
            "Poland"
        ]
    },
    {
        id: 6,
        question: "Which agent holds an operator in their player card?" ,
        answer:"Sova",
        options: [
            "Sova",
            "Jett",
            "Sage",
            "Chamber"
        ]
    },
    {
        id: 7,
        question: "Which agent can slow fall?" ,
        answer:"Jett",
        options: [
            "Astra",
            "Brimstone",
            "Jett",
            "Reyna"
        ]
    },
    {
        id: 8,
        question: "Who says this voiceline, “Toaster is broken!”" ,
        answer:"Chamber",
        options: [
            "Chamber",
            "Kay-O",
            "Breach",
            "Neon"
        ]
    },
    {
        id: 9,
        question: "Which agent is from the Philippines?" ,
        answer:"Neon",
        options: [
            "Neon",
            "Sage",
            "Phoenix",
            "Yoru"
        ]
    },
    {
        id: 10,
        question: "What is one of Omen’s hobbies?" ,
        answer:"Knitting",
        options: [
            "Teleporting",
            "Drinking Monster",
            "Knitting",
            "Blinding enemies"
        ]
    },


];

let arrayofImages = [
         "./Images/ascent.jpg",
         "./Images/breachflash.jpg", 
         "./Images/ChamberTP.jpg",
         "./Images/Thinking.jpg",
         "./Images/Bugged.jpg",
         "./Images/Sage.png",
         "./Images/ProjectA.png",
         "./Images/Turkey.jpg",
         "./Images/Time.jpg",
         "./Images/Omen.jpg",
         "./Images/NoEntry.jpg",
         "./Images/Revive.jpg",
         "./Images/French.jpg",
         "./Images/NoAnswersHere.jpg",
         "./Images/RareKnives.jpg",
         "./Images/BrokeJett.jpg",
         "./Images/Flashbang.jpg",
         "./Images/RazeKJ.png",
         "./Images/NiceSkin.jpg",
         "./Images/Rito.jpg" 
] ;

let arrayofImages1 = [
    "./images2/omen.jpg",
    "./images2/fade.jpg",
    "./images2/penix.jpg",
    "./images2/cypjer.jpg",
    "./images2/viper.jpg",
    "./images2/neon.jpg",
    "./images2/astra.jpg",
    "./images2/syke.jpg",
    "./images2/fadde2.jpg",
    "./images2/brim.png",
];

let arrayofImages2 = [
    "./maps/bell.jpg",
    "./maps/havenmonitor.jpg",
    "./maps/crab.jpg",
    "./maps/splitrafter.jpg",
    "./maps/elephant.jpg",
    "./maps/lotus.jpg",
    "./maps/stakes.jpg",
    "./maps/3mon.jpg",
    "./maps/samurai.jpg",
    "./maps/boat.jpg",
];

let arrayofImages3 = [
    "./agents/trip.jpg",
    "./agents/kj.jpg",
    "./agents/OOF.jpg",
    "./agents/shaqtra.jpg",
    "./agents/pearlharbor.jpg",
    "./agents/drone.jpg",
    "./agents/deez.jpg",
    "./agents/camber.jpg",
    "./agents/sonic.jpg",
    "./agents/hobby.jpg",
];

const myImg = document.querySelector("img")


let question_count = 0;
let points = 0;


window.onload = function(){
    show(question_count)
};

function show(count){
    console.log(sessionStorage.getItem("questionKey"))
    if (external == "questions"){

    let question = document.getElementById("questions");
    let[first, second, third, fourth] = questions[count].options; //Shows the options

    question.innerHTML = `<h2>Q${count + 1}. ${ questions[count].question}</h2>
    <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
    </ul>`;
    toggleActive(); 
 }
 if (external == "questions1"){

    let question = document.getElementById("questions");
    let[first, second, third, fourth] = questions1[count].options; //Shows the options

    question.innerHTML = `<h2>Q${count + 1}. ${ questions1[count].question}</h2>
    <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
    </ul>`;
    toggleActive(); 
 }
 if (external == "questions2"){

    let question = document.getElementById("questions");
    let[first, second, third, fourth] = questions2[count].options; //Shows the options

    question.innerHTML = `<h2>Q${count + 1}. ${ questions2[count].question}</h2>
    <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
    </ul>`;
    toggleActive(); 
 }
 if (external == "questions3"){

    let question = document.getElementById("questions");
    let[first, second, third, fourth] = questions3[count].options; //Shows the options

    question.innerHTML = `<h2>Q${count + 1}. ${ questions3[count].question}</h2>
    <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
    </ul>`;
    toggleActive(); 
 }
 toggleActive(); 
}

function toggleActive(){
    let option = document.querySelectorAll("li.option");
    for(let i = 0; i < option.length; i++){
        option[i].onclick = function(){
            for(let i=0; i < option.length; i++){
                if(option[i].classList.contains("active")){
                    option[i].classList.remove("active");
                }
            }                                                                                                                                               
            option[i].classList.add("active");
        }
        if(external == "questions"){
        myImg.src = arrayofImages[question_count];
        myImg.height = 300;
        myImg.width = 500;
        }
        if(external == "questions1"){
            myImg.src = arrayofImages1[question_count];
            myImg.height = 300;
            myImg.width = 500;
        }
        if(external == "questions2"){
            myImg.src = arrayofImages2[question_count];
            myImg.height = 300;
            myImg.width = 500;
        }
        if(external == "questions3"){
            myImg.src = arrayofImages3[question_count];
            myImg.height = 300;
            myImg.width = 500;
        }
    }
}

function next(){
    if(question_count == questions.length -1){
        location.href = "finish.html";
    }
    console.log(question_count);
    if(question_count == questions1.length -1){
        location.href = "finish.html";
    }
    console.log(question_count);
    if(question_count == questions2.length -1){
        location.href = "finish.html";
    }
    console.log(question_count);
    if(question_count == questions3.length -1){
        location.href = "finish.html";
    }
    console.log(question_count);

let user_answer = document.querySelector("li.option.active").innerHTML;
if(external == "questions"){
let user_answer = document.querySelector("li.option.active").innerHTML;
if(user_answer == questions[question_count].answer)
{
    points += 50;
    sessionStorage.setItem("points",points);

    console.log(points);


}
}

if(external == "questions1"){
let user_answer = document.querySelector("li.option.active").innerHTML;
if(user_answer == questions1[question_count].answer)
    {
        points += 50;
        sessionStorage.setItem("points",points);
    
        console.log(points);
    
    
    }
    }
if(external == "questions2"){
if(user_answer == questions2[question_count].answer)
        {
            points += 50;
            sessionStorage.setItem("points",points);
        
            console.log(points);
        
        
        }
        }
if(external == "questions3"){
if(user_answer == questions3[question_count].answer)
            {
                points += 50;
                sessionStorage.setItem("points",points);
            
                console.log(points);
            
            
            }
            }
question_count++;
show(question_count);
}