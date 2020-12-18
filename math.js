score=0;
function update(){
    score=score+1;
    document.getElementById("score").innerHTML="score : " +score;
}
function score1(){
    localStorage.setItem("score",score);
}
function nextpage(){
    window.location="activity_2.html";
}