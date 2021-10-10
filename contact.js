function validation(){

    $(document).ready ->
      $('#contact-forma').submit (e) ->
        name = document.getElementById('name')
        email = document.getElementById('mail')
        subject = document.getElementById('subject')
        message = document.getElementById('message')

        if(name.length < 4 || name == ""){
          text = "Enter a Valid Name !<br>";
          error_message.style.display = "block";
          error_message.innerHTML = text;

          return false;

        }

        else if(email.indexOf('@') == -1 || email.length < 6){
          text = "Enter a Valid Mail !<br>";
          error_message.style.display = "block";
          error_message.innerHTML = text;

          return false;

        }

        else if(subject.length < 4 || subject == ""){
          text = "Enter a Valid Subject !<br>";
          error_message.style.display = "block";
          error_message.innerHTML = text;

          return false;
        }

        else if(message.length < 100 || message == ""){
          text = "Enter more than 100 Characters !<br>";
          error_message.style.display = "block";
          error_message.innerHTML = text;

          return false;
        }


        else{
          $.ajax({
  url: "https://formspree.io/rugerocarlgauss@gmail.com",
  method: "POST",
  data: {message: "hello!"},
  dataType: "json"
});
          e.preventDefault();
          $(this).get(0).reset();
          alertify.success 'Message sent';
        }

}
