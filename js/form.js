/* normal version */
// function sendEmail() {
//   Email.send({
//     SecureToken: "89094ca8-de6b-40af-9b00-d7a3e2820047",
//     To: 'karimemad2066@gmail.com',
//     From: "karimemad2066@gmail.com" ,
//     Subject: "New message from : " + document.getElementById("Email").value,
//     Body: "First Name: " + document.getElementById("First").value +
//       "<br>Last Name: " + document.getElementById("Last").value +
//       "<br>Email: " + document.getElementById("Email").value +
//       "<br>Phone: " + document.getElementById("Phone").value +
//       "<br>Message: " + document.getElementById("message").value
//   }).then(() => {
//     swal({
//       title: "Done!",
//       text: "Message sent successfully!",
//       icon: "success",
//       button: "OK"
//     });
//   });
// }




/* An improved version of the e-mail presentation */
// function sendEmail() {
//   var firstName = document.getElementById("First").value;
//   var lastName = document.getElementById("Last").value;

//   Email.send({
//     SecureToken: "89094ca8-de6b-40af-9b00-d7a3e2820047",
//     To: 'karimemad2066@gmail.com',
//     From: "karimemad2066@gmail.com",
//     Subject: "New message from: " + document.getElementById("Email").value,
//     Body: "<html>" +
//       "<h2>Message Details:</h2>" +
//       "<p><strong>First Name:</strong> " + firstName + "</p>" +
//       "<p><strong>Last Name:</strong> " + lastName + "</p>" +
//       "<p><strong>Email:</strong> " + document.getElementById("Email").value + "</p>" +
//       "<p><strong>Phone:</strong> " + document.getElementById("Phone").value + "</p>" +
//       "<p><strong>Message:</strong></p>" +
//       "<p>" + document.getElementById("message").value + "</p>" +
//       "</html>"
//   }).then(() => {
//     swal({
//       title: "Done!",
//       text: "Message sent successfully!",
//       icon: "success",
//       button: "OK"
//     });
//   });
// }




/*  This version returns NULL after subscription */
function sendEmail() {
  var firstNameInput = document.getElementById("First");
  var lastNameInput = document.getElementById("Last");
  var emailInput = document.getElementById("Email");
  var phoneInput = document.getElementById("Phone");
  var messageInput = document.getElementById("message");

  var firstName = firstNameInput.value;
  var lastName = lastNameInput.value;

  Email.send({
    SecureToken: "89094ca8-de6b-40af-9b00-d7a3e2820047",
    To: 'karimemad2066@gmail.com',
    From: "karimemad2066@gmail.com",
    Subject: "New message from: " + emailInput.value,
    Body: "<html>" +
      "<h2>Message Details:</h2>" +
      "<p><strong>First Name:</strong> " + firstName + "</p>" +
      "<p><strong>Last Name:</strong> " + lastName + "</p>" +
      "<p><strong>Email:</strong> " + emailInput.value + "</p>" +
      "<p><strong>Phone:</strong> " + phoneInput.value + "</p>" +
      "<p><strong>Message:</strong></p>" +
      "<p>" + messageInput.value + "</p>" +
      "</html>"
  }).then(() => {
    swal({
      title: "Done!",
      text: "Message sent successfully!",
      icon: "success",
      button: "OK"
    });

    // Clear the form inputs
    firstNameInput.value = "";
    lastNameInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";
    messageInput.value = "";
  });
}








