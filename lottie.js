let player = document.getElementById("firstLottie");

player.addEventListener("ready", () => {
LottieInteractivity.create({
    player: "#firstLottie",
    mode:"cursor", 
    actions: [ { type: "hover", forceFlag: false } ]
});
});



