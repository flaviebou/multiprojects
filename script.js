document.getElementById("generatebtn").addEventListener("click",function clickgenerate(){
    function generateLink(){
        var alphabet=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
        var result="";
        for (var x = 0;x<5;x++){
            result+=alphabet[Math.floor(Math.random()*26)]
        }
        return "https://"+result+".com"
    }
    var x = generateLink();
    document.getElementById("ShortenLink").innerHTML=x;
    document.getElementById("ShortenLink").style.color = "black";
    document.getElementById("generatebtn").innerHTML='Link generated <img src="checked.png" alt="Copied Icon" style="width: 15px; height: 15px; margin-left:5px">';

})

document.getElementById("copy").addEventListener("click", function () {
    var copyText = document.getElementById("ShortenLink").innerText; // Get the text from the <p> tag
    navigator.clipboard.writeText(copyText).then(function() {
        // Success feedback
        document.getElementById("copy").innerHTML = 'Link copied  <img src="checked.png" alt="Copied Icon" style="width: 15px; height: 15px; margin-left:5px">';
        alert("Copied the text: " + copyText);
    }, function(err) {
        // Failure feedback
        alert("Failed to copy text: ", err);
    });
});


/*tictactoe*/

var board = [0, 0, 0, 0, 0, 0, 0, 0, 0]; // Tracks board state

function checkWin() {
  // Check rows, columns, diagonals for win
  let winCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Columns
    [0, 4, 8], [2, 4, 6]              // Diagonals
  ];
  
  for (let combo of winCombos) {
    let [a, b, c] = combo;
    if (board[a]!=0 && board[a] === board[b] && board[a] === board[c]) {
      return board[a]; 
    }
  }
  return null; 
}

function handleClick(index) {
  if (board[index] !== 0) return; // Prevent clicking on filled boxes
  board[index] = 1; // Player X's move
  document.getElementById("b"+index).innerHTML = "X";
  
  if (checkWin()) {
    document.getElementById("result").innerHTML = "X is the winner!";
    return;
  }
  
  // Computer's random move
  let availableMoves = board.map((val, idx) => val === 0 ? idx : null).filter(v => v !== null);
  if (availableMoves.length > 0) {
    let randomIndex = availableMoves[Math.floor(Math.random() * availableMoves.length)];
    board[randomIndex] = 2; // Computer O's move
    document.getElementById(`b${randomIndex}`).innerHTML = "O";
    
    if (checkWin()) {
      document.getElementById("result").innerHTML = "O is the winner!";
      return;
    }
  }
  
  // Check if it's a draw
  if (!board.includes(0)) {
    document.getElementById("result").innerHTML = "It's a draw!";
  }
}

// Attach event listeners to all buttons
for (let i = 0; i < 9; i++) {
  document.getElementById(`b${i}`).addEventListener('click', () => handleClick(i));
}


document.getElementById("reset").addEventListener('click', function(){
    for (let i = 0; i < 9; i++) {
        board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        document.getElementById(`b${i}`).innerHTML="";
      }
      document.getElementById("result").innerHTML="";
    
})


