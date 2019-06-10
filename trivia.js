var score = 0
var i = 1
var ans = 1
function submitAnswer(){
    y = document.getElementById("qans").value
    var yy=y.toUpperCase();
    x = document.getElementById("question").value
if (ans===1){
    y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="You are right"
        Score++
        
    }
    else {
        document.getElementById("question").value="ooh....you are wrong"
        
    }
    document.view.qscore.value=score
}
else if (ans===2){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
         score++
    }
    else {
        document.getElementById("question").value="you are wrong this time"
        
    }
    document.view.qscore.value=score
}
else if (ans===3){ 
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are right"
         score++
    }
    else {
        document.getElementById("question").value="WRONG!!!"
        
    }
    document.view.qscore.value=score
}


	ans++; 
}
else if (ans===4){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
         score++
    }
    else {
        document.getElementById("question").value="wow. wrong again....."
        
    }
    document.view.qscore.value=score
}


	ans++; 
}
else if (ans===5){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="right. good one"
         score++
    }
    else {
        document.getElementById("question").value="wow wrong"
        
    }
    document.view.qscore.value=score
}


	ans++; 
}
else if (ans===6){ 
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="right"
         score++
    }
    else {
        document.getElementById("question").value="NOPE! wrong"
        
    }
    document.view.qscore.value=score
}


	ans++; 
}
else if (ans===7){ 
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="correct"
         score++
    }
    else {
        document.getElementById("question").value="incorrect"
        
    }
    document.view.qscore.value=score
}


	ans++; 
}
else if (ans===8){ 
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="correct"
         score++
    }
    else {
        document.getElementById("question").value="sorry, wrong one"
        
    }
    document.view.qscore.value=score
}
else if (ans===9){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="correct"
         score++
    }
    else {
        document.getElementById("question").value="wrong. just wrong"
        
    }
    document.view.qscore.value=score
}
else if (ans===10){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="correct"
         score++
    }
    else {
        document.getElementById("question").value="wrong"
        
    }
    document.view.qscore.value=score
}


	ans++; 
}
        

function main(){ 
if (i===1){ 
	document.view.qnum.value=i;
   	document.view.question.value ="Which team won the UEFA champions league final? \na)Barcelona \nb)Liverpool \nc)Tottenham \nd)Ajax";
    document.view.qans.value=""
}
else if (i===2){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Which team did not meet tottenham in 2018-2019 UEFA champions league?\na)Real Madrid \nb)PSV Eindhoven \nc)Manchester City \nd)Ajax";
    document.view.qans.value=""
}
else if (i===3){ 
	document.view.qnum.value=i;	
	document.view.question.value ="In the EFL cup final, which player refused to be substituted?\na)Jan Vertonghen \nb)Eden Hazard \nc)Paul Pogba \nd)Kepa Arrizabalaga";
    document.view.qans.value=""
}
else if (i===4){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Which hockey team did not make it to the semi-final in stanley cup?\na)Boston Bruins \nb)St. Louis Blues \nc)New York Islanders \nd)Carolina Hurricanes";
    document.view.qans.value=""
}
else if (i===5){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What team was not able to get in stanley cup?\na)Edmonnton Oilers \nb)Vegas Golden Knights \nc)Calgary Flames \nd)Washington Capitals";
    document.view.qans.value=""
}
else if (i===6){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Which team got the most wins in the 2018-2019 NHL league?\na)Toronto Maple Leafs \nb)Tampa Bay Lightning \nc)Vegas Golden Knights \nd)Washington Capitals";
    document.view.qans.value=""
}
else if (i===7){ 
	document.view.qnum.value=i;	
	document.view.question.value ="How many outcounts needed to change the attack-defence?\na)2 \nb)3 \nc)4 \nd)5";
    document.view.qans.value=""
}
else if (i===8){ 
	document.view.qnum.value=i;	
	document.view.question.value ="How Many Stitches does a baseball have?\na)100 \nb)108 \nc)110 \nd)150";
    document.view.qans.value=""
}
else if (i===9){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What points you score when you score from the outside of circle line in basketball?\na)1 point \nb)2 point \nc)3 point \nd)5 point";
    document.view.qans.value=""
}
else if (i===10){ 
	document.view.qnum.value=i;	
	document.view.question.value ="How many NBA teams are in today?\na)29 teams \nb)32 teams \nc)30 teams \nd)28 teams";
    document.view.qans.value=""
}

    

	i++; 
}
