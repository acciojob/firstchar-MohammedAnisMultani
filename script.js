function firstChar(text) {
   let res = text.split("")[0]
  res = String(res)  
  if(res == "" or res == " ")
  {
    return "";
  }
  else
  {
    return res;   
  } 
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
