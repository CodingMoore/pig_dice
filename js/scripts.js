//Business Logic
let p1RollArray = [];
let p2RollArray = [];
let score1 = 0;
let score2 = 0;

function RollSum1(array) {
  sum1 = 0;
  for (let i = 0; i < array.length; i++) {
    sum1 += array[i];
  }
  return sum1
}
function RollSum2(array) {
  sum2 = 0;
  for (let i = 0; i < array.length; i++) {
    sum2 += array[i];
  }
  return sum2
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
      p1RollArray = [];
      $("#p1RollOutput").text(p1Roll);
      $("#p1Roll").hide();
      $("#p1Hold").hide();
      $("#p2Roll").show();
      $("#p2Hold").show();
      $("#p1TotalOutput").text("0");
      $("#p1RollOutput").text("0");
    } else {
      p1RollArray.push(p1Roll);
    }
    let p1Sum = RollSum1(p1RollArray);
    $("#p1RollOutput").text(p1Roll);
    $("#p1TotalOutput").text(p1Sum);
  });
  $("#p1Hold").click(function(event) {
    event.preventDefault();
    let p1Sum = RollSum1(p1RollArray);
    score1 += p1Sum
    $("#p1ScoreOutput").text(score1);
    if (score1 >= 100) {
      $("#playerName").text("Player 1");
      $(".jumbotron").show();
      $("#p1Roll").hide();
      $("#p1Hold").hide();
      $("#p2Roll").hide();
      $("#p2Hold").hide();
    } else {
      $("#p1Roll").hide();
      $("#p1Hold").hide();
      $("#p2Roll").show();
      $("#p2Hold").show();
      $("#p1TotalOutput").text("0");
      $("#p1RollOutput").text("0");
      p1RollArray = [];
    }
  });

  $("#p2Roll").click(function(event) {
    event.preventDefault();
    const p2Roll = (Math.floor(Math.random() * 6) + 1)
    if (p2Roll === 1) {
      p2RollArray = [];
      $("#p2RollOutput").text(p2Roll);
      $("#p2Roll").hide();
      $("#p2Hold").hide();
      $("#p1Roll").show();
      $("#p1Hold").show();
      $("#p2TotalOutput").text("0");
      $("#p2RollOutput").text("0");
    } else {
      p2RollArray.push(p2Roll);
    }
    let p2Sum = RollSum2(p2RollArray);
    $("#p2RollOutput").text(p2Roll);
    $("#p2TotalOutput").text(p2Sum);
  });
  $("#p2Hold").click(function(event) {
    event.preventDefault();
    let p2Sum = RollSum2(p2RollArray);
    score2 += p2Sum
    $("#p2ScoreOutput").text(score2);
    if (score2 >= 100) {
      $("#playerName").text("Player 2");
      $(".jumbotron").show();
      $("#p1Roll").hide();
      $("#p1Hold").hide();
      $("#p2Roll").hide();
      $("#p2Hold").hide();
    } else {
      $("#p2Roll").hide();
      $("#p2Hold").hide();
      $("#p1Roll").show();
      $("#p1Hold").show();
      $("#p2TotalOutput").text("0");
      $("#p2RollOutput").text("0");
      p2RollArray = [];
      p2Sum = 0;
    }
  });
});
