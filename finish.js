let user_name = sessionStorage.getItem("name");
let user_points = sessionStorage.getItem("points");
let rank = ""

if (user_points < 200){
    rank += "Iron"
} else if (user_points <= 300){
    rank += "Bronze"
} else if (user_points <= 400){
    rank += "Silver"
} else if (user_points <= 500){
    rank += "Gold"
} else if (user_points <= 600){
    rank += "Platinum"
} else if (user_points <= 700){
    rank += "Diamond"
} else if (user_points <= 800){
    rank += "Ascendant"
} else if (user_points <= 900){
    rank += "Immortal"
} else if (user_points <= 1000){
    rank += "Radiant"
}

console.log(rank)





document.querySelector("span.name").innerHTML = user_name;
document.querySelector("span.points").innerHTML = user_points;
document.querySelector("span.rank").innerHTML = rank