function validateForm() { 
	var fName = document.forms["myForm"]["fName"].value;
	var lName = document.forms["myForm"]["lName"].value; 
	var email = document.forms["myForm"]["email"].value;
	var phone = document.forms["myForm"]["phone"].value;

	if (fName == "") { 
		alert("First Name must be filled out"); 
		return false; 
	}

	if (lName == "") { 
		alert("last Name must be filled out"); 
		return false; 
	}

	if (email == "") { 
		alert("Email must be filled out"); 
		return false; 
	}

	if (phone == "") { 
		alert("Phone must be filled out"); 
		return false; 
}
}

function hamburger() {
	var menu = document.getElementById("menu-links");   
	var logo = document.getElementById("ffc-logo");
	if (menu.style.display === "block" && logo.style.display === "none") {
	menu.style.display = "none";
	logo.style.display = "block";
	} else {
		menu.style.display = "block";
		logo.style.display = "none";
		}
	}
	