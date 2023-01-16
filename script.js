
$(document).ready(function () {
    const APIKEY = "63c4ed44969f06502871af17";
    getUsers();
    $("#add-success-msg").hide();

    $("#login-submit").on("click", function (e) {
      e.preventDefault();
  
      let userEmail = $("#contact-email").val();
      let userPassword = $("#password").val();

      let jsondata = {
        "email": userEmail,
        "password": userPassword,
      };

      let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://quizusers-f88a.restdb.io/",
        "method": "POST", 
        "headers": {
          "content-type": "application/json",
          "x-apikey": APIKEY,
          "cache-control": "no-cache"
        },
        "processData": false,
        "data": JSON.stringify(jsondata),
        "beforeSend": function(){
          $("#login-submit").prop( "disabled", true);
          $("#add-contact-form").trigger("reset");
        }
      }
  
      $.ajax(settings).done(function (response) {
        console.log(response);
        
        $("#login-submit").prop( "disabled", false);
        
        $("#add-success-msg").show();

        getUsers();
      });
    });
  
  
    function getUsers(limit = 10, all = true) {

        //[STEP 7]: Create our AJAX settings
        let settings = {
          "async": true,
          "crossDomain": true,
          "url": "https://quizusers-f88a.restdb.io/media/",
          "method": "GET", //[cher] we will use GET to retrieve info
          "headers": {
            "content-type": "application/json",
            "x-apikey": APIKEY,
            "cache-control": "no-cache"
          },
        }
    
        //[STEP 8]: Make our AJAX calls
        //Once we get the response, we modify our table content by creating the content internally. We run a loop to continously add on data
        //RESTDb/NoSql always adds in a unique id for each data, we tap on it to have our data and place it into our links 
        
        $.ajax(settings).done(function (response) {
          
          let content = "";
    
          for (var i = 0; i < response.length && i < limit; i++) {
            content = `${content}<tr id='${response[i]._id}'>
            <td>${response[i].name}</td>
            <td>${response[i].email}</td>
            <td>${response[i].message}</td>
            <td>${response[i].mentor}</td>
            <td><a href='#' class='delete' 
            data-id='${response[i]._id}'>Del</a></td>
            <td><a href='#update-contact-container' class='update' 
            data-id='${response[i]._id}'  
            data-email='${response[i].email}' 
            data-password='${response[i].password}'>Update</a></td></tr>`;
    
          }

        $("#contact-list tbody").html(content);
  
        $("#total-contacts").html(response.length);
      });
      
  
  
    }
  
    
  
  })