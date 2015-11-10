function startTimer() {
	var month, days, hours, minutes, seconds;
	var display = document.querySelector('#timer');
	setInterval(function () {

		var marDate = new Date(2015, 11, 14, 9, 10);
		if (marDate > new Date()) {
			var diff = marDate - new Date();
			//	console.log("diff "+diff/1000);
			var diffDays = diff / (1000 * 3600 * 24);
			//					console.log("days1 "+diffDays+"int"+(parseInt(diffDays)>0));
			hours = (diffDays - Math.floor(diffDays)) * 24;
			//				console.log("hours "+hours);
			minutes = (hours - Math.floor(hours)) * 60;
			//					console.log("min "+minutes);
			seconds = (minutes - Math.floor(minutes)) * 60;
			//				console.log("secounds "+parseInt(diffDays) + " Days : " + parseInt(hours)+" Hours :"+parseInt(minutes)+" Mins:"+parseInt(seconds)+"  Sec's");
			var timer;
			if (parseInt(diffDays) > 0) {

				timer = parseInt(diffDays).toString();
				if (diffDays < 2) {
					timer = timer.concat(" Day : ");
				} else {
					timer = timer.concat(" Days : ");
				}
				timer = timer + parseInt(hours);
				if (hours < 2) {
					timer = timer + " Hour : ";
				} else {
					timer = timer + " Hours : ";
				}
				timer = timer + parseInt(minutes);
				if (minutes < 2) {
					timer = timer + " Min : ";
				} else {
					timer = timer + " Min's : ";
				}
				timer = timer + parseInt(seconds);
			} else if (parseInt(hours) > 0) {

				timer = parseInt(hours);
				if (hours < 2) {
					timer = timer + " Hour : ";
				} else {
					timer = timer + " Hours : ";
				}
				timer = timer + parseInt(minutes);
				if (minutes < 2) {
					timer = timer + " Min : ";
				} else {
					timer = timer + " Min's : ";
				}
				timer = timer + parseInt(seconds);
			} else {
				timer = parseInt(minutes);
				if (minutes < 1) {
					timer = timer + " Min : ";
				} else {
					timer = timer + " Min's : ";
				}
				timer = timer + parseInt(seconds);
			}

			//        display.textContent = parseInt(diffDays) + " Days : " + parseInt(hours)+" Hours :"+parseInt(minutes)+" Mins:"+parseInt(seconds)+"  Sec's ";

			display.textContent = timer;
		} else {
			document.querySelector("#reality").textContent="Our dream is real now"
			display.textContent ="";
		}
	}, 1000);
}