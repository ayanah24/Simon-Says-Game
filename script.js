let gameseq=[];
let userseq=[];
let start=false;
let level=0;

 let btns=["red", "purple", "green","yellow"];
let h2=document.querySelector("h2");
// to start the game 
document.addEventListener("keypress", function () {
     if(start==false){
        console.log("Game started");
        start=true;

        levelup();
    }
});
//flash when game flashes the button
function gameFlash(btn){
      btn.classList.add("flash");
      setTimeout(function(){
        btn.classList.remove("flash");
      }, 250);
}
//flash when user clicks the button
function userFlash(btn){
      btn.classList.add("userflash");
      setTimeout(function(){
        btn.classList.remove("userflash");
      }, 250);
}
//flash the button and level up
function levelup(){
    userseq=[]; // reset user sequence to continue the game where it left off in next level
    h2.innerText=`Level ${level}`;
    level++;
   h2.innerText=`Level ${level}`;
    let randomNumber=Math.floor(Math.random()*3);
    let ranColor=btns[randomNumber];
    let ranBtn=document.querySelector(`.${ranColor}`);
    // console.log(ranBtn);
    // console.log(ranColor);
    // console.log(randomNumber);
    gameseq.push(ranColor);
    console.log(gameseq);
   gameFlash(ranBtn);
}
function checkAns(idx){

    if(userseq[idx]===gameseq[idx]){
        // console.log("Correct");
         if(userseq.length==gameseq.length){
            setTimeout(levelup, 1000);

         }
    }else{
        h2.innerHTML=`Game Over!, Your score was<b>${level}</b> <br>Press Any Key to Restart`;
    //    document.querySelector("body").style.backgroundColor="red";
     //   setTimeout(function(){
     //       document.querySelector("body").style.backgroundColor="#fff";
      //  } ,150)
        restartGame();
    }
}
// btn press by user
function btnPress(){
  //  console.log(this);
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    userseq.push(userColor);

   checkAns(userseq.length-1); 

}
// check if the user pressed the correct button and when user clicks the button
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
// restart the game when user presses any wrong button
function restartGame(){
    gameseq=[];
    userseq=[];
    start=false;
    level=0;
}
