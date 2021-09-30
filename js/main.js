function validate(){
      const name = document.getElementById("name").value;
	  const email = document.getElementById("email").value;
	  const subject = document.getElementById("subject").value;
	  const message = document.getElementById("message").value;

	  const error = document.getElementById("form-message-warning");
     
	if(name.length > 5 && email.length > 6 && subject.length>10){
		alert("Form submitted successfully");
	}
	else{
		error.innerHTML = "Please enter correct details";
	}

}