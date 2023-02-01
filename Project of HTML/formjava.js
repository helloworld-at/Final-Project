function info1()
{
    var Username = document.getElementById("fname").value;
if(Username==""){
document.getElementById("fnamelbl").innerHTML="Enter username  please"
document.getElementById("fnamelbl").style.color="red"
}
else{
document.getElementById("fnamelbl").innerHTML="* Accepted *";
document.getElementById("fnamelbl").style.color="blue"
}

var LUsername = document.getElementById("Lname").value;
if(LUsername==""){
document.getElementById("lnamelbl").innerHTML="Enter username  please"
document.getElementById("lnamelbl").style.color="red"
}
else{
document.getElementById("lnamelbl").innerHTML="* Accepted *";
document.getElementById("lnamelbl").style.color="blue"
}

var EEmail = document.getElementById("email").value;
if(EEmail==""){
document.getElementById("emaillbl").innerHTML="Enter Email  please"
document.getElementById("emaillbl").style.color="red"
}
else{
document.getElementById("emaillbl").innerHTML="* Email is Available *";
document.getElementById("emaillbl").style.color="blue"
}

var addd = document.getElementById("address").value;
if(addd==""){
document.getElementById("addlbl").innerHTML="Enter Address  please"
document.getElementById("addlbl").style.color="red"
}
else{
document.getElementById("addlbl").innerHTML="* Accepted *";
document.getElementById("addlbl").style.color="blue"
}

var phno = document.getElementById("phonen").value;
if(phno==""){
document.getElementById("phlbl").innerHTML="Enter Contact number "
document.getElementById("phlbl").style.color="red"
}
else{
document.getElementById("phlbl").innerHTML="* Accepted *";
document.getElementById("phlbl").style.color="blue"
}




}
