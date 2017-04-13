$(document).ready(function(){

   
   // Firebase ref
   var ref = new Firebase("https://blog-c8588.firebaseio.com/subscriptions");
   
   $("#signup-form").on("submit", function(e) {
       e.preventDefault();
       var name = $("#name").val();
       var email = $("#email").val();
        
        ref.push({
            name: name,
            email: email
        });
        
        $("#signup-form").hide();
        $("#status").fadeIn(500).text("Merci " + name + "! Dès que le blog sera lancé, vous recevrez un mail sur votre boite " + email + " .");
        
    });
  
});