let username = $("#userName").val();

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://userinformation-531d.restdb.io/rest/userinfomatio",
  "method": "GET",
  "headers": {
    "content-type": "application/json",
    "x-apikey": "63c8a032969f06502871afee",
    "cache-control": "no-cache"
  }
}
 
$(document).ready(function() {
  $.ajax(settings).done(function (response) {
    //console.log(response);
    //console.log(response[0].email);
    //console.log(response[0].password);
  
    for (let i = 0; i < response.length; i++) {
      console.log(response[i].username);
      }
  })
});

      

    