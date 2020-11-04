//Business Logic
p1RollArray = [];





//UI Logic
$(document).ready(function() {
  $("#p1Roll").click(function(event) {
    event.preventDefault();
    const p1Roll = (Math.floor(Math.random() * 6) + 1)
    p1RollArray.push(p1Roll);
    alert(p1RollArray);









  });
});