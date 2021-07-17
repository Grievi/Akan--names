var validate = function(){
  var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];

  var femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama",];

  var daysOfWeek =  ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  var username = parseInt(document.getElementById("username").value);

  var day = parseInt(document.getElementById("day").value);

  var month = parseInt(document.getElementById("month").value);

  var year = parseInt(document.getElementById("year").value);

  var dateOfBirth = new Date(day + "/" + month + "/" + year);

  var results = dateOfBirth.getDay();
// -------------Username VAlidation onchange------------------->
  function validate(){

    if ((document.getElementById("username")== "") || (document.getElementById("username") == NaN) || (document.getElementById("username").length <= 2) || (document.getElementById("username").length >= 20))
    {
      alert("enter valid username");
      return false
    }
    
    else
    {
      return true;
    }

  }

 







}