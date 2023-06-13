$(document).ready(function () {

    //alert('Your Message');

    $("#btn").click(function () {
        alert("This is an alert message!");
    });

	$("#registration_btn").click(function () {

        $.ajax({
            url: "https://reqres.in/api/users?page=2",
            type: 'GET',
            dataType: 'json', // added data type
            success: function(res) {
                var data = JSON.stringify(res)
                //var data = JSON.parse(res);
                //console.log(data);
                //alert(data);
                alert("hello " + res.data[0].first_name+ " " + res.data[0].last_name);
            }
        });


		/*var firstName = $("#first_name").val();

		var password = $("#password").val();
		var confirmPassword = $("#confirm_password").val();

		console.log(firstName);

		console.log(password);
		console.log(confirmPassword);

		if(password === confirmPassword){
			alert("password and confirmation password are not the same");
		}else{
			alert("Registration succesful");
		}*/


    });

    $("#login_btn").click(function () {

        var username = $("#username").val();

        alert("Welcome " + username);

        window.location.href = "client.html";

        /*$.ajax({
            url: "https://reqres.in/api/users?page=2",
            type: 'GET',
            dataType: 'json', // added data type
            success: function(res) {
                var data = JSON.stringify(res)
                //var data = JSON.parse(res);
                //console.log(data);
                //alert(data);
                alert("hello " + res.data[0].first_name+ " " + res.data[0].last_name);
            }
        });*/


		/*var firstName = $("#first_name").val();

		var password = $("#password").val();
		var confirmPassword = $("#confirm_password").val();

		console.log(firstName);

		console.log(password);
		console.log(confirmPassword);

		if(password === confirmPassword){
			alert("password and confirmation password are not the same");
		}else{
			alert("Registration succesful");
		}*/


    });

	/*$("#registration_btn").click(function (e) {
		//e.preventDefault();

		//var username = $("#username").val();

        alert("welcome " + "username");

		//window.location.href = "admin-client.html";
    });*/

    $('#registrationForm').on('submit', function () {
        alert('You submitted the form!');
    });

    ("#loginForm").submit(function () {
		e.preventDefault();
        alert('You submitted the form!');


        // do the extra stuff here
        /*$.ajax({
        type: "GET",
        url: "https://reqres.in/api/users?page=2",
        data: $(this).serialize(),
        success: function() {
        $('.simple-sucess').fadeIn(100).show();
        $('.contact_form').fadeOut(100).hide();
        $('.simple_error').fadeOut(100).hide();

        }
        })*/

    })





});
