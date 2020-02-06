



		let userNStudent = document.getElementById('userNameStudent').value;
		let myEmail=document.getElementById('emailStudent').value;
		let isCheckedTerms=document.getElementById('checkTerms').checked;
		let password= document.getElementById('password').value;
		let passwordConfirm= document.getElementById('conPassword').value;

		//pattern URL
		$.post('ServletRegisterUsers', {
			userName : userNStudent,
			email: myEmail,
			password: password,
			checkTterms: isCheckedTerms
		}, function(response) {  //answer
			alert(response); //show answer by window alert
			console.log(response);  //show answer by console
		});
		return false;
	       /*follow me for more code examples :v */
