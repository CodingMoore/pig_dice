//Business Logic
p1RollArray = [];


function RollSum(array) {
sum = 0;
for (let i = 0; i < array.length; i++) {
  sum += array[i];
  }
  return sum
} 

//UI Logic
$(document).ready(function() {
  $("#p1Roll").click(function(event) {
    event.preventDefault();
    const p1Roll = (Math.floor(Math.random() * 6) + 1)
    p1RollArray.push(p1Roll);
    alert(p1RollArray);
    let sum = RollSum(p1RollArray);
    alert(sum);








  });
});