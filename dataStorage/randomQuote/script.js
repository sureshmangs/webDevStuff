function newQuote(){
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
		  if (this.readyState == 4 && this.status == 200) {
	  		  var quotes = JSON.parse(this.responseText);
	  		  document.getElementById("quoteDisplay").innerHTML = quotes.content;
	  		  document.getElementById("authorDisplay").innerHTML = "~ " + quotes.author;
		  }
		};
		xmlhttp.open("GET", "https://api.quotable.io/random", true);
		xmlhttp.send();
}

function getDate(){
	var myDate = new Date();
	var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

	document.getElementById("date").innerHTML = day[myDate.getDay()] + " | " + myDate.getDate() + " " + month[myDate.getMonth()] + " " + myDate.getFullYear();

	var hours = myDate.getHours();
  	var minutes = myDate.getMinutes();
  	var seconds = myDate.getSeconds();
  	var ampm = hours >= 12 ? 'PM' : 'AM';
  	hours = hours % 12;
  	hours = hours ? hours : 12;
  	hours = hours < 10 ? '0' + hours : hours;
  	minutes = minutes < 10 ? '0' + minutes : minutes;
  	seconds = seconds < 10 ? '0' + seconds : seconds;
  	document.getElementById("time").innerHTML = hours + " : " + minutes + " : " + seconds + " " + ampm;

  	var t =setTimeout(getDate, 1000);
}


