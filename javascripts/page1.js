function startTimer(display) {
     var month,days,hours, minutes, seconds;
    
    setInterval(function () {
		
		 var marDate=new Date(2015,11,14,9,10);
       var diff = marDate - new Date();
//	console.log("diff "+diff/1000);
var diffDays = diff / (1000 * 3600 * 24); 
//			console.log("days1 "+diffDays);
		hours=(diffDays-Math.floor(diffDays))*24;
//		console.log("hours "+hours);
		minutes=(hours-Math.floor(hours))*60;
//			console.log("min "+minutes);
        seconds = (minutes-Math.floor(minutes))*60;
//		console.log("secounds "+seconds);
		

        display.textContent = parseInt(diffDays) + " Days : " + parseInt(hours)+" Hours :"+parseInt(minutes)+" Mins:"+parseInt(seconds)+"  Sec's ";

       
    }, 1000);
}
function marriageDay(){
$('#wedding').addClass ('active');
$('#recpDetail').removeClass('active');}

function reception(){
	console.log("onclick")
	
$('#recpDetail').addClass('active');
$('#wedding').removeClass('active');
}

window.onload = function () {
        display = document.querySelector('#timer');
    startTimer(display);

};