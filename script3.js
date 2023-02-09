let username = sessionStorage.getItem("finaluser"); //here

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
 
$(document).ready(function() {
  $.ajax(settings).done(function (response) {
    for (let i = 0; i < response.length; i++) {
      if (response[i].Username === username)
      console.log(username);
      document.querySelector("span.user_FINAL").innerHTML = username
      }
  })
});


      

    