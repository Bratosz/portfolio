function countdown()
	{
		var now	= new Date();
		
		var hour = now.getHours();
		if (hour<10) hour = "0" + hour;
		
		var minute = now.getMinutes();
		if (minute<10) minute = "0" + minute;
		
		var second = now.getSeconds();
		if (second<10) second = "0" + second;
		
		document.getElementById("clock").innerHTML = 
		 hour + ":" + minute + ":" + second;
		 
		 setTimeout("countdown()",1000);
	}