let input=document.getElementById('input');//har ek id ko as a variable consider karte hai so that it becomes easy to access
let btn=document.getElementById("btn");//accessing button
let wrong=document.querySelector('.wrong');//accesing the wrong para
let Guesses=document.getElementById('Guesses');//accessing the no. of guesses so that we can change them accordingly


let answer=Math.floor(Math.random()*100)+1;/* The reason for adding 1 is to shift the range from 0-99 to 1-100. Without the + 1, the possible values would be from 0 to 99, because Math.floor(Math.random() * 100) can produce 0 (when the random number is very close to 0) and the maximum value would be 99 (when the random number is very close to 1).

By adding 1, we ensure that the minimum value is 1 and the maximum value is 100, which is often the desired range for many applications, such as generating a random number for a game or a lottery. */


console.log(answer);//Go to console to check  the random no. you're recieving 

let numGuess=0;//calculating the no. of guesses we did


btn.addEventListener("click",()=>{
    guessesNumber();//On clicking the button it will change some certain things that can be done by making a function
})
function guessesNumber(){
    if(input.value <1 ||  input.value>100 || isNaN(input.value))
        wrong.innerHTML="Enter between 1 to 100";//checking for invalid inputs
    else{
        numGuess++;//if the input given correct our no of guess increases
        Guesses.innerHTML="No. of Guess: "+numGuess;//changes done in the no. of guess calculation to show the user their progress
        if(input.value>answer){//checking the value and erasing it after checking them
            wrong.innerHTML="You Guessed Too High!";
            input.value="";

        }
        else if(input.value<answer){
            wrong.innerHTML="You Guessed Too Low!";
            input.value="";
        }
        else{
            wrong.innerHTML="You Guessed Correctly!";
            btn.disabled=true;//if the guess is correct the buttin is disabled for the user to see and check within a set interval of time
            setTimeout(()=>{
                resetGame();//after the set interval the game resets

            },5000)
        }
    }
}
function resetGame(){
    numGuess=0;//the conditions changes and resets to the beginning
    answer=Math.floor(Math.random()*100)+1;
    input.value="";
    btn.disabled=false;
    wrong.innerHTML="";
    Guesses.innerHTML="No. of Guess: 0";
    
}
