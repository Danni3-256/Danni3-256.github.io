// Script.js

function sendMail() {
    var params = {
        from_name : document.getElementById("name").value,
        email_id : document.getElementById("email").value,
        // subject : document.getElementById("subject").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_l19y279", "template_28ywen9", params).then(function(res) {
        // alert ("Sent !" + res.status);
        console.log("Success !", res.status);
    })
}

// (function() {
//     // https://dashboard.emailjs.com/admin/account
//     emailjs.init('lkRsA3F84rJ3oeJrR');
// })();

// window.onload = function() {
//     document.getElementById('contact-form').addEventListener('submit', function(event) {
//         event.preventDefault();
//         // generate a five digit number for the contact_number variable
//         this.contact_number.value = Math.random() * 100000 | 0;
//         // these IDs from the previous steps
//         emailjs.sendForm('contact_service', 'contact-form', this)
//             .then(function() {
//                 console.log('SUCCESS!');
//             }, function(error) {
//                 console.log('FAILED...', error);
//             });
//     });
// }

    	
	