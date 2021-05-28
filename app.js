// score changer setup
var scorer = document.querySelector(".scoreholder")
var scorer2 = document.querySelector(".scoreholder2")

// Setup for name form to take names of players to populate greeting

function greeter() {
    var name = document.querySelector("#playerOne").value
    alert(`Welcome ${name}!`)


document.querySelector(".player1name").style.display="none"
document.querySelector("#playa").innerHTML=`Player 1: ${name}`

}
function greeterTwo() {
    var name2 = document.querySelector("#playerTwo").value
    alert(`Welcome ${name2}!`)
    document.querySelector(".player2name").style.display="none"
    document.querySelector("#playa2").innerHTML=`Player 2: ${name2}`

}

// setup to allow image change, an array of images 
var coinImage = document.querySelector("#coinimage")

var images = ['../images/heads.png','another_project/images/tails.png']

// Heads and Tails button setup to attach to function, 4 buttons in total


var button= document.querySelector("#heads")

var button3= document.querySelector("#heads2")


var button2= document.querySelector("#tails")

var button4= document.querySelector("#tails2")


// setup of variables in order to flip coin
var heads = 1
var tails = 2

var playerOneScore=0
var playerTwoScore=0
var flip = ["heads","tails"]
var coin = flip[Math.floor(Math.random()*2)]

// I used a nested function in order to flip the coin and change the image as well as add the score
function coinImageChange(){
    
    function coinFlip(){ 
    return coin
}
coinFlip()
// this will ensure there's random output
var coin = flip[Math.floor(Math.random()*2)]
if(coin === "heads"){
    coinImage.src=images[0]
    console.log("heads wins")
    // alert("heads wins")
    
}
else {
    coinImage.src=images[1]
    console.log("tails wins")
    // alert("tails wins")
    
}
    function addScore(){
        return playerOneScore
       
}
    addScore()
   

     // the confirm button was my solution to check whether user picked heads or tails
     let bet = prompt("Enter bet:")
     let numm = parseInt(bet)
    let choice = confirm("Press OK if heads===true\nPress Cancel if tails===false")
    if(coin === "heads" && choice===true){

        parseInt(playerOneScore+=numm)
       alert("Winner winner chicken dinner Player One"+"\nScore:"+ playerOneScore +"!")
       scorer.innerHTML=`Score: ${playerOneScore}`
       if(playerOneScore=== 2000){
        alert("Game Over, You win!")
        return;
    }
}
else if(coin === "tails" && choice===false){ 

        parseInt(playerOneScore+=numm)
        alert("Winner winner chicken dinner Player One"+ "\nScore:" + playerOneScore +"!")
        scorer.innerHTML=`Score: ${playerOneScore}`
        if(playerOneScore=== 2000){
            alert("Game Over, You win! Player One")
            return;
        }
    }
    else{
        parseInt(playerOneScore-=numm)
       alert("Nope that's not it! Player One" +"\nScore "+ playerOneScore+"!")
       scorer.innerHTML=`Playa 1: ${playerOneScore}`
    }
  
 }
        

// I used a duplicate function because it's a 2 player game. Much easier to manage the scores and flips this way
function coinImageChange2(){
    
    function coinFlip(){
    return coin
}
coinFlip()
var coin = flip[Math.floor(Math.random()*2)]
if(coin === "heads"){
    coinImage.src=images[0]
    console.log("heads wins")
    // alert("heads wins")
    
}
else {
    coinImage.src=images[1]
    console.log("tails wins")
    // alert("tails wins")
    

}
    
    function addScoreTwo(){
        return playerTwoScore
}
    addScoreTwo()
    
    let bet = prompt("Enter bet:")
    let num = parseInt(bet)
    let choice = confirm("Press OK if heads===true\nPress Cancel if tails===false")

    if(coin === "heads" && choice===true){
        parseInt(playerTwoScore+=num)
       alert("Winner winner chicken dinner Player Two "+ " \nScore: " + playerTwoScore +"!")
       scorer2.innerHTML=`Score: ${playerTwoScore}`
       if(playerTwoScore=== 2000){
        alert("Game Over, You win!")
        return;
    }
}
else if(coin === "tails" && choice===false ){ 
        parseInt(playerTwoScore+=num)
        alert("Winner winner chicken dinner Player Two"+ " \nScore :" + playerTwoScore +"!")
        scorer2.innerHTML=`Score: ${playerTwoScore}`
        if(playerTwoScore=== 2000){
            alert("Game Over, You win!")
            return;
        }
    }
    else{
        parseInt(playerTwoScore-=num)
       alert("Nope that's not it! Player Two" +"\nScore :" + playerTwoScore)
       scorer2.innerHTML=`Playa 2: ${playerTwoScore}`
    }
}
        
