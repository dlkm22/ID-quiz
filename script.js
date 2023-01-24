$("#add-success-msg").hide();
     $(document).ready(function () { 
      $("#submit").on("click", function (e) { 
        // prevent default action of the button
          e.preventDefault();
  
          let username = $("#userName").val();
          let email = $("#eMail").val();
          let password = $("#passWord").val();
  
          let jsondata = {
              "Username": username,
              "email": email,
              "password": password
  
          };
  
          var settings = {
              "async": true,
              "crossDomain": true,
              "url": "https://userinformation-531d.restdb.io/rest/userinfomatio",
              "method": "POST",
              "headers": {
                  "content-type": "application/json",
                  "x-apikey": "63c8a032969f06502871afee",
                  "cache-control": "no-cache"
              },
              "processData": false,
              "data": JSON.stringify(jsondata)
          }
  
          $.ajax(settings).done(function (response) {
              console.log(response);
          $("#add-success-msg").show();
          function reDirect() {
            window.location.href="login.html";  
          }
          
          reDirect();



          });
  
      })
  
  })