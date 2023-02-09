$("#add-success-msg").hide();
$("#add-unsuccessful-msg").hide();
     $(document).ready(function () { 
      $("#submit").on("click", function (e) { 
        // prevent default action of the button
          e.preventDefault();

          let email = $("#eMail").val();
          let password = $("#passWord").val();
          let username = $("#userName").val();
          let finaluser = "";

          let jsondata = { 
              "email": email,
              "password": password,
              "username": username
          };
          
          var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://userinformation-531d.restdb.io/rest/userinfomatio",
            "method": "GET",
            "headers": {
              "content-type": "application/json",
              "Accept": "application/json",
              "x-apikey": "63c8a032969f06502871afee",
              "cache-control": "no-cache"
            }
          }
          
          $.ajax(settings).done(function (response) {
            console.log(response);
            //console.log(response[0].email);
            //console.log(response[0].password);

            for (let i = 0; i < response.length; i++) {
                console.log(response[i].email);

                if (email === response[i].email && password === response[i].password && username === response[i].username){
                    $("#add-success-msg").show();
                    finaluser += response[i].Username
                    sessionStorage.setItem("finaluser", finaluser); //here
                    function reDirect() {
                        window.location.href="quizpage.html";  
                }
                    reDirect();
              }

                else{
                    $("#add-unsuccessful-msg").show();
                    console.log("INCORRECT LOGIN DETAILS")
                }
          }});
     
          });
  
})
