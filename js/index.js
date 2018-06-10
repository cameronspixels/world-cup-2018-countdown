var countDownDate = new Date("Jun 14, 2018 16:00:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	
	var formatDay = ("0" + days).slice(-2);
	var formatHour = ("0" + hours).slice(-2);
	var formatMinute = ("0" + minutes).slice(-2);
	var formatSecond = ("0" + seconds).slice(-2);

  document.getElementById("day").innerHTML = formatDay;
	document.getElementById("hour").innerHTML = formatHour;
  document.getElementById("minute").innerHTML = formatMinute;
  document.getElementById("second").innerHTML = formatSecond;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);