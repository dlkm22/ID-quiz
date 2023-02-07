$("#add-success-msg").hide();
$("#add-unsuccessful-msg").hide();
     $(document).ready(function () { 
      $("#submit").on("click", function (e) { 
        // prevent default action of the button
          e.preventDefault();

          let email = $("#eMail").val();
          let password = $("#passWord").val();
  
          let jsondata = { 
              "email": email,
              "password": password,
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

                if (email === response[i].email && password === response[i].password){
                    $("#add-success-msg").show();
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
