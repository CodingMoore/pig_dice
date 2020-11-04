//Business Logic
p1RollArray = [];
score = 0;


function RollSum(array) {
sum = 0;
for (let i = 0; i < array.length; i++) {
  sum += array[i];
  }
  return sum
}

function Score(sum) {
  score += sum;
  return score
}

//UI Logic
$(document).ready(function() {
  $("#p1Roll").click(function(event) {
    event.preventDefault();
    const p1Roll = (Math.floor(Math.random() * 6) + 1)
    p1RollArray.push(p1Roll);
    let p1Sum = RollSum(p1RollArray);
    $("#p1RollOutput").text(p1Roll);
    $("#p1TotalOutput").text(p1Sum);
  });
  $("#p1Hold").click(function(event) {
    event.preventDefault();
    let p1Sum = RollSum(p1RollArray);
    $("#p1ScoreOutput").text(Score(p1Sum));
  });
  
});

// currentTotal = old Score + p1Sum
// new Score = current Total