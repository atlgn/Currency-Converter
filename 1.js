var button = document.getElementById("btn");
button.addEventListener("click", function(){
	var symbol = document.getElementById("symbol");
var fromnum = document.getElementById("fromNum").value;
var warni = document.getElementById("warning");
var valuefrom = document.getElementById("from").selectedIndex;
var valuefromValue = document.getElementsByTagName("option")[valuefrom].value;
var valueto  = document.getElementById("to").selectedIndex;
var valuetoValue = document.getElementsByTagName("option")[valueto].value;
	
	if(valuefromValue ==='TL' ){
		symbol.className ="TL";
		if(valuetoValue ==='TL'){
			warni.innerHTML = fromnum +'₺';
		}else if(valuetoValue ==='USD'){
			warni.innerHTML = fromnum * 0.14+'$';
		}else if(valuetoValue==='EUR'){
			warni.innerHTML = fromnum * 0.12+'€';
		}else if(valuetoValue ==='GBP'){
			warni.innerHTML = fromnum * 0.11+'£';
		}else{
			warni.innerHTML = "Please enter the number and try again...";
		}		
}else if(valuefromValue === 'USD'){
	symbol.className ="USD";
			if(valuetoValue ==='TL'){
				warni.innerHTML = fromnum * 7.14+'₺';	
		}else if(valuetoValue ==='USD'){
			warni.innerHTML = fromnum+'$' ;
		}else if(valuetoValue==='EUR'){
			warni.innerHTML = fromnum * 0.84+'€';
		}else if(valuetoValue ==='GBP'){
			warni.innerHTML = fromnum * 0.72+'£';
		}else{
			warni.innerHTML = "Please enter the number and try again...";
		}
}else if(valuefromValue === 'EUR'){	
	symbol.className ="EUR";
			if(valuetoValue ==='TL'){
				warni.innerHTML = fromnum * 8.58+'₺';
		}else if(valuetoValue ==='USD'){
				warni.innerHTML = fromnum * 1.19+'$';
		}else if(valuetoValue==='EUR'){
				warni.innerHTML = fromnum +'€';
		}else if(valuetoValue ==='GBP'){
				warni.innerHTML = fromnum * 0.86+'£';	
		}else{
			warni.innerHTML = "Please enter the number and try again...";
		}
}	else if(valuefromValue === 'GBP'){
	symbol.className ="GBP";
			if(valuetoValue ==='TL'){
				warni.innerHTML = fromnum * 10.11+'₺';
		}else if(valuetoValue ==='USD'){
			warni.innerHTML = fromnum * 1.38+'$';
		}else if(valuetoValue==='EUR'){
			warni.innerHTML = fromnum * 1.16+'€';
		}else if(valuetoValue ==='GBP'){
			warni.innerHTML = fromnum+'£';
		}else{
			warni.innerHTML = "Please enter the number and try again...";
		}
}	
});		