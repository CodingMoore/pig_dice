//Business Logic
p1RollArray = [];
p2RollArray = [];
score1 = 0;
score2 = 0;

function RollSum(array) {
  sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum
}

function Score1(sum) {
  score1 += sum;
  return score1
}

function Score2(sum) {
  score2 += sum;
  return score2
}

//UI Logic
$(document).ready(function() {
  $("#p1TotalOutput").text("0");
  $("#p1RollOutput").text("0");
  $("#p1ScoreOutput").text("0");
  $("#p2TotalOutput").text("0");
  $("#p2RollOutput").text("0");
  $("#p2ScoreOutput").text("0");

  $("#p1Roll").click(function(event) {
    event.preventDefault();
    const p1Roll = (Math.floor(Math.random() * 6) + 1)
    if (p1Roll === 1) {
      p1RollArray = [0];
      $("#p1RollOutput").text(p1Roll);
    } else {
      p1RollArray.push(p1Roll);
    }
    let p1Sum = RollSum(p1RollArray);
    $("#p1RollOutput").text(p1Roll);
    $("#p1TotalOutput").text(p1Sum);
  });
  $("#p1Hold").click(function(event) {
    event.preventDefault();
    let p1Sum = RollSum(p1RollArray);
    $("#p1ScoreOutput").text(Score1(p1Sum));
    $("#p1Roll").hide();
    $("#p1Hold").hide();
    $("#p2Roll").show();
    $("#p2Hold").show();
    $("#p1TotalOutput").text("0");
    $("#p1RollOutput").text("0");
    console.log(p1RollArray);
    console.log(p1Sum);
  });

  $("#p2Roll").click(function(event) {
    event.preventDefault();
    const p2Roll = (Math.floor(Math.random() * 6) + 1)
    if (p2Roll === 1) {
      p2RollArray = [0];
      $("#p2RollOutput").text(p2Roll);
    } else {
      p2RollArray.push(p2Roll);
    }
    let p2Sum = RollSum(p2RollArray);
    $("#p2RollOutput").text(p2Roll);
    $("#p2TotalOutput").text(p2Sum);
  });
  $("#p2Hold").click(function(event) {
    event.preventDefault();
    let p2Sum = RollSum(p2RollArray);
    $("#p2ScoreOutput").text(Score2(p2Sum));
    $("#p2Roll").hide();
    $("#p2Hold").hide();
    $("#p1Roll").show();
    $("#p1Hold").show();
    $("#p2TotalOutput").text("0");
    $("#p2RollOutput").text("0");
    console.log(p2RollArray);
    console.log(p2Sum);
  });
  
});
