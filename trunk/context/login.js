function userLogin(){
	var username=document.forms[0].username.value;
	var password=document.forms[0].password.value;

	if(username==""){
		document.getElementById('er').innerHTML="Please Enter Username<br>";
		document.forms[0].username.focus();
		return false;
	}
	if(password==""){
		document.getElementById('er').innerHTML="Please Enter Password<br>";
		document.forms[0].password.focus();
		return false;
	}
}