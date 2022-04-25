//This code doesn't run, so I included in profile.html

// var InventoryApp = window.Profile || {};

// (function scopeWrapper($) {

//     var poolData = {
//         UserPoolId: _config.cognito.userPoolId,
//         ClientId: _config.cognito.userPoolClientId
//     };

//     userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
//     var cognitoUser = userPool.getCurrentUser();

//     function signOut() {

//         if (cognitoUser != null) {
//             cognitoUser.signOut();
//             alert("Successfully signed you out");
//             window.location.href = "signin.html"
//         }
//         else {
//             alert("You are already signed out")
//         }

//     };

//     window.onload = function () {
//         if (cognitoUser != null) {
//             cognitoUser.getSession(function (err, session) {
//                 if (err) {
//                     alert(err);
//                     return;
//                 }
//                 console.log('session validity: ' + session.isValid());
//                 // set the profile info
//                 cognitoUser.getUserAttributes(function (err, result) {
//                     if (err) {
//                         console.log(err);
//                         return;
//                     }
//                     console.log(result);
//                     document.getElementById("email_value").innerHTML = result[2].getValue();

//                 });
//             });
//         } else {
//             document.getElementById("signInMessage").innerHTML = "Please sign in to see profile information.";
//         }
//     }
// }(jQuery));