let user_name = sessionStorage.getItem("name");
let user_points = sessionStorage.getItem("points");
let rank = "";
let count = 0;

let imageArray = [
    "./valoranks/iron.jpg",
    "./valoranks/bronze.jpg", 
    "./valoranks/silver.jpg",
    "./valoranks/gold.jpg",
    "./valoranks/platinum.jpg",
    "./valoranks/diamond.jpg",
    "./valoranks/ascendant.jpg",
    "./valoranks/immortal.jpg",
    "./valoranks/radiant.jpg",
];


const myImg = document.querySelector("img");
myImg.src = imageArray[count];



if (user_points < 200){
    rank += "Iron"
    count += 0
    myImg.src = imageArray[count];
} else if (user_points <= 300){
    rank += "Bronze"
    count += 1
    myImg.src = imageArray[count];
} else if (user_points <= 400){
    rank += "Silver"
    count += 2
    myImg.src = imageArray[count];
} else if (user_points <= 500){
    rank += "Gold"
    count += 3
    myImg.src = imageArray[count];
} else if (user_points <= 600){
    rank += "Platinum"
    count += 4
    myImg.src = imageArray[count];
} else if (user_points <= 700){
    rank += "Diamond"
    count += 5
    myImg.src = imageArray[count];
} else if (user_points <= 800){
    rank += "Ascendant"
    count += 6
    myImg.src = imageArray[count];
} else if (user_points <= 900){
    rank += "Immortal"
    count += 7
    myImg.src = imageArray[count];
} else if (user_points <= 1000){
    rank += "Radiant"
    count += 8
    myImg.src = imageArray[count];
}






document.querySelector("span.name").innerHTML = user_name;
document.querySelector("span.points").innerHTML = user_points;
document.querySelector("span.rank").innerHTML = rank