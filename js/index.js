$(document).ready(function(){
	var number = ""; // second number
	var newNumber =""; // first number
	var operator = "";
	var display = $("#display2");// bottom display
	var display1 = $("#display1");//top display
	var result = "";
	//When number it is clicked it is stored in number until operator is clicked
	$("#numbers button").not("#decimal").click(function(){
		number += $(this).text();
		result += $(this).text();
		display1.text(result);
		display.text(number);
	});
  //Adds decimal and deals with multiple decimal situation
	$("#decimal").click(function(){
		if(number.indexOf(".") < 0){
			number += ".";
			result += ".";
		}
	});
	//Stores operator symbol
	$("#operators button, #division").not("#equals").click(function(){
		operator = $(this).text();
		//check if result has an operator as its previous value
    //if it does not add operator to result and new number ==
    result = result.toString();
    var temp = result.split('');
    if(temp[temp.length-1] == '/' || temp[temp.length-1] == '*' || temp[temp.length-1] == '-' || temp[temp.length-1] == '+'){
      temp.pop();
      result = temp.join('');
      result += operator;
    }
    else{
      result += operator;
    }
    newNumber = number;
    number = '';
		display1.text(result);
    display.text(operator);
	});
	//When equals is clicked it is evaluated
	$("#equals").click(function(){
		//problem is newnumber
		display.text(eval(result));
		display1.text(result+"=");
		number = eval(result);
    result = number;

	});
	$(".clear, .clearAll").click(function(){
		var temp = $(this).text(); //it is either C or CA
		if(temp === 'AC'){
			newNumber = "";
			number = "";
			result = "";
			display1.text("0");
			display.text("0");
		}
		else{
			number = number.split('');
      number.pop();
      number = number.join('');
			result =result.split("");
			result.pop();
			result = result.join("");
			display1.text(result);
			display.text(number);
		}
	});
});
