function check(){
 
var fråga1 = document.quiz.fråga1.value;
var fråga2 = document.quiz.fråga2.value;
var fråga3 = document.quiz.fråga3.value;
var fråga4 = document.quiz.fråga4.value;
var fråga5 = document.quiz.fråga5.value;
var fråga6 = document.quiz.fråga6.value;
var fråga7 = document.quiz.fråga7.value;
var fråga8 = document.quiz.fråga8.value;
var fråga9 = document.quiz.fråga9.value;
var fråga10 = document.quiz.fråga10.value;
var fråga11 = document.quiz.fråga11.value;

var correct = 0;


if (fråga1 == "madrid") {
	correct ++;
}

if (fråga2 == "berlin") {
	correct ++;
}

if (fråga3 == "paris") {
	correct ++;
}
if (fråga4 == "london") {
	correct ++;
}

if (fråga5 == "stockholm") {
	correct ++;
}
if (fråga6 == "rom") {
	correct ++;
}

if (fråga7 == "washington") {
	correct ++;
}

if (fråga8 == "ottawa") {
	correct ++;
}

if (fråga9 == "moskva") {
	correct ++;
}

if (fråga10 == "peking") {
	correct ++;
}
if (fråga11 == "canberra"){
	correct ++;
}

 
 

 var sms = ["Perfekt!!", "Godkänt", "Underkänt"];


 var rackvidd;
 if (correct <= 3) {
 	rackvidd = 2;
 }
 if (correct > 3 && correct <9)
 {
 	rackvidd = 1;
 }
 if (correct >= 9) {
 	rackvidd = 0;
 }

 console.log(correct);
 document.getElementById("after_submit").style.visibility = "visible";
 document.getElementById("number_correct").innerHTML="Du fick" +' '+correct +' '+ "rätt";
 document.getElementById("sms").innerHTML = sms[rackvidd];
 


 
}