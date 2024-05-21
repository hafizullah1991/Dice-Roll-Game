function rollDice() {
    // Get player names from the input fields
    let player1Name = document.getElementById("Player1").value;
    let player2Name = document.getElementById("Player2").value;
  let message = document.getElementById("message");
  let userName1 = document.getElementById("name1");
  let userName2 = document.getElementById("name2");


   if(player1Name != "")
    {
      document.getElementById("name1").textContent = player1Name;

    }
    if(player2Name != ""){
      document.getElementById("name2").textContent = player2Name;
    }
    if(player1Name ==="" || player2Name ===""){
      message.innerHTML ="Enter your name to start the dice game";
      return; 
    }
    else{
      message.textContent = "";
    }
    // Generate random number and update the first dice image
    let randomNum1 = Math.floor(Math.random() * 6 + 1);
    let randomDiceImage1 = "dice" + randomNum1 + ".png";
    let randomImageSource1 = "images/" + randomDiceImage1;
    let image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", randomImageSource1);
  
    // Generate random number and update the second dice image
    let randomNum2 = Math.floor(Math.random() * 6 + 1);
    let randomDiceImage2 = "dice" + randomNum2 + ".png";
    let randomImageSource2 = "images/" + randomDiceImage2;
    let image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", randomImageSource2);

    if(randomNum1 > randomNum2 ){
      document.querySelector("h1").innerHTML = `${player1Name} you are winner`;
    }
    else{
      document.querySelector("h1").innerHTML = `${player2Name} you are winner`;
    }
  }

  function checkNames() {
    let player1Name = document.getElementById("Player1").value;
    let player2Name = document.getElementById("Player2").value;
    let rollButton = document.getElementById("rollButton");

    if (player1Name !== "" && player2Name !== "") {
        rollButton.disabled = false;
    } else {
        rollButton.disabled = true;
    }
}