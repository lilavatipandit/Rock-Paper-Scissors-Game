
  let  userscore = 0 ;
  let compscore=0;
 const choices= document.querySelectorAll(".choice");
  const msgpara = document.querySelector("#msg");

   const userScorepara= document.querySelector("#userScore");
   const compscorepara  = document.querySelector("#compscore");
   
 // function used call random number generate by the computer
  // yaha call karenge 
   const genCompChoices = () =>{
     const options =  [ "rock", "paper", "scissors"];
       const randIdx = Math.floor(Math.random() *3 ); // ye random function  hota hai number generate karana index ke form me hota to index array me 0,1 ,2 rakh  denege  ragne should be 0 to 2 range 
         return options [randIdx];              // jo bhi number se multiply karate ek number pahale wala number tak hota hai 0 to 2 hai * 3 karenege 
                   // decimal value ko hatane keliye (floor ) karene . Math.floor(Math.random())* 3 
   }; 
     const drawGame = () =>{
        console.log(" Game was Draw");
        msgpara.innerText = " Game was Draw .Play again ";  
        msgpara.style.backgroundColor = "blue";
     };
       //show winner
   const showWinner = ( userWin,userChoice,comchoice) => {
               if(userWin){
                   userscore++;
                // console.log( "You win!");
                   userScorepara.innerText= userscore;
           
                msgpara.innerText =  `You win ! Your ${userChoice} beats ${comchoice}`;
                msgpara.style.backgroundColor = " green";
         }
          else {
            compscore++;
            // console.log("you lose !");
            compscorepara.innerText= compscore;
             msgpara.innerText = `You lose. ${comchoice} beats Your ${userChoice}`;
             msgpara.style.backgroundColor = " red";
               }
     }


  // function for computer choices/  
       const playGame = ( userChoice) =>{
     console.log(" user choice = ", userChoice );

     //genereate computer choices
      
       const CompChoice = genCompChoices().trim() ; // trim white space
       console.log(" comp choice = ", CompChoice );

          if( userChoice ===  CompChoice){
         // game draw
          drawGame();
           } else {
          let   userWin =   true ;
           if( userChoice === "rock"){
             // scissor , paper 
             userWin = CompChoice==="paper" ?  false : true;  // jab use userwin ki value false hogi paper comchoice paper or true when userwin hoga 
           } else if  ( userChoice === "paper" ){
             //  , rock ,scissor
             userWin = CompChoice === "scissors" ? false : true ;
           }
            else if( userChoice ==="scissors") {
                //  , rock  , paper
                  userWin = CompChoice ==="rock" ? false : true  ;
            }
             
             showWinner(userWin,userChoice, CompChoice);
       }     
  }; 

  choices.forEach((choice)=>{
  
    choice.addEventListener("click",()=> {
      const userChoice = choice.getAttribute("id").trim();
       
          // console.log("choice was clicked", userChoice);
         playGame(userChoice);
    });
  });