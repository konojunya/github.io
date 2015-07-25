var audio = new Audio("sound/sound2.mp3");

function change() {

    var jumon = document.getElementById("textbox").value;

    if(jumon == "元気？"){
        alert("とっても元気！");
    }else if(jumon == "名前は？"){
        alert("にんじゃだよ");
    }else{
        alert("なんだって？");
    }

    audio.play();

    var random = 1 + Math.floor(Math.random() * 3);

    if (random == "1") {
        document.getElementById("image").src = "img/1.png";
        document.getElementById("message").textContent = "へんしん！！！";
        
    } else if (random == "2"){
        document.getElementById("image").src = "img/2.png";
        document.getElementById("message").textContent = "ぽんぽこぽん";

    } else if (random == "3"){
        document.getElementById("image").src = "img/3.png";
        document.getElementById("message").textContent = "にゃー";

    }
    
}

function restart() {
    location.reload();
}