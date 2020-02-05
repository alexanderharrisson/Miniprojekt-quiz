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

if (fråga2 == "paris") {
	correct ++;
}

if (fråga3 == "berlin") {
	correct ++;
}
if (fråga4 == "london") {
	correct ++;
}

if (fråga5 == "moskva") {
	correct ++;
}
if (fråga6 == "athen") {
	correct ++;
}

if (fråga7 == "stockholm") {
	correct ++;
}

if (fråga8 == "helsingfors") {
	correct ++;
}

if (fråga9 == "washington") {
	correct ++;
}

if (fråga10 == "ottawa") {
	correct ++;
}
if (fråga11 == "peking"){
	correct ++;
}
 
 
 

 var sms = ["Perfekt!!", "Det är bra, men du kan bättre", "Sämst, hem och plugga"];

 var rackvidd;
 if (correct <= 4) {
 	rackvidd = 2;
 }
 if (correct > 4 && correct <8)
 {
 	rackvidd = 1;
 }
 if (correct >= 8) {
 	rackvidd = 0;
 }

 console.log(correct);
 document.getElementById("after_submit").style.visibility = "visible";
 document.getElementById("sms").innerHTML = sms[rackvidd];
 document.getElementById("number_correct").innerHTML="Du fick" +' '+correct +' '+ "rätt"

 
}