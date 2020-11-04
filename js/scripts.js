$(document).ready(function() {
  $("#p1Roll").click(function(event) {
    event.preventDefault();
    const p1Roll = (Math.floor(Math.random() * 6) + 1)
    alert(p1Roll);
  });








});