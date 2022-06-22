const person = {
    firstName: "Abiodun",
    lastName: "Akinyemi",
    middleName: "Olamide",
    height: "180cm",
    country: "Nigeria"
  };
  
  document.getElementById("identity").style.fontSize = "35px";
  document.getElementById("identity").style.textAlign = "center";
  document.getElementById("identity").style.marginTop = "50px";
  
  
  document.getElementById("identity").innerHTML =
  "My name is" + " " + person.firstName + " " + person.lastName +  " " + person.middleName + ", " 
  + "I am" + " " + person.height + " " + "tall,"
   + " " + "I am from" + " " + person.country+ ". ";

