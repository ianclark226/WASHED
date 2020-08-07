// import axios from 'axios';
// import $ from 'jquery';

// export default function signupFunction(event) {
//     //alert('login attempt');
//     // Getting references to our form and inputs
//     var emailInput = document.querySelector("input#email-input");
//     var passwordInput = document.querySelector("input#password-input");
//     var reasonInput = document.querySelector("input#reason-input");
//     var genderInput = document.querySelector("input#gender-input");

//     // When the form is submitted, we validate there's an email and password entered

//         var userData = {
//             email: emailInput.value.trim(),
//             password: passwordInput.value.trim(),
//             reason: reasonInput.value.trim(),
//             gender: genderInput.value.trim()
//         };

//         if (!userData.email || !userData.password || !userData.reason || !userData.gender) {
//             return;
//         }

//         // If we have an email and password we run the loginUser function and clear the form
//         signupUser(userData.email, userData.password, userData.reason, userData.gender);
//         emailInput.value = "";
//         passwordInput.value = "";
//         reasonInput.value = "";
//         genderInput.value = "";

//     // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
//     function signupUser(email, password, reason, gender) {
//         console.log(email);
//         console.log(password);
//         console.log(reason);
//         console.log(gender)
//         $.post("/api/login/?email=" + email + "&password=" + password + "&reason" + reason + "&gender" + gender, {
//                 email: email,
//                 password: password,
//                 reason: reason,
//                 gender: gender
//             })
//             .then(function() {
//                 console.log("Success");
//                 window.location.replace("/dashboard");
//                 // If there's an error, log the error
//             })
//             .catch(handleLoginErr);
//     }

//     function handleLoginErr(err) {
//         console.log("fail");
//         if (document.querySelector("#alert .msg")) {
//             document.querySelector("#alert .msg").text(err.responseJSON);
//         }

//         if (document.querySelector("#alert")) {
//             document.querySelector("#alert").fadeIn(500);
//         }
//     }


// };