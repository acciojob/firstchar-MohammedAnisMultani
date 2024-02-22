function firstChar(text) {
  for(let i=0; i<text.length; i++)
	  {
		  let value = text.charAt(i)
		if(value != " ")
		{
			return value;
		}
	  }      
  	let arr = ""  
	return arr;     
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
