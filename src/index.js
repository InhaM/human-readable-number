module.exports = function toReadable (numberValue) {

	let exprValue = String(numberValue);
	//console.log('numberValue = ' + numberValue);
	//console.log('exprValue = ' + exprValue);
	let arrayValue = Array.from(exprValue);
	//console.log('arrayValue =' + arrayValue);
	let str = '';
	let i = 0; //на 1 меньше длинны массива для обращения к эл массива
		
	while (i < arrayValue.length)
	{
		if (((arrayValue.length - i) == 2) || ((arrayValue.length - i) == 5))
		{
			if (+arrayValue[i] == 1)
			{
				//console.log('first loop, first consition');
				str = str  + tennighteen(+(arrayValue[i]+arrayValue[i+1]));	
				//console.log(str);
			}
			else 		
			{
				//console.log('first loop, 2nd consition')
				str  = str  + twof(arrayValue[i]) + onef(arrayValue[i+1]);
				//console.log(str);
			}
			i++;
			
		} else 		
		{
			//console.log('2nd loop, 1st consition')
			str = str + onef(arrayValue[i]);
		}

		if (arrayValue[i] >= 2) 
		{
			switch (arrayValue.length - i)
			{
				case 3: str = str + ' hundred';break;
				case 4: str = str + ' thousand';break;
				case 6: str = str + ' hundred';break;
				case 7: str = str + ' million'; break;
				default: "something went wrong 1"; break;
			}
		}
		else if (arrayValue[i] == 1)
		{
			switch (arrayValue.length - i)
			{
				case 3: str = str + ' hundred';break;
				case 4: str = str + ' thousand';break;
				case 6: str = str + ' hundred';break;
				case 7: str = str + ' million'; break;
				default: "something went wrong 1"; break;
			}
		}

		//console.log('i=' + i + ' str=' + str);
		i++;
	}

	//console.log(str);


	function onef (numberValue)
	{
		let str_i =''; 
		
		switch (+numberValue)
		{
			case 0: {(arrayValue.length == 1) ? str_i = ' zero': str_i = '';} break;
			case 1: str_i = ' one';break;
			case 2: str_i = ' two';break;
			case 3: str_i = ' three';break;
			case 4: str_i = ' four';break;
			case 5: str_i = ' five'; break;
			case 6: str_i = ' six'; break;
			case 7: str_i = ' seven'; break;
			case 8: str_i = ' eight';break;
			case 9: str_i = ' nine';break;
			default: "something went wrong, one function"; break;
		}
		
		
		//console.log(numberValue + ' ' + str_i);
		return str_i;
	}
	function tennighteen (numberValue)
	{
		let str_i =''; 
		switch (+numberValue)
		{
			case 10: str_i = ' ten';break;
			case 11: str_i = ' eleven';break;
			case 12: str_i = ' twelve';break;
			case 13: str_i = ' thirteen';break;
			case 14: str_i = ' fourteen';break;
			case 15: str_i = ' fifteen'; break;
			case 16: str_i = ' sixteen'; break;
			case 17: str_i = ' seventeen'; break;
			case 18: str_i = ' eighteen';break;
			case 19: str_i = ' nineteen';break;	
			default: "something went wrong, 10-19 function"; break;
		}
		
		//console.log(numberValue + ' ' + str_i);
		return str_i;
	}

	function twof(numberValue) {
			let str_i =''; 
			switch (+numberValue) {
				case 0: str_i = ''; break;
				case 2: str_i =' twenty'; break;
				case 3: str_i =' thirty';break;
				case 4: str_i =' forty';break;
				case 5: str_i =' fifty'; break;
				case 6: str_i =' sixty'; break;
				case 7: str_i =' seventy'; break;
				case 8: str_i =' eighty';break;
				case 9: str_i =' ninety';break;
				default: "something went wrong, two function"; break;
			}		
			
		//console.log(numberValue + ' ' + str_i);
		return str_i;
	}

return str.substring(1);
}
